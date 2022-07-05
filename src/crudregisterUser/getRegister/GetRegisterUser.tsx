import { CircularProgress, Fade } from "@mui/material"
import React, { useState } from "react"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IsGetRegisterUser from '../../Redux/middilware/IsGetRegisterUser'

function GetRegisterUser() {
    //1. state/hook
    const state:any = useSelector((state: any) => state.getRegisterUser.userData)
    const dispatch = useDispatch<any>();
    const [isLoading, setIsLoading]= useState<boolean>(true);


    useEffect(() => {
        registerUser()
    }, [])

    //2. function defination
    let registerUser = async () => {
        const token1 = localStorage.getItem("token")
        await dispatch(IsGetRegisterUser(token1))
        setIsLoading(false);
    }
    const userData: any = localStorage.getItem("userData")
    const data = JSON.parse(userData)
    // console.log("data",data)
    //3. return statement/jsx
    return (
        <>   
            {
            isLoading 
            ?
            <Fade
                in={isLoading}
            >
                <CircularProgress />
            </Fade>
            :
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">userName</th>
                        <th scope="col">email</th>
                        <th scope="col">profilePic</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map((cv: any, index: number) => {
                            return (
                                data.email == cv.email
                                    ?
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{cv.userName}</td>
                                        <td>{cv.email}</td>
                                        <td><img src={cv.profilePic} /></td>
                                    </tr>
                                    : null
                            )
                        })
                    }
                </tbody>
            </table>
            }
        </>
    )
}

export default GetRegisterUser
