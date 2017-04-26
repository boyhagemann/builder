import React from 'react'
import Node from './Node'
import { ucfirst, groupBy } from '../helpers/utility'

// Build the dispatch function for each action
const dispatchActions = actions => actions.forEach( action => {
    console.log(action)
  })

/**
 * Bind the events to the attributes
 */
const bindEvents = (actions, attributes, context) => {

    // Get the action data from the node
    const actionNodes = actions.map( id => context.nodes.find( node => node._id === id ))

    // Get the actions we need to attach to the element, grouped by event
    const events = groupBy(actionNodes, 'on')

    // These are the valid events for all html elements
    const validEvents = ['onClick', 'onMouseEnter']

    // Walk thru the grouped events and assign the dispatch for the action
    Object.keys(events).forEach( key => {

      // Build the js event attribute name
      const name = 'on' + ucfirst(key)

      if(validEvents.includes(name)) {
        attributes[name] = () => dispatchActions(events[key])
      }

    })

    return attributes
}

export default props => {

  const { element, children, actions = [], context, ...attributes } = props

  // Render the child content
  const content = children.map( child => <Node key={child} id={child} context={context} /> )

  // Append the attributes with the events
  const attributesWithEvents = bindEvents(actions, attributes, context)

  return React.createElement(element, attributesWithEvents, content )
}
