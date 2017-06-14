var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var moment = require('moment');

//var multer  = require('multer');
//var fs = require('fs');

var apiModule = module.exports;



apiModule.init = function(app) {

//    var createFolder = function(folder){
//        try{
//            fs.accessSync(folder);
//        }catch(e){
//            fs.mkdirSync(folder);
//        }
//    };
//
//    var uploadFolder = './public/';
//
//    createFolder(uploadFolder);
//
//// 通过 filename 属性定制
//    var storage = multer.diskStorage({
//        destination: function (req, file, cb) {
//            cb(null, uploadFolder);    // 保存的路径，备注：需要自己创建
//        },
//        filename: function (req, file, cb) {
//            // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
//            cb(null, file.fieldname + '-' + Date.now());
//        }
//    });
//
//// 通过 storage 选项来对 上传行为 进行定制化
//    var upload = multer({ storage: storage })

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    require('./lib/mysql/mysql').init();
    // app.use(require("./site/router"));

    // Load module routers


//    app.use("/api", require("./users/router"));
    app.use("/api/attachment", require("./attachments/router"));


    // FINALLY, use any error handlers
    // app.use(require("./errors/notFound"));

    // 单图上传
    //app.post('/api/attachment/upload', upload.single('files'), function(req, res, next){
    //    var file = req.file;
    //    console.log(file)
    //    res.send({ret_code: '0'});
    //});
}
