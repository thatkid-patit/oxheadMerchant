import styled from 'styled-components'

export const VouchersTableContainer = styled.div`
    background: #eaeaea;
    padding: 30px 0;
`;

export const VouchersTableContent = styled.div`
    max-width: 1280px;
    margin: auto;
    padding: 20px;
`;

export const VouchersTableButtonWrap = styled.section`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
`;

export const VouchersTableCreate = styled.button`
    padding: .5rem 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 700;
    color: #231f20;
    background: #ee73c4;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        background: #f5d66f;
        transition: 0.3s ease-in-out;
    }
`;

export const VouchersTableWrap = styled.div`
    max-width: 1280px;
    display: flex;
    justify-content: center;
    overflow-x: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const VouchersTableMain = styled.table`
    width: 100%;
    min-width: 800px;
`;

export const VouchersTableHeadRow = styled.tr`
    text-align: center;
    background-color: #8e793e;
`;

export const VouchersTableTh = styled.th`
    font-weight: 500;
    font-size: 1.2rem;
    padding: 20px;
    color: #fff;
`;

export const VouchersTableBodyRow = styled.tr`
    text-align: center;
    background-color: #fff;
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: #f5d66f;
        transition: 0.3s ease-in-out;
        font-weight: 500;
    }
`;

export const VouchersTableTd = styled.td`
    font-size: 1rem;
    padding: 20px;
`;

export const VouchersTableEdit = styled.button`
    padding: .5rem 1rem;
    border: none;
    font-size: .8rem;
    font-weight: 500;
    color: #fff;
    background: #8e793e;
    transition: 0.3s ease-in-out;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background: #fff;
        color: #231f20;
        transition: 0.3s ease-in-out;
    }
`;
