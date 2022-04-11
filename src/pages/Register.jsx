import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import styles from './RegisterStyle.module.css'
import { auth, provider } from '../auth/firebase';

const Register = () => {

  const onClick = () => {

    auth.signInWithPopup(provider).catch((error)=> alert(error.message))
  }
  return (
    <div className={styles.formContainer}>
      <form action="" className={styles.formLogin}>
        <div className={styles.loginEmail}> <label htmlFor="firstname">First Name</label></div>
        <input className={styles.loginInput} type="text" id='firstname' placeholder='Enter the firstname..' />
        <div className={styles.loginEmail}> <label htmlFor="lastname">Last Name</label></div>
        <input className={styles.loginInput} type="text" id='lastname' placeholder='Enter the lastname..' />
        <div className={styles.loginEmail}> <label htmlFor="email">Email</label></div>
        <input className={styles.loginInput} type="email" id='email' placeholder='Enter the email..' />
        <div className={styles.loginPassword}><label htmlFor="password" >Password</label></div>
        <input className={styles.loginInput} type="password" placeholder='Enter the password..' />
        <div className={styles.loginForget}><a href="/">Forget Password?</a></div>

        <Stack spacing={2} direction="row">
          <Button variant="contained" disabled><NavLink to='/login' style={{color:"white"}}>Register</NavLink></Button>
          <Button variant="contained" onClick={onClick}><NavLink to='/' style={{color:"white"}}>Continue with Google</NavLink></Button>
        </Stack>
      </form>
    </div>
  )
}

export default Register