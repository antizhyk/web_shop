import React from 'react'
import {useSelector} from "react-redux";
import {SliderItem, SliderWrapper} from "./styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {Navigation, Pagination} from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const Slider = React.memo(() => {
    const sliders = useSelector(({Slider}) => Slider.sliders)
    const pagination = {
        "clickable": true,
    }

    return (
        <SliderWrapper>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={true}
                pagination={pagination}
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
