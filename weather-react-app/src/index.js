import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {ThemeContextProvider} from './context/ThemeContext'
import App from './App'
import './styles/main.css'
import * as serviceWorker from './serviceWorker'
import LogRocketSetup from './utils/LogRocketSetup'

// setup LogRocket & Sentry
LogRocketSetup()


// important change after recent upgrade of react-scripts to ^3.4.0
const publicURL = process.env.PUBLIC_URL ?? '/'

const app = (
  <Router basename={publicURL}>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </Router>
)

ReactDOM.render(app, document.getElementById('root'))

serviceWorker.register()
