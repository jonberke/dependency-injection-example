// JB: Initialize the docClient with the table name, region, endpoint (if needed) before passing in
exports.handler = async(docClient, ddbTable) => {
  let result
  try {
    result = await docClient.get({
      // JB: Use real table name from env var. Pass in as dependency?
      // JB: Setup ddb local or use aws db (so can look at the results)?
      TableName: ddbTable,
      Key: {
        HashKey: 'first'
      }
    }).promise()
  } catch (err) {
    console.log(err)
    return err
  }

  let count
  if (!result.Item.foo) {
    count = 0
  } else {
    count = result.Item.foo
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      count: count
    })
  }
  return response
}
