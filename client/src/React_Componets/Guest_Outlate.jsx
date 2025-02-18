import React from 'react'
import { Outlet } from 'react-router'
import Navbar_Home from './Navbar_Home'
import Footer_Home from './Footer_Home'
import Tag_Footer from './Tag_Footer'

const Guest_Outlate = () => {
    return (
        <>
            <Navbar_Home />
            <Outlet/>
            <Tag_Footer/>
            <Footer_Home />
        </>
    )
}

export default Guest_Outlate