import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";


export const MyAccountContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background: #231f20a3;
    display: ${({$myAccountIsOpen}) => ($myAccountIsOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;
`;

export const MyAccountform = styled.div`
    border-radius: 5px;
    background: #eaeaea;
    max-width: 640px;
    min-width: 320px;
    padding: 20px;
    height: auto;

    @media screen and (max-width: 480px) {
        width: 100%;
        height: 100%;
    }
`;

export const MyAccountHeader = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const MyAccountH1 = styled.h1`
    font-size: 2rem;
    color: #8e793e;
    margin: 20px;
`;

export const MyAccountClose = styled(IoClose)`
    font-size: 2rem;
    color: #8e793e;
    margin: 20px;
    cursor: pointer;
`;

export const MyAccountInputWrap = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 360px) {
        flex-wrap: wrap;
    }
`;

export const MyAccountSubmit = styled.button`
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding: .5rem 1rem;
    width: 100%;
    color: #231f20;
    font-size: 1rem;
    font-weight: 700;
    background: #ee73c4;
    border-radius: 5px;
    white-space: nowrap;
    margin: 20px;
    border: none;

    &:hover {
        background: #f5d66f;
        color: #231f20;
        transition: all 0.2s ease-in-out;
    }
`;

export const MyAccountDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MyAccountDetailsWrap = styled.div`
    text-align: start;
    text-align: left;
`;

export const MyAccountDetailsB = styled.h5`
    font-size: 1rem;
    font-weight: 700;
    color: #231f20;
`;

export const MyAccountDetailsP = styled.p`
    font-size: .9rem;
    color: #231f20;
`;

export const MyAccountArrow = styled(FaChevronRight)`
    font-size: 1.5rem;
    color: #231f20;
`;

export const MyAccountName = styled.section`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px 5px 0 0;
    background: #fff;
    transition: 0.2s ease-in-out;

    &:hover {
        background: #f5d66f;
        transition: 0.2s ease-in-out;
    }
`;

export const MyAccountEmail = styled.section`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    transition: 0.2s ease-in-out;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;

    &:hover {
        background: #f5d66f;
        transition: 0.2s ease-in-out;
    }
`;

export const MyAccountPassword = styled.section`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 5px 5px;
    background: #fff;
    transition: 0.2s ease-in-out;

    &:hover {
        background: #f5d66f;
        transition: 0.2s ease-in-out;
    }
`;

