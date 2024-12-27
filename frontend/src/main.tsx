import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import App from './App'
import Menu from './component/menu'

const container = document.getElementById('root')

const root = createRoot(container!)

function handleExit() {
    console.log('Exiting...')
}

root.render(
    <React.StrictMode>
        <Menu onExit={handleExit} />
        <App/>
    </React.StrictMode>
)
