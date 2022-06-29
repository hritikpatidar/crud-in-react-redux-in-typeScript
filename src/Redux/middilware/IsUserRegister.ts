import axios from "axios"
import Swal from 'sweetalert2'
import { userRegister } from "../ActionCreator/ActionCreator"


function IsUserRegister(user:any){
    
    var formData = new FormData();
    formData.append("userName",user.userName);
    formData.append("email",user.email);
    formData.append("profilePic",user.profilePic);
    formData.append("password",user.password);
    formData.append("confirmPassword",user.confirmPassword);
    return async(dispatch:any)=>{
        try {
            const response = await axios.post("http://192.168.1.11:8000/api/user/register",formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            debugger
            // console.log("response",response);
            await dispatch(userRegister(response))
            return response
            
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