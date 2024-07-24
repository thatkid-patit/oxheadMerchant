import styled from "styled-components";

export const CompletedOrderTileContainer = styled.div`
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

export const CompletedOrderTileWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const CompletedOrderTimer = styled.section`
    width: 320px;
    font-size: 5rem;
    padding: 10px;

    @media screen and (max-width: 7687px) {
        font-size: 3rem;
    }
`;

export const CompletedOrderDetails = styled.section`
    padding: 30px 30px 30px 50px;

    @media screen and (max-width: 7687px) {
        padding: 20px;
    }
`;  


export const CompletedOrderH5 = styled.h5`
    font-size: 1rem;
`;

export const CompletedOrderP = styled.p`
    font-size: 1rem;
`;

export const CompletedOrderTable = styled.table`
    text-align: start;

`;

export const CompletedOrderTd = styled.td`
    font-size: 1rem;
    padding: 5px;
`;

