import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import {FooterLink} from "../../Footer/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export const AccordionBlock = styled.div`
    .MuiAccordion-root.Mui-expanded{
        margin: 0;
    }

    .MuiAccordion-root.Mui-expanded:before {
        opacity: 1;
    }

`

export const AccordionWrapper = styled(Accordion)`


    .MuiAccordionSummary-root {
        height: 48px;
        min-height: auto;
    }

    .MuiAccordionDetails-root {
        padding: 0px;

        ul{
            flex: 0 0 100%;
            margin: 0;

            li{
                border-top: 1px solid rgba(0, 0, 0, 0.12);
                &:last-child{
                    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
                }
            }
        }

    }

`

export const AccordionLink = styled(FooterLink)`
    display: block;
    padding: 10px 20px;
`
