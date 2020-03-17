const crypto = require('crypto');
const tokenpage = require('./tokenpage');//html模板，即返回url的页面
const textpage = require('./textpage');//html模板，即返回url的页面
const {insert,find} = require('../db/operations');

function makeMD5(obj){//根据内容，作者和时间戳产生一个MD5值作为令牌
  var md5 = crypto.createHash('md5');//创建一个md5 hash算法
  md5.update(obj.poster);
  md5.update(obj.content);
  md5.update(obj.time.toString());
  return md5.digest('hex')
}

var fn_add=async (ctx,next)=>{//当用户点击paste时
  obj=ctx.request.body;//通过body-parser中间件得到post方法的内容
  obj.time=new Date();//产生时间戳
  obj.token=makeMD5(obj);//产生令牌
  ctx.body=tokenpage(obj.poster,obj.time,"http://czc2912.xyz:3000/"+obj.token);//返回html模板
  insert(obj);//向mongodb中插入数据
}

var fn_getByToken = async (ctx,next)=>{//当用户使用令牌访问内容时
  if(ctx.params.token=='favicon.ico'){//令牌为空
    return;
  }
  let token=ctx.params;//令牌
  await find(token).then((data)=>{//异步从数据库中得到数据
    ctx.body=textpage(data.poster,data.time,data.content);//在回调中返回html模板
  });
}

module.exports = {
    'GET /:token': fn_getByToken,
    'POST /add': fn_add
};