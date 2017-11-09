let fs = require('fs');

fs.readdir('./node_modules', 'utf-8', function(err, stats) {
    console.log(stats.toString());
});
module.exports = fs;