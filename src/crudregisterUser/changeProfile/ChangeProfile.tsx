import React from "react"
import './ChangeProfile.css'
import {  useDispatch, useSelector } from 'react-redux'
import isProfileUpdate from '../../Redux/middilware/isProfileUpdate'
import TextField from '@mui/material/TextField';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

function ChangeProfile() {
    //1. state/hook
    const state:any = useSelector((state: any) => state.login.userData)
    const [newData, setNewData] = useState<any>(state)
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()

    let userImage:any = localStorage.getItem("userData");
    let userData = JSON.parse(userImage);

    //2. function defination
    let handalChange=(e:any)=>{
        let newImage= e.target.files[0]
        state.profilePic = newImage       
    }
    let handalChangeData=(e:any)=>{
        const {name,value}= e.target;
        setNewData({
            ...newData,
            [name]:value
        })
    }
    let handalSubmit=async()=>{
        if(state.profilePic == userData.profilePic){
            state.userName = newData.userName;
            state.email = newData.email;
            const {userName,email,_id} = state;
            const userData = {userName,email,_id};
            let token = localStorage.getItem("token")
            debugger
            const res = await dispatch(isProfileUpdate(userData,token))
            // console.log("res",res)
            if(res.status == 200 ){
                Swal.fire(
                    res.statusText,
                    "userData save successfylly",                
                    'success'
                )
                navigate("/getregisteruser")
            }
            
        }else{
            state.email = newData.email;
            let token = localStorage.getItem("token")
            const resss = await dispatch(isProfileUpdate(state,token))
            // console.log("resss",resss)
            if(resss.status == 200 ){
                Swal.fire(
                    resss.statusText,
                    "userData and profile save successfully",                
                    'success'
                )
                navigate("/getregisteruser")
            }
        }
        
    }
    //3. return statement / jsx
    return (
        <>
            
            <div>
                <Container>
                    <Card>
                        <CardContent>
                            <Typography variant='h5'>View User Data</Typography>
                            <form>
                                <Grid container spacing={1}>
                                    
                                    <Grid xs={12}  item>
                                        <TextField type='email' label='Emal' name='email' value={newData.email || ''} onChange={handalChangeData} placeholder='enter your email' variant='outlined' fullWidth required/>
                                    </Grid>
                                    <Grid xs={12} sm={12} item>
                                        <section>
                                            <label>
                                                <img src={userData.profilePic} />
                                                <input type="file" name="image" onChange={handalChange} />
                                            </label>

                                        </section>
                                    </Grid>
                                    <Grid xs={12} item>
                                        <Button type="button" variant="contained" onClick={handalSubmit} color="primary" fullWidth >Submit</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Container>

            </div>
        </>
    )
}

export default ChangeProfile
