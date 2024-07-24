import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const EditVoucherContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background: #231f20a3;
    display: ${({$editVoucherIsOpen}) => ($editVoucherIsOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;
`;

export const EditVoucherform = styled.form`
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

export const EditVoucherHeader = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const EditVoucherH1 = styled.h1`
    font-size: 2rem;
    color: #8e793e;
    margin: 20px;
`;

export const EditVoucherClose = styled(IoClose)`
    font-size: 2rem;
    color: #8e793e;
    margin: 20px;
    cursor: pointer;
`;

export const EditVoucherInputWrap = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 360px) {
        flex-wrap: wrap;
    }
`;

export const EditVoucherInput = styled.input`
    width: 100%;
    margin: 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 10px;
    color: #231f20;
`;

export const EditVoucherSubmit = styled.button`
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

export const EditVoucherSubmit2 = styled.button`
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding: .5rem 1rem;
    width: 100%;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    background: #8e793e;
    border-radius: 5px;
    white-space: nowrap;
    margin: 20px;
    border: none;

    &:hover {
        background: #231f20;
        color: #fff;
        transition: all 0.2s ease-in-out;
    }
`;
