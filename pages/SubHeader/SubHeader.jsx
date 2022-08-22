import React, {lazy} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y, Autoplay, Keyboard, Navigation, Pagination} from "swiper";
import { EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/lazy';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './scss/slider.scss';
import first from './slider-images/1.jpg'
import second from './slider-images/2.jpg'
import third from './slider-images/3.jpg'
import fourth from './slider-images/4.jpg'
import five from './slider-images/5.jpg'

function SubHeader(props) {
    return (
        <div className={'slider-erit'}>
        <Swiper
            loop={true}
            modules={[EffectFade,Navigation, Pagination, A11y,Keyboard ,Autoplay ]}
            effect="fade"
            keyboard={true}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false
            }}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            >
            <SwiperSlide><div className="slider-item-erit"><img src={five} alt="image 1"/></div></SwiperSlide>
            <SwiperSlide><div className="slider-item-erit"><img src={second} alt="image 2"/></div></SwiperSlide>
            <SwiperSlide><div className="slider-item-erit"><img src={third} alt="image 3"/></div></SwiperSlide>
            <SwiperSlide><div className="slider-item-erit"><img src={fourth} alt="image 4"/></div></SwiperSlide>
            <SwiperSlide><div className="slider-item-erit"><img src={first} alt="image 5"/></div></SwiperSlide>
        </Swiper>
        </div>
    );
}

export default SubHeader;