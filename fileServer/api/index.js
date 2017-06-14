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
//// ͨ�� filename ���Զ���
//    var storage = multer.diskStorage({
//        destination: function (req, file, cb) {
//            cb(null, uploadFolder);    // �����·������ע����Ҫ�Լ�����
//        },
//        filename: function (req, file, cb) {
//            // �������ļ�������Ϊ �ֶ��� + ʱ��������� logo-1478521468943
//            cb(null, file.fieldname + '-' + Date.now());
//        }
//    });
//
//// ͨ�� storage ѡ������ �ϴ���Ϊ ���ж��ƻ�
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

    // ��ͼ�ϴ�
    //app.post('/api/attachment/upload', upload.single('files'), function(req, res, next){
    //    var file = req.file;
    //    console.log(file)
    //    res.send({ret_code: '0'});
    //});
}
