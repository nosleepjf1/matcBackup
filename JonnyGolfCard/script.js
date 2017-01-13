/**
 * Created by bobnweave on 11/2/16.
 */

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    });

//$('#myModal').on('hide.bs.modal', function () {
//   checkReadiness();
//});




var golflist;
var golfCourse = {};
var numOfPlayers = 0;
var teeType;

function populateList(city) {
    getWeather(city);
    var body =
    {
        country: '',
        state: '',
        city: city,
        name: '',
        address: '',
        radius: "20"
    };

    golflist = new XMLHttpRequest();
    golflist.onreadystatechange = function () {
        if (golflist.readyState == 4 && golflist.status == 200) {
            myobj = JSON.parse(golflist.responseText);
            for (list = 0; list < myobj.courses.length; list++) {
                $("#courseSelectionMenu").append("<option value = '" + myobj.courses[list].id + "'>" + myobj.courses[list].name + "</option> ");
            }
            if(myobj.courses.length < 1){
                alert("No Golf Courses were found. The page will be refreshed to allow you to enter your city again.");
                location.reload();
            }
        }

    };
    golflist.open("POST", "http://golf-courses-api.herokuapp.com/courses/search", true);
    golflist.setRequestHeader("Content-Type", "application/json");
    golflist.send(JSON.stringify(body));

    $("#cityDiv").addClass("hide");
  //  $('#myModal').modal('show');

    //makes it so that the modal won't close by clicking outside of its area
    $('#myModal').modal({
        backdrop: 'static',
        keyboard: true
    });
    $("#header").removeClass("hide");
    $("#map").removeClass("hide");
}

function selectCourse(id) {
    var extragolf = new XMLHttpRequest();
    extragolf.onreadystatechange = function () {
        if (extragolf.readyState == 4 && extragolf.status == 200) {
            golfCourse = JSON.parse(extragolf.responseText);
        }
    };

    extragolf.open("GET", "http://golf-courses-api.herokuapp.com/courses/" + id , true);
    extragolf.send();
    //buildcard();
    TeeType();
    $("#numPlayerSelect").removeClass("hide");
}

function TeeType(){
    setTimeout(function(){
        for(var list = 0; list < golfCourse.course.tee_types.length; list++)
            $("#teeTypeMenu").append("<option value = '" + golfCourse.course.tee_types[list].tee_type + "'>" + golfCourse.course.tee_types[list].tee_type + "</option> ");
    }, 1500);
    setTimeout(function(){
    if(golfCourse.course.holes.length < 1){
        alert("This Course is missing data. It may be out of business or an error with the API.  The page will be refreshed to allow you to select another course.");
        location.reload();
    }
    }, 1500);
}

function ChooseTeeType(tee){
    teeType = tee;



    if (teeType == "champion") {
        teeType = 0;
    }
    else if (teeType == "pro") {
        if (golfCourse.course.tee_types.length - 3 >= 0) {
            teeType = golfCourse.course.tee_types.length - 3;
        }
        else {
            teeType = 0;
        }
    }
    else if (teeType == "men") {
        if (golfCourse.course.tee_types.length - 2 >= 0) {
            teeType = golfCourse.course.tee_types.length - 2;
        }
        else {
            teeType = 0;
        }
    }
    else if (teeType == "women") {
        if (golfCourse.course.tee_types.length - 1 >= 0) {
            teeType = golfCourse.course.tee_types.length - 1;
        }
        else {
            teeType = 0;
        }
    }
    initMap();
    buildCard();
   // $('#myModal').hide();
   // $('.modal-backdrop').hide();

}

function NumPlayers(numPlayers){
    if(numPlayers > 0 && numPlayers < 9) {
        numOfPlayers = numPlayers;
        $("#teeTypeMenu").removeClass("hide");
        $("#teeTypeInstructions").removeClass("hide");
    }
    else {
        alert("Please choose a number between 1 and 8");
    }
}

/*function checkReadiness(){
    if(golfCourse.course == undefined){
        alert("A course was not received.  The page will be refreshed to allow you fill the forms again.");
        location.reload();
    }
    else if(numOfPlayers == 0){
        alert("You need to choose the number of players.  The page will be refreshed to allow you fill the forms again.");
        location.reload();
    }
    else if(numOfPlayers < 0 || numOfPlayers > 8){
        alert("You need to choose between 1 and 8 players.  The page will be refreshed to allow you fill the forms again.");
        location.reload();
    }
    else if(teeType == null){
        alert("A tee type was not selected.  The page will be refreshed to allow you fill the forms again.");
        location.reload();
    }
    else{
        buildCard();
    }
}*/

function buildCard(){
    if(golfCourse.course.holes.length < 1 || numOfPlayers < 1 || numOfPlayers > 8 || golfCourse.course.tee_types.length < 1){
        alert("An error occured with the form data. The page will be refreshed to allow you to enter the data again.");
        location.reload();
    }
    else {

        for (var i = 0; i < numOfPlayers; i++) {
            $("#leftCard").append("<div class='players' id='player" + (i + 1) + "'>Player " + (i + 1) + "<button class='changeName' onclick='ChangeName(this.parentElement.id)'>Change Name</button></div>");
            for (var j = 0; j < golfCourse.course.holes.length; j++) {
                if (j == 9) {
                    $("#rightCard").append("<div class='frontNineTotal'><span>Front</span><br><span>Nine</span><br><span>Total:</span><br><input id='frontNineTotalP" + (i + 1) + "' type='text' readonly></div>")
                }
                $("#rightCard").append("<div onclick='UpdateMap(this.id)' class='column' id='player" + (i + 1) + "column" + (j + 1) + "'><div>" + (j + 1) + "</div><div class='courseInfo'>par " + golfCourse.course.holes[j].tee_boxes[teeType].par + "</div><div class='courseInfo'>Yards " + golfCourse.course.holes[j].tee_boxes[teeType].yards + "</div><input id='player" + (i + 1) + "hole" + (j + 1) + "' onchange='UpdateScore(golfCourse.course.holes.length, this.id)' type='number' min='0' value='0'></div>");

                if (j == 17) {
                    $("#rightCard").append("<div class='total'><span>Full</span><br><span>18</span><br><span>Total:</span><br><input id='TotalP" + (i + 1) + "' type='text' readonly></div>")
                }
            }
            if (golfCourse.course.holes.length < 10) {
                $("#rightCard").append("<div class='frontNineTotal'><span>Front</span><br><span>Nine</span><br><span>Total:</span><br><input id='frontNineTotalP" + (i + 1) + "' type='text' readonly></div>")
            }
        }
        if (golfCourse.course.holes.length < 10) {
            $("#player1").addClass("playersFor9");
            $("#player2").addClass("playersFor9");
            $("#player3").addClass("playersFor9");
            $("#player4").addClass("playersFor9");
            $("#player5").addClass("playersFor9");
            $("#player6").addClass("playersFor9");
            $("#player7").addClass("playersFor9");
            $("#player8").addClass("playersFor9");
        }
        else {
            $("#player1").addClass("playersFor18");
            $("#player2").addClass("playersFor18");
            $("#player3").addClass("playersFor18");
            $("#player4").addClass("playersFor18");
            $("#player5").addClass("playersFor18");
            $("#player6").addClass("playersFor18");
            $("#player7").addClass("playersFor18");
            $("#player8").addClass("playersFor18");
        }


        $('#myModal').modal('hide');
        $("#buildCardButton").addClass("hide");
        $("#startOver").removeClass("hide");
        CourseInfo();
        $("#mapText").removeClass("hide");
    }
}


function UpdateScore(numHoles, id){
    //lets me find out which player's input box was changed
    var player = id.charAt(6);
    var p1front = 0;
    var p1full = 0;
        for (var i = 1; i <= numHoles; i++) {
            if(i < 10) {
                p1front += parseInt(document.getElementById("player" + player + "hole" + i).value);
            }
            p1full += parseInt(document.getElementById("player" + player + "hole" + i).value);
        }

    $("#frontNineTotalP" + player).val(p1front);
    $("#TotalP" + player).val(p1full);

    if(id == "player1hole18" || id == "player2hole18" || id == "player3hole18" || id == "player4hole18" || id == "player5hole18" || id == "player6hole18" || id == "player7hole18" || id == "player8hole18"){

        setTimeout(function(){
            var finalScore = p1full - golfCourse.course.tee_types[0].par;
            alert("Par for the course is " + golfCourse.course.tee_types[0].par + ". You shot a " + p1full + ". You total score is " + finalScore); }, 500);
    }
}

function CourseInfo(){
    if(golfCourse.course.name.length > 25){
        var shortenedName = golfCourse.course.name.substr(0, 23) + "...";
        $("#courseName").append(shortenedName);
    }
    else {
        $("#courseName").append(golfCourse.course.name);
    }
    $("#courseAddress").append(golfCourse.course.addr_1);
    $("#courseCity").append(golfCourse.course.city + ", ");
    $("#courseState").append(golfCourse.course.state_or_province);
    $("#coursePhone").append(golfCourse.course.phone);
    $("#courseWebsite").attr("href", golfCourse.course.website);
    $("#courseWebsite").attr("target", "_blank");

    $("#courseInfo").removeClass("hide");
    $("#currentConditions").removeClass("hide");
}





function getmyinfo(thecityname) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var obj = JSON.parse(xhttp.responseText);
            document.getElementById("currentConditions").innerHTML = obj.weather[0].description;
        }
    }

    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + thecityname + "&ffce649c68166a14099f0e121794b769", true);
    xhttp.send();
}

function getWeather(city)
{
    $("#currentConditions").html("");
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + "ffce649c68166a14099f0e121794b769", function (weatherData) {
       // weather = weatherData;
        var iconSrc = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
        var image = "<img id='weatherIcon' src='" + iconSrc + "' width='37px'>";
        var fahrenheit = parseInt(weatherData.main.temp * 9 / 5 - 459.67);
        var tempDiv = "<div id='temp'>Temperature: " + fahrenheit + " &deg;F</div>";
        var windDir = weatherData.wind.deg;
        var directionNames = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        windDir = Math.round((windDir / 22.5) + 0.5);
        var direction = directionNames[windDir % 16];
        var miles = weatherData.wind.speed / 1.609344;
        var windDiv = "<div id='wind'>Wind: " + miles.toFixed(2) + " mph " + direction + "</div>";

        $("#currentConditions").append(tempDiv, windDiv, image);
    });

}

//var weather;


function initMap() {
    var uluru = {lat: golfCourse.course.location.lat, lng: golfCourse.course.location.lng};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        mapTypeId: "satellite",
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

function UpdateMap2(hole) {
    console.log(hole);
    console.log(hole.charAt(13));
    var holeNum = hole.charAt(13);
    var uluru = {lat: golfCourse.course.holes[holeNum].green_location.lat, lng: golfCourse.course.holes[holeNum].green_location.lng};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        mapTypeId: "satellite",
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}


function UpdateMap(hole) {
    var holeNum = 0;
    if(hole.length > 13){
        holeNum = hole.charAt(13) + hole.charAt(14);
    }
    else {
        holeNum = hole.charAt(13);
    }
    $("#mapText").html("Hole " + holeNum);
    $("#mapText").addClass("mapText2");

    var tee = {lat: golfCourse.course.holes[holeNum - 1].tee_boxes[0].location.lat, lng: golfCourse.course.holes[holeNum - 1].tee_boxes[0].location.lng};
    var green = {lat: golfCourse.course.holes[holeNum - 1].green_location.lat, lng: golfCourse.course.holes[holeNum - 1].green_location.lng};
    var centerPos = {lat:((tee.lat + green.lat) / 2), lng:((tee.lng + green.lng) / 2)};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        mapTypeId: "satellite",
        center: centerPos
    });
    var teeMarker = new google.maps.Marker({
        position: tee,
        map: map
    });
    var greenMarker = new google.maps.Marker({
        position: green,
        map: map
    });
}

function ChangeName(id){
    console.log(id);
    var name = prompt("Please enter your name", "Tiger Woods");
   // $("id").html(name);
    document.getElementById(id).innerHTML = name;
    document.getElementById(id).style.fontSize = "2em";
}


















