// ECHONEST API Demo by Mike Adler (adler@wfmu.org)
// requires jQuery for ajax/jsonp

(function(){

  var root = this;

  var ECHONEST = root.ECHONEST = {
    //api_key : 'N6E4NIOVYMTHNDM8J',
    api_key : 'B9G6HIHE20KOI9TIA',
    per_page : 15,
  };

  if (ECHONEST.api_key === '') {
    alert('please signup at The Echo Nest for an api key and fill it into js/echonest.js');
  }

  function handleResponse(data,callback) {
    if (data.response.status.code !== 0) {
      callback(data.response.status.message, data);
    } else if (data.response) {
      callback(null, data.response.artists);
    } else {
      callback('unknown error', data);
    }
  }

  function handleError(msg, callback) {
    callback(msg);
  }

  function requestData(path, params, callback, page, per_page) {
    params.api_key = ECHONEST.api_key;
    params.results = per_page || ECHONEST.per_page;
    params.start = (page-1 || 0) * params.results
    params.format = 'jsonp';

    $.ajax({
      url: 'http://developer.echonest.com/api/v4/' + path,
      dataType: 'jsonp',
      data: params,
      cache: true, // jquery-jsonp would try to prevent cacheing by adding "_=timestamp" param. echonest hates this
      success: function(data) {handleResponse(data, callback)},
      error: function(jqXHR, textStatus, errorThrown) { handleError(textStatus, callback); }
    });
  }

  ECHONEST.getSimilarArtists = function getSimilarArtists(params, callbackFunc, page, per_page) {
    params.bucket = 'id:fma';
    params.limit = 'true';
    requestData('artist/similar', params, callbackFunc, page, per_page);
  }

  ECHONEST.getSuggestedArtists = function getSuggestedArtists(params, callbackFunc, page, per_page) {
    requestData('artist/suggest', params, callbackFunc, page, per_page);
  }

}).call(this);
