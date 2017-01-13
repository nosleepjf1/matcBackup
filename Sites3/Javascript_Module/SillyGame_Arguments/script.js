/**
 * Created by bobnweave on 10/11/16.
 */
var opponentWill = 20;
var yourWillPower = 20;
var argumentsWon = 0;
var argumentsLost = 0;
var gameStillGoing = true;
document.getElementById('enemyWill').innerHTML = 'Opponents WillPower: ' + opponentWill.toString();
document.getElementById('yourWillPower').innerHTML = 'Your WillPower: ' + yourWillPower.toString();
var Game = function(){
    this.attack = function(weapon){
        if(weapon == 'logic'){
            opponentWill -= Math.floor((Math.random() * 3) + 4);
        }
        else if(weapon == 'insult'){
            opponentWill -= Math.floor((Math.random() * 10) + 1);
        }
        if(opponentWill <= 0){
            alert('Your opponent gave up!');
            opponentWill = 20;
            yourWillPower = 20;
            argumentsWon++;
            document.getElementById('theirWins').innerHTML = "You have lost " + argumentsLost + " arguments";
            document.getElementById('yourWins').innerHTML = "You have won " + argumentsWon + " arguments";
            document.getElementById('enemyWill').innerHTML = 'Opponents WillPower: ' + opponentWill.toString();
            document.getElementById('yourWillPower').innerHTML = 'Your WillPower: ' + yourWillPower.toString();
            gameStillGoing = false;
        }
        //alert('your opponents is countering your argument...');
        if(gameStillGoing) {
            yourWillPower -= Math.floor((Math.random() * 10) + 1);
        }
        gameStillGoing = true;
        document.getElementById('enemyWill').innerHTML = 'Opponents WillPower: ' + opponentWill.toString();
        document.getElementById('yourWillPower').innerHTML = 'Your WillPower: ' + yourWillPower.toString();
        if(yourWillPower <= 0){
            alert('You gave up!');
            opponentWill = 20;
            yourWillPower = 20;
            argumentsLost++;
            document.getElementById('theirWins').innerHTML = "You have lost " + argumentsLost + " arguments";
            document.getElementById('yourWins').innerHTML = "You have won " + argumentsWon + " arguments";
            document.getElementById('enemyWill').innerHTML = 'Opponents WillPower: ' + opponentWill.toString();
            document.getElementById('yourWillPower').innerHTML = 'Your WillPower: ' + yourWillPower.toString();
        }
    }
};

var newGame = new Game();