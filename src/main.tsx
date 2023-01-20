import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import ScrollToTop from './hooks/scrollToTop'
import { MantineProvider } from '@mantine/core'
import { CityTourTheme } from './plugins/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <CityTourTheme>
                <ScrollToTop />
                <MantineProvider>
                    <App />
                </MantineProvider>
            </CityTourTheme>
        </Router>
    </React.StrictMode>
)
