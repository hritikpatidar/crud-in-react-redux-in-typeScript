import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeUserProfile } from '../Redux/ActionCreator/ActionCreator'
import IsGetRegisterUser from '../Redux/middilware/IsGetRegisterUser'

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
    let changeProfile=async(index:number)=>{
        const newData = state[index];
        // console.log("newData",newData)
        await dispatch(changeUserProfile(newData))
        navigate("/changeprofile");
    }


    // console.log("state",state)
    const userData:any =localStorage.getItem("userData")
    const data =JSON.parse(userData)
    // console.log("userData",data)
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
                    state.map((cv: any, index: number) => {
                       
                        return (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{cv.userName}</td>
                                <td>{cv.email}</td>
                                <td><img src={cv.profilePic} /></td>
                                <td>
                                {
                                    data.email== cv.email
                                    ?
                                    <button className="btn btn-success btn-sm " onClick={()=>changeProfile(index)} >Change Profile</button>
                                    : null
                                }   
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
