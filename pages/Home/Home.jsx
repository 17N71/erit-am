import React from 'react';
import './scss/home.scss'
import News from "../../components/News/News.jsx";
function Home({lang,Linksp}) {
    return (
        <main className={"main"}>
                <News lang={lang} Linksp={Linksp} />
        </main>
    );
}

export default Home;