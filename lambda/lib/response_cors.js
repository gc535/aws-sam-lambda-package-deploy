const buildCORSResponse = (extraMethod, extraHeaders) => {
  const accessControlAllowMethods = "OPTIONS" + 
      ((extraMethod && typeof extraMethod === "string") ? `,${extraMethod}` : "")

  const accessControlAllowHeaders = "Content-Type,Authorization" + 
      ((extraHeaders && typeof extraHeaders === "string") ? `,${extraHeaders}` : "")

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Methods": accessControlAllowMethods,
      "Access-Control-Allow-Headers" : accessControlAllowHeaders,
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify('Pre-flight CORS response.'),
  }
}

module.exports = {
  buildCORSResponse,
}