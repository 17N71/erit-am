import React from 'react';
import './scss/lastnewscard.scss'
import Atropos from "atropos/react";
import Media from "react-media";
import {Link} from "react-router-dom";

function LastNewsCard({image, lang, Links}) {

    return (
        <>
            {image.map(function (img, index) {
                return (
                    <Media query='(min-width:1024px)'>
                        {matches => matches ? <Atropos className={'atropos-card-item-erit'} shadow={false} key={index}>
                            <Link className="news-link" to={`/${lang}/${Links[lang][0].to}/${Links[lang][index].id}`}  key={index}>
                                <div className="card-item">
                                    <div className="card-image">
                                        <div className="card-date"
                                             data-atropos-offset="1">{new Date().toDateString()}</div>
                                        <img src={img} data-atropos-offset="2" alt={index}/>
                                    </div>
                                    <h5 className="card-title" data-atropos-offset="0">
                                        UWC Դիլիջանի դպրոցում մեկնարկում է նոր նախաձեռնություն՝ Սամսունգի ինովացիոն
                                        կամպուս
                                    </h5>
                                    <p className="card-views" data-atropos-offset="-1"><span
                                        className='icon icon-views'></span>221 դիտում</p>
                                </div>
                            </Link>
                        </Atropos> : null}
                    </Media>
                )
            })}
        </>
    );
}

export default LastNewsCard;