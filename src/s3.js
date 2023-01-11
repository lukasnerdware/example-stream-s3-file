const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3')
const { stream2Promise } = require('./stream');

module.exports.getDocumentAsStream = async (bucket, objectId) => {
    const client = new S3Client({ region: "eu-central-1" });
    const command = new GetObjectCommand({
        Bucket: bucket,
        Key: objectId,
    });
    const response = await client.send(command)
    return response.Body
}

module.exports.getDocumentAsJson = async (bucket, objectId) => {
    const client = new S3Client({ region: "eu-central-1" });
    const command = new GetObjectCommand({
        Bucket: bucket,
        Key: objectId,
    });
    const response = await client.send(command)
    const json = await stream2Promise(response.Body);
    return json;
}
