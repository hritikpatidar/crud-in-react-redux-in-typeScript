import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import IsUserRegister from '../../Redux/middilware/IsUserRegister';
import Swal from 'sweetalert2'

interface Iuser {
    userName:string,
    email:string,
    profilePic :string | File,
    password:string,
    confirmPassword:string

}
let initialState:Iuser={
    userName:"",
    email:"",
    profilePic: "" ,
    password:"asdf@123",
    confirmPassword:"asdf@123"
}

function UserRegister() {
    //1. state/hook 
    const state = useSelector((state:any) => state?.userRegister?.userData)
    const [user, setUser] = useState<Iuser>(initialState);
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()


    //2. function defination

    let handalSubmit=async(e:any)=>{
        // let data:any = new FormData();
        // data.append("profilePic",)
        // console.log("data",user)
        await dispatch(IsUserRegister(user))
        if(state.status == 201){
            Swal.fire(
                state.statusText,
                state.data.message,
                'success'
            )
            navigate("/login")
        }
       
    }
    let handalChange=(e:any)=>{
        const {name,value}= e.target;
        setUser({
            ...user,
            [name]:value
        })
    }
    let handalImage=(e:any)=>{
        // console.log(e.target.files[0])
        // setFile(e.target.files[0])
        user.profilePic=e.target.files[0]

    }
// console.log("state",state)
    //3.return statement /jsx
    return (
        <>
        <Outlet />
        <div className="container ">
            <div className='row justify-content-md-center mt-4'>
                <div className="col-6">
                    <form className=" position-absolute top-50 start-50 translate-middle border border-1 p-3" >
                        <h1>User Register</h1>
                        <div className="mb-1">
                            <label htmlFor="exampleInputEmail1" className="form-label">userName</label>
                            <input type="text" name="userName"  className="form-control"  onChange={handalChange}  id="exampleInputEmail1"  />
                           
                        </div>
                        <div className="mb-1 ">
                            <label htmlFor="exampleInputPassword2" className="form-label">Email</label>
                            <input type="email" name="email"  className="form-control" onChange={handalChange} id="exampleInputPassword2" />
                        </div>
                        <div className="mb-1 ">
                            <label htmlFor="exampleInputPassword3" className="form-label">Profile Pic</label>
                            <input type="file" name="profilePic"  className="form-control" onChange={handalImage} id="exampleInputPassword3" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="exampleInputPassword4" className="form-label">passwrod</label>
                            <input type="password" name="password"  className="form-control" onChange={handalChange} id="exampleInputPassword4" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="exampleInputPassword5" className="form-label">Confirm Password</label>
                            <input type="password" name="confirmPassword"  className="form-control" onChange={handalChange} id="exampleInputPassword5" />
                        </div>
                      
                        <button type="button" className="btn btn-primary" onClick={handalSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserRegister
