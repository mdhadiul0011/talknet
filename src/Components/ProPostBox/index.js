import React, { useEffect, useState, useRef } from 'react'
import './style.scss'
import { BsThreeDots } from 'react-icons/bs';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './customize.css'
import { BsCardImage, BsEmojiLaughing } from 'react-icons/bs';
import CommentBox from '../CommentBox';
import { useSelector } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};



const Profilepost = () => {
  const users = useSelector((user)=>user.loginSlice.login)
  const [out, setOut] = useState(false);
  const iconRef = useRef();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  useEffect(()=> {
    const handleDelete = (e) => {
      if(!iconRef.current.contains(e.target)) {
        setOut(false)
      }
    }

   document.body.addEventListener('mousedown', handleDelete, true);

   return()=> {
    document.body.removeEventListener('mousedown', handleDelete, true)
   }
  }, [])

  return (
    <div className='pst-box'>
      <div className='pst-detail'>
        <div className='pst-img'>
        <img src={users.photoURL || './img/avatar2.png'}
                onError={(e)=> {
                  e.target.src = './img/avatar2.png'
                }}
              />
        </div>
        <button className='pst-input' onClick={handleOpen}>
          <p>Whats on your mind...</p>
        </button>
      </div>
      <div className='main-post-box'>
        <div className='post-up'>
            <div className='post-headup'>
              <div className='post-up-img'>
              <img src={users.photoURL || './img/avatar2.png'}
                onError={(e)=> {
                  e.target.src = './img/avatar2.png'
                }}
              />
              </div>
              <div className='post-up-text'>
                <h3>{users.displayName}</h3>
                <p>23 minutes ago</p>
              </div>
            </div>
          <div className='post-up-icon' onClick={()=> setOut(!out)} >
            <BsThreeDots/>
          </div>
          <div className= {`${out ? 'activeDelete' : 'inactiveDelete'}`} ref={iconRef}>
              <p>Delete</p>
            </div>
        </div>
        <div className='post-txt'>
          <p>I am not alone Allah always with me I am not unhappy bcz happiness waiting for me..NEVER GIVE UP I am not alone Allah always with me I am not unhappy bcz happiness waiting for me..NEVER GIVE UP
          I am not alone Allah always with me I am not unhappy bcz happiness waiting for me..NEVER GIVE UP I am not alone Allah always with me I am not unhappy bcz happiness waiting for me..NEVER GIVE UP
          </p>
          <img src='./img/cover.jpg'/>
        </div>
          <div className='main-comment'>
            <CommentBox/>
          </div>
      </div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <div className='heading'>
            <h3>create a post</h3>
          </div>
          <div className='text-details'>
            <textarea type='text' placeholder='Type here..'/>
          </div>
          <div className='img-details'>
            <div className='img-text'>
              <h4>add your post</h4>
            </div>
            <div className='img-icon'>
              <div className='first-icon'>
                <BsCardImage/>
              </div>
              <div className='second-icon'>
                <BsEmojiLaughing/>
              </div>
            </div>
          </div>
          <div className='btn-post'>
            <button>post</button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default Profilepost;