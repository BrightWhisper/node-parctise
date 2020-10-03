const glob = require('glob');
let result = null;
console.time();
result = glob.sync(__dirname + '/**/*');
console.timeEnd();
console.log(result);


glob(__dirname + '/**/*', function (err, res) {
    result = res;
    console.log('got result');
});