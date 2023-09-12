import React from 'react'
import './style.scss'
import { Container } from '@mui/material';

const FrndReqPage = () => {
  return (
    <div className='main-frnd-page'>
      <Container fixed>
        <div className='frnds-box'>
          <div className='header'>
            <h4>all friend</h4>
          </div>
          <div className='frnds-items'>
            <div className='item'>
              <div className='frnd-img'>
                <img src='./img/ashik.png'/>
              </div>
              <div className='frnd-name'>
                <h3>ashik</h3>
              </div>
              <div className='frnd-btns'>
                <button>accept</button>
                <button>delete</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FrndReqPage;
