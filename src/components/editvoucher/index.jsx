import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
    EditVoucherContainer,
    EditVoucherform,
    EditVoucherHeader,
    EditVoucherH1,
    EditVoucherClose,
    EditVoucherInputWrap,
    EditVoucherInput,
    EditVoucherSubmit,
    EditVoucherSubmit2
} from './elements'
import { StoreContext } from '../../context/StoreContext'

const EditVoucher = ({$editVoucherIsOpen, toggleEditVoucher}) => {

    const {voucherToEdit} = useContext(StoreContext);
    
    const handleSubmit = () => {
        toggleEditVoucher();
    }

    

  return (
    <>
    <EditVoucherContainer $editVoucherIsOpen={$editVoucherIsOpen ? 1 : 0}>
        <EditVoucherform onSubmit={handleSubmit}>
            <EditVoucherHeader>
                <EditVoucherH1>Edit Product</EditVoucherH1>
                <EditVoucherClose onClick={toggleEditVoucher}/>
            </EditVoucherHeader>
            <EditVoucherInputWrap>
                <EditVoucherInput type='text' name='code' defaultValue={voucherToEdit.code} required/>
            </EditVoucherInputWrap>
            <EditVoucherInputWrap>
                <EditVoucherInput type='text' name='description' defaultValue={voucherToEdit.description} required/>
            </EditVoucherInputWrap>
            <EditVoucherInputWrap>
                <EditVoucherInput type='number' name='value' defaultValue={voucherToEdit.value} required/>
            </EditVoucherInputWrap>
            <EditVoucherInputWrap>
                <EditVoucherInput type='number' name='cap' defaultValue={voucherToEdit.cap} required/>
            </EditVoucherInputWrap>
            <EditVoucherInputWrap>
                <EditVoucherInput type='number' name='use_chance' defaultValue={voucherToEdit.use_chance} required/>
            </EditVoucherInputWrap>
            <EditVoucherInputWrap>
                <EditVoucherSubmit type="submit">Save Changes</EditVoucherSubmit>
            </EditVoucherInputWrap>
            <EditVoucherInputWrap>
                <EditVoucherSubmit2>Delete Voucher</EditVoucherSubmit2>
            </EditVoucherInputWrap>
        </EditVoucherform>
    </EditVoucherContainer>
    </>
  )
}

export default EditVoucher
