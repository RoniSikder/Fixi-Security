import React from 'react'
import { Route, Routes } from 'react-router'
import Guest_Outlate from '../React_Componets/Guest_Outlate'
import Home_Page from '../Pages/Home_Page'
import About_Page from '../Pages/About_Page'
import Blog_Page from '../Pages/Blog_Page'
import Services_Page from '../Pages/Services_Page'
import Contact_Page from '../Pages/Contact_Page'

const Guest = () => {
    return (
        <>
            <Routes>
                <Route element={<Guest_Outlate />}>
                    <Route path='/' element={<Home_Page />} />
                    <Route path='/About' element={<About_Page />} />
                    <Route path='/Blog' element={<Blog_Page />} />
                    <Route path='/Service' element={<Services_Page />} />
                    <Route path='/Contact' element={<Contact_Page />} />
                </Route>
            </Routes>
        </>
    )
}

export default Guest