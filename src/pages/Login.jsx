import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './LoginStyle.module.css'
import { auth, provider } from '../auth/firebase';
import { NavLink } from 'react-router-dom';

const Login = () => {


    const onClick = () => {

      auth.signInWithPopup(provider).catch((error)=> alert(error.message))
    } 
    
  return (
    <div className={styles.formContainer}>
      <form action="" className={styles.formLogin}>
        <div className={styles.loginEmail}> <label htmlFor="email">Email</label></div>
        <input className={styles.loginInput} type="email" id='email' placeholder='Enter the email..' />
        <div className={styles.loginPassword}><label htmlFor="password" >Password</label></div>
        <input type="password" className={styles.loginInput} placeholder='Enter the password..' />
        <div className={styles.loginForget}><a href="/">Forget Password?</a></div>

        <Stack spacing={2} direction="row">
          <Button variant="contained" style={{ color: "white" }} disabled>Login</Button>
          <Button variant="contained" style={{ color: "white" }} onClick={onClick}><NavLink to='/' style={{color:"white"}}>Continue with Google</NavLink></Button>
        </Stack>
      </form>
    </div>
  )
}

export default Login