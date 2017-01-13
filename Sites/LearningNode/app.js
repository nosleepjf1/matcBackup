/**
 * Created by bobnweave on 3/9/16.
 */
var fs = require("fs");

var reader = fs.createReadStream("input");
var writer = fs.createWriteStream("output.txt");

var data = "";

reader.on("data", function (chunk){
    data += chunk;
    writer.write(chunk);
});

reader.on("end", function(){
    console.log(data);
    writer.end();
});

writer.on("finish", function(){
    console.log('Writer End');
});