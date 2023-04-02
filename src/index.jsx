import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from '@/app/App'

window.addEventListener('load', () => {
    const container = document.getElementById('root')
    const root = ReactDOM.createRoot(container)
    root.render(<App />)
})
