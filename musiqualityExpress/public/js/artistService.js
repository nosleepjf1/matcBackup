/**
 * Created by geoffbrown1 on 2/22/16.
 */
var app = angular.module('artistService', []);

app.service('artistService', artistService);
artistService.$inject = ['userService', '$http'];

function artistService(userService, $http)
{
  var as = this;
  as.id = '';
  as.id2 = '';
  as.currentArtist = '';
  as.bandPic = '';
  as.currentLikes = '';
  as.addLikes = addLikes;

  function addLikes(){
    var data = {
      bandname: as.currentArtist,
      userid: userService.user._id
    };

    $http({
      method: 'POST',
      url: '/favoriteband/save',
      data: data
    })
        .then(
            function(res){

            },
            function(res){}
        )

  }
}
