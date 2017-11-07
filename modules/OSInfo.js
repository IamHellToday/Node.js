let os = require('os');
let colors = require('colors');

function getOsInfo() {

    let type = os.type();
    let release = os.release();

    if (type === 'Darwin') {
        type = 'OSX';
    } else if ( type === 'Windows_NT') {
        type = 'Windows';
    } else if (type === 'Linux') {
        type = 'Linux';
    };

    console.log('System:'.grey, type);
    console.log('Release:'.red, release);

    let cpu = os.cpus()[0].model;
    console.log('Cpu model:'.cyan, cpu);

    let uptime = os.uptime();
    console.log('Uptime:'.green, Math.floor(uptime), 'sec');

    let userInfo = os.userInfo();
    console.log('User name:'.magenta, userInfo.username);
    console.log('Home dir'.white, userInfo.homedir);
    console.log('Choose command between: "/version" "/enviroment" "/exit" "/getOSInfo" ');
}; 
exports.print = getOsInfo;