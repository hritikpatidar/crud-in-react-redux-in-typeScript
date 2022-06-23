import React, { useState } from 'react'
import './ChangeProfile.css'
import { useDispatch, useSelector } from 'react-redux'
import ProfileUpdate from '../../Redux/middilware/ProfileUpdate'

function ChangeProfile() {
    //1. state/hook
    const state = useSelector((state:any) => state?.changeuserProfile.userData)
    const [image, setImage] = useState<any>(state)
    const dispatch = useDispatch<any>()


    //2. function defination
    let handalChange=async(e:any)=>{
        const selectfiles = e.target.files[0];
        // console.log("selectedfile",selectfiles);
        image.profilePic = selectfiles;

        const auth_token = localStorage.getItem("token")
        await dispatch(ProfileUpdate(image,auth_token))
        

    }

    // console.log("state",newData)
    //3. return statement / jsx
    return (
       <>
       
        <section>
            <label>
                <img src={state.profilePic}/>   
                <input type="file" name="image" onChange={handalChange}  />
                
            </label>
        </section>
       </>
    )
}

export default ChangeProfile
