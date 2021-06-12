import React from 'react'
import {FooterFormRow, FooterInput, FooterLabel, FooterSubmit} from "./styles";
import Send from '../../../../images/footer/send.svg'

const FooterForm = React.memo(() => {

    return (
        <form>
            <FooterFormRow>
                <FooterLabel for='footer-input'>
                    Subscribe
                </FooterLabel>
                <FooterInput type='email' id='footer_input'/>
                <FooterSubmit bg={Send} type='submit'/>
            </FooterFormRow>
        </form>
    )
})

export default FooterForm
