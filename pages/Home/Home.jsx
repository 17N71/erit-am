import React from 'react';
import './scss/home.scss'
import LastNews from "../../components/LastNews/LastNews.jsx";
import NewsCalendar from "../../components/NewsCalendar/NewsCalendar.jsx";
function Home({lang,Links,News}) {
    return (
        <main className={"main"}>
                <LastNews lang={lang} Links={Links} />
                <NewsCalendar News={News} lang={lang} />
        </main>
    );
}

export default Home;