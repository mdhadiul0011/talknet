import React from 'react';
import './style.scss';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FirstHome from '../../Components/Home/FirstHome';
import SecondHome from '../../Components/Home/SecondHome';
import ThirdHome from '../../Components/Home/ThirdHome';

const Home = () => {
  return (
    <div className='home-page'>
      <Container fixed>
      <Grid className='home-grid' container spacing={2}>
            <Grid item xs={3}>
              <div className='first-home'>
                <FirstHome/>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='second-home'>
                <SecondHome/>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className='third-home'>
                <ThirdHome/>
              </div>
            </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Home;
