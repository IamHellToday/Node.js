let os = require('os');
let transformTime = require('./TimeFormat');

function getOsInfo() {
    let type = os.type();
    let release = os.release();
        if(type === 'Darwin') {
            type = 'OSX';
        } else if ( type === 'Windows_NT') {
            type = 'Windows';
        } else if (type === 'Linux') {
            type = 'Linux';
        };
        console.log('System:', type);
        console.log('Release:', release);

    let cpu = os.cpus()[0].model;
    console.log('Cpu model:', cpu);

    let uptime = os.uptime();
    transformTime(uptime);
    console.log('Uptime: ' +uptime);

    let userInfo = os.userInfo();
    console.log('User name:', userInfo.username);
    console.log('Home dir', userInfo.homedir);
    process.stderr.write('Choose command between: "/version" "/enviroment" "/exit"');
}; 
module.exports = getOsInfo;