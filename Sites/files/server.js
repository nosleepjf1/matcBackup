/**
 * Created by bobnweave on 3/11/16.
 */
var net = require("net");
var handleRequest = require("./requestHandler.js");

var server = net.createServer(function(socket){
    var data = "";

    socket.on("data", function(chunk){
        chunk = chunk.toString("utf8")
        data += chunk;
        process.stdout.write(chunk);

        if (chunk.endsWith("\r\n\r\n")){
            console.log("headers finished")
            handleRequest(socket,data);
        }
    });

    socket.on("end", function(){
        console.log("client disconnected");
    });

});

server.listen(8888);