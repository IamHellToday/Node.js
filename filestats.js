let fs = require('fs');

let getStats = function () {
    return new Promise((resolve, reject) => {
        fs.readdir('./node_modules', 'utf-8', function(err, stats) {
            if (err) {
                reject();
                return 
            }
            console.log(stats.toString());
            resolve(stats.toString());
        })
    })
};
module.exports = getStats;