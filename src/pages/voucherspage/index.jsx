import React from 'react'
import { Body } from './elements'
import VouchersTable from '../../components/voucherstable'

const VouchersPage = ({toggleAddVoucher, toggleEditVoucher}) => {
  return (
    <Body>
      <VouchersTable toggleAddVoucher={toggleAddVoucher} toggleEditVoucher={toggleEditVoucher}/>
    </Body>
  )
}

export default VouchersPage
