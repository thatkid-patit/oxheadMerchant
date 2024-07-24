import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background: #231f20;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.1s all ease;
`


export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1280px;
    padding: 10px;
`

export const Brand = styled(RouterLink)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
`

export const BrandLogo = styled.img`
    height: 60px;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavList = styled.li`
    height: 80px;
`

export const NavItem = styled(RouterLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-weight: bold;
    font-size: 1.2rem;
    color: #eaeaea;
    padding: 0 1rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &.active {
        border-bottom: 4px solid #ee73c4;
        transition: 0.2s ease-in-out;
    }
    
    &:hover {
        background: #f5d66f;
        color: #231f20;
    }
`

export const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 80px;
`

export const TogglerContainer = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        padding: 0 1rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #eaeaea;
        transition: 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const Toggler = styled(FaBars)`
    font-weight: bold;
    font-size: 2rem;
`

export const ButtonContainer = styled.div`
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const UserButton = styled.p`
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding: 1rem 2rem;
    color: #231f20;
    font-weight: bold;
    font-size: 1.2rem;
    background: #ee73c4;
    border-radius: 5px;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
        background: #f5d66f;
        color: #231f20;
        transition: all 0.2s ease-in-out;
    }
`