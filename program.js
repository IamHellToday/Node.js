process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function(){
    let input = process.stdin.read();
    if(input !== null) {
        let instruction = input.toString().trim();
            switch(instruction) {
            case '/exit': {
                process.stderr.write('Quitting app!\n');
                process.exit();
                break;
            }
            default:
                process.stderr.write('Wrong instruction\n');
                break;
            };
        };
    return process.env;
    return process.versions;
});

/*Najpierw działało, przed wrzuceniem switcha. Teraz natomiast, wyrzuca w konsoli [instruction] is not recognized as an internal or external command,
operable program or batch file.*/