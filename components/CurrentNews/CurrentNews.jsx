import React from 'react'
import { useParams } from 'react-router-dom';
import { lastNewsContext } from '../../src/main';
import { newsImageContext } from '../../src/App';
import { useContext } from 'react';

const CurrentNews = ({lang})=>{
    const {id} = useParams()
    const lastNewsTitle = useContext(lastNewsContext)
    const {newNews,images} = useContext(newsImageContext)
    return(
        <>
        <img src={images[id]} alt="" />        
        {lastNewsTitle[lang].title}
        
        </>
    )
}
export default CurrentNews;