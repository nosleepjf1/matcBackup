/**
 * Created by bobnweave on 12/10/15.
 */
(function(){
    'use strict';

    angular.module('navController', [])
        .controller('navController', navController);

    navController.$inject = ["$location"];

    function navController($location)
    {
        var nav = this;
        nav.isActive = isActive;

        function isActive(viewLocation) {
            return viewLocation === $location.path();
        }
    }

}());