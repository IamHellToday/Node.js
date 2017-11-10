let http = require('http');
let fs = require('./filestats');

let server = http.createServer(function(request, response) {
    response.write(`Module contains ${fs}`);
    response.end();
});
server.listen(9000);