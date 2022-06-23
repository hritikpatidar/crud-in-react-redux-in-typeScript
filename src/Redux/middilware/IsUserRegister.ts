import axios from "axios"

function IsUserRegister(user:any){
   

    return async(dispatch:any)=>{
        try {
            const response = await axios.post("http://192.168.1.11:8000/api/user/register",user,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log("response",response)
            // dispatch(userRegister(response))
            
        } catch (error) {
            
        }
    }
}

export default IsUserRegister