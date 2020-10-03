// 模拟三轮面试，并判断在第几轮挂
function interview(round) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve();
            } else {
                reject(round)
            }
        }, 500)
    })
}

interview(1)
    .then(() => {
        return interview(2);
    })
    .then(() => {
        return interview(3);
    })
    .then(() => {
        console.log('smile');
    })
    .catch((round) => {
        console.log(`cry,failure at ${round} round`);
    })