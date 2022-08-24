import Header from "../components/Header.jsx";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import {useState} from "react";
import ErrorPage from "../components/ErrorPage/ErrorPage.jsx";
import SubHeader from "../pages/SubHeader/SubHeader.jsx";

function App({Linksp,marquee, titleHeader}) {
    const [lang, setLang] = useState("hy");
    const [headerOpen, setHeaderOpen] = useState(false);
    const headerTitle = (() => lang == 'ru' ? titleHeader.ru : lang == 'hy' ? titleHeader.hy : lang == 'en' ? titleHeader.en : '')()

    return (
        <>
            <Header
                lang={lang}
                headerTitle={headerTitle}
                linksp={Linksp}
                setLang={setLang}
                headerOpen={headerOpen}
                setHeaderOpen={setHeaderOpen}
            />
            <SubHeader marquee={marquee}
                       lang={lang}
            ></SubHeader>
            <Routes>
                <Route path={"/"} element={<Navigate to={lang + "/"}/>}></Route>
                <Route path={lang} element={<Home/>}></Route>
                <Route path={`about/${lang}/`} element={<About/>}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>
        </>
    );
}

export default App;
