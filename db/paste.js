var mongoose = require('./db');
var pasteSchema = mongoose.Schema({//生成schema
    token: String,
    time: Date,
    poster: String,
    syntax: String,
    expiration: String,
    content: String
  })
module.exports = mongoose.model('paste',pasteSchema);//export model