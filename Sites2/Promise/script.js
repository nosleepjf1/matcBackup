/**
 * Created by bobnweave on 6/28/16.
 */

function getString(){
    return new Promise(function (resolve, reject){
        var myString = prompt("whatever you write will be converted to all caps");
        var data = myString.toUpperCase();
        resolve(data);
    })

}

var myPromise = getString();

myPromise.then(function(allCapsString){
   console.log(allCapsString);
});

