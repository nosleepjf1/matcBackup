/**
 * Created by bobnweave on 5/4/16.
 */
var timeInSeconds = 10;

function timer(){
    setTimeout(function(){
        document.getElementById("start").innerHTML = "Stop";
    }, timeInSeconds * 1000)
}


function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
  //  var minutes = Math.floor( (t/1000/60) % 60 );
  //  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  //  var days = Math.floor( t/(1000*60*60*24) );
    return {
        'total': t,
 //       'days': days,
 //       'hours': hours,
 //       'minutes': minutes,
        'seconds': seconds
    };
}


function initializeClock(id, endtime){
    var clock = document.getElementById(id);
    var timeinterval = setInterval(function(){
        var t = getTimeRemaining(endtime);
        clock.innerHTML =
         //   'days: ' + t.days + '<br>' +
       //     'hours: '+ t.hours + '<br>' +
      //      'minutes: ' + t.minutes + '<br>' +
            'Time Left: ' + t.seconds;
        if(t.total<=0){
            clearInterval(timeinterval);
        }
    },1000);
}

function startGame() {
   // var timeInMinutes = 10;

    var currentTime = Date.parse(new Date());
    var deadline = new Date(currentTime + timeInSeconds*1000);
    //var deadline = new Date(currentTime + timeInMinutes*60*1000);
    initializeClock('clockdiv', deadline);


}



var b = function($b,speed){


    $b.animate({
        "left": "-100%"
    }, speed);
};

$(function(){
    b($("#b"), 15000);
});