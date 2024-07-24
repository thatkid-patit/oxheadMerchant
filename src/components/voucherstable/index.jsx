import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import {
    VouchersTableContainer,
    VouchersTableContent,
    VouchersTableButtonWrap,
    VouchersTableCreate,
    VouchersTableWrap,
    VouchersTableMain,
    VouchersTableHeadRow,
    VouchersTableTh,
    VouchersTableBodyRow,
    VouchersTableTd,
    VouchersTableEdit
} from './elements'

const VouchersTable = ({toggleAddVoucher, toggleEditVoucher}) => {

    const {vouchers, getVoucherToEdit} = useContext(StoreContext);

    const handleClickEdit = object => {
        toggleEditVoucher();
        getVoucherToEdit(object);
    }

  return (
    <>
        <VouchersTableContainer>
            <VouchersTableContent>
                <VouchersTableButtonWrap>
                    <VouchersTableCreate onClick={toggleAddVoucher}>Create New Voucher</VouchersTableCreate>
                </VouchersTableButtonWrap>
                <VouchersTableWrap>
                    <VouchersTableMain>
                        <thead>
                            <VouchersTableHeadRow>
                                <VouchersTableTh>Code</VouchersTableTh>
                                <VouchersTableTh>Description</VouchersTableTh>
                                <VouchersTableTh>Value</VouchersTableTh>
                                <VouchersTableTh>Cap</VouchersTableTh>
                                <VouchersTableTh>Remaining Usage</VouchersTableTh>
                                <VouchersTableTh>Action</VouchersTableTh>
                            </VouchersTableHeadRow>
                        </thead>
                        <tbody>
                            {
                                vouchers.map((voucher, index) => {
                                    return (
                                        <VouchersTableBodyRow key={index}>
                                            <VouchersTableTd>{voucher.code}</VouchersTableTd>
                                            <VouchersTableTd>{voucher.description}</VouchersTableTd>
                                            <VouchersTableTd>{voucher.value}</VouchersTableTd>
                                            <VouchersTableTd>{voucher.cap}</VouchersTableTd>
                                            <VouchersTableTd>{voucher.use_chance}</VouchersTableTd>
                                            <VouchersTableTd>
                                                <VouchersTableEdit onClick={()=> handleClickEdit(voucher)}>Edit</VouchersTableEdit>
                                            </VouchersTableTd>
                                        </VouchersTableBodyRow>                           
                                    )
                                })
                            }

                        </tbody>
                    </VouchersTableMain>
                </VouchersTableWrap>
            </VouchersTableContent>
        </VouchersTableContainer>
    </>     
  )
}

export default VouchersTable
