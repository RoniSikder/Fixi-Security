import React from 'react'
import { Route, Routes } from 'react-router'
import Credential from '../Pages/Credential'

const Secret_Content = () => {
    return (
        <>
            <Routes>
                <Route path='/Auth' element={<Credential />} />
            </Routes>
        </>
    )
}

export default Secret_Content