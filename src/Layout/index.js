import React from 'react'
import './style.scss'
import { Outlet } from 'react-router-dom';
import Menubar from '../Components/Menubar';

const RootLayout = () => {
  return (
    <div className='main-root'>
      <div>
        <Menubar/>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default RootLayout;
