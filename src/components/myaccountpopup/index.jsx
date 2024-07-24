import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../../context/StoreContext'
import {
    MyAccountContainer,
    MyAccountform,
    MyAccountHeader,
    MyAccountH1,
    MyAccountClose,
    MyAccountInputWrap,
    MyAccountSubmit,
    MyAccountDetails,
    MyAccountDetailsWrap,
    MyAccountDetailsB,
    MyAccountDetailsP,
    MyAccountArrow,
    MyAccountName,
    MyAccountEmail,
    MyAccountPassword,

} from './elements'

const MyAccount = ({
    $myAccountIsOpen, 
    toggleMyAccount, 
    toggleUpdateName,
    toggleUpdateEmail,
    toggleUpdatePassword,
}) => {

    const {logout, profile} = useContext(StoreContext);

    // toggle name update
    const handleUpdateName = () => {
        toggleUpdateName();
        toggleMyAccount();
    }

    // toggle email update
    const handleUpdateEmail = () => {
        toggleUpdateEmail();
        toggleMyAccount();
    }

    // toggle passward change
    const handleChangePassword = () => {
        toggleUpdatePassword();
        toggleMyAccount();
    }

    // store context logout
    const handleClickLogout = () => {
        logout();
    }

  return (
    <>
    <MyAccountContainer $myAccountIsOpen={$myAccountIsOpen ? 1 : 0}>
        <MyAccountform>
            <MyAccountHeader>
                <MyAccountH1>My Account</MyAccountH1>
                <MyAccountClose onClick={toggleMyAccount}/>
            </MyAccountHeader>
            <MyAccountDetails>
                <MyAccountName onClick={handleUpdateName}>
                    <MyAccountDetailsWrap>
                        <MyAccountDetailsB>Full Name</MyAccountDetailsB>
                        <MyAccountDetailsP>{profile.firstname} {profile.lastname}</MyAccountDetailsP>
                    </MyAccountDetailsWrap>
                        <MyAccountArrow/>
                </MyAccountName>
                <MyAccountEmail onClick={handleUpdateEmail}>
                    <MyAccountDetailsWrap>
                        <MyAccountDetailsB>Email Address</MyAccountDetailsB>
                        <MyAccountDetailsP>{profile.email}</MyAccountDetailsP>
                    </MyAccountDetailsWrap>
                    <MyAccountArrow/>
                </MyAccountEmail>
                <MyAccountPassword onClick={handleChangePassword}>
                    <MyAccountDetailsWrap>
                        <MyAccountDetailsB>Password</MyAccountDetailsB>
                        <MyAccountDetailsP>Change Password</MyAccountDetailsP>
                    </MyAccountDetailsWrap>
                    <MyAccountArrow/>
                </MyAccountPassword>
            </MyAccountDetails>
            <MyAccountInputWrap>
                <MyAccountSubmit onClick={handleClickLogout}>Logout</MyAccountSubmit>
            </MyAccountInputWrap>
        </MyAccountform>
    </MyAccountContainer>
    </>
  )
}

export default MyAccount
