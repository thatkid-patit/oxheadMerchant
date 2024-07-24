import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export const DashboardContainer = styled.div`
    padding-top: 50px;
    min-width: 200px;
`;

export const DashboardContent = styled.div`
    max-width: 1280px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const DashboardTileWrap = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const DashboardTilesS = styled(ScrollLink)`
    border-radius: 5px;
    margin: 10px;
    width: 240px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    background: #fff;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        background: #ee73c4;
        transition: 0.2s ease-in-out;
    }

    &:hover h1{
        color: #fff;
        transition: 0.2s ease-in-out;
    }

    &:hover h5{
        color: #231f20;
        transition: 0.2s ease-in-out;
    }

    @media screen and (max-width: 1048px) {
        width: 320px;
        height: 100px;
        flex-direction: row;
    }

    @media screen and (max-width: 1048px) {
        width: auto;
        max-width: 500px;
        min-width: 340px;
        height: 100px;
        flex-direction: row;
    }


`;

export const DashboardTilesR = styled(RouterLink)`
    border-radius: 5px;
    margin: 10px;
    width: 240px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    background: #fff;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        background: #ee73c4;
        transition: 0.2s ease-in-out;
    }

    &:hover h1{
        color: #fff;
        transition: 0.2s ease-in-out;
    }

    &:hover h5{
        color: #231f20;
        transition: 0.2s ease-in-out;
    }

    @media screen and (max-width: 1048px) {
        width: 320px;
        height: 100px;
        flex-direction: row;
    }

    @media screen and (max-width: 1048px) {
        width: auto;
        max-width: 500px;
        min-width: 340px;
        height: 100px;
        flex-direction: row;
    }


`;

export const DashboardCount = styled.h1`
    font-size: 5rem;
    color: #231f20;
    transition: 0.2s ease-in-out;
`;

export const DashboardLabel = styled.h5`
    font-size: 1rem;
    color: #8e793e;
    transition: 0.2s ease-in-out;
`;
