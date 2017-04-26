import React from 'react'
import Node from './Node'
import { fromJS } from 'immutable'

const renderChild = (child, index, context) => (<Node key={child + index} id={child} context={context} />)

const renderItem = (name, item, children, context = {} ) => {

  // Merge the data with the existing context
  const newContext = fromJS(context)
    .setIn( name.split('.'), item)
    .toJS()

  return children.map( (child, index) => renderChild(child, index, newContext))
}

const renderCollection = (name, data, children, context) => data.map( item => renderItem(name, item, children, context))

export default ({name, data, children, context }) => {

  const content = Array.isArray(data)
    ? renderCollection(name, data, children, context)
    : renderItem(name, data, children, context)

  return <div>{ content }</div>
}
