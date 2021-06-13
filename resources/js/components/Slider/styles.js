import styled from "styled-components";

export const SliderWrapper = styled.div`
    height: 450px;
    .swiper-container{
        height: 100%;
    }
    `

export const SliderItem = styled.div`
    background: url(${({img}) => img}) center / cover no-repeat;
    height: 100%;
    width: 100%;
    `
