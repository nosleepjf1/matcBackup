//research setinterval
var teeTime = 5;
var seconds = 11;
function beginTimer(){
var theTimer = setInterval(function(){clockTick()}, 1000);
}

function clockTick(){
    if(seconds > 0){
        seconds--;
    }
    else{
        teeTime--;
        seconds = 59;
    }
    if(seconds < 10 && seconds >= 0){
        seconds = "0" + seconds;
    }
    document.getElementById("countdown").innerHTML = teeTime + ":" + seconds;
}

