import React from 'react';
import './scss/newscalendar.scss';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import NewNews from "../NewNews/NewNews.jsx";

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
                        <Calendar />

                    </aside>
                </div>
            </div>
        </>
    );
}

export default NewsCalendar;