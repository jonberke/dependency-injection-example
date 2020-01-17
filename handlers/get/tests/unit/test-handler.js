'use strict'
const awsMock = require('aws-sdk-mock')
const aws = require('aws-sdk')
awsMock.setSDKInstance(aws)

const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-string'))
const {
  describe,
  it
} = require('mocha')

const {
  handler
} = require('../../index')

describe('Get', function() {
  // JB: Add test for database not found (ResourceNotFoundException)?
  it('when the database is empty', async function() {
    awsMock.mock('DynamoDB.DocumentClient', 'get', function(params, callback) {
      callback(null, {
        Item: {} // JB: Change to what an empty response really looks like
      })
    })
    const docClient = new aws.DynamoDB.DocumentClient()
    const result = await handler(docClient)

    expect(result).to.be.an('object')
    expect(result.statusCode).to.equal(200)
    expect(result.body).to.be.an('string')

    const response = JSON.parse(result.body)
    expect(response).to.be.an('object')
    expect(response.count).to.equal(0)
  })
})
