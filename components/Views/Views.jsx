import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { newsImageContext } from '../../src/App';
import { Typography } from '@mui/material';

const Views = ({News,lang}) =>{
    const {id} = useParams()
    const newsImage = useContext(newsImageContext)
    return(
        <>
            <img src={newsImage[id]}></img>
            <Typography  variant='h3'>{News[lang].title}</Typography> 
        </>
    )
}
export default Views;