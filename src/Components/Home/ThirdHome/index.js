import React from 'react'
import './style.scss'

const ThirdHome = () => {
  return (
    <div className='home-third-page'>
      <div className='header'>
        <h4>Friends</h4>
      </div>
      <div className='search-box'>
        <input type='text' placeholder='Search..'/>
      </div>
      <div className='block-list'>
        <div className='img-name'>
          <div className='img'>
            <img src='./img/ashik.png'/>
          </div>
          <div className='name'>
            <p>ashik</p>
          </div>
        </div>
        <div className='block-unfrnd'>
          <button>unfriend</button>
          <button>block</button>
        </div>
      </div>
      <div className='block-list'>
        <div className='img-name'>
          <div className='img'>
            <img src='./img/ashik.png'/>
          </div>
          <div className='name'>
            <p>ashik</p>
          </div>
        </div>
        <div className='block-unfrnd'>
          <button>unfriend</button>
          <button>block</button>
        </div>
      </div>
      <div className='block-list'>
        <div className='img-name'>
          <div className='img'>
            <img src='./img/ashik.png'/>
          </div>
          <div className='name'>
            <p>ashik</p>
          </div>
        </div>
        <div className='block-unfrnd'>
          <button>unfriend</button>
          <button>block</button>
        </div>
      </div>
      <div className='block-list'>
        <div className='img-name'>
          <div className='img'>
            <img src='./img/ashik.png'/>
          </div>
          <div className='name'>
            <p>ashik</p>
          </div>
        </div>
        <div className='block-unfrnd'>
          <button>unfriend</button>
          <button>block</button>
        </div>
      </div>
      
    </div>
  )
}

export default ThirdHome;
