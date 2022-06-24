

import axios from "axios"
import { changeUserProfile } from "../ActionCreator/ActionCreator"
import Swal from 'sweetalert2'


function ProfileUpdate(image:any,auth_token:any){
    return async(dispatch:any)=>{
        try {
            const response:any = await axios.patch("http://192.168.1.11:8000/api/user/update",image,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Authorization": auth_token
                }
            })
            localStorage.setItem("userData",JSON.stringify(response.data))
            
            await dispatch(changeUserProfile(response.data))

        } catch (error) {
            // if(error.response.status == 400){
            //     Swal.fire(
            //         error.code,
            //         error.message,
            //         'error'
            //     )
            // }
        }
    }
}

export default ProfileUpdate