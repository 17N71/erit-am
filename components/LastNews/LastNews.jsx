import React, { useContext } from "react";
import LastNewsCard from "../LastNewsCard/LastNewsCard.jsx";
import "./scss/lastnews.scss";
import Media from "react-media";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Keyboard, Navigation, Pagination} from "swiper";
import {Link} from "react-router-dom";
import { lastNewsContext } from '../../src/main';
import { newsImageContext } from '../../src/App';
function LastNews({lang, Links}) {
    const linkStyle = {
        width:"100%",
        display:"flex",
        justifyContent:"center",
        }
    const lastNewsTitle = useContext(lastNewsContext)
    const {newNews,images} = useContext(newsImageContext)
    // console.log(images);
    return (
        <section className="news">
            <h3 className="news-title">Վերջին նորությունները</h3>
            <br/>
            <hr/>
            <div className="news-container">
                <Media query="(min-width:1024px)">
                    {matches => matches ?
                         <LastNewsCard

                         image={images}
                            Links={Links}
                             lang={lang}/> :
                             <div className="erit-min-slider-container" >
                              <Swiper loop={true} modules={[Navigation, Pagination, A11y, Keyboard, Autoplay]}
                                keyboard={true} autoplay={{delay: 15000, disableOnInteraction: false}}
                                slidesPerView={1}
                               navigation
                                pagination={{clickable: true}}>
                            {images.map((image, index) => {
                                return (
                                    <SwiperSlide key={index}>

                                            <div className="erit-min-card" style={linkStyle} key={index} >
                                                <Link className="erit-min-news-link"
                                                      to={`/${lang}/${Links[lang][0].to}/${Links[lang][index].id}`}>
                                                <div className="erit-min-image">
                                                    <div className="erit-min-date">{new Date().toDateString()}</div>
                                                    <img src={image} alt={index}/>
                                                </div>
                                                <h5 className="erit-min-title">
                                                {lastNewsTitle[lang].title}
                                                </h5>
                                                <p className="erit-min-card-views">
                                                    <span className='icon icon-views'></span> <span> 221 {lang=="hy"?'դիտում':lang=="ru"?"просмотр":lang=="en"?"view":null}</span></p>
                                        </Link>
                                            </div>
                                    </SwiperSlide>
                                )
                            }) 


                        } 

                         </Swiper>
                                </div>
                    }


                </Media> 
            </div>
        </section>
    );
}

export default LastNews;
