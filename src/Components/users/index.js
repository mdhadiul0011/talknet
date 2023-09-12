import React from 'react'
import './style.scss'
import Button from '@mui/material/Button';

const UsersList = () => {
  return (
    <div className='userlist'>
      <div className='header'>
        <h3>Users List</h3>
      </div>
      <div className='users-item'>
      <div className='users-item'>
            <div className='item-list'>
              <div className='img'>

                </div>
                <div className='name'>
                  <h4>ashik</h4>
                </div>
              </div>
            <div className='btn'>
              < Button className='users-btn' variant="contained">Add Friend</Button>
              < Button className='users-btn2' variant="contained">Remove</Button>
            </div>
      </div>
      </div>
    </div>
  )
}

export default UsersList;
