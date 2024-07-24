import React from 'react'
import {
    CompletedOrderTileContainer,
    CompletedOrderTileWrap,
    CompletedOrderTimer,
    CompletedOrderDetails,
    CompletedOrderH5,
    CompletedOrderP,
    CompletedOrderTable,
    CompletedOrderTd
} from './elements'

const CompletedOrderTile = () => {
  return (
    <CompletedOrderTileContainer>
        <CompletedOrderTileWrap>
            <CompletedOrderTimer>
                12:41:50
            </CompletedOrderTimer>
            <CompletedOrderDetails>
                <CompletedOrderH5>Order number:</CompletedOrderH5>
                <CompletedOrderP>Order type:</CompletedOrderP>
                <CompletedOrderP>---------------------------</CompletedOrderP>
                <CompletedOrderP>Recipient's name: Juan Dela Cruz</CompletedOrderP>
                <CompletedOrderP>Recipient's phone: 098787452144</CompletedOrderP>
                <CompletedOrderP>Recipient's address: kuya st, san vicente, batangas city, batangas, 4200</CompletedOrderP>
                <CompletedOrderP>---------------------------</CompletedOrderP>
                <CompletedOrderTable>
                    {/* loop through orderline */}
                    <tbody>
                        <tr>
                            <CompletedOrderTd>5</CompletedOrderTd>
                            <CompletedOrderTd>chicken</CompletedOrderTd>
                            <CompletedOrderTd>@</CompletedOrderTd>
                            <CompletedOrderTd>100</CompletedOrderTd>
                            <CompletedOrderTd>Php 500</CompletedOrderTd>
                        </tr>
                    </tbody>
                </CompletedOrderTable>
                <CompletedOrderP>---------------------------</CompletedOrderP>
                <CompletedOrderP>Total amount: 2000</CompletedOrderP>
                <CompletedOrderP>Payment method: Cash</CompletedOrderP>
            </CompletedOrderDetails>
        </CompletedOrderTileWrap> 
    </CompletedOrderTileContainer>
  )
}

export default CompletedOrderTile
