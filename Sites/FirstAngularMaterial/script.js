/**
 * Created by bobnweave on 9/16/15.
 */


var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };

}]);













angular.module('checkboxDemo1', ['ngMaterial'])
    .controller('AppCtrl', function($scope) {
        $scope.data = {};
        $scope.data.cb1 = true;
        $scope.data.cb2 = false;
        $scope.data.cb3 = false;
        $scope.data.cb4 = false;
        $scope.data.cb5 = false;
    });