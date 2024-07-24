import React, { useContext, useEffect } from 'react'
import { assets } from '../../assets/assets'
import {
  Container,
  Nav,
  Brand,
  BrandLogo,
  NavMenu,
  NavList,
  NavItem,
  Right,
  TogglerContainer,
  Toggler,
  ButtonContainer,
  UserButton
} from './elements'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({toggleSidebar, toggleMyAccount}) => {

  const {showProfile} = useContext(StoreContext);

  useEffect(()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [])

  const handleClickMyAccount = () => {
    showProfile(toggleMyAccount);
  }

  return (
    <Container>
      <Nav>
        <Brand to='/'>
          <BrandLogo src={assets.logo} alt='Oxhead Inasals'/>
        </Brand>
        <NavMenu>
          <NavList><NavItem to='/'>Dashboard</NavItem></NavList>
          <NavList><NavItem to='/products'>Products</NavItem></NavList>
          <NavList><NavItem to='/vouchers'>Vouchers</NavItem></NavList>
        </NavMenu>
        <Right>
          <TogglerContainer onClick={toggleSidebar}>
            <Toggler/>
          </TogglerContainer>
          <ButtonContainer>
            <UserButton onClick={handleClickMyAccount}>
              My Account
            </UserButton>
          </ButtonContainer>  
        </Right>
      </Nav>
    </Container>
  )
}

export default Navbar
