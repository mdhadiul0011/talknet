import React, { useRef, useState } from 'react';
import './style.scss';
import './customize.css';
import Container from '@mui/material/Container';
import { BiSolidPencil } from 'react-icons/bi';
import Grid from '@mui/material/Grid';
import Profilepost from '../../Components/ProPostBox';
import ProIntro from '../../Components/proIntro';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
import PopUp from '../../Components/popup';
import CoverImgUpload from '../../Components/coverImgUpload';


const style = {
  marginTop: '10%',
  marginLeft: '35%',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  display:'block',
};

function Profile() {
  const users = useSelector((user)=>user.loginSlice.login)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [popup, setPopup] = useState(false)
  const [cover, setCover] = useState(false)
  

  return (
    <div className='profile-page'>
      <Container fixed>
        <div className='main-div'>
          <div className='cover-pic'>
            <img src={users.uploadPhotoURL}/>
          </div>
          <div className='pro-img-bg'>
            <div className='pro-detail'>
              <div className='img-box'>
                  <div className='pro-img'>
                  <img src={users.photoURL || './img/avatar2.png'}
                  onError={(e)=> {
                  e.target.src = './img/avatar2.png'
                }}
              />
                  </div>
                </div>
                <div className='pro-name'>
                  <h3>{users.displayName}</h3>
                  <p>MERN-Stack Developer</p>
                </div>
            </div>
            <div className='edit' onClick={handleOpen}>
              <div className='edit-icon'>
                <BiSolidPencil/>
              </div>
              <div className='btn'>
                <h3>Edit Profile</h3>
              </div>
            </div>
          </div>
          <div className='profile-post-bio'>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                  <div className='bio-box'>
                    <ProIntro/>
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <div className='post-box'>
                    <Profilepost/>
                  </div>
                </Grid>
            </Grid>
          </div>
        </div>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cover-pro-edit'
      >
        <Box sx={style} className='pro-pic-edit'>
          <div className='cover-edit'>
            <div className='cover-headline'>
              <h3>Edit profile</h3>
            </div>
            <div className='cover-input'>
              <div className='cvr-pic-edit'>
                <h3>Cover Photo</h3>
                <div className='edit-btn'>
                  <div className={`${cover ? "activeCover" : 'inactiveCover'}`}> <CoverImgUpload/> </div>
                  <button onClick={()=>setCover(!cover)}>Edit</button>
                </div>
              </div>
              <div className='cover-photo'>
                <img src={users.uploadPhotoURL}/>
              </div>
              <div className='cover-headline2'>
                <h3>profile pic</h3>
                <div className='popupclass'>
                  <div className='edit-btn'>
                    <div className={`${popup ? 'activepopup' : 'inactivepopup'}`}><PopUp setPopup={setPopup}/></div>
                    <button onClick={()=>setPopup(!popup)}> Edit</button>
                  </div>
                </div>
              </div>
              <div className='photo-center'>
                <div className='propic-edit'>
                <img src={users.photoURL || './img/avatar2.png'}
                onError={(e)=> {
                  e.target.src = './img/avatar2.png'
                }}
              />
                </div>
              </div>
              <div className='inputs'> 
                <ul>
                  <li><p>Write your name</p> <input className='edit-inputs' type='text' placeholder='Name'/></li>
                  <li><p>Write your position</p> <input className='edit-inputs' type='text' placeholder='position'/></li>
                </ul>
              </div>
            </div>
            <div className='cover-btn'>
              <button>save</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default Profile;
