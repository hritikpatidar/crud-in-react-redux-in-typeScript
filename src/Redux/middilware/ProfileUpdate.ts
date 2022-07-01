

import axios from "axios"
import { login } from "../ActionCreator/ActionCreator"
import Swal from 'sweetalert2'

function ProfileUpdate(newImage:any,auth_token:any){
    
    return async(dispatch:any)=>{
        try {
            
            const response:any = await axios.patch("http://192.168.1.11:8000/api/user/update",newImage,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Authorization": auth_token
                }
            })
            localStorage.setItem("userData",JSON.stringify(response.data))
            await dispatch(login(response.data))
            return response
        } catch (error:any) {
            if( error.response?.status == 401){
                Swal.fire(
                    error.code,
                    error.message,
                    'error'
                )
            }
        }
    }
}

export default ProfileUpdate