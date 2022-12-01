
export const waitForPromise = async function (promise: Promise<Response>) {
  // This function get status code status text and nodyof Request 
  const result = await promise.then()
  let body;
  try { body = await result.json() }
  catch { body = await result.text() }
  return {
    status: result.status,
    statusText: result.statusText,
    body: body
  }
}