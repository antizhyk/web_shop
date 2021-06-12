import React from 'react'
import {FooterLastPaper, FooterLink, FooterPaper, FooterTitle, FooterWrapper, useStyles} from "./styles";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";
import FooterForm from "./FooterForm/FooterForm";
import FooterLists from "./FooterLists/FooterLists";

const Footer = React.memo(() => {
    const classes = useStyles();
    const mainList = useSelector(({Footer}) => Footer.mainList)

    return (
        <div>
            <FooterWrapper container>
                <Grid container item xs={8}>
                    <Grid item xs={4}>
                        <FooterPaper className={classes.paper}>
                            <FooterTitle>CUSTOMER SERVICE</FooterTitle>
                            <ul>
                                {mainList.customerService.map((el, i) => (
                                    <li key={i}>
                                        <FooterLink to={el.link}>{el.title}</FooterLink>
                                    </li>
                                ))}
                            </ul>
                        </FooterPaper>
                    </Grid>
                    <Grid item xs={4}>
                        <FooterPaper className={classes.paper}>
                            <FooterTitle>INFO</FooterTitle>
                            <ul>
                                {mainList.info.map((el, i) => (
                                    <li key={i}>
                                        <FooterLink to={el.link}>{el.title}</FooterLink>
                                    </li>
                                ))}
                            </ul>
                        </FooterPaper>
                    </Grid>
                    <Grid item xs={4}>
                        <FooterPaper className={classes.paper}>
                            <FooterTitle>FOLLOW US</FooterTitle>
                            <ul>
                                {mainList.followUs.map((el, i) => (
                                    <li key={i}>
                                        <FooterLink to={el.link}>{el.title}</FooterLink>
                                    </li>
                                ))}
                            </ul>
                        </FooterPaper>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <FooterLastPaper className={classes.paper}>
                        <FooterForm/>
                        <FooterLists/>
                    </FooterLastPaper>
                </Grid>
            </FooterWrapper>
        </div>
    )
})

export default Footer
