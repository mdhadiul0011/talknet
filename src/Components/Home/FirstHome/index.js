import React from 'react';
import './style.scss';
import { HiUsers } from 'react-icons/hi';
import { AiFillMessage } from 'react-icons/ai';
import { IoIosNotifications } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FirstHome = () => {
  const users = useSelector((user)=> user.loginSlice.login)
  return (
    <div className='main-page'>
      <div className='first-box'>
        <Link to={'/profile'}>
          <div className='first-box-img'>
          <img src={users.photoURL || './img/avatar2.png'}
                onError={(e)=> {
                  e.target.src = './img/avatar2.png'
                }}
              />
          </div>
          <div className='img-name'>
            <h3>{users.displayName}</h3>
          </div>
        </Link>
      </div>
      <div className='first-next-box'>
        <ul>
          <li>
            <Link to={'/friendpage'}>
              <HiUsers/> <span>friends</span>
            </Link>
          </li>
          <li>
            <Link to={'/frndreqpage'}>
              <HiUsers/> <span>friends request</span>
            </Link>
          </li>
          <li>
            <Link to={'/message'}>
            < AiFillMessage/> <span>message</span>
            </Link>
          </li>
          <li>
            <Link to={'/notification'}>
            <IoIosNotifications/> <span>notification</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FirstHome;
