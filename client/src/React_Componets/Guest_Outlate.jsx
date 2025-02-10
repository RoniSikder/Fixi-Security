import React from 'react'
import { Outlet } from 'react-router'
import Navbar_Home from './Navbar_Home'
import Footer_Home from './Footer_Home'

const Guest_Outlate = () => {
    return (
        <>
            <Navbar_Home />
            <Outlet/>
            <Footer_Home />
        </>
    )
}

export default Guest_Outlate