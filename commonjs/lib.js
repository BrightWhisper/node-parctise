
module.exports = function (playerAction) {
    let random = Math.random() * 3;
    let computerAction;
    if (random < 1) {
        computerAction = 'rock';
    } else if (random > 2) {
        computerAction = 'scissor'
    } else {
        computerAction = 'paper';
    }
    console.log("电脑出的是: ", computerAction);
    let result;
    if (playerAction === computerAction) {
        console.log('平局');
        result = 0
    } else if (
        (computerAction === 'rock' && playerAction === 'scissor') ||
        (computerAction === 'scissor' && playerAction === 'paper') ||
        (computerAction === 'paper' && playerAction === 'rock')
    ) {
        console.log('电脑赢了');
        result = -1;
    } else {
        console.log('玩家赢了');
        result = 1;
    }
    return result;
}