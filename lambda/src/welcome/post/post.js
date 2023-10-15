const { buildResponse } = require('../../../lib/response_base')

exports.handler = async (event) => {
  return buildResponse(200, "/welcome/post not yet implemented")
}

