async function exInterview() {
    try {
        await interview(1);
        await interview(2);
        await interview(3);
        // 并行请求
        await Promise.all([interview(1), interview(2)])
    } catch (e) {
        return console.log('cry at ' + e.round);
    }
    console.log('smile');
}

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