const respondCORS = (error, data) => {
  return {
    "statusCode": error ? 400 : 200,
    "headers": {
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Credentials": true
    },
    "body": error ? error : data
  }
}

module.exports = {
  respondCORS,
}