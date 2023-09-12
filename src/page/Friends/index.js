import React from 'react';
import './style.scss';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FriendList from '../../Components/Frndlist';
import FriendReq from '../../Components/FrndReq';
import UsersList from '../../Components/users';

const Friends = () => {
  return (
    <div className='friend-page'>
      <Container fixed>
      <Grid className='friends' container spacing={2}>
          <Grid item xs={4}>
            <div>
              <FriendList/>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <FriendReq/>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <UsersList/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Friends
