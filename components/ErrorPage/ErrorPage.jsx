import React from 'react';
import s from './scss/error.module.scss'
function ErrorPage() {
    return (
        <div className={s['error-container']}>
            <h2 className={s['error-title']}>Error 404</h2>
        </div>
    );
}

export default ErrorPage;