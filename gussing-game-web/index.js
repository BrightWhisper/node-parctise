const querystring = require('querystring');
const http = require('http');
const fs = require('fs');
const url = require('url');
const game = require('./game');

http.createServer(function (req, res) {
    const parseUrl = url.parse(req.url);
    switch (parseUrl.pathname) {
        case '/':
            fs.createReadStream(__dirname + '/index.html').pipe(res);
            break;
        case '/style.css':
            fs.createReadStream(__dirname + '/style.css').pipe(res);
            break;
        case '/front.js':
            fs.createReadStream(__dirname + '/front.js').pipe(res);
            break;
        case '/game':
            const query = querystring.parse(parseUrl.query);
            const playerAction = query.action;
            const gameResult = game(playerAction);

            res.writeHead(200);

            if (gameResult == 0) {
                res.end('平局！');

            } else if (gameResult == 1) {
                res.end('你赢了！');

            } else {
                res.end('你输了！');
            }
        default:
            return;
    }
}).listen(2800);