import './ChangeProfile.css'
import {  useDispatch, useSelector } from 'react-redux'
import Header from '../../component/Header'
import ProfileUpdate from '../../Redux/middilware/ProfileUpdate'
import { useState } from 'react'

function ChangeProfile() {
    //1. state/hook
    const state = useSelector((state: any) => state?.login?.userData)
    const dispatch = useDispatch<any>()
    // const navigate = useNavigate()

    let userImage:any = localStorage.getItem("userData");
    let userData = JSON.parse(userImage);

    //2. function defination
    let handalChange=(e:any)=>{
        let newImage= e.target.files[0]
        state.profilePic = newImage
        
        let token = localStorage.getItem("token")

        dispatch(ProfileUpdate(state,token))
        
       
    }
    
    
  
    // console.log("state",image)

    //3. return statement / jsx
    return (
        <>
            <Header />
            <section>
                <label>
                    <img src={userData.profilePic} />
                    <input type="file" name="image" onChange={handalChange} />
                </label>

            </section>

        </>
    )
}

export default ChangeProfile
