import React from 'react';
import {useSelector} from "react-redux";
import {AccordionBlock, useStyles} from "./styles";
import AccordionItem from "./AccordionItem";

const SimpleAccordion = React.memo(() => {
    const classes = useStyles();
    const mainList = useSelector(({Footer}) => Footer.mainList)

    return (
        <AccordionBlock className={classes.root}>
            <AccordionItem classes={classes} data={mainList.customerService} title={'CUSTOMER SERVICE'}/>
            <AccordionItem classes={classes} data={mainList.info} title={'INFO'}/>
            <AccordionItem classes={classes} data={mainList.followUs} title={'FOLLOW US'}/>
            <AccordionItem classes={classes} data={mainList.paymentSystems} title={'Payment Systems'}/>
        </AccordionBlock>
    )})

export default SimpleAccordion
