let fs = require('fs');
let formidable = require('formidable');


exports.welcome = function(request, response) {
    console.log("Processing welcome request");
    fs.readFile('templates/index.html', function(err, html){
        response.writeHead(200, {"Content-Type": "text/html; chartset=utf-8"});
        response.write(html);
        response.end();
    });
}

exports.show = function(request, repsonse) {
    fs.readFile("test.png", "binary", function(err, file) {
        response.writeHead(200, {"Content-Type": "image/png"});
        response.write(file, "binary");
        response.end();
    });
}

exports.upload = function(request, response) {
    console.log("Processing upload request");
    let form = new formidable.IncomingForm();
    form.parse(request, function(err, fields, files){
        fs.renameSync(files.upload.path, "test.png");
        //Cannot read property 'path; of undefined
        //Przy wrzucaniu pliku z folderu, test.png
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("recieved image:<br/>");
        response.write("img src='/show' />");
        response.end;
    });

}

exports.error = function(request, response) {
    console.log("I gotta a bad feeling about this...");
    response.write("404. I gotta bad feeling about this...");
    response.end();
}
