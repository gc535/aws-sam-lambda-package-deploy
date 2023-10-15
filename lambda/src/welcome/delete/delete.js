const { buildResponse } = require('../../../lib/response_base')

exports.handler = async (event) => {
  return buildResponse(200, "/welcome/delete not yet implemented")
}

