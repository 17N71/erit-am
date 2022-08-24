import './scss/style.scss';
import {Link} from "react-router-dom";

function Lang({rotate, setRotate, setLang, lang}) {
    function changeLang(lang) {
        setLang(lang)
        setRotate(false)
    }

    function isRotate() {

        setRotate(!rotate)
    }

    return (

        <div className="header-lang">
            <button
                type='button'
                className={`header-lang-btn ${rotate ? 'activeRotate' : ''}`}
                onClick={isRotate}>
                <span className={`icon icon-lang`}></span>
            </button>
            <ul className={`lang-list ${rotate ? 'activeListLang' : ''}`}>
                <li><Link className='langLink' to={lang}>lg</Link></li>
                <li onClick={() => changeLang('hy')}><Link className='langLink' to='/hy'>HY</Link></li>
                <li onClick={() => changeLang('ru')}><Link className='langLink' to='/ru'>RU</Link></li>
                <li onClick={() => changeLang('en')}><Link className='langLink' to='/en'>EN</Link></li>
            </ul>
        </div>
    );
}

export default Lang;