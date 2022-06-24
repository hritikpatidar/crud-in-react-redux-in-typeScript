import axios from "axios"
import Swal from 'sweetalert2'
import { userRegister } from "../ActionCreator/ActionCreator"


function IsUserRegister(user:any){
    return async(dispatch:any)=>{
        try {
            const response = await axios.post("http://192.168.1.11:8000/api/user/register",user,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            // console.log("response",response);
            dispatch(userRegister(response))
            
            
        } catch (error:any) {
            // console.log("error",error)
            if(error.response.status == 400){
                Swal.fire(
                    error.code,
                    error.message,
                    'error'
                )
            }
            
        }
    }
}

export default IsUserRegister