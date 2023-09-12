import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './login.scss'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { SignIn } from '../../Components/Validation/Validation';
import { ToastContainer, toast } from 'react-toastify';
import BeatLoader from "react-spinners/BeatLoader";
import { useDispatch } from 'react-redux';
import { LoginUser } from '../../Components/features/slice/UserSlice';


const Login = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [show, setShow] = useState('password');
  const [loader, setLoader] = useState(false)

  const handleClick = ()=> {
    if(show == 'password'){
      setShow('text')
    }else{
      setShow('password')
    }
  }

  const initialValue= {
    email: '',
    password: ''
  }

  const formik = useFormik ({
    initialValues: initialValue,
    validationSchema: SignIn,

    onSubmit : (()=> {
      setLoader(true)
      signInWithEmailAndPassword(auth, formik.values.email, formik.values.password)

      .then(({user})=> {
        if(auth.currentUser.emailVerified == true){
          setLoader(false)
          dispatch(LoginUser(user))
          navigate('/')
          localStorage.setItem('users', JSON.stringify(user))
        }
        else{
          toast('🦄 Please verify Your Email', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        }
      })

      .catch((error)=> {
        if(error.code.includes('auth/wrong-password')){
            toast('🦄 Worng Password', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
          });
          setLoader(false)
        }
        if(error.code.includes('auth/user-not-found')){
            toast('🦄 Email does not match', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
          });
          setLoader(false)
        }
      })
    })
  })

  //google provider
  const handleGoogleAuth = ()=> {
    signInWithPopup(auth, provider)
    .then(({user}) => {
      if(auth.currentUser.emailVerified == true){
        dispatch(LoginUser(user))
        navigate('/')
        localStorage.setItem('users', JSON.stringify(user))
      }
      else{
        toast('🦄 Please verify Your Email', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    })
  }

  

  return (
    <div className='login-page'>
      <Container fixed>
        <ToastContainer/>
        <Grid className='login-box' container spacing={2}>

            <Grid item xs={6}>
                <div className='login-img'>
                    <img src='./img/login.jpg' alt='Login Img'/>
                </div>
            </Grid>

            <Grid item xs={6}>
                <div className='login-text'>
                    <h3>Login to Your Account</h3>
                </div>
                <div className='google-auth' onClick={handleGoogleAuth}>
                  <div className='google'>
                    <img src='./img/google.png' alt='google img'/>
                  </div>
                  <div className='text'>
                    <p>Login with Google</p>
                  </div>
                </div>
                <div className='login-form'>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField className='log-input' name='email' type="email" onChange={formik.handleChange} label="Email" variant="standard" />
                        {
                          formik.touched.email && formik.errors.email ? <p className='error'>{formik.errors.email}</p> : null
                        }
                        <div className='pass-box'>
                          <TextField className='log-input' name='password' type={show} onChange={formik.handleChange} label="Password" variant="standard" />
                          <div className='eye' onClick={handleClick}>
                            {
                              show == 'password' ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
                            }
                          </div>
                        </div>
                        {
                            formik.touched.password && formik.errors.password ? <p className='error'>{formik.errors.password}</p> : null
                          }
                        {
                          loader ? <Button className='log-btn' type='submit' variant="contained"><BeatLoader color='#fff' size={21}/></Button> : <Button className='log-btn' type='submit' variant="contained">Login</Button>
                        }
                    </form>
                    
                      <div className='forgot-pass' >
                        <p><Link to={'/forgetpass'}>Forgot Your Password</Link></p>
                      </div>

                    <div className='log-account'>
                      <p>Have you a Account? <Link to={'/registration'}><span>Sing Up</span></Link></p>
                    </div>
                </div>
            </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Login
