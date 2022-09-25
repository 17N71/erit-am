import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router} from "react-router-dom";
import 'normalize.css'
import './assets/icos/style.css'
import './assets/scss/style.scss'
import './assets/fonts/SegoeUI/stylesheet.css'
import {Links, titleHeader, marquee} from './Links/Links.js'
import { News ,LastNews} from './Links/News.js'
import { createContext } from 'react';
export const lastNewsContext = createContext(null)
ReactDOM.createRoot(document.getElementById('root')).render(
        <lastNewsContext.Provider value={LastNews}>
         <Router>
                <App Links={Links} marquee={marquee} X titleHeader={titleHeader} News={News} />
        </Router>
        </lastNewsContext.Provider>
)
