import { fromJS } from 'immutable'

export default (object, values) => {

  const pattern = /{[\w.?]+}/gi
  const string = JSON.stringify(object)
  const matches = string.match(pattern) || []
  const replaced = matches.reduce( (string, match) => {

    const key = match.match(/[\w.?]+/i)[0]
    const value = fromJS(values).getIn(key.split('.'))

    return value ? string.replace(match, value) : string

  }, string)

  return JSON.parse(replaced)
}
