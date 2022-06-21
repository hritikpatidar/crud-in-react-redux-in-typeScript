import axios from "axios"
import { useNavigate } from "react-router-dom"
import { login } from "../ActionCreator/ActionCreator"


 function isLogin(userData:any) {
    // const navigate= useNavigate()
    return async(dispatch:any) => {
        // console.log("dispatch",dispatch)
        console.log("userData",userData)
        try {
            const response =await axios.post('http://192.168.1.11:8000/api/user/login',userData)
            console.log("response",response);
            localStorage.setItem("token",response?.data?.token);
            
            if(response.status == 200 ){
                // navigate('/register')
            }
           
            dispatch(login(response))

        } catch (error) {

        }

    }
}
export default isLogin