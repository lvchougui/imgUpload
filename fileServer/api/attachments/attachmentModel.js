var sqlClient = require('../lib/mysql/mysql');
var attachmentDao = module.exports;
var moment = require('moment');
var Config = require('../config');

attachmentDao.create = function (file, cb) {

//    var sql = "insert into pictures values (NULL,?,?,?)";
//    var params = [file.originalname, Config.url_prefix+file.name, moment().format('YYYY-MM-DD HH:mm:ss')];
//    sqlClient.query(sql, params, function (error, data) {
//
//        if (error) {
//            return cb(error, null);
//        }
////        console.log(data);
//
//
//    })

    var arrPath=[];
    var arrFileName = [];
    for (var key in file){
        //console.log(file)
        arrPath.push(file[key].path.substring(0, file[key].path.length));
        arrFileName.push(file[key].name);
    }
    return cb(null, {path:arrPath,name:arrFileName});



};