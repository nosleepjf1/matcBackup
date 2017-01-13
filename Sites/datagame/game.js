/**
 * Created by bobnweave on 9/24/15.
 */
var score = 0;
var cardsflipped = 0;
var cardonetype = 0;
var cardtwotype = 0;
var flippedone;
var flippedtwo;

function turnCard(itemid, cardtext, connection){
    "use strict";
    var mycard = document.getElementById(itemid);
    mycard.style.background = "none";
    mycard.style.backgroundColor = "#FFFFFF";
    mycard.firstChild.innerHTML = cardtext;
    cardsflipped ++;
    //alert("card is flipped" + cardsflipped);

    if(cardsflipped <= 1){
        cardonetype = connection;
        flippedone = itemid;
        //alert("one flipped");
    }
    if(cardsflipped >= 2){
        cardtwotype = connection;
        flippedtwo = itemid;
        //alert("two flipped");
        if(cardonetype === cardtwotype){
            alert("it's a match!");
            score += 10;
            document.getElementById("score").innerHTML = String(score);
            document.getElementById(flippedone).style.display = "none";
            document.getElementById(flippedtwo).style.display = "none";
            cardsflipped = 0;

        }
        else{
            alert('not a match!');
            cardonetype = 0;
            cardtwotype = 0;
            document.getElementById(flippedone).firstChild.innerHTML = "";
            document.getElementById(flippedtwo).firstChild.innerHTML = "";
            document.getElementById(flippedone).style.background = "none";
            document.getElementById(flippedtwo).style.background = "none";
            document.getElementById(flippedone).style.backgroundImage = "url('images/card.png')";
            document.getElementById(flippedtwo).style.backgroundImage = "url('images/card.png')";
            cardsflipped = 0;
        }
    }
}