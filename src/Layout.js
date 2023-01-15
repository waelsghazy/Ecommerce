import React from 'react'
import NavBar from './Components/Nav/NavBar'
import {Outlet} from 'react-router-dom'
import Footer from './Components/Footer/Footer'

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout