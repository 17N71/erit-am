import Header from "../components/Header.jsx";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About.jsx";
import {useState} from "react";
import ErrorPage from "../components/ErrorPage/ErrorPage.jsx";
import SubHeader from "../pages/SubHeader/SubHeader.jsx";
import first from './images/firstnews.png'
import second from './images/secondnews.png'
import third from './images/thirdnews.png'
import fourth from './images/fourthnews.png'
import five from './images/fivenews.png'

import lfirst from './assets/limages/1.png';
import lsecond from './assets/limages/2.png';
import lthird from './assets/limages/3.png';
import lfourth from './assets/limages/4.png';

import 'atropos/scss'
import Views from '../components/Views/Views';
import React,{ createContext } from "react";
import CurrentNews from '../components/CurrentNews/CurrentNews';
export const newsImageContext = createContext(null)
function App({Links,marquee, titleHeader , News}) {
    const [lang, setLang] = useState("hy");
    const [headerOpen, setHeaderOpen] = useState(false);
    const newNews = [first,second,third,fourth,five]
    const images = [lfirst,lsecond,lthird,lfourth]
    const headerTitle = (() => lang == 'ru' ? titleHeader.ru : lang == 'hy' ? titleHeader.hy : lang == 'en' ? titleHeader.en : '')()
    return (
        <>
            <Header
                lang={lang}
                headerTitle={headerTitle}
                Links={Links}
                setLang={setLang}
                headerOpen={headerOpen}
                setHeaderOpen={setHeaderOpen}
            />
            {}
            <SubHeader marquee={marquee} lang={lang}></SubHeader>
            <newsImageContext.Provider value={{newNews,images}}>
            <Routes>
                <Route path={"/"} element={<Navigate to={lang + "/"}/>}></Route>
                <Route path={lang} element={<Home News={News} Links={Links} lang={lang}/>}></Route>
                <Route path={`${lang}/news`} element={<About/>}></Route>
                <Route path={`${lang}/news/:id`} element={<CurrentNews lang={lang}/>}></Route>
                <Route path={`${lang}/views/:id`} element={<Views lang={lang}  News={News} />}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>
            </newsImageContext.Provider>

        </>
    );
}

export default App;
