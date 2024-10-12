import React from 'react'
import Home from './components/HomePage/Home'
import { Routes,Route } from 'react-router-dom'
import AdminLogin from "./Admin/Login/Login"
import Dashboard from './Admin/Dashboard/Dashboard'
const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/admin/login' element={<AdminLogin/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    </>
  )
}

export default AllRoutes
