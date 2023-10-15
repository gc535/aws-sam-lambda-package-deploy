const { buildCORSResponse } = require('../../../lib/response_cors')

exports.handler = async (event) => {
  return buildCORSResponse(
    "GET,PUT,POST,DELETE",     // define extra allowed methods
    "Test-User-Name",          // define extra allowed headers
  );
}

