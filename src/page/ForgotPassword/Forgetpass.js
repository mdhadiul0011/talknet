import React, { useState } from 'react'
import './style.scss'
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { Forgetpassword } from '../../Components/Validation/Validation';
import Button from '@mui/material/Button';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

const Forgetpass = () => {
  const auth = getAuth();
  // const [open, setOpen] = useState(false)

  const initialValue = {
    email: '',
  }

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: Forgetpassword,

    onSubmit: ((error)=> {
      sendPasswordResetEmail(auth, formik.values.email)
      .then(()=> {
        toast('🦄 Check Your Email', {
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
      .catch((error)=> {
        if (error.code.includes('auth/user-not-found')) {
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
        }
      })

    })
  });

  return (
    <div className='forget-pass'>
      <ToastContainer/>
      <div className='pass-box'>
        <div className='box-header'>
          <h3>Reset Your Password</h3>
        </div>
        <div className='input-box'>
          <form onSubmit={formik.handleSubmit}>
            <TextField className='email-box' name='email' type='email'  label="Email" value={formik.values.email} onChange={formik.handleChange} variant="standard" />
            {
              formik.errors.email && <p className='pass-error'>{formik.errors.email}</p>
            }

            <Button className='pass-btn' type='submit' variant="contained">Submit</Button>
          </form>
        </div>
      </div>
      {/* <div>
        <Button className='back' type='submit' variant="contained">Back</Button>
      </div> */}
    </div>
  )
}

export default Forgetpass;

