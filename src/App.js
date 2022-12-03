import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Login from './login/Login'

const App = () => {
    return ( <
        div className = 'app' >
        <
        Router >
        <
        Login / >
        <
        /Router> <
        /div>
    )
}

export default App