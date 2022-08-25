import React from 'react';
import './scss/newscard.scss'
import Atropos from "atropos/react";
import Media from "react-media";
import {Link} from "react-router-dom";

function NewsCard({image,lang,Links}) {

    return (
        <>
            {image.map(function (img,index) {
                return (
                    <Media query='(min-width:580px)' >
                        {matches => matches?  <Atropos   className={'atropos-card-item-erit'} shadow={false}>
                            <Link className="news-link" to={`/${lang}/${Links[lang][0].to}/${Links[lang][index].id}`} >
                            <div className="card-item">
                                <div className="card-image">
                                    <div className="card-date"  data-atropos-offset="1">{new Date().toDateString()}</div>
                                    <img src={img}  data-atropos-offset="2"/>
                                </div>
                                <h5 className="card-title"  data-atropos-offset="0">
                                    UWC Դիլիջանի դպրոցում մեկնարկում է նոր նախաձեռնություն՝ Սամսունգի ինովացիոն կամպուս
                                </h5>
                                <p className="card-views"  data-atropos-offset="-1"><span className='icon icon-views'></span>221 դիտում</p>
                            </div>
                            </Link>
                        </Atropos>:  <div className="card-item">
                            <div className="card-image">
                            <div className="card-date"  data-atropos-offset="1">{new Date().toDateString()}</div>
                            <img src={img}  data-atropos-offset="2" alt='img'/>
                            </div>
                            <h5 className="card-title"  data-atropos-offset="0">
                            UWC Դիլիջանի դպրոցում մեկնարկում է նոր նախաձեռնություն՝ Սամսունգի ինովացիոն կամպուս
                            </h5>
                            <p className="card-views"  data-atropos-offset="-1"><span className='icon icon-views'></span>221 դիտում</p>
                            </div>}

                    </Media>
            )
            })}
        </>
    );
}

export default NewsCard;