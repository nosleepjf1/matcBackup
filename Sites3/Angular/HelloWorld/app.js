/**
 * Created by bobnweave on 12/9/16.
 */
(function(){

    angular.module("myApp", [])
        .controller("myCtrl", function (){
            var vm = this;
            vm.greet = 'Hi World!';
            vm.afterClick = "";
            vm.num = 4;
            vm.myMessage = "Heeeeeeeyyyyy  World!";
            vm.double = function(){
                return vm.num * 2;
            };
            vm.AngularButton = function(){
                vm.afterClick = "clicked";
            };
        });

})();