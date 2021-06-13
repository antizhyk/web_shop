import styled from "styled-components";
import Arrow from '../../../images/slider/arrow-point-to-right.svg'
import ArrowDis from '../../../images/slider/arrow-dis.svg'

export const SliderWrapper = styled.div`
    height: 450px;
    position: relative;
    max-width: 100vw;

    .swiper-container {
        height: 100%;
        padding-bottom: 20px;
    }

    .swiper-pagination-bullets {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
    }

    .swiper-pagination-bullet {
        margin: 0 5px;
        border-radius: 50%;
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #919191;
        cursor: pointer;
    }

    .swiper-pagination-bullet-active {
        background-color: #585858;
    }

    .swiper-button-next, .swiper-button-prev {
        position: absolute;
        z-index: 100;
        width: 40px;
        height: 40px;
        border-radius: 8px;
        border: 1px solid #8d8d8d;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        background: #fff url(${Arrow}) center / 80% no-repeat;

        @media(max-width: 992px) {
        display: none;
        }
    }

    .swiper-button-prev{
        transform: rotate(180deg) translateY(50%);
        left: 10px;
    }

    .swiper-button-next{
        right: 10px;
    }

    .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled{
        background: #fff url(${ArrowDis}) center / 80% no-repeat;
    }
`

export const SliderItem = styled.div`
    background: url(${({img}) => img}) center / cover no-repeat;
    height: 100%;
    width: 100%;
`
