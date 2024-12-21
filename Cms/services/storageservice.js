const AWS = require("aws-sdk")
const S3 = new AWS.S3();

export.uploadfile = (file) =>{
    const params = {
        Bucket:;
        Key:;
        Body:;
        ContentType:;
    }
  return S3.upload(params).promise();
}

exports.deletefile = (fileUrl) =>{
    const key:
    const params:;

    retrun s3.deleteobject(params).promise();

}