import React, { useState } from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import './Registration.css'

export default function Admin(){

    const navigate = useNavigate()

    const handleAccount =()=>{
      navigate('/registration')
    }

    const handleLogin =()=>{
        navigate('/login')
    }

    return(
        <div className="Admin-Container">
           <Grid container className="Sub-Container">
                <Grid item xs={12} > 
                <h1>Welcome to PopX</h1>
                <div style={{fontSize:20}}> Lorem ipsum dolor sit amet,</div>
                <div style={{fontSize:20}}>consectetur adipiscing elit,</div>
                </Grid>
                <Grid item xs={12} className="Sub-Container">
               <Button color="primary" onClick={handleAccount} sx={{ m: 1, width: '48ch' }} variant="contained">Create Account</Button>
               </Grid>
              
               
               <Grid item xs={12} style={{paddingBottom:50}}>
               <Button color="secondary" onClick={handleLogin} sx={{ m: 1, width: '48ch' }} variant="contained">Already Registered? Login</Button>
            </Grid>
        </Grid>
        </div>
    )
}