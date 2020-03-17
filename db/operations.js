//export了mongodb的插入和寻找操作
var paste = require('./paste');//import model
function insert(obj){
    var pasteobj = new paste(obj);
    pasteobj.save((err,obj)=>{
      if(err){
        console.log(err);
      }
    })
}

function find(token){
    return Promise.resolve(paste.findOne(token));//返回一个promise对象
}
module.exports={
    insert: insert,
    find: find
}