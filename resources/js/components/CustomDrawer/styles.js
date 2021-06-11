import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import {HeaderLink} from "../Header/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export const ShopMenuBtn = styled(IconButton)`
    svg {
        fill: #000000;
    }
`

export const ShopMobHeader = styled(AppBar)`
    background-color: #fff;
    color: #8d8d8d;
`

export const ShopMobHeaderText = styled.span`
    color: #8d8d8d;
    font-family: 'Montserrat',sans-serif;
    font-weight: 100;
    font-size: 24px;
    margin-left: 10px;
`

export const ShopMobHeaderImg = styled.img`
    width: 20px;
    `

export const ShopMobHeaderRow = styled(Toolbar)`
justify-content: space-between;
`

export const ShopMobHeaderLink = styled(HeaderLink)`

  @media (max-width: 540px){
  width: 20px;
  span{
  display: none;
  }
  img{
    transform: scale(1.5);
  }
`
