/**
 * Created by bobnweave on 5/18/16.
 */

var myArr = document.getElementsByClassName("box");

for(var i = 0; i < myArr.length; i++){
    myArr[i].style.backgroundColor = "blue";
}

var myPic = document.getElementsByTagName("img");

myPic[0].src = "jonny.jpg";

var myContainer = document.getElementById("container");

myContainer.innerHTML += "<p>I'm surprised this worked!</p>";

var link = document.getElementsByTagName("a");
link[0].innerHTML = "go to google";
link[0].setAttribute("href","https://www.google.com");
