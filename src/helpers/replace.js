import { fromJS } from 'immutable'

export default (object, values) => {

  const pattern = /{[\w.?]+}/gi

  let string = JSON.stringify(object)

  const matches = string.match(pattern) || []

  matches.forEach(match => {

    const key = match.match(/[\w.?]+/i)[0]

    const value = fromJS(values).getIn(key.split('.'))

    if(value) {

      // if(typeof(value) === 'string') {
      //   string = string.replace(match, value)
      // }
      // else {
        // string = string.replace(match, JSON.stringify(value))
        string = string.replace(match, value)
      // }

      // console.log(string)

    }

  })

  return JSON.parse(string)
}
