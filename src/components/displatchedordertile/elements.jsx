import styled from "styled-components";

export const DispatchedOrderTileContainer = styled.div`
    margin: 10px;
    width: 100%;
    max-width: 1030px;
    background: #fff;
    border-radius: 5px;
    color: #231f20;
    padding: 30px;
    display: flex;
    flex-direction: column;

    &:hover {
        background: #ffb6e7;
    }
`;

export const DispatchedOrderTileWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const DispatchedOrderTimer = styled.section`
    width: 320px;
    font-size: 5rem;
    padding: 10px;

    @media screen and (max-width: 7687px) {
        font-size: 3rem;
    }
`;

export const DispatchedOrderDetails = styled.section`
    padding: 30px 30px 30px 50px;

    @media screen and (max-width: 7687px) {
        padding: 20px;
    }
`;  


export const DispatchedOrderH5 = styled.h5`
    font-size: 1rem;
`;

export const DispatchedOrderP = styled.p`
    font-size: 1rem;
`;

export const DispatchedOrderButtonsWrap = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    flex-wrap: wrap;
`;

export const DispatchedOrderAccept = styled.button`
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

export const DispatchedOrderDecline = styled.button`
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

export const DispatchedOrderTable = styled.table`
    text-align: start;

`;

export const DispatchedOrderTd = styled.td`
    font-size: 1rem;
    padding: 5px;
`;
