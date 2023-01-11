'use strict';

const { getDocumentAsJson } = require("./s3");

module.exports.hello = async () => {
  const bucket = 'my-bucket-name'
  const objectId
    = 'my-object-id';

  const s3Response = await getDocumentAsJson(bucket, objectId)

  return {
    status: s3Response.ITAB[0]
  };
};