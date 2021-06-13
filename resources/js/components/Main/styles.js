import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const SidebarGrid = styled(Grid)`
    border: 1px solid #bbb;
    padding: 0 !important;
`

export const ContentWrapper = styled(Grid)`
margin-bottom: 20px;
`
