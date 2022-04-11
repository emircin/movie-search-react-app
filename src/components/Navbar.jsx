import React, { useContext } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './NavbarStyle.css'
import { NavLink } from 'react-router-dom';
import { auth } from '../auth/firebase';
import { MovieContext } from '../context/AuthContext';

const Navbar = () => {

    const { user } = useContext(MovieContext)
    return (
        
        <div>
            <div className='navbar-container'>
                <div className='header-text'>React Movie App</div>
                <Stack spacing={2} direction="row">
                    
                    {user ? <p className="group-element">{user.displayName}</p> : <Button variant="contained"><NavLink to='/login' style={{color:"white"}}>Login</NavLink></Button>}
                    {user ? null : <Button variant="contained"><NavLink to='/register' style={{color:"white"}}>Register</NavLink></Button>}
                    {user ? <Button variant="contained" onClick={()=>auth.signOut()}><NavLink to='/'style={{color:"white"}}>Sign Out</NavLink></Button> : null}
                    
                                   
                </Stack>
            </div>
        </div>
    )
}

export default Navbar