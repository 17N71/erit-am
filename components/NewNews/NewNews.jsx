import React from 'react';
import first from './images/firstnews.png'
import second from './images/secondnews.png'
import third from './images/thirdnews.png'
import fourth from './images/fourthnews.png'
import five from './images/fivenews.png'
function NewNews({News,lang}) {
    const newNews = [first,second,third,fourth,five]
    return (
        <>
            {newNews.map((item,index)=>{
                return (
                    <div className={'newNews-card'}>
                        <div className="newNews-image"><img src={newNews[index]} alt={index} /></div>
                        <div className="newNews-text">
                            <div className="newNews-title"><h4>{lang=="hy"?News.hy.title:lang=="ru"?News.ru.title:lang=="en"?News.en.title:""}</h4></div>
                            <div className="newNews-info">
                                <div className="newNews-date">{new Date().toDateString()}</div>
                                <div className="newNews-views"><span className={'icon icon-views'}></span>{lang=="hy"?News.hy.views:lang=="ru"?News.ru.views:lang=="en"?News.en.views:""}</div>
                            </div>
                            <div className="newNews-desc">
                                {lang=="hy"?News.hy.title:lang=="ru"?News.ru.title:lang=="en"?News.en.title:""}
                            </div>
                        </div>
                    </div>
            )
            })}
        </>
    );
}

export default NewNews;