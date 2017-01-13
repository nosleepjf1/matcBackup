(function(){
    'use strict';

    angular.module('contactController', [])
        .controller('contactController', contactController);

    contactController.$inject = [];

    function contactController() {

        // list everything
        var bc = this;
        bc.sometext = 'default value';
        bc.doSomething = doSomething;

        // define functions
        function doSomething() {
            bc.sometext = '';
        }
    }

}());
