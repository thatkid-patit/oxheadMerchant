import React, { useEffect, useState, useRef} from 'react'
import {
    IncomingOrderTileContainer,
    IncomingOrderTileWrap,
    IncomingOrderTimer,
    IncomingOrderDetails,
    IncomingOrderH5,
    IncomingOrderP,
    IncomingOrderButtonsWrap,
    IncomingOrderAccept,
    IncomingOrderDecline,
    IncomingOrderTable,
    IncomingOrderTd
} from './elements'

const IncomingOrderTile = () => {

  return (
    <IncomingOrderTileContainer>
        <IncomingOrderTileWrap>
            <IncomingOrderTimer>
                12:41:50
            </IncomingOrderTimer>
            <IncomingOrderDetails>
                <IncomingOrderH5>Order number:</IncomingOrderH5>
                <IncomingOrderP>Order type:</IncomingOrderP>
                <IncomingOrderP>---------------------------</IncomingOrderP>
                <IncomingOrderP>Recipient's name: Juan Dela Cruz</IncomingOrderP>
                <IncomingOrderP>Recipient's phone: 098787452144</IncomingOrderP>
                <IncomingOrderP>Recipient's address: kuya st, san vicente, batangas city, batangas, 4200</IncomingOrderP>
                <IncomingOrderP>---------------------------</IncomingOrderP>
                <IncomingOrderTable>
                    {/* loop through orderline */}
                    <tbody>
                        <tr>
                            <IncomingOrderTd>5</IncomingOrderTd>
                            <IncomingOrderTd>chicken</IncomingOrderTd>
                            <IncomingOrderTd>@</IncomingOrderTd>
                            <IncomingOrderTd>100</IncomingOrderTd>
                            <IncomingOrderTd>Php 500</IncomingOrderTd>
                        </tr>
                    </tbody>
                </IncomingOrderTable>
                <IncomingOrderP>---------------------------</IncomingOrderP>
                <IncomingOrderP>Total amount: 2000</IncomingOrderP>
                <IncomingOrderP>Payment method: Cash</IncomingOrderP>
            </IncomingOrderDetails>
        </IncomingOrderTileWrap> 
        <IncomingOrderButtonsWrap>
            <IncomingOrderAccept>Accept</IncomingOrderAccept>
            <IncomingOrderDecline>Decline</IncomingOrderDecline>
        </IncomingOrderButtonsWrap> 
    </IncomingOrderTileContainer>
  )
}

export default IncomingOrderTile
