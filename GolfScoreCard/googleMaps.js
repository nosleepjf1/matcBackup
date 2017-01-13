
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('googleMaps'), {
        center: {lat: 40.0843, lng: -111.5982},
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        zoom: 16
    });
    var teeImg = "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/24/Apps-kolf-icon.png";
 var holeImg = "http://icons.iconarchive.com/icons/icons-land/points-of-interest/24/Golf-Club-Green-icon.png";
 // slightly smaller-  var image = 'http://icons.iconarchive.com/icons/icons-land/points-of-interest/16/Golf-Club-Green-icon.png';
    var teeMarker = new google.maps.Marker({
        position: {lat: 40.0843, lng: -111.5982},
        map: map,
        icon: teeImg
    });
    var holeMarker = new google.maps.Marker({
        position: {lat: 40.0856, lng: -111.5994},
        map: map,
        icon: holeImg
    });
}