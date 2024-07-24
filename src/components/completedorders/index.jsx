import React from 'react'
import CompletedOrderTile from '../completedordertile'
import {
    CompletedOrdersContainer,
    CompletedOrdersContent
} from './elements'

const CompletedOrders = () => {
  return (
    <CompletedOrdersContainer>
        <CompletedOrdersContent>
            {/* loop here*/}
            <CompletedOrderTile/>
        </CompletedOrdersContent>
    </CompletedOrdersContainer>
  )
}

export default CompletedOrders