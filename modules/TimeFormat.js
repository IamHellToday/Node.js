function transformTime (uptime) {
    if (uptime < 1000) {
        let uptime = this.uptime / 60;
    } else {
        let uptime = this.uptime / 3600;
    }
};
exports.print = transformTime;