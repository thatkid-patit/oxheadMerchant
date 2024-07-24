import styled from "styled-components";

export const SignupContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background: #ee73c4;
    display: ${({$signupIsOpen}) => ($signupIsOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;
`;

export const Signupform = styled.form`
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

export const SignupHeader = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const SignupH1 = styled.h1`
    font-size: 2rem;
    color: #8e793e;
    margin: 20px;
`;

export const SignupInputWrap = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 360px) {
        flex-wrap: wrap;
    }
`;

export const SignupInput = styled.input`
    width: 100%;
    margin: 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 10px;
    color: #231f20;
`;

export const SignupSubmit = styled.button`
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

export const SignupFooter = styled.section`
    margin: 20px;
`;

export const SignupP = styled.p`
    color: #231f20;
    font-size: .8rem;
    font-weight: 500;
`;

export const SignupSpan = styled.span`
    color: #ee73c4;
    font-size: .8rem;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        color: #8e793e;
    }
`;
