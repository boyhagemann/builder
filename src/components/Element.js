import React from 'react'
import Node from './Node'
import { groupBy } from '../helpers/utility'

// Build the dispatch function for each action
const dispatchActions = actions => actions.forEach( action => {
    console.log(action)
  })

/**
 * Get the event callbacks as attributes
 */
const getEventAttributes = (actions, attributes, context) => {

    // Get the action data from the node
    const actionNodes = actions.map( id => context.nodes.find( node => node._id === id ))

    // Get the actions we need to attach to the element, grouped by event
    const events = groupBy(actionNodes, 'event')

    // These are the valid events for all html elements
    const validEvents = ['onClick', 'onMouseEnter', 'onMouseLeave']

    // Walk thru the grouped events and assign the dispatch for the action
    return Object.keys(events)
      .filter( key => validEvents.includes(key) )
      .reduce( (collection, key) => {
        return {...collection, [key]: () => dispatchActions(events[key]) }
      }, {})
}

export default ({ element, children, actions = [], context, ...attributes }) => {

  // Render the child content
  const content = children.map( child => <Node key={child} id={child} context={context} /> )

  // Append the attributes with the events
  const attributesWithEvents = { ...attributes, ...getEventAttributes(actions, attributes, context) }

  return React.createElement(element, attributesWithEvents, content )
}
