import React, { useEffect } from 'react'
import CompletedOrders from '../../components/completedorders'
import ScrollTop from '../../components/scrolltop'
import {Body} from './elements'

const CompletedOrdersPage = () => {

  useEffect(()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [])

  return (
    <>
      <Body>
        <CompletedOrders/>
        <ScrollTop/>
      </Body>
    </>
  )
}

export default CompletedOrdersPage
