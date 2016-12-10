import { createStack, base, header } from 'http-client'

const parseJSON = (propertyName = 'jsonData') =>
  (fetch, url, options) =>
    fetch(url, options)
    .then(response => response.json()
      .then((value = {}) => {
        const responseWithJSONData = response
        responseWithJSONData[propertyName] = value
        return responseWithJSONData
      }, error => {
        throw new Error(`Error parsing JSON: ${error.stack}`)
      })
  )

const enhanceResponse = () =>
  (fetch, url, options) =>
    fetch(url, options)
    .then(response => (response.ok ? Promise.resolve(response) : Promise.reject(response)))

const baseAPIUrl = process.env.NODE_ENV === 'production'
  ? 'http://api.timexchange.cc'
  : 'http://api-staging.timexchange.cc'

export const apiStack = createStack(
  base(baseAPIUrl),
  header('Content-Type', 'application/json'),
  enhanceResponse(),
  parseJSON(),
)
