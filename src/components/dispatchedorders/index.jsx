import React from 'react'
import DispatchedOrderTile from '../displatchedordertile'
import {
    DispatchedOrdersContainer,
    DispatchedOrdersContent,
    DispatchedOrdersH5
} from './elements'

const DispatchedOrders = () => {
  return (
    <DispatchedOrdersContainer id="dispatchedorders">
        <DispatchedOrdersContent>
            <DispatchedOrdersH5>-- Dispatched Orders --</DispatchedOrdersH5>
            {/* loop here*/}
            <DispatchedOrderTile/>
        </DispatchedOrdersContent>
    </DispatchedOrdersContainer>
  )
}

export default DispatchedOrders