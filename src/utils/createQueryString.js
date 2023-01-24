import querystring from 'querystring'

export default function createQueryStringFromObject(data) {
  const separator = null
  const keyDelimiter = null
  const options = {
    encodeURIComponent: querystring.unescape,
  }
  const qs = querystring.stringify(data, separator, keyDelimiter, options)

  return qs
}
