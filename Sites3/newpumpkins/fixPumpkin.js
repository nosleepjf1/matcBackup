// JavaScript Document -- important! Note that I am using some more Jquery.
var pumpkinpatch = "";
var xAdjust = 60;
var yAdjust = 90;

// new variables - explain their purpose!
var myTimerObj; // empty timer object
var theframe = 0; // global frame count because we only want to run the explosion one at a time
var pumpkinCount = 0; // they may already of this but this is how we are changing each pumpkins ID so we can remove it.
var expbool = false; // this boolean will track if we are currently in explode mode or not
var isexploding = false; // this boolean tells if we have have an active explosion or not ( and limits speed clicking )..more on this



// We need a function to toggle 'add' and 'explode' mode here
function explodetool(){
	if(!expbool){
		$('#thebutton').html("Place Pumpkins");
		$(".follow").css("background","none");
		pumpkinpatch = "";
		expbool = true;
	}
	else if(expbool){
		$('#thebutton').html("Explode Pumpkins");
		$(".follow").css("background","url('images/pumpkinguide.png')");
		expbool = false;
	}
}

function addPumpkin(event) {
	if(!expbool) {
		var x = event.clientX - xAdjust;
		var y = event.clientY + yAdjust;
		var randomPumpkin = Math.floor((Math.random() * 4) + 1);
		pumpkinCount++; // how I increment the pumpkins ids to make them unique. Why should they be unique? Answer that.
		// the 'explodepumpkin' method is new. explain.
		pumpkinpatch += "<div id='mypumpkin" + pumpkinCount + "' onclick='explodepumpkin(" + pumpkinCount + ", this.style.left, this.style.top)' class='pumpkin" + randomPumpkin + "' style='left: " + x + "px; top:" + y + "px;'></div>";
		document.getElementById("container").innerHTML = pumpkinpatch;
	}
}

// We need to define the explodepumpkin method here. Its what happens when he blows up.
function explodepumpkin(id,leftpos,toppos){
	if(expbool && !isexploding){
		$("#explosion").css("left", leftpos);
		$("#explosion").css("top", toppos);
	  $('#mypumpkin' + id).remove();
	  myTimerObj = setInterval(function(){goBoom();}, 30);
	}
}

function goBoom(){
	if(theframe <= 16){
		isexploding = true;
		theframe++;
		$('#explosion').css("background-image","url('pumkinExplode/boom" + theframe + ".png')");
	}
	else{
		isexploding = false;
		clearInterval(myTimerObj);
		theframe = 0;
	}
}
// We need a function that fires everytime our timer ticks. It can go here.




// ignore the code down here, it is Jquery.
$("#container").mousemove(function(e){
      $('.follow').css({'top': e.clientY + 100, 'left': e.clientX - 50});
});