import React from 'react'
import ReactDOM from 'react-dom/client'

import { TableWrapper } from './lib'

import './index.css'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
        <TableWrapper />
    </React.StrictMode>
)