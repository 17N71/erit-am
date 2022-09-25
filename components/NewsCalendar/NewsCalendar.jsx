import React from 'react';
import newc from './scss/newscalendar.module.scss';
import NewNews from "../NewNews/NewNews.jsx";
import EritCalendar from "../EritCalendar/EritCalendar.jsx";
import Library from "../Library/Library.jsx";
import {Typography } from '@mui/material'
import {blue} from '@mui/material/colors'
function NewsCalendar({News,lang}) {
    return (
        <>
            <div className={newc["NewsCalendar"]}>
            <div className={newc["NewsCalendar-title"]}>
                <Typography variant='h4' color={blue[900]}>Լրահոս</Typography>
                <Typography variant='h4' color={blue[900]}>Օրացույց</Typography>
            </div>
            <br/>
            <hr />
                <div className={newc["NewsCalendar-container"]}>
                    <section className={newc["NewsCalendar-container-content"]}>
                        <NewNews News={News} lang={lang} />
                    </section>
                    <aside className={newc["NewsCalendar-container-aside"]}>
                        <EritCalendar />
                        <Library />
                    </aside>
                </div>
            </div>
        </>
    );
}

export default NewsCalendar;