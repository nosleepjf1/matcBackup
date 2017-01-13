// FMA API Demo by Mike Adler (adler@wfmu.org)

(function(){

  var root = this;
  var FMADEMO = root.FMADEMO = {};

  function dbg(mesg) {
    return;
    console.log(mesg);
  }

  var REQUESTS = 0;
  function addPendingRequest(type) {
    REQUESTS++;
    $('#spinner').css('visibility', 'visible');
  }
  function removePendingRequest(type) {
    REQUESTS--;
    $('#spinner').css('visibility', REQUESTS > 0 ? 'visible' : 'hidden');
  }

  function displaySimilarArtists(error, data) {
    var parent = $("#fma-artists").empty();
    if (error) {
      parent.append('<br><p>no matching artists</p>');
      return;
    }
    removePendingRequest('getSimilarArtists');
    $.each(data, function(index, artist) {
      var element = jQuery('<div class="fma-artist">' + artist.name + '</div>');
      var artistID = artist.foreign_ids[0].foreign_id;
      // strip off fma:artist_id: prefix
      artistID = artistID.substring(11);
      element.click(function () {
	addArtistTracks(artistID);
      }).appendTo(parent);
      parent.append('<div class="clear"></div>');
    });
  }

  function getSimilarArtists(e) {
    if (e) {
      e.preventDefault();
    }
    addPendingRequest('getSimilarArtists');
    ECHONEST.getSimilarArtists({name: $("#search-input").val() }, displaySimilarArtists)
  }

  function addArtistTracks(artistID) {
    addPendingRequest('addArtistTracks');
    FMA.getTracks({artist_id:artistID}, appendTracks);
  }

  function appendTracks(error, data) {
    removePendingRequest('addArtistTracks');
    if (error) {
      return;
    }
    var parent = $("#tracks");
    $.each(data, function(index, track) {
      var element = jQuery('<div class="fma-track">' + getTrackHTML(track) + '</div>');
      $(element).click(function(e) {
        // do nothing if clicked on info img
        if (e.target.nodeName === 'IMG') {
          return;
        }
	playTrack(track, element);
      })
      element.appendTo(parent);
    });
  }

  function playTrack(track, element) {
    soundManager.stopAll();
    $("#now-playing").html(getTrackHTML(track));

    soundManager.createSound({
      id: track.track_title,
      url: track.track_url + "/download",
      autoPlay: true,
      volume: 50,
      onfinish: function() {
        // play next track
        $(element).next().children(".track_title").click();
      }
    });
  }

  function getTrackHTML(track) {
    return '<span class="track_title">' + track.track_title + '</span> by <span class="artist_name">' + track.artist_name +'</span>  <a href="' + track.track_url + '" target="_blank"><img src="images/info_24.png" class="info-button"></a>';
  }

  function resume() {
    soundManager.resumeAll();
  }

  function stopPlaying() {
    soundManager.pauseAll();
  }

  $(function() {
    $("#search-form").submit(getSimilarArtists);
    $("#search-input").focus();
    $("#stop-button").click(stopPlaying);
    $("#play-button").click(resume);
  });

}).call(this);
