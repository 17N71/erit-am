import React from 'react';
import './scss/newscalendar.scss';
import NewNews from "../NewNews/NewNews.jsx";
import EritCalendar from "../EritCalendar/EritCalendar.jsx";
import Library from "../Library/Library.jsx";

function NewsCalendar({News,lang}) {
    return (
        <>
            <div className="NewsCalendar">
            <div className="NewsCalendar-title">
                <h5>Լրահոս</h5><h5>Օրացույց</h5>
            </div>
            <br/>
            <hr />
                <div className="NewsCalendar-container">
                    <section className="NewsCalendar-container-content">
                        <NewNews News={News} lang={lang} />
                    </section>
                    <aside className="NewsCalendar-container-aside">
                        <EritCalendar />
                        <Library />
                    </aside>
                </div>
            </div>
        </>
    );
}

export default NewsCalendar;