import React from 'react'
import KitchenOrderTile from '../kitchenordertile'
import {
    KitchenOrdersContainer,
    KitchenOrdersContent,
    KitchenOrdersH5
} from './elements'

const KitchenOrders = () => {
  return (
    <KitchenOrdersContainer id="kitchenorders">
        <KitchenOrdersContent>
            <KitchenOrdersH5>-- Kitchen Orders --</KitchenOrdersH5>
            {/* loop here*/}
            <KitchenOrderTile/>
        </KitchenOrdersContent>
    </KitchenOrdersContainer>
  )
}

export default KitchenOrders