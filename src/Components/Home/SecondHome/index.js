import React, { useEffect, useRef, useState } from 'react';
import './style.scss';
import './customize.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BsCardImage, BsEmojiLaughing, BsThreeDotsVertical } from 'react-icons/bs';
import CommentBox from '../../CommentBox';
import HomeComment from '../../HomeCommentBox';
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

const SecondHome = () => {
  const users = useSelector((user)=>user.loginSlice.login)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const DeleteRef = useRef();
  const [ondelete, setDelete] = useState(false)

  useEffect(()=> {
    const handleDelete = (e)=> {
      if(!DeleteRef.current.contains(e.target)){
        setDelete(false)
      }
    }

    document.body.addEventListener('mousedown', handleDelete, true)

    return () => {
      document.body.removeEventListener('mousedown', handleDelete, true)
    }

  })

  return (
    <div className='main-second-page'>
      <div className='home-post-input'>
        <div className='first-img'>
        <img src={users.photoURL || './img/avatar2.png'}
                onError={(e)=> {
                  e.target.src = './img/avatar2.png'
                }}
              />
        </div>
        <div className='home-input'>
          <div className='input' onClick={handleOpen}>
            <p>what's on your mind</p>
          </div>
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

      <div className='main-home-post'>
        <div className='home-post'>
          <div className='pic-name-box'>
            <div className='img-name'>
              <div className='img'>
              <img src={users.photoURL || './img/avatar2.png'}
                onError={(e)=> {
                  e.target.src = './img/avatar2.png'
                }}
              />
              </div>
              <div className='name-box'>
                <h4 className='ashik' >{users.displayName}</h4>
                <p className='minute'>59 Minutes ago</p>
              </div>
            </div>
            <div className='dots-icon' onClick={()=> setDelete(!ondelete)}>
              <BsThreeDotsVertical/>
            </div>
            <div className={ `${ ondelete ? 'activeDelete' : 'inactiveDelete'}`} ref={DeleteRef}>
              <p>Delete</p>
            </div>
          </div>
          <div className='post-txt'>
            <p>I am not alone Allah always with me I am not unhappy bcz happiness waiting for me..NEVER GIVE UP I am not alone Allah always with me I am not unhappy bcz happiness waiting for me..NEVER GIVE UP
             I am not alone Allah always with me I am not unhappy bcz happiness waiting for me..NEVER GIVE UP I am not alone Allah always with me I am not unhappy bcz happiness waiting for me..NEVER GIVE UP
            </p>
            <img src='./img/ashik.png'/>
          </div>
          <div className='main-comment'>
            <HomeComment/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondHome
