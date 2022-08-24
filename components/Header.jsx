import Media from "react-media";
import "./sass/header-header.scss";
import "./sass/header-footer.scss";
import {Link} from "react-router-dom";
import Logo from "../src/assets/logo/eritlogo.png";
import MediaHeader from "./MediaHeader/MediaHeader.jsx";
import Lang from "./Lang/Lang.jsx";
import React, {useState} from "react";
import List from "./List/List";
import Repost from "./Repost/Repost.jsx";

function Header({linksp, headerOpen, setHeaderOpen, lang, setLang,LinksTo, headerTitle}) {
    const [search, setSearch] = useState(false);
    const [rotate, setRotate] = useState(false);
    const [menuBurger, setMenuBurger] = useState(false);

    function mediaMenuOpCl() {
        setMenuBurger(!menuBurger);
        setHeaderOpen(!headerOpen);
    }
    function maxWidth1024(){
        return (
            <>
        <MediaHeader
            rotate={rotate}
            formClassName={search ? "visible-form" : ""}
            setSearch={setSearch}
            search={search}
            setRotate={setRotate}
        />
            <Lang
            search={search}
            rotate={rotate}
            setRotate={setRotate}
            lang={lang}
            setLang={setLang}
            setSearch={setSearch}
        />
            </>
        )
    }
    return (
        <header className={`header ${headerOpen ? "headerOpened" : ""}`}>
        <div className="header-header">
            <Link to={lang} className="logo">
                <img src={Logo} alt="erit.am" title="erit.am"/>
            </Link>
            <h1 className="header-title">
                {headerTitle}
            </h1>
            <Media query="(min-width:1024px)">
                {(matches) => matches ? (
                    <div className="langAndSearch">
                    <MediaHeader
                        rotate={rotate}
                        formClassName={search ? "visible-form" : ""}
                        setSearch={setSearch}
                        search={search}
                        setRotate={setRotate}
                    />
                    <Lang
                        search={search}
                        rotate={rotate}
                        setRotate={setRotate}
                        lang={lang}
                        setLang={setLang}
                        setSearch={setSearch}
                    />
                </div>) : ("")}
            </Media>
            <button
                type="button"
                className={`header-menuBurger ${menuBurger ? "activeMenuState" : ""}`}
                onClick={mediaMenuOpCl}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <hr/>
        <div
            className={`header-footer ${menuBurger ? "" : "activeHeaderFooter"}`}
        >
            <nav className="heaeder-menu">
                <div className="langAndSearchQuery">
                    <Media query="(max-width:1024px)">
                        {(matches) => matches ? (maxWidth1024()) : ""}
                    </Media>
                </div>
                <List
                    lang={lang}
                    LinksTo={LinksTo}
                    headerLinks={lang == "en" ? linksp.en : lang == "ru" ? linksp.ru : lang == "hy" ? linksp.hy : ""}
                />
            </nav>
            <Media query="(max-width:1024px)">
                {(matches) => matches ? (
                    <Repost/>
                ) : ("")}
            </Media>
        </div>
    </header>);
}

export default Header;
