import React, { useState, useRef, useEffect } from 'react'
import './style.scss'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { AiFillHome } from 'react-icons/ai';
import { HiUsers } from 'react-icons/hi';
import { AiFillMessage } from 'react-icons/ai';
import { PiBellSimpleFill } from 'react-icons/pi';
import { BsFillMoonFill  } from 'react-icons/bs';
import { LuSunMoon  } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { LoginUser, userSlice } from '../features/slice/UserSlice';
import { getAuth, signOut } from "firebase/auth";

const Menubar = () => {
    const users = useSelector((user)=> user.loginSlice.login)
    const [open, setOpen] = useState(false);
    const [moodOn, setMoodON] = useState(false);
    const dispatch = useDispatch();
    const auth = getAuth();
    const menuRef = useRef();


    const handleMoodClick = () => {
        if(moodOn == false){
            setMoodON(true)
        }else{
            setMoodON(false)
        }
    }

    const handleLogOut = () => {
        signOut(auth)
        .then(()=> {
            localStorage.removeItem('users')
            dispatch(LoginUser(null))
        })
        .catch((error)=> {
            console.log('vul ache');
        })
    }

    useEffect(()=> {
        const handleOutSide = (e) => {
            if(!menuRef.current.contains(e.target)){
                setOpen(false)
            }
        }
        
        document.body.addEventListener('mousedown', handleOutSide, true)

        return() => {
        document.body.removeEventListener('mousedown', handleOutSide, true)
        }

    }, [])


  return (
    <div className='menubar'>
      <Container fixed>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <div className='logo'>
                    <Link to={'/'}>
                        <h3>TaklNet</h3>    
                    </Link>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className='icon-bar'>
                    <div className='icon-list'>
                        <Link to={'/'}>
                            <div className='icon'>
                                <AiFillHome/>
                            </div>
                            <p>Home</p>
                        </Link>
                    </div>
                    <div className='icon-list'>
                        <Link to={'/friend'}>
                            <div className='icon'>
                                <HiUsers/>
                            </div>
                            <p>Friend</p>
                        </Link>
                    </div>
                    <div className='icon-list'>
                        <Link to={'/message'}>
                            <div className='icon'>
                                <AiFillMessage/>
                            </div>
                            <p>Message</p>
                        </Link>
                    </div>
                    <div className='icon-list'>
                        <Link to={'/notification'}>
                            <div className='icon'>
                                <PiBellSimpleFill/>
                            </div>
                            <p>Notification</p>
                        </Link>
                    </div>
                </div>
            </Grid>
            <Grid item xs={3}>
                <div className='profile' ref={menuRef}>
                    {/* <Link to={'/profile'}> */}
                        <div>
                            <div onClick={()=> {setOpen(!open)}} className='profile-pic'>
                            <img src={users.photoURL || './img/avatar2.png'}
                                onError={(e)=> {
                                e.target.src = './img/avatar2.png'
                                }}
                            />
                            </div>
                            <p>My Profile</p>
                            <div>
                                <div className={`${ open ? 'active' : 'inactive' }`} >
                                    <div className='pro-box'>
                                        <div className='pro-box2'>
                                            <div className='pro-img'>
                                                <img src={users.photoURL || './img/avatar2.png'}
                                                    onError={(e)=> {
                                                    e.target.src = './img/avatar2.png'
                                                    }}
                                                />
                                            </div>
                                            <div className='pro-head'>
                                                <h3>{users.displayName}</h3>
                                                <h4>MERN-Stack Developer</h4>
                                            </div>
                                        </div>
                                        <div className='pro-btn'>
                                            <Link to={'/profile'}>
                                                <button>view profile</button>
                                            </Link>
                                        </div>
                                        <div className='Account'>
                                            <h3>Account</h3>
                                            <h4>Setting & Privacy</h4>
                                            <div className='dark'>
                                                <h4>Dark Mood</h4>
                                                <div className='on' onClick={handleMoodClick}>
                                                {
                                                    moodOn == true ? <LuSunMoon className='darik-icon'/> : <BsFillMoonFill className='darik-icon'/>
                                                }
                                                </div>
                                            </div>
                                        </div>
                                        <div className='logout' onClick={handleLogOut}>
                                            <h3>log out</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </Link> */}
                </div>
            </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Menubar;
