import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeUserProfile } from '../Redux/ActionCreator/ActionCreator'
import IsGetRegisterUser from '../Redux/middilware/IsGetRegisterUser'
import isLogOut from '../Redux/middilware/isLogOut'
import Swal from 'sweetalert2'
import Header from '../component/Header'
import ProfileUpdate from '../Redux/middilware/ProfileUpdate'

function GetRegisterUser() {
    //1. state/hook
    const state = useSelector((state:any) => state?.GetRegisterUser?.userData)
    const navigate =useNavigate();
    const dispatch = useDispatch<any>()

    useEffect(() => {
      registerUser()
    },[])

    //2. function defination
    let registerUser= async()=>{
        const token1 = localStorage.getItem("token")
        await dispatch(IsGetRegisterUser(token1))
    }
  
    let handalChange = async (e: any,index:number) => {
        const selectfiles = e.target.files[0];
        const newData = state[index];
        // console.log("selectedfile",selectfiles);
        newData.profilePic = selectfiles;

        const auth_token = localStorage.getItem("token")
        await dispatch(ProfileUpdate(newData, auth_token))
        navigate("/getregisteruser")

    }
   
    const userData:any =localStorage.getItem("userData")
    const data =JSON.parse(userData)
    console.log("data",data)
    //3. return statement/jsx
    return (
        <>
            <Header/>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">userName</th>
                        <th scope="col">email</th>
                        <th scope="col">profilePic</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       
                        state.map((cv: any, index: number) => {
                        
                            return (
                               
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{cv.userName}</td>
                                        <td>{cv.email}</td>
                                        <td><img src={cv.profilePic} /></td>
                                        <td>
                                        {
                                            data.data.email== cv.email
                                            ?
                                            <>
                                               
                                                <section>
                                                <label>
                                                    <button className="btn btn-success btn-sm " >Change Profile</button>
                                                    <input type="file" name="image" onChange={(e)=>handalChange(e,index)} />
                                                </label>

                                            </section>
                                            </>
                                            : null
                                        }   
                                        </td>
                                        
                                    </tr>
                            )
                        })
                    } 
                </tbody>
            </table>
        </>
        
    )
}

export default GetRegisterUser
