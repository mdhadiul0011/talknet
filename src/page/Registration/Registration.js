import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import Button from '@mui/material/Button';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";
import { useFormik } from 'formik';
import React, { useState } from 'react'
import './registration.scss';
import { SignUp } from '../../Components/Validation/Validation';
import { ToastContainer, toast } from 'react-toastify';
import BeatLoader from "react-spinners/BeatLoader";
import { Link, useNavigate } from 'react-router-dom';


const Registration = () => {
    const auth = getAuth();
    const db = getDatabase();
    const navigate = useNavigate();
    const [passShow, setPassShow] = useState('password');
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        if(passShow == 'password'){
            setPassShow('text')
        }else{
            setPassShow('password')
        }
    };

    const initialvalues = {
        FullName: '',
        email: '',
        password : '',
        confirmpassword: ''
    };

    const formik = useFormik({
        initialValues: initialvalues,
        validationSchema: SignUp,

        onSubmit : ()=> {
            setLoading(true)
            createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password)
            .then(({user})=> {
                console.log(user);
                updateProfile(auth.currentUser, {
                    displayName: formik.values.FullName,
                  })
                    .then(()=> {
                        setLoading(false)
                        formik.resetForm()
                        navigate('/login')
                        sendEmailVerification(auth.currentUser)
                        .then(()=> {
                            set(ref(db, 'users/' + user.uid), {
                                username: user.displayName,
                                email: user.email,
                            });
        
                            toast('🦄 Please verification your email', {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });
                        })
                    })
                
            })
            .catch((error)=> {
                if(error.code.includes('auth/email-already-in-use')){
                    toast('🦄 Email already in use', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setLoading(false)
                };
            });
        }
    });



  return (
    <div className='registration'>
        <ToastContainer/>
      <Container fixed>
        <Grid className='reg-box' container spacing={2}>
            <Grid item xs={6}>
                <div className='reg-form-text'>
                    <h3>Get started with easily register TalkNet</h3>
                    <p>Free register and you can enjoy it</p>
                </div>
                <div className='reg-form'>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField className='reg-input' type='text' value={formik.values.FullName} name="FullName" label="Full Name" onChange={formik.handleChange} variant="standard" />
                        {
                          formik.touched.FullName &&  formik.errors.FullName ? <p className='reg-error'>{formik.errors.FullName}</p> : null
                        }
                        <TextField className='reg-input' type='email' value={formik.values.email} name = 'email' label="Email" onChange={formik.handleChange} variant="standard" />
                        {
                            formik.touched.email && formik.errors.email ? <p className='reg-error'>{formik.errors.email}</p> : null
                        }

                        <div className='pass-box'>
                        <TextField className='reg-input' type={passShow} value={formik.values.password} name = 'password' label="Password" onChange={formik.handleChange} variant="standard" />
                            <div className='eyes' onClick={handleClick}>
                                {passShow == "password" ?  <AiOutlineEyeInvisible/>: <AiOutlineEye/>}
                            </div>
                        </div>
                        {
                            formik.touched.password && formik.errors.password ? <p className='reg-error'>{formik.errors.password}</p> : null
                        }
                        <TextField className='reg-input' type='password' value={formik.values.confirmpassword} name='confirmpassword' label="Confirm Password" onChange={formik.handleChange} variant="standard" /> 
                        {
                            formik.touched.confirmpassword && formik.errors.confirmpassword ? <p className='reg-error'>{formik.errors.confirmpassword}</p> : null
                        }
                        {
                            loading ? <Button disabled className='reg-btn' type='submit' variant="contained"><BeatLoader color='#fff' size={20}/></Button> : <Button className='reg-btn' type='submit' variant="contained">Sign Up</Button>
                        }
                    </form>
                </div>
                <div className='account'>
                    <p>Already have an account? <Link to={'/login'}><span>Sing In</span></Link></p>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className='reg-img'>
                    <img src='./img/reg.jpg' alt='reg-img'/>
                </div>
            </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Registration
