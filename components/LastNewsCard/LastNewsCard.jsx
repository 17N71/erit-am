import React, { useContext } from 'react';
import './scss/lastnewscard.scss'
import Atropos from "atropos/react";
import Media from "react-media";
import {Link} from "react-router-dom";
import { lastNewsContext } from '../../src/main';
import { newsImageContext } from '../../src/App';

function LastNewsCard({lang, Links}) {

    const lastNewsTitle = useContext(lastNewsContext)
    const {newNews,images} = useContext(newsImageContext)
    return (
        <>
            {images.map(function (img, index) {
                return (
                    <Media query='(min-width:1024px)' key={index}>
                        {matches => matches ? <Atropos className={'atropos-card-item-erit'} shadow={false} >
                            <Link className="news-link" to={`/${lang}/${Links[lang][0].to}/${Links[lang][index].id}`}  key={index}>
                                <div className="card-item">
                                    <div className="card-image">
                                        <div className="card-date"
                                             data-atropos-offset="1">{new Date().toDateString()}</div>
                                        <img src={img} data-atropos-offset="2" alt={index}/>
                                    </div>
                                    <h5 className="card-title" data-atropos-offset="0">
                                   {lastNewsTitle[lang].title}
                                    </h5>
                                    <p className="card-views" data-atropos-offset="-1"><span
                                        className='icon icon-views'></span> <span> 221 {lang=="hy"?'դիտում':lang=="ru"?"просмотр":lang=="en"?"view":null}</span></p>
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