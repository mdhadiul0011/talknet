import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Login from '../../page/Login/Login';

export default function Loggedin() {
    const user = useSelector((users)=> users.loginSlice.login)
    return user ? <Outlet/> : <Login/>; 
}

