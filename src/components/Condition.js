import React from 'react'
import Node from './Node'

const isPassing = (source, operator, value) => {

  switch(operator) {

    default:
      return source === value
  }

}

export default ({source, operator, value, pass = [], reject = [], context }) => {

  return (<div>{

    isPassing(source, operator, value)
      ? pass.map( child => <Node key={child} id={child} context={context} /> )
      : reject.map( child => <Node key={child} id={child} context={context} /> )

  }</div>)
}
