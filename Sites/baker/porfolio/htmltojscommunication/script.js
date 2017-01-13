/**
 * Created by bobnweave on 5/4/16.
 */
document.getElementById("step1").innerHTML = "This is displayed through Javascript using innerHTML";


    document.getElementById("step2").removeAttribute("href");

var show = function(){
  this.showClick = function(){
      document.getElementById("step2").setAttribute("href", "#");
  }
};

var hide = function(){
    this.hideClick = function(){
        document.getElementById("step2").removeAttribute("href");
    }
};

var buttonArray = ["Play","Stats","Settings"];

function Game(){
    for(var i = 0; i < buttonArray.length; i++){
        document.getElementById("gameContainer").innerHTML += "<button>" + buttonArray[i] + "</button>" + "<br>";
    }
}

var showMe = new show();
var hideMe = new hide();