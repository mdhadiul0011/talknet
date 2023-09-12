import * as Yup from 'yup';

export const SignUp = Yup.object({
    FullName : Yup.string().min(3).max(20).required("Please Enter Your Full Name"),
    email: Yup.string().email('Invalid Email Address').required('Please Enter Your Email'),
    password: Yup.string().min(6).required('Please Enter Your Password'),
    confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password Must Match').required('Please Enter Your Confirm Password')
});

export const SignIn = Yup.object({
    email: Yup.string().email('Invalid Email Address').required('Please Enter Your Email'),
    password: Yup.string().min(6).required('Please Enter Your Password'),
})

export const Forgetpassword = Yup.object({
    email: Yup.string().email('Invalid Email Address').required('Please Enter Your Email'),
})