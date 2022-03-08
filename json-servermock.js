const jsonServer = require('json-server');

const $db = require('./db.json'); // db.json。或返回db.json数据格式的，db.js文件
const $data = require('./data.json');
console.log($data);
const server = jsonServer.create();

const middlewares = jsonServer.defaults({
    noCors: false
}); 
//jsonServer.defaults([options]) options:
        // static path to static files
        // logger enable logger middleware (default: true)
        // bodyParser enable body-parser middleware (default: true)
        // noCors disable CORS (default: false)
        // readOnly accept only GET requests (default: false)
const dbrouter = jsonServer.router([$db,$data]);

// Set default middlewares (logger, static, cors and no-cache)

server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser

server.use(jsonServer.bodyParser);

server.use(datarouter);

server.listen(5000, () => {
    console.log('JSON Server is running at 5000');
});