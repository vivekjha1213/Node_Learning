var http = require("http");


// Now your application has access to the HTTP module, and is able to create a server


http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('This is Server');



}).listen(8080);