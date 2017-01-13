/**
 * Created by bobnweave on 3/11/16.
 */

module.exports = handleRequest;

function handleRequest(socket, data){
 var headers = parseHeaders(data);
    var requestedResource = headers[0].split(" ");
    var path = requestedResource[1];

    var response = [];
    response.push("HTTP/1.1 200 OK");
    response.push("Content-Type: text/html; charset=UTF-8");
    response.push("Content-Length: 20");
    response.push("");
    response.push("<h1>Hello there</h1>");

    socket.write(response.join("\r\n"));
}

function parseHeaders(data){
    return data.split("\r\n");
}