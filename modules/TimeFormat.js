function transformTime (uptime) {
    let hours = Math.floor(uptime / 3600);
    let minutes = Math.floor((uptime - (hours * 3600)) / 60);
    let seconds = uptime - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0"+hours;
    } else if (minutes < 10) {
        minutes = "0"+minutes;
    } else if (seconds < 10) {
        seconds = "0"+seconds;
    }
    return hours+':'+minutes+':'+seconds+'sec';
};
module.exports = transformTime;