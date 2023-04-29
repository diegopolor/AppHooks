import React from "react";
import ReactDom from 'react-dom/client'
import AppHooks from "./AppHooks";
import './reducer/soundsReducer'
import './AppHooks.css'

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppHooks />
    </React.StrictMode>
)