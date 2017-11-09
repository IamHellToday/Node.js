let fs = require('fs');

fs.readdir('./node_modules', 'utf-8', function(err, stats) {
    console.log(stats.toString());
    fs.appendFile('components.txt', stats, 'utf-8', function(err) {
        if (err) {
            throw err;
        } else {
        console.log(`File has been saved including ${stats} components.`);
        }
    });
});