import React from "react";
import {FooterListsBlock, FooterListsLink, FooterListsWrapper} from "./styles";
import {useSelector} from "react-redux";

const FooterLists = React.memo(() => {
    const social = useSelector(({Footer}) => Footer.rightList.social),
        pay = useSelector(({Footer}) => Footer.rightList.pay)

    return (
        <FooterListsWrapper>
            <FooterListsBlock>
                {social.map((el, i) => (
                    <FooterListsLink key={el.id} to={el.link} bg={el.image}/>
                ))}
            </FooterListsBlock>
            //
            <FooterListsBlock>
                {pay.map((el, i) => (
                    <FooterListsLink key={el.id} to={el.link} bg={el.image}/>
                ))}
            </FooterListsBlock>
        </FooterListsWrapper>
    )
})

export default FooterLists
