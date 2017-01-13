// JavaScript Document



var pumpkinpatch = "";
var numpumpkins = 0;
var gametitle = "Pumpkin Game";
document.getElementById("title").innerHTML = gametitle;



function addPumpkin(event) {
	numpumpkins ++;
	document.getElementById("numbertitle").innerHTML = numpumpkins;
	var randomPumpkin = Math.floor((Math.random() * 4) + 1);
	var xAdjust = 425;
	var yAdjust = 12;
	var x = event.clientX - xAdjust;
    var y = event.clientY + yAdjust;
	pumpkinpatch += "<div class='pumpkin" + randomPumpkin + "' id='PumpkinNum" + numpumpkins + "' style='left: " + x + "px; top:" + y + "px;'></div>";
	document.getElementById("container").innerHTML = pumpkinpatch;
}

function removePumpkin(){
	if(numpumpkins <= 1){
		pumpkinpatch = "";
	}
	var parent = document.getElementById("container");
	var child = document.getElementById("PumpkinNum" + numpumpkins);
	parent.removeChild(child);
	numpumpkins--;
	document.getElementById("numbertitle").innerHTML = numpumpkins;
}





// ignore the code down here, it is Jquery.
$("#container").mousemove(function(e){
      $('.follow').css({'top': e.clientY + 20, 'left': e.clientX - 50});
});