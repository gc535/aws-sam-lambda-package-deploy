const { buildResponse } = require('../../../lib/response_base')
var AWS = require('aws-sdk')

const WELCOME_MSG = process.env.WELCOME_MSG

exports.handler = async (event, context, callback) => {
  console.log(WELCOME_MSG)
  const userName = event.headers['Test-User-Name']; // or event.headers['test-user-name']

  return buildResponse(200, WELCOME_MSG+", "+userName)
}

