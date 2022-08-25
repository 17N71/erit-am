import React from 'react';
import NewsCard from "../NewsCard/NewsCard.jsx";
import first from "./images/1.png";
import second from "./images/2.png";
import third from "./images/3.png";
import fourth from "./images/4.png";
import './scss/news.scss';
function News({lang,Links}) {
    return (
        <section className="news">
            <h3 className="news-title">Վերջին նորությունները</h3>
            <br/>
            <hr/>
            <div className="news-container">
                {
                        <NewsCard   lang={lang} Links={Links} image={[first,second,third,fourth]}  />
                        }
            </div>
        </section>

    );
}

export default News;