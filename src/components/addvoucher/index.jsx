import React from 'react'
import { useNavigate } from 'react-router-dom'

import {
    AddVoucherContainer,
    AddVoucherform,
    AddVoucherHeader,
    AddVoucherH1,
    AddVoucherClose,
    AddVoucherInputWrap,
    AddVoucherInput,
    AddVoucherSubmit
} from './elements'

const AddVoucher = ({$addVoucherIsOpen, toggleAddVoucher}) => {
    
    const handleSubmit = () => {
        toggleAddVoucher();
    }

  return (
    <>
    <AddVoucherContainer $addVoucherIsOpen={$addVoucherIsOpen ? 1 : 0}>
        <AddVoucherform onSubmit={handleSubmit}>
            <AddVoucherHeader>
                <AddVoucherH1>Create Voucher</AddVoucherH1>
                <AddVoucherClose onClick={toggleAddVoucher}/>
            </AddVoucherHeader>
            <AddVoucherInputWrap>
                <AddVoucherInput type='text' name='code' placeholder='Enter promo code' required/>
            </AddVoucherInputWrap>
            <AddVoucherInputWrap>
                <AddVoucherInput type='text' name='description' placeholder='Enter promo description' required/>
            </AddVoucherInputWrap>
            <AddVoucherInputWrap>
                <AddVoucherInput type='number' name='value' placeholder='Enter promo rate in decimal' required/>
            </AddVoucherInputWrap>
            <AddVoucherInputWrap>
                <AddVoucherInput type='number' name='cap' placeholder='Enter discount cap' required/>
            </AddVoucherInputWrap>
            <AddVoucherInputWrap>
                <AddVoucherInput type='number' name='use_chance' placeholder='Enter no. of use chance' required/>
            </AddVoucherInputWrap>
            <AddVoucherInputWrap>
                <AddVoucherSubmit>Submit Voucher</AddVoucherSubmit>
            </AddVoucherInputWrap>
        </AddVoucherform>
    </AddVoucherContainer>
    </>
  )
}

export default AddVoucher
