import React from 'react'
import Registration from './page/Registration/Registration'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './page/Login/Login'
import Home from './page/Home/Index';
import Loggedin from './Components/privateRouter/Loggedin';
import NotLoggedin from './Components/privateRouter/NotLoggedin';
import Forgetpass from './page/ForgotPassword/Forgetpass';
import RootLayout from './Layout';
import Profile from './page/ProfilePage';
import Friends from './page/Friends';
import Message from './page/Message';
import Notification from './page/Notification';
import FriendPage from './page/FriendPage';
import FrndReqPage from './page/FriendRquestpage';

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route element={<Loggedin/>}>
        <Route element={<RootLayout/>}>
          <Route path='/' element= {<Home/>}></Route>
          <Route path='/friend' element= {<Friends/>}></Route>
          <Route path='/message' element= {<Message/>}></Route>
          <Route path='/notification' element= {<Notification/>}></Route>
          <Route path='/profile' element= {<Profile/>}></Route>
          <Route path='/friendpage' element= {<FriendPage/>}></Route>
          <Route path='/frndreqpage' element= {<FrndReqPage/>}></Route>
        </Route>
      </Route>
      
      <Route element={<NotLoggedin/>}>
      <Route path='/registration' element= {<Registration/>}></Route>
      <Route path='/login' element= {<Login/>}></Route>
      <Route path='/forgetpass' element={<Forgetpass/>}></Route>
      </Route>
    </Route>
  ))
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;

