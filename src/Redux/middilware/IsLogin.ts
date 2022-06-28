import axios from "axios"
import { login } from "../ActionCreator/ActionCreator"
import Swal from 'sweetalert2'


function isLogin(userData: any) {
    return async (dispatch: any) => {
        try {
            const response = await axios.post('http://192.168.1.11:8000/api/user/login', userData)
            // console.log("response",response);
            await dispatch(login(response.data.data))
         
            if (response.status === 200) {
                localStorage.setItem("token", response?.data?.data?.token);
                localStorage.setItem('userData', JSON.stringify(response?.data?.data))
               
            }
            return response

        } catch (error:any) {
        
            if (error?.response?.status == 404) {
                Swal.fire(
                    error.response.data.message,
                    error.message,
                    'error'
                )
            }
        }

    }
}
export default isLogin