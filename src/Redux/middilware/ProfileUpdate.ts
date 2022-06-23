

import axios from "axios"
import { changeUserProfile } from "../ActionCreator/ActionCreator"

function ProfileUpdate(image:any,auth_token:any){
    // console.log("profileupdate",image)
    debugger
    return async(dispatch:any)=>{
        try {
            const response:any = await axios.patch("http://192.168.1.11:8000/api/user/update",image,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Authorization": auth_token
                }
            })
            localStorage.setItem("userData",JSON.stringify(response.data))
            // console.log("responsee",response.data,navigate)
            debugger
            await dispatch(changeUserProfile(response.data))

        } catch (error) {
            
        }
    }
}

export default ProfileUpdate