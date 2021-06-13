import React from 'react'
import Slider from "../Slider";
import {ContentWrapper} from "../styles";

const Content = React.memo(() => {

    return (
        <ContentWrapper>
        <Slider/>
        </ContentWrapper>
    )
})

export default Content
