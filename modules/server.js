let http = require('http');
let colors = require('colors');
let handlers = require('./handlers');

function start() {
    function onRequest(request, response) {
        console.log('Querry recieved');
        console.log('Querry ' + request.url + ' is recieved');

        response.writeHead(200, {"Content-Type": "text/plain"});

        switch(request.url) {
            case '/':
            case '/start':
                handlers.welcome(request, response);
                break;
            case '/upload':
                handlers.upload(request, response);
                break;
            case '/show':
                handlers.show(request, response);
                break;
            default:
                handlers.error(request, response);
        }
    }

    http.createServer(onRequest).listen(9000);
    console.log('Server is running!'.green);
}

exports.start = start;