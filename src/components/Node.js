import React from 'react'

import Element from './Element'
import Text from './Text'
import Data from './Data'
import Condition from './Condition'
import replace from '../helpers/replace'

export default ({id, context = {} }) => {

    if(!context.nodes) {
      console.error('No nodes data in context')
      return null
    }

    const node = context.nodes.find( node => node._id === id)

    if(!node) {
      console.error('Node not found: ' + id)
      return null
    }

    const { _id, _type, ...unprocessed } = node

    const props = replace(unprocessed, context)

    switch(_type) {

      case 'Element':
        return <Element key={_id} {...props} context={context} />

      case 'Data':
        return <Data key={_id} {...props} context={context} />

      case 'Condition':
        return <Condition key={_id} {...props} context={context} />

      case 'Text':
        return <Text key={_id} {...props} context={context} />

      default:
        console.error('Component does not exist: ', _type)
    }

}
