import settings from "@/settings"

// l : Logger
const l = function (type: string, text: string, data: object) {
  console.log("⚡️[client]:", type, text, data)
  return data
}

//cL : Console Logger
export const cL = function (text: string, data: object) {
  return l("consoleLogger", text, data)
}


//pL : Promise Logger
// eslint-disable-next-line
export const pL = function (f: ((...data: any[]) => Promise<any>), args: Array<any> = []) {
  return new Promise((resolve, reject) => {
    if (settings.DEBUG == true) {
      l("promiseLogger : Run :", f.name, args)
      // eslint-disable-next-line
      return f.apply(null, args)
        .then(res => resolve(l("promiseLogger : Res :", f.name, res)))
        .catch(err => reject(l("promiseLogger : Err :", f.name, err)))
    }
    else
      // eslint-disable-next-line
      return f.apply(null, args)
        .then(res => resolve(res))
        .catch(err => reject(err))
  });
}