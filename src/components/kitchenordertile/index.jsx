import React from 'react'
import {
    KitchenOrderTileContainer,
    KitchenOrderTileWrap,
    KitchenOrderTimer,
    KitchenOrderDetails,
    KitchenOrderH5,
    KitchenOrderP,
    KitchenOrderButtonsWrap,
    KitchenOrderAccept,
    KitchenOrderDecline,
    KitchenOrderTable,
    KitchenOrderTd
} from './elements'

const KitchenOrderTile = () => {
  return (
    <KitchenOrderTileContainer>
        <KitchenOrderTileWrap>
            <KitchenOrderTimer>
                12:41:50
            </KitchenOrderTimer>
            <KitchenOrderDetails>
                <KitchenOrderH5>Order number:</KitchenOrderH5>
                <KitchenOrderP>Order type:</KitchenOrderP>
                <KitchenOrderP>---------------------------</KitchenOrderP>
                <KitchenOrderP>Recipient's name: Juan Dela Cruz</KitchenOrderP>
                <KitchenOrderP>Recipient's phone: 098787452144</KitchenOrderP>
                <KitchenOrderP>Recipient's address: kuya st, san vicente, batangas city, batangas, 4200</KitchenOrderP>
                <KitchenOrderP>---------------------------</KitchenOrderP>
                <KitchenOrderTable>
                    {/* loop through orderline */}
                    <tbody>
                        <tr>
                            <KitchenOrderTd>5</KitchenOrderTd>
                            <KitchenOrderTd>chicken</KitchenOrderTd>
                            <KitchenOrderTd>@</KitchenOrderTd>
                            <KitchenOrderTd>100</KitchenOrderTd>
                            <KitchenOrderTd>Php 500</KitchenOrderTd>
                        </tr>
                    </tbody>
                </KitchenOrderTable>
                <KitchenOrderP>---------------------------</KitchenOrderP>
                <KitchenOrderP>Total amount: 2000</KitchenOrderP>
                <KitchenOrderP>Payment method: Cash</KitchenOrderP>
            </KitchenOrderDetails>
        </KitchenOrderTileWrap> 
        <KitchenOrderButtonsWrap>
            <KitchenOrderAccept>Dispatch</KitchenOrderAccept>
            <KitchenOrderDecline>Cancel Order</KitchenOrderDecline>
        </KitchenOrderButtonsWrap> 
    </KitchenOrderTileContainer>
  )
}

export default KitchenOrderTile
