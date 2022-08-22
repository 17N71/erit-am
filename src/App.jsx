import Header from "../components/Header.jsx";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import {useState} from "react";
import ErrorPage from "../components/ErrorPage/ErrorPage.jsx";
import SubHeader from "../pages/SubHeader/SubHeader.jsx";

function App(props) {
    const [lang,setLang]=useState('hy')
    const [page,setPage]=useState('/')
    const [headerOpen,setHeaderOpen] = useState(false)
  return (
    <>
        <Header lang={lang} setLang={setLang} headerOpen={headerOpen} setHeaderOpen={setHeaderOpen} />
        <SubHeader></SubHeader>
        <Routes>
            <Route  path={'/'} element={<Navigate to={lang+'/'}/>}></Route>
            <Route  path={lang} element={<Home/>}></Route>
            <Route  path={`about/${lang}/`} element={<About/>}></Route>
            <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
    </>
  )
}

export default App
