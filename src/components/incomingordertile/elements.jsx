import styled from "styled-components";

export const IncomingOrderTileContainer = styled.div`
    margin: 10px;
    width: 100%;
    max-width: 1030px;
    background: #fff;
    border-radius: 5px;
    color: #231f20;
    padding: 30px;
    display: flex;
    flex-direction: column;
    animation: pulse .5s infinite;

    &:hover {
        background: #ffb6e7;
        animation: none;
    }
`;

export const IncomingOrderTileWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const IncomingOrderTimer = styled.section`
    width: 320px;
    font-size: 5rem;
    padding: 10px;

    @media screen and (max-width: 7687px) {
        font-size: 3rem;
    }
`;

export const IncomingOrderDetails = styled.section`
    padding: 30px 30px 30px 50px;

    @media screen and (max-width: 7687px) {
        padding: 20px;
    }
`;  


export const IncomingOrderH5 = styled.h5`
    font-size: 1rem;
`;

export const IncomingOrderP = styled.p`
    font-size: 1rem;
`;

export const IncomingOrderButtonsWrap = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    flex-wrap: wrap;
`;

export const IncomingOrderAccept = styled.button`
    padding: .5rem 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 700;
    white-space: nowrap;
    color: #231f20;
    background: #ee73c4;
    transition: 0.2s ease-in-out;
    margin: 5px;
    cursor: pointer;

    &:hover {
        transition: 0.2s ease-in-out;
        background: #f5d66f;
    }

`;

export const IncomingOrderDecline = styled.button`
    padding: .5rem 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 700;
    white-space: nowrap;
    color: #fff;
    background: #8e793e;
    transition: 0.2s ease-in-out;
    margin: 5px;
    cursor: pointer;

    &:hover {
        transition: 0.2s ease-in-out;
        background: #f5d66f;
        color: #231f20;
    }
`;

export const IncomingOrderTable = styled.table`
    text-align: start;

`;

export const IncomingOrderTd = styled.td`
    font-size: 1rem;
    padding: 5px;
`;
