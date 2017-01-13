/**
 * Created by bobnweave on 9/28/15.
 */


// create an array of food items for the monster to eat
var foodarr = ['apple','shoe','orange','battery','grapes','frying pan','melon'];
var currentfood = "";
var score = 0;
// start the game with a function
function rungame(){
    var theFood = getfood();
    setfood(theFood);

}

// randomly select a food to put in the box
function getfood(){
    var randomfood = Math.floor((Math.random() * foodarr.length) + 0);
    return foodarr[randomfood];
}

// put the food in the box
function setfood(food){
    currentfood = food;
    document.getElementById("foodbox").innerHTML = food;
}

function eatit(){
    //if the food is good
    if(currentfood == "shoe" || currentfood == "battery" || currentfood == "frying pan"){
        document.getElementById("commentbox").innerHTML = "delicious";
        score += 100;
        document.getElementById("score").innerHTML = "score: " + score;
    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "gross!";
        score -= 50;
        document.getElementById("score").innerHTML = "score: " + score;
    }
    getfood();
    rungame();

}

function trashit(){
    //if the food is good
    if(currentfood == "apple" || currentfood == "orange" || currentfood == "grapes" || currentfood == "melon"){
        document.getElementById("commentbox").innerHTML = "Good job.  don't want to eat that.";
        score += 100;
        document.getElementById("score").innerHTML = "score: " + score;

    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "Aww man, that looked tasty.";
        score -= 50;
        document.getElementById("score").innerHTML = "score: " + score;
    }
    getfood();
    rungame();
    }




