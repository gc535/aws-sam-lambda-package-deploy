exports.handler = async (event) => {
  const response = {
      statusCode: 200,
      headers: {
          "Access-Control-Allow-Headers" : "Content-Type,Authorization",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,GET"
      },
      body: JSON.stringify('Pre-flight CORS response.'),
  }
  return response
}