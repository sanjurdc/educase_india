import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import './Registration.css'
import { postData } from "../Services/FetchNodeServices";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'

export default function Registration(){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [name,setName] = useState('')
    const [mobile,setMobile] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [company,setCompany] = useState('')
    const [agency,setAgency] = useState('')

    const handleSubmit =async()=>{
        var formData=new FormData()
        formData.append('name',name)
        formData.append('mobile',mobile)
        formData.append('email',email)
        formData.append('password',password)
        formData.append('company',company)
        formData.append('agency',agency)
        var response=await postData('admin/userdetailssubmit', formData )
        if(response.status)
        {   Swal.fire({
            icon: 'success',
            title: 'Registration Succesfully',
            showConfirmButton: false,
            timer: 1500
         })
            dispatch({type:'ADD_USER',payload:{user:{name:name,email:email}}})
            navigate("/account")
        }
    }


    return(
        <div className="Container">
            <Grid container >
                <Grid item xs={12} className="Heading"> 
                <h1>Create your PopX account</h1>
                </Grid>
                <Grid item xs={12} >
               <TextField required value={name} onChange={(e)=>setName(e.target.value)} sx={{ m: 1, width: '45ch' }} id="outlined-basic" label="Full Name" variant="outlined" />
               </Grid>
               <Grid item xs={12} >
               <TextField required value={mobile} onChange={(e)=>setMobile(e.target.value)} sx={{ m: 1, width: '45ch' }} id="outlined-basic" label="Phone number" variant="outlined" />
               </Grid>
               <Grid item xs={12} >
               <TextField required value={email} onChange={(e)=>setEmail(e.target.value)} sx={{ m: 1, width: '45ch' }} id="outlined-basic" label="Email address" variant="outlined" />
               </Grid>
               <Grid item xs={12} >
               <TextField required value={password} onChange={(e)=>setPassword(e.target.value)} sx={{ m: 1, width: '45ch' }} id="outlined-password-input" label="Password" variant="outlined" />
               </Grid>
               <Grid item xs={12} >
               <TextField id="outlined-basic" value={company} onChange={(e)=>setCompany(e.target.value)} sx={{ m: 1, width: '45ch' }} label="Company name" variant="outlined" />
               </Grid>
               <Grid item xs={9.85} className="Radio">
               <FormControl>
               <FormLabel id="demo-row-radio-buttons-group-label">Are you an Agency?*</FormLabel>
               <RadioGroup
               row
               aria-labelledby="demo-row-radio-buttons-group-label"
               name="row-radio-buttons-group"
               value={agency}
                onChange={(e)=>setAgency(e.target.value)}
                >
               <FormControlLabel value="yes" control={<Radio />} label="Yes" />
               <FormControlLabel value="no" control={<Radio />} label="No" />
               </RadioGroup>
                </FormControl>
               </Grid>
               <Grid item xs={12}>
               <Button onClick={handleSubmit} sx={{ m: 1, width: '48ch' }} variant="contained">Create Account</Button>
            </Grid>
        </Grid>
    </div>
)}