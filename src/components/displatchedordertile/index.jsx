import React, { useEffect, useState, useRef} from 'react'
import {
    DispatchedOrderTileContainer,
    DispatchedOrderTileWrap,
    DispatchedOrderTimer,
    DispatchedOrderDetails,
    DispatchedOrderH5,
    DispatchedOrderP,
    DispatchedOrderButtonsWrap,
    DispatchedOrderAccept,
    DispatchedOrderDecline,
    DispatchedOrderTable,
    DispatchedOrderTd
} from './elements'

const DispatchedOrderTile = () => {

  return (
    <DispatchedOrderTileContainer>
        <DispatchedOrderTileWrap>
            <DispatchedOrderTimer>
                12:41:50
            </DispatchedOrderTimer>
            <DispatchedOrderDetails>
                <DispatchedOrderH5>Order number:</DispatchedOrderH5>
                <DispatchedOrderP>Order type:</DispatchedOrderP>
                <DispatchedOrderP>---------------------------</DispatchedOrderP>
                <DispatchedOrderP>Recipient's name: Juan Dela Cruz</DispatchedOrderP>
                <DispatchedOrderP>Recipient's phone: 098787452144</DispatchedOrderP>
                <DispatchedOrderP>Recipient's address: kuya st, san vicente, batangas city, batangas, 4200</DispatchedOrderP>
                <DispatchedOrderP>---------------------------</DispatchedOrderP>
                <DispatchedOrderTable>
                    {/* loop through orderline */}
                    <tbody>
                        <tr>
                            <DispatchedOrderTd>5</DispatchedOrderTd>
                            <DispatchedOrderTd>chicken</DispatchedOrderTd>
                            <DispatchedOrderTd>@</DispatchedOrderTd>
                            <DispatchedOrderTd>100</DispatchedOrderTd>
                            <DispatchedOrderTd>Php 500</DispatchedOrderTd>
                        </tr>
                    </tbody>
                </DispatchedOrderTable>
                <DispatchedOrderP>---------------------------</DispatchedOrderP>
                <DispatchedOrderP>Total amount: 2000</DispatchedOrderP>
                <DispatchedOrderP>Payment method: Cash</DispatchedOrderP>
            </DispatchedOrderDetails>
        </DispatchedOrderTileWrap> 
        <DispatchedOrderButtonsWrap>
            {/* <DispatchedOrderAccept>Complete Pick Up</DispatchedOrderAccept> */}
            <DispatchedOrderAccept>Complete Delivery</DispatchedOrderAccept>
            <DispatchedOrderDecline>Cancel Order</DispatchedOrderDecline>
        </DispatchedOrderButtonsWrap> 
    </DispatchedOrderTileContainer>
  )
}

export default DispatchedOrderTile
