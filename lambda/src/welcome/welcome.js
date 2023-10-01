const { respondCORS } = require('../../lib/response')
var AWS = require('aws-sdk')

const WELCOME_MSG = process.env.WELCOME_MSG

exports.handler = async (event, context, callback) => {
  console.log(WELCOME_MSG)
  return respondCORS(null, WELCOME_MSG)
}

