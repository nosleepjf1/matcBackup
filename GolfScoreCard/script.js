var numPlayers = 4;
var numHoles = 18;
var golfCard = document.getElementById('generatedHTML');


for(var i = 1; i <= numPlayers; i++){
   golfCard.innerHTML += "<div id='playerDiv" + i + "'><input value='player" + i + "'class='hole' id='player" + i + "'></div><br>"

   for(var j = 1; j <= numHoles; j++){
      document.getElementById("playerDiv1").innerHTML = "<input value='hole" + i + "'class='hole' id='hole" + i + "'>"
   }

}