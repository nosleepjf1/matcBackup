/**
 * Created by bobnweave on 10/11/16.
 */
var optionsArray = ['Play', "Dungeon Shop", "How to Play"];

var Game = function() {
    this.gameStart = function(){
        for(var i = 0; i < optionsArray.length; i++){
            document.getElementById('gamebox').innerHTML += "<a id='" + optionsArray[i] + "'  href='#'>" + optionsArray[i] + "</a><br><br>"
        }
    };
};

var mygame = new Game();