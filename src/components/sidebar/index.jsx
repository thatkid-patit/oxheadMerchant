import React, { useContext } from 'react'
import {
    SidebarContainer,
    CloseButtonContainer,
    CloseButton,
    Close,
    SideMenu,
    SideList,
    SideItem,
    ButtonContainer,
    UserButton
} from './elements'
import { StoreContext } from '../../context/StoreContext'

const Sidebar = ({$sidebarIsOpen, toggleSidebar, toggleMyAccount}) => {

  const {showProfile} = useContext(StoreContext)

  const handleClickMyAccount = () => {
    toggleSidebar();
    showProfile(toggleMyAccount);
  }

  return (
    <>
    <SidebarContainer $sidebarIsOpen={$sidebarIsOpen ? 1 : 0} onClick={toggleSidebar}>
        <CloseButtonContainer>
            <CloseButton onClick={toggleSidebar}>
                <Close/>
            </CloseButton>
        </CloseButtonContainer>
        <SideMenu>
            <SideList><SideItem to='/' onClick={toggleSidebar}>Dashboard</SideItem></SideList>
            <SideList><SideItem to='/products' onClick={toggleSidebar}>Products</SideItem></SideList>
            <SideList><SideItem to='/vouchers' onClick={toggleSidebar}>Vouchers</SideItem></SideList>
        </SideMenu>
        <ButtonContainer>
            <UserButton onClick={handleClickMyAccount}>
              My Account
            </UserButton>
        </ButtonContainer>
    </SidebarContainer>
    </>
  )
}

export default Sidebar
