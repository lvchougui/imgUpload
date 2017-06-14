var router = require('express').Router();
var attachmentDao = require('./attachmentModel');
var fs = require('fs');
var qiniu = require("qiniu");


qiniu.conf.ACCESS_KEY = 'gR_JcvS-TuPlcHAaF4ctVjjiIjYIk_vNyCBisF5z';
qiniu.conf.SECRET_KEY = '3ZhdUCBz-QGUjxML3B0a7GF7MvdAPyQP-ycWwm1W';
//�����ϴ����Ժ���
function uptoken(key) {
    var putPolicy = new qiniu.rs.PutPolicy('syyjimg'+":"+key);
    return putPolicy.token();
}

//�����ϴ�����
function uploadFile(uptoken, key, localFile,res) {
    var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
        if(!err) {
            // �ϴ��ɹ��� ������ֵ
            //console.log(ret.hash, ret.key, ret.persistentId);
            console.log(ret)
            return res.json({path:"http://orhnya4jo.bkt.clouddn.com/"+key});
        } else {
            // �ϴ�ʧ�ܣ� �����ش���
            console.log(err);
            return  res.json('error');
        }
    });
}

router.post('/upload', function (req, res) {
    if (req.files) {

        attachmentDao.create(req.files, function (error, data) {

            if (error) {
                console.log(error);
                return res.json(500);
            }
            console.log('==================')
            console.log(data.path[0])
            console.log(data.name[0])
            uploadFile(uptoken(data.name[0]),data.name[0],data.path[0],res)
            //return res.json(data);

        });

    }else{
        return res.json('dataTypeError');
    }

});

router.post('/del', function (req, res) {
    console.log(req.body);
    req.body.data.forEach(function(item){
        console.log(item);
        fs.unlinkSync('../public/'+item)
    })

        return res.json('success');
});


module.exports = router;