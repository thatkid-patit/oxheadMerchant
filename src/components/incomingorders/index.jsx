import React from 'react'
import IncomingOrderTile from '../incomingordertile'
import {
    IncomingOrdersContainer,
    IncomingOrdersContent,
    IncomingOrdersH5
} from './elements'

const IncomingOrders = () => {
  return (
    <IncomingOrdersContainer id="incomingorders">
        <IncomingOrdersContent>
            <IncomingOrdersH5>-- Incoming Orders --</IncomingOrdersH5>
            {/* loop here*/}
            <IncomingOrderTile/>
        </IncomingOrdersContent>
    </IncomingOrdersContainer>
  )
}

export default IncomingOrders
