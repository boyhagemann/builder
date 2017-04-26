import React from 'react'

import Element from './Element'
import Text from './Text'
import Data from './Data'
import Condition from './Condition'
import nodes from '../data/nodes'
import replace from '../helpers/replace'

export default ({id, context = {} }) => {

    const node = nodes.find( node => node._id === id)

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
