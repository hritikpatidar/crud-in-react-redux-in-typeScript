import axios from "axios"
import Swal from 'sweetalert2'


function isLogOut(token:any){
    return async (dispatch:any)=>{
        try {
            const response = await axios.get("http://192.168.1.11:8000/api/user/logout",{
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":token
                   },
            })
            localStorage.clear();
            return response
        } catch (error) {
        
        }
    }
}
export default isLogOut