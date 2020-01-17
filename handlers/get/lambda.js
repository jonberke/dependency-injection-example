const { handler } = require('./index')
const aws = require('aws-sdk')

const ddbTable = process.env.DDB_TABLE || 'foobar' // JB: Finish...
const ddbOpts = {
  region: 'us-west-2',
  params: {
    TableName: ddbTable
  }
}

const docClient = new aws.DynamoDB.DocumentClient(ddbOpts)

// JB: Create DDB table on AWS for integration tests - add to local env var

exports.handler = async(event, context) => {
  // Get needed properties from event and context (and process?) and pass them to the business logic function
  return handler(docClient, ddbTable)
}
