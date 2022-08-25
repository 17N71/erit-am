import React from 'react';
import './scss/home.scss'
import News from "../../components/News/News.jsx";
function Home({lang,Links}) {
    return (
        <main className={"main"}>
                <News lang={lang} Links={Links} />
        </main>
    );
}

export default Home;