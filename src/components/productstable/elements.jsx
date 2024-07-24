import styled from 'styled-components'

export const ProductsTableContainer = styled.div`
    background: #eaeaea;
    padding: 30px 0;
`;

export const ProductsTableContent = styled.div`
    max-width: 1280px;
    margin: auto;
    padding: 20px;
`;

export const ProductsTableButtonWrap = styled.section`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
`;

export const ProductsTableAdd = styled.button`
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

export const ProductsTableWrap = styled.div`
    max-width: 1280px;
    overflow-x: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ProductsTableMain = styled.table`
    min-width: 800px;
`;

export const ProductsTableHeadRow = styled.tr`
    text-align: center;
    background-color: #8e793e;
`;

export const ProductsTableTh = styled.th`
    font-weight: 500;
    font-size: 1.2rem;
    padding: 20px;
    color: #fff;
`;

export const ProductsTableBodyRow = styled.tr`
    text-align: center;
    background-color: #fff;
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: #f5d66f;
        transition: 0.3s ease-in-out;
        font-weight: 500;
    }
`;

export const ProductsTableTd = styled.td`
    font-size: 1rem;
    padding: 20px;
`;

export const ProductsTableImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 5px;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const ProductsTableEdit = styled.button`
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
