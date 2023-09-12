import React from 'react'
import './style.scss'
import './customize.css'
import { MdOutlineWork } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const ProIntro = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='bio-details-box'>
      <div className='bio-text'>
            <h3>Intro</h3>
            <p>I am not alone Allah always with me I am not unhappy bcz happiness waiting for me..NEVER GIVE UP</p>
            <button className='bio-btn' onClick={handleOpen}>edit bio</button>
          <div className='bio-info'>
            <ul>
                <li> <div className='icons'><MdOutlineWork/></div> MERN-Stack Developer</li>
                <li> <div className='icons'><MdOutlineWork/></div> Work at Software Engeneer</li>
                <li> <div className='icons'><FaGraduationCap/></div> Studied at Rajshahi college</li>
                <li> <div className='icons'><FaGraduationCap/></div> Went to Rajshahi college</li>
                <li> <div className='icons'><AiFillHome/></div> Lives in Rajshahi</li>
                <li> <div className='icons'><AiFillHome/></div> From Rajshahi</li>
                <li> <div className='icons'><BsFillSuitHeartFill/></div> Status Single</li>
            </ul>
          </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='edit-bio'>
            <div className='edit-headline'>
              <h3>edit your bio</h3>
            </div>
            <div className='bio-input'>
            <TextField className='bio-field' label="Position" variant="standard" />
            <TextField className='bio-field' label="Work at" variant="standard" />
            <TextField className='bio-field' label="Studied at" variant="standard" />
            <TextField className='bio-field' label="Went to" variant="standard" />
            <TextField className='bio-field' label="Lives in" variant="standard" />
            <TextField className='bio-field' label="From" variant="standard" />
            <TextField className='bio-field' label="Status" variant="standard" />
            </div>
            <div className='bio-btn'>
              <button>save</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ProIntro;
