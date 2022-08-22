import './scss/form.scss'
function MediaHeader(props) {

    function notSubmit(e) {
        const {className} = e.target;
        let classOfForm = className == 'visible-form' ? e.preventDefault() : '';
    }

    return (
        <>
            <form
                className={props.search ? "visible-form" : ''}
                onSubmit={props.search ? '' : (e) => notSubmit(e)}
            >
                <button type={props.search ? 'button' : 'submit'}
                        className='form-btn'
                        onClick={()=>props.setSearch(!props.search)}
                >
                    <span className='icon icon-srch'></span>
                </button>
                <div className={`form-search-container ${props.search ? 'activeForm' : ''}`}>
                    <input type="text" className='form-search' placeholder='search...' required/>
                </div>
            </form>

        </>
    );
}

export default MediaHeader;