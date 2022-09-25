import React, { useContext } from 'react';
import nwc from './scss/newnews.module.scss'
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { newsImageContext } from '../../src/App';
function NewNews({News,lang}) {
    const {newNews,images} = useContext(newsImageContext)
    return (
        <>
            {newNews.map((item,index)=>{
                return (
                    <React.Fragment key={index}>
                    <Link to={`views/${index}`} className={nwc['newNews-card']}>
                        <div className={nwc["newNews-image"]}><img src={newNews[index]} alt={index} /></div>
                        <div className={nwc["newNews-text"]}>
                            <Typography variant='h6'className={nwc["newNews-title"]} >{lang=="hy"?News.hy.title:lang=="ru"?News.ru.title:lang=="en"?News.en.title:""}</Typography>
                            <div className={nwc["newNews-info"]}>
                                <div className={nwc["newNews-date"]}>{new Date().toDateString()},</div>
                                <div className={nwc["newNews-views"]}><span className={'icon icon-views'}></span>{lang=="hy"?News.hy.views:lang=="ru"?News.ru.views:lang=="en"?News.en.views:""}</div>
                            </div>
                            <div className={nwc["newNews-desc"]}>
                                {lang=="hy"?News.hy.title:lang=="ru"?News.ru.title:lang=="en"?News.en.title:""}
                            </div>
                        </div>
                    </Link>
                    <hr />
                    </React.Fragment>
            )
            })}
        </>
    );
}

export default NewNews;  
