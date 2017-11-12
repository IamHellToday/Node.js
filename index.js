let http = require('http');
let fs = require('./filestats');

let server = http.createServer(function(request, response) {
    fs().then((stats) => {
        response.write(`Module contains ${stats}`);
        response.end();
    }).catch(() => {
        response.write('error');;
        response.end();
    })
});
server.listen(9000);