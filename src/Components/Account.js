import React, {  useState } from "react";
import { useStyles } from "./ProjectCss";
import Avatar from '@mui/material/Avatar';
import { useSelector } from "react-redux";

export default function Account(){

    const classes =useStyles()

    const userDetail = useSelector(state=>state.user)
    const userDetails = Object.values(userDetail)[0]
    
    return(
        <div className={classes.account}>
            <div className={classes.accountContainer}>
                <div className={classes.header}>
                <div className={classes.heading}>
                    Account Settings
                        </div>
                            </div>
                                <div className={classes.box}>
                                        <div className={classes.subBox}>
                                            <div>
                                                <Avatar alt="Cindy Baker" src="/logo.jpg" sx={{ width: 100, height: 100 }}/></div>
                                            <div className={classes.text}>
                                        <div className={classes.name}>{userDetails.name}</div>   
                                    <div className={classes.email}>{userDetails.email}</div>
                                </div>                        
                            </div>
                        <div className={classes.text}>
                     Lorem Ipsum Doller Sit Amet. Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam.
                </div>
            </div>
        </div>
    </div>
)}

// 