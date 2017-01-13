/**
 * Created by bobnweave on 5/6/16.
 */
function mySwitch() {
    var num = 1;
    switch (num) {
        case 1:
            console.log("the number is one");
            break;
        case 2:
            console.log("the number is two");
            break;
    }
}
var addContent = "";
var mycolor = 0;
var secondColor = 250;
function repeat(){
    for(var i = 0; i < 10; i++){
        addContent += "<p style='background-color:rgb(" + mycolor + ',' + secondColor + ", 0)'>" + "changingcolors" +  "</p>";
        mycolor += 25;
        secondColor -= 25;
    }
    document.getElementById("content").innerHTML = addContent;
}