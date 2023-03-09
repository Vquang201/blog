import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BlogDetail from '../../Components/BlogDetail/BlogDetail'
import Home from '../../Components/Home'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog/id/:id' element={<BlogDetail />} />
        </Routes>
    )
}
