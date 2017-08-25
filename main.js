const fs = require('fs');

//var data = fs.readFileSync('package.json');
//console.log(data.toString());

fs.readFile('package.json', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("code stop");
