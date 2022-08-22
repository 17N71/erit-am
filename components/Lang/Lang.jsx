import './scss/style.scss';
import {Link} from "react-router-dom";

function Lang(props) {
    return (

        <div className="header-lang">
            <button
                type='button'
                className={`header-lang-btn ${props.rotate?'activeRotate':''}`}
                onClick={(props.search&&props.rotate?props.setSearch(!props.search):''
                    ,()=>props.setRotate(!props.rotate) )} >
                <span className={`icon icon-lang`}></span>
            </button>
                <ul className={`lang-list ${props.rotate?'activeListLang':''}`}>
                <li onClick={()=>props.setLang('hy')}><Link className='langLink' to='/hy'>AM</Link></li>
                <li onClick={()=>props.setLang('ru')}><Link className='langLink' to='/ru'>RU</Link></li>
                <li onClick={()=>props.setLang('en')}><Link className='langLink' to='/en'>EN</Link></li>
            </ul>
        </div>
    );
}

export default Lang;