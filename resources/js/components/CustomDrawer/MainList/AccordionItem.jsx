import React from "react";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {AccordionLink, AccordionWrapper} from "./styles";

const AccordionItem = React.memo(({classes, data, title}) => (
    <AccordionWrapper>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography className={classes.heading}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ul>
                {data.map((el, i) => (
                    <li key={i}>
                        <AccordionLink to={el.link}>{el.title}</AccordionLink>
                    </li>
                ))}
            </ul>
        </AccordionDetails>
    </AccordionWrapper>
))

export default AccordionItem
