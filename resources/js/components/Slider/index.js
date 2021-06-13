import React from 'react'
import {useSelector} from "react-redux";
import {SliderItem, SliderWrapper} from "./styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const Slider = React.memo(() => {
    const sliders = useSelector(({Slider}) => Slider.sliders)


    return (
        <SliderWrapper>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {sliders.map(slider => (
                    <SwiperSlide>
                    <SliderItem img={slider.image}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SliderWrapper>
    )
})

export default Slider
