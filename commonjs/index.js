const game = require('./lib.js');
let count = 0;
process.stdin.on('data', e => {
    const playerAction = e.toString().trim();
    const result = game(playerAction);
    console.log(result);
    if (result === 1) {
        count++;
    }
    if(count === 3){
        console.log('太强了，走了');
        process.exit();
    }
})