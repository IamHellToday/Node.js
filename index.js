let EventEmitter = require("events").EventEmitter;
let OSInfo = require('./modules/OSInfo');
OSInfo.print();

let emitter = new EventEmitter();
emitter.on("beforeCommand", function(instruction) {
  console.log("You wrote: " + instruction + "trying to run command.");
});
emitter.on("afterCommand", function() {
  console.log("Finished command");
});
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {

  let input = process.stdin.read();
  if (input !== null) {
  
    let instruction = input.toString().trim();
    emitter.emit("beforeCommand", instruction);

    switch (instruction) {
      case '/exit': {
        process.stderr.write('Quitting app!\n');
        process.exit();
        break;
      }
      case '/version': {
        console.log(process.versions);
        console.log('Choose command between: "/version" "/enviroment" "/exit" "/getOSInfo" ');
        break;
      }
      case '/enviroment': {
        console.log(process.env);
        console.log('Choose command between: "/version" "/enviroment" "/exit" "/getOSInfo" ');
        break;
      }
      case '/getOSInfo': {
        getOsInfo();
        console.log('Choose command between: "/version" "/enviroment" "/exit" "/getOSInfo" ');
        break;
      }
      default: {
        process.stderr.write('Wrong instruction\n');
        console.log('Choose command between: "/version" "/enviroment" "/exit" "/getOSInfo" ');
        break;
      }
    }
    emitter.emit("afterCommand");
  }
});