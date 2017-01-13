// FMA API Demo by Mike Adler (adler@wfmu.org)
// requires jQuery for ajax/jsonp

(function(){

  var root = this;

  var FMA = root.FMA = {
    host : 'freemusicarchive.org',
    //api_key : '60BLHNQCAOUFPIBZ',
    api_key : 'O5DM0MZVDMZ568IZ',
    per_page : 20,
  };

  if (FMA.api_key === '') {
    alert('please signup at the Free Music Archive for an api key and fill it into js/fma.js');
  }

  function handleResponse(data,callback) {
    if (data.errors && data.errors.length > 0) {
      callback(data.errors[0], data);
    } else if (data.dataset) {
      callback(null, data.dataset);
    } else {
      callback('unknown error', data);
    }
  }

  function handleError(msg, callback) {
    callback(msg);
  }

  function requestData(domain, params, callback, page, per_page) {
    params.api_key = FMA.api_key;
    params.page = page || 1;
    params.limit = per_page || FMA.per_page;

    $.ajax({
      url: 'http://' + FMA.host + '/api/get/' + domain + '.jsonp',
      dataType: 'jsonp',
      data: params,
      success: function(data) {handleResponse(data, callback)},
      error: function(jqXHR, textStatus, errorThrown) { handleError(textStatus, callback); }
    });
  }

  FMA.getCurators = function getCurators(params, callbackFunc, page, per_page) {
    requestData('curators', params, callbackFunc, page, per_page);
  }

  FMA.getGenres = function getGenres(params, callbackFunc, page, per_page) {
    requestData('genres', params, callbackFunc, page, per_page);
  }

  FMA.getArtists = function getArtists(params, callbackFunc, page, per_page) {
    requestData('artists', params, callbackFunc, page, per_page);
  }

  FMA.getAlbums = function getAlbums(params, callbackFunc, page, per_page) {
    requestData('albums', params, callbackFunc, page, per_page);
  }

  FMA.getTracks = function getTracks(params, callbackFunc, page, per_page) {
    requestData('tracks', params, callbackFunc, page, per_page);
  }

}).call(this);
