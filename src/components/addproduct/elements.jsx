import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const AddProductContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background: #231f20a3;
    display: ${({$addProductIsOpen}) => ($addProductIsOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;
`;

export const AddProductform = styled.form`
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

export const AddProductHeader = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const AddProductH1 = styled.h1`
    font-size: 2rem;
    color: #8e793e;
    margin: 20px;
`;

export const AddProductClose = styled(IoClose)`
    font-size: 2rem;
    color: #8e793e;
    margin: 20px;
    cursor: pointer;
`;

export const AddProductInputWrap = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 360px) {
        flex-wrap: wrap;
    }
`;

export const AddProductInputWrap2 = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;


export const AddProductInput = styled.input`
    width: 100%;
    margin: 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 10px;
    color: #231f20;
`;

export const AddProductInputLabel = styled.label`
    color: #231f20;
    font-size: .8rem;
    padding: 10px 0 0 10px;
    margin: 10px 0 0 10px;
`;

export const AddProductSelect = styled.select`
    width: 100%;
    margin: 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 10px;
    color: #231f20;
`;

export const AddProductOption = styled.option`
    width: 100%;
    margin: 10px;
    outline: none;
    border: none;
    padding: 10px;
    color: #231f20;
`;

export const AddProductSubmit = styled.button`
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
