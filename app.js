const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser')
const serve = require('koa-static');
const controller = require('./controllers');


app.use(bodyParser())//bodyparse中间件，把post中的data放入ctx.request.body;
app.use(serve(__dirname + "/dist"));//static目录
app.use(controller());
app.listen(3000);
console.log("app started");




