var express = require('express');
var path = require('path');
var multer = require('multer');
var moment = require('moment');
var app = express();

//if(!process.env.WOPIN_HOME){
//    throw new Error('环境变量WOPIN_HOME未设置！');
//}

app.use(express.static(path.join(__dirname, 'public')));

app.use(multer({
    dest: "./public/uploads/"+moment().format('YY-MM-DD'),
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    },
//        changeDest: function(dest, req, res) {
//            var appRoot = req.query.app;
//            var month = moment().format('YYYYMM');
//            return dest+"/app/"+month;
//
//        },
    onError: function(error, next) {

    }
}));

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

var apiModule = require('./api/index').init(app);

module.exports = app;
