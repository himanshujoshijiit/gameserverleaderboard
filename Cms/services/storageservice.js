const AWS = require("aws-sdk");
const { deletefiles } = require("../controllers/mediacontroller");
const s3 = new AWS.S3();

class Storageservice{
    constructor(bucketName){
        this.bucketName = bucketName
    }


/**
   * Upload a file to S3
   * @param {Buffer} fileBuffer - File content
   * @param {string} fileName - Name of the file
   * @returns {Promise<string>} - URL of the uploaded file
   */

async uploadfile(fileBuffer,fileName){
    const params ={
        Bucket:this.bucketName,
        key:fileName,
        Body:fileBuffer
    }
    const result = await s3.upload(params).promise();
    return result.Location;
} 

/**
   * Delete a file from S3
   * @param {string} fileName - Name of the file
   * @returns {Promise<void>}
   */

  async deletefile(fileName){
    const params = {
        Bucket:this.bucketName,
        key:fileName
    };
    await s3.deleteObject(params).promise();
  }
}

module.exports = new Storageservice('your-bucket-name')