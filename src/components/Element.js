import React from 'react'
import Node from './Node'


const flatten = list => list.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);

export default props => {

  const { element, children, context, ...attributes } = props

  const content = children.map( child => <Node key={child} id={child} context={context} /> )

  return React.createElement(element, attributes, flatten(content) )
}
