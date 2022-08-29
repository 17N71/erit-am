import Header from "../components/Header.jsx";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About.jsx";
import {useState} from "react";
import ErrorPage from "../components/ErrorPage/ErrorPage.jsx";
import SubHeader from "../pages/SubHeader/SubHeader.jsx";
import 'atropos/scss'
function App({Links,marquee, titleHeader , News}) {
    const [lang, setLang] = useState("hy");
    const [headerOpen, setHeaderOpen] = useState(false);
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
            <SubHeader marquee={marquee} lang={lang}></SubHeader>
            <Routes>
                <Route path={"/"} element={<Navigate to={lang + "/"}/>}></Route>
                <Route path={lang} element={<Home News={News} Links={Links} lang={lang}/>}></Route>
                <Route path={`${lang}/about`} element={<About/>}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>
        </>
    );
}

export default App;
