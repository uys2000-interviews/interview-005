
class FetchOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE"
  mode?: RequestMode
  cache?: RequestCache
  credentials?: RequestCredentials
  headers?: HeadersInit
  redirect?: RequestRedirect
  referrerPolicy?: ReferrerPolicy
  data?: object
}
export const apiRequest = async function (apiPath: string, fetchOptions: FetchOptions = {}) {
  const response = await fetch(`http://localhost:8081/api/${apiPath}`, {
    method: fetchOptions.method ?? 'Get',
    mode: fetchOptions.mode ?? 'cors',
    cache: fetchOptions.cache ?? 'no-cache',
    credentials: fetchOptions.credentials ?? 'same-origin',
    headers: fetchOptions.headers ?? {
      'Content-Type': 'application/json',
    },
    redirect: fetchOptions.redirect ?? 'follow',
    referrerPolicy: fetchOptions.referrerPolicy ?? 'no-referrer',
    body: JSON.stringify(fetchOptions.data)
  });
  return await response.json()
}

type apiRequestFType = (apiPath: string, fetchOptions: FetchOptions) => Promise<Response>
export const apiRequestF: apiRequestFType = async function (apiPath: string, fetchOptions: FetchOptions = {}) {
  const response = fetch(`http://localhost:8081/api/${apiPath}`, {
    method: fetchOptions.method ?? 'Get',
    mode: fetchOptions.mode ?? 'cors',
    cache: fetchOptions.cache ?? 'no-cache',
    credentials: fetchOptions.credentials ?? 'same-origin',
    headers: fetchOptions.headers ?? {
      'Content-Type': 'application/json',
    },
    redirect: fetchOptions.redirect ?? 'follow',
    referrerPolicy: fetchOptions.referrerPolicy ?? 'no-referrer',
    body: JSON.stringify(fetchOptions.data)
  });
  return response
}