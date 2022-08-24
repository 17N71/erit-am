import './scss/form.scss'

function MediaHeader({search, setSearch, rotate, setRotate}) {

    function notSubmit(e) {
        const {className} = e.target;
        let classOfForm = className == 'visible-form' ? e.preventDefault() : '';
    }

    function isSearch() {
        search ? setRotate(false) : ''
        setSearch(!search)
    }

    return (
        <>
            <form
                className={search ? "visible-form" : ''}
                onSubmit={search ? '' : (e) => notSubmit(e)}
            >
                <button type={search ? 'button' : 'submit'}
                        className='form-btn'
                        onClick={isSearch}
                >
                    <span className='icon icon-srch'></span>
                </button>
                <div className={`form-search-container ${search ? 'activeForm' : ''}`}>
                    <input type="text" className='form-search' placeholder='search...' required/>
                </div>
            </form>

        </>
    );
}

export default MediaHeader;