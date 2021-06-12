import React from 'react'
import {FooterFormRow, FooterFormWrapper, FooterInput, FooterItem, FooterLabel, FooterSubmit} from "./styles";
import Send from '../../../../images/footer/send.svg'
import {useMediaQuery} from "@material-ui/core";

const FooterForm = React.memo(() => {
    const matches = useMediaQuery('(max-width:756px)');

    return (
        <FooterFormWrapper>
            <form>
                <FooterFormRow>
                    <FooterLabel for='footer-input'>
                        Subscribe
                    </FooterLabel>
                    <FooterItem>
                        <FooterInput type='email' id='footer_input' placeholder={matches && 'Subscribe'}/>
                        <FooterSubmit bg={Send} type='submit'/>
                    </FooterItem>
                </FooterFormRow>
            </form>
        </FooterFormWrapper>
    )
})

export default FooterForm
