import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeUserProfile } from '../Redux/ActionCreator/ActionCreator'

function GetRegisterUser() {
    //1. state/hook
    const [userRegister, setUserRegister] = useState<any>([])
    const navigate =useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
      registerUser()
    },[])

    //2. function defination
    let registerUser=async()=>{
        const token1 = localStorage.getItem("token")
        try {
            const response =await axios.get('http://192.168.1.11:8000/api/user/registeredUser',{
                headers: { "Authorization": `${token1}` }
            })
            // console.log(response)
            setUserRegister(response.data);
            
        } catch (error) {
            
        }
    }
    let changeProfile=(index:number)=>{
        const newData = userRegister[index];
        console.log("newData",newData)
        dispatch(changeUserProfile(newData))
        navigate("/changeprofile");
    }
    console.log(userRegister)
    //3. return statement/jsx
    return (
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
                    // moment(new Date()).format("DD/MM/YYYY")
                    userRegister.map((cv: any, index: number) => {
                        return (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{cv.userName}</td>
                                <td>{cv.email}</td>
                                <td><img src={cv.profilePic} /></td>
                                <td>
                                    <button className="btn btn-success btn-sm " onClick={()=>changeProfile(index)} >Change Profile</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default GetRegisterUser
