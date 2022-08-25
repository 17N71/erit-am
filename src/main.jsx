import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router} from "react-router-dom";
import 'normalize.css'
import './assets/icos/style.css'
import './assets/scss/style.scss'
import './assets/fonts/SegoeUI/stylesheet.css'
import {Links, titleHeader, marquee} from './Links/Links.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <App Links={Links} marquee={marquee} X titleHeader={titleHeader} />
    </Router>
)
