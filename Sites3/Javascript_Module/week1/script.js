/**
 * Created by bobnweave on 9/27/16.
 */
//var firstname = "Joel";
//var lastname = "Frasier";
//var middlename = "Darryl";
//var nametitle = 'Sir';
//
//function combinename(fname, lname){
//
//    fname += " John";
//    return nametitle + " " + fname + " " + middlename + " " + lname;
//}
//
//var promptedFirstName = prompt("What's your first name?", "");
//var promptedLastName = prompt("What's your last name?", "");
//alert(combinename(promptedFirstName, promptedLastName));
//var myAnswer = '';
//var mystring = "hello";
////var stringArray = mystring.split('');
//for(var i = (mystring.length - 1); i >= 0; i--){
//    myAnswer += mystring[i];
//}

//var matrixA = [[1,2],[3,4]];
//var matrixB = [[5,6],[7,8]];
//
//function dotProduct(matrixA, matrixB){
//    var answer = [];
//    answer.push(matrixA[0][0] * matrixB[0][0]);
//    answer.push(matrixA[0][1] * matrixB[0][1]);
//    console.log(answer);
//}
//
//dotProduct(matrixA, matrixB);

var answer = Math.floor(Math.random() * 10) + 1;
guessing();
function guessing(){
    var guess = prompt('pick a number between 1 and 10');
    if(guess == answer){
        alert('you win!')
    }
    else if(guess < answer){
        alert('pick a higher number');
        guessing();
    }
    else{
        alert('pick a lower number');
        guessing();
    }
}