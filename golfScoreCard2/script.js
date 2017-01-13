var numplayers = document.getElementById("numPlayers").value;
var numholes = $('input[name="holeAmount"]:checked', '#myForm').val();
var teetime = 45;
var seconds = 59;
$.get("http://golf-courses-api.herokuapp.com/courses/11819", function(data, status){
   alert("Data: " + data + "\nStatus: " + status);
});
function buildcard(){
   numplayers = document.getElementById("numPlayers").value;
   numholes = $('input[name="holeAmount"]:checked', '#myForm').val();
   beginTimer();
   var holecollection = "";
   var playercollection = "";

   // create column of player labels
   for(var pl = 1; pl <= numplayers; pl++ ){
      playercollection += "<div id='player" + pl +"' class='holebox playerbox'> Player " + pl + "</div>";
   }

   // create golf hole columns before you add holes to them.
   for(var c = numholes; c >= 1; c-- ){
      holecollection += "<div id='column" + c +"' class='holecol'><div class='holenumbertitle'>" + c + "</div></div>";
   }
   $("#leftcard").html(playercollection);
   $("#rightcard").html(holecollection);

   // call the function that builds the holes into the columns
   buildholes();
}

function buildholes() {
   // add 18 holes to the columns
   for(var p = 1; p <= numplayers; p++ ){
      for(var h = 1; h <= numholes; h++){
         $("#column" + h).append("<input id='player" + p +"hole" + h +"' class='holebox'>");
      }
   }
}

function beginTimer(){
   var thetimer = setInterval(function(){clocktick()}, 1000);
}

function clocktick(){
   if(seconds > 0){
      seconds --;
      if(seconds < 10){
         seconds = "0" + seconds;
      }
   }
   else{
      teetime --;
      seconds = 59;
   }
   document.getElementById("countdown").innerHTML = teetime + ":" + seconds;
}