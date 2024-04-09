import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import './Registration.css'
import { postData } from "../Services/FetchNodeServices";
import { useDispatch } from "react-redux";

export default function Login(){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [user,setUser] = useState([])

    const handleLogin =async()=>{
        const body={email:email,password:password}
        var response=await postData('admin/userlogin',body)
        dispatch({type:'ADD_USER',payload:{user:response.admin}})
        if(response.status)
        {
            navigate('/account')
        }
    }


    return(
        <div className="Main-Container">
            <Grid container className="Sub-Container">
                <Grid item xs={12} className="Heading"> 
                <h2>Signin to your PopX account</h2>
                <div style={{fontSize:22}}> Lorem ipsum dolor sit amet,</div>
                <div style={{fontSize:22}}>consectetur adipiscing elit,</div>
                </Grid>
               <Grid item xs={12} style={{marginTop:20}}>
               <TextField required onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email address" sx={{ m: 1, width: '45ch' }} id="outlined-basic" label="Email address" variant="outlined" />
               </Grid>
               <Grid item xs={12} >
               <TextField required onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" sx={{ m: 1, width: '45ch' }} id="outlined-password-input" label="Password" variant="outlined" />
               </Grid>
               <Grid item xs={12}>
               <Button color="primary" onClick={handleLogin} sx={{ m: 1, width: '48ch' }} variant="contained">Login</Button>
            </Grid>
        </Grid>
    </div>
)}