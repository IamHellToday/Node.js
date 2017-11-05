let OSInfo = require('./modules/OSInfo');
OSInfo.print();

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    let input = process.stdin.read();
    
    if (input !== null) {
        let instruction = input.toString().trim();
    
        switch (instruction) {
            case '/exit': {
                process.stderr.write('Quitting app!\n');
                process.exit();
                break;
            }
            case '/version': {
                console.log(process.versions);
                break;
            }
            case '/enviroment': {
                console.log(process.env);
            }
            case '/getOSinfo': {
                getOsInfo();
                break;
            }
            default: {
                process.stderr.write('Wrong instruction\n');
                break;
            }
        }
    }
});
