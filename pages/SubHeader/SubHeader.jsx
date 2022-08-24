import React, {lazy} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {A11y, Autoplay, Keyboard, Navigation, Pagination} from "swiper";
import {EffectFade} from 'swiper';
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
import Repost from "../../components/Repost/Repost.jsx";
import Marquee from "react-fast-marquee"
import Media from "react-media";

function SubHeader({marquee, lang}) {
    return (
        <>
            <div className={'slider-erit'}>
                <Swiper
                    loop={true}
                    modules={[EffectFade, Navigation, Pagination, A11y, Keyboard, Autoplay]}
                    effect="fade"
                    keyboard={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false
                    }}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true}}
                >
                    <SwiperSlide>
                        <div className="slider-item-erit"><img src={five} alt="image 1"/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item-erit"><img src={second} alt="image 2"/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item-erit"><img src={third} alt="image 3"/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item-erit"><img src={fourth} alt="image 4"/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item-erit"><img src={first} alt="image 5"/></div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <Media query="(min-width:1024px)">
                {(matches) => matches ? (
                    <Repost/>
                ) : ("")}
            </Media>
            <div className="marquee-container">
            <div className="marquee-title">
                <span >
                {lang == "hy" ?
                    marquee.hy.title
                    : lang == "ru"
                        ? marquee.ru.title
                        : lang == "en"
                            ? marquee.en.title
                            : ""}
                </span>
            </div>
                <Marquee
                    gradient={true}
                    gradientColor={[46, 34, 172]}
                    gradientWidth={200}
                    play={true} speed={120} className={'marquee-erit'}>

                    {lang == "hy" ?
                        marquee.hy.desc
                        : lang == "ru" ?
                            marquee.ru.desc
                            : lang == "en"
                                ? marquee.en.desc
                                : ""} </Marquee>


            </div>

        </>
    );
}

export default SubHeader;