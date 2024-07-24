import React from 'react'
import Dashboard from '../../components/dashboard'
import IncomingOrders from '../../components/incomingorders'
import KitchenOrders from '../../components/kitchenorders'
import DispatchedOrders from '../../components/dispatchedorders'
import ScrollTop from '../../components/scrolltop'
import {Body} from './elements'

const HomePage = () => {
  return (
    <>
      <Body>
        <Dashboard/>
        <IncomingOrders/>
        <KitchenOrders/>
        <DispatchedOrders/>
        <ScrollTop/>
      </Body>
    </>
  )
}

export default HomePage
