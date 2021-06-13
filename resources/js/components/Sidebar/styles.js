import styled from "styled-components";
import Arrow from '../../../images/icons/arrow_l.svg';
import {NavLink} from "react-router-dom";

export const SidebarWrapper = styled.div`
    .dropdown-menu{
        inset: -1px auto auto 0 !important;
        z-index: 50;
    }
    .btn-group {
        button {
            width: 100%;
            border: 0;
            border-bottom: 1px solid #bbb;
            color: #8d8d8d;
            font-size: 18px;
            min-height: 40px;
            text-align: left;
            background: #fff url(${Arrow}) 97% 50% / 10% no-repeat;
            padding-right: 35px;
        }
    }
`

export const SidebarList = styled.ul`
    background-color: #fff;
    width: 275px;
    border: 1px solid #bbb;

    li{
        border-bottom: 1px solid #bbb;
        min-height: 40px;
        display: flex;
        align-items: center;
        &:last-child {
            border-bottom: 0;
        }
    }
`

export const SidebarLink = styled(NavLink)`
    color: #8d8d8d;
    font-size: 18px;
    min-height: 100%;
    text-decoration: none;
    padding: 0 6px;
    width: 100%;
`
