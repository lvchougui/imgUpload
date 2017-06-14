/*
 *	配置文件
 */
var config=module.exports;
var PRODUCTION = process.env.NODE_ENV === "production";
//var fs = require('fs');
//var path = require('path');

//config.pic_dir = JSON.parse(fs.readFileSync(process.env.WOPIN_HOME+'/config/conf.json')).pic_dir;
//console.log(config.pic_dir);

config.root_path = process.env.SDUSZ_FILE_HOME;
config.url_prefix = 'uploads/';

var server = {
	port: process.env.EXPRESS_PORT || 3000,
	ip: "115.159.81.112"
};

config.mysql = {
	port: process.env.MYSQL_PORT || 3306,
	host: process.env.MYSQL_HOST || "115.159.81.112",
	user: "root",
	password: "pass99",
	database: "younongProduct"
};

config.mysql.poolSize = 10;
config.mysql.timeout = 30000;

if(PRODUCTION){
	config.express.ip = "115.159.81.112";
}

// config.email
// config.log
