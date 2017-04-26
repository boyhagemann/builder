

export const ucfirst = string => string.charAt(0).toUpperCase() + string.substr(1)

export const groupBy = (collection, key) => collection.reduce( (group, item) => {

  const collection = group[item[key]] || []
  collection.push(item)
  group[item[key]] = collection
  return group
}, {})
