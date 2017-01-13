/**
 * Created by bobnweave on 3/10/16.
 */
const fs = require('fs');

function read(file, callback) {
    fs.readFile(file, function (err, data) {
        callback(data);
    });
}

read('file.txt', function(data){
    console.log(data.toString());
});