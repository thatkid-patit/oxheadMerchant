import styled from "styled-components";
import { MdOutlineVerticalAlignTop } from "react-icons/md";

export const ScrollTopSelf = styled.div`
    position: Fixed;
    bottom: 20px;
    right: 20px;
    justify-content: center;
    align-items: flex-start;
    padding: 5px;
    background: #ee73c4;
    border-radius: 5px;
    cursor: pointer;
`;

export const ScrollTopIcon = styled(MdOutlineVerticalAlignTop)`
    color: #231f20;
    font-size: 2rem;
`;