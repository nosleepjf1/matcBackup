/**
 * Created by bobnweave on 3/9/16.
 */
var net = require("net");
var events = require("events");

var serverEmitter = new events.EventEmitter();
const broadcastName = "onmessage";
var server = net.createServer(function (socket){
    socket.write("server is here\n");
    serverEmitter.on(broadcastName, onMessagereceived);
    var data = "";
    socket.on("data", function(chunk){
        data += chunk.toString("utf8");
        if (data.endsWith("\n")){
            serverEmitter.emit(broadcastName, {
                data: data,
                address: socket.address()
            });
            process.stdout.write(data);
            data = "";

        }
        //console.log(chunk.toString("utf8"));
    });

    socket.on("end", function(){
        serverEmitter.removeListener(broadcastName, onMessageReceived);
        console.log("someone left the session");
    });
    function onMessageReceived(data){
        if(socket.address().address === data.address.address){
            return;
        }
        socket.write(data.address.address + ": " + data.data);
    }
});

server.listen(8888);