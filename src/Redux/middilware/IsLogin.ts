import axios from "axios"
import { login } from "../ActionCreator/ActionCreator"


 function isLogin(userData:any) {
    return async(dispatch:any) => {
        console.log("userData",userData)
        try {
            const response =await axios.post('http://192.168.1.11:8000/api/user/login',userData)
            console.log("response",response);
            localStorage.setItem("token",response?.data?.token);
            localStorage.setItem('userData',JSON.stringify(response?.data))
            if(response.status === 200 ){
            }
           
            await dispatch(login(response))
            
        } catch (error) {

        }

    }
}
export default isLogin