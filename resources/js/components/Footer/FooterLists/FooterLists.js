import React from "react";
import {FooterListsBlock, FooterListsLink, FooterListsWrapper, FooterPayList} from "./styles";
import {useSelector} from "react-redux";

const FooterLists = React.memo(() => {
    const social = useSelector(({Footer}) => Footer.rightList.social),
        pay = useSelector(({Footer}) => Footer.rightList.pay)

    return (
        <FooterListsWrapper>
            <FooterListsBlock>
                {social.map((el) => (
                    <FooterListsLink key={el.id} to={el.link} bg={el.image}/>
                ))}
            </FooterListsBlock>
            //
            <FooterPayList>
                {pay.map((el) => (
                    <FooterListsLink key={el.id} to={el.link} bg={el.image}/>
                ))}
            </FooterPayList>
        </FooterListsWrapper>
    )
})

export default FooterLists
