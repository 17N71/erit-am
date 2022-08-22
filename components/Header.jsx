import Media from "react-media";
import "./sass/header-header.scss";
import "./sass/header-footer.scss";
import { Link } from "react-router-dom";
import Logo from "../src/assets/logo/eritlogo.png";
import MediaHeader from "./MediaHeader/MediaHeader.jsx";
import Lang from "./Lang/Lang.jsx";
import { useState } from "react";

const links = [
  {
    id: 1,
    desc: "Նորություններ",
  },
  {
    id: 2,
    desc: "Գրադարան",
  },
  {
    id: 3,
    desc: "Պատկերասրահ",
  },
  {
    id: 4,
    desc: "Տեղական ծրագրեր",
  },
  {
    id: 5,
    desc: "Միջազգային ծրագրեր",
  },
  {
    id: 6,
    desc: "Գրանցում",
  },
];

function Header(props) {
  const [search, setSearch] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [menuBurger, setMenuBurger] = useState(false);
  function mediaMenuOpCl() {
    setMenuBurger(!menuBurger);
    props.setHeaderOpen(!props.headerOpen);
  }
  return (
    <header className={`header ${props.headerOpen ? "headerOpened" : ""}`}>
      <div className="header-header">
        <Link to={props.lang} className="logo">
          <img src={Logo} alt="erit.am" title="erit.am" />
        </Link>
        <h1 className="header-title">
          Հրազդանը՝ ՀՀ երիտասարդական մայրաքաղաք - 2022
        </h1>
        <Media query="(min-width:1024px)">
          {(matches) =>
            matches ? (
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
                  lang={props.lang}
                  setLang={props.setLang}
                  setSearch={setSearch}
                />{" "}
              </div>
            ) : (
              ""
            )
          }
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
      <hr />
      <div
        className={`header-footer ${menuBurger ? "activeHeaderFooter" : ""}`}
      >
        <nav className="heaeder-menu">
          <div className="langAndSearchQuery">
            <Media query="(max-width:1024px)">
              {(matches) =>
                matches
                  ? ((
                      <MediaHeader
                        rotate={rotate}
                        formClassName={search ? "visible-form" : ""}
                        setSearch={setSearch}
                        search={search}
                        setRotate={setRotate}
                      />
                    ),
                    (
                      <Lang
                        search={search}
                        rotate={rotate}
                        setRotate={setRotate}
                        lang={props.lang}
                        setLang={props.setLang}
                        setSearch={setSearch}
                      />
                    ))
                  : ""
              }
            </Media>
          </div>
          <ul className="header-list">
            {links.map((link) => (
              <li key={link.id}>
                <Link className={"header-link"} to={props.lang}>
                  {link.desc}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
