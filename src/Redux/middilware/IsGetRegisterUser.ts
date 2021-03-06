import axios from "axios"
import { getRegisterUser} from "../ActionCreator/ActionCreator"
import Swal from 'sweetalert2'


 function IsGetRegisterUser(token1:any) {
    return async(dispatch:any) => {
        try {
            const response:any =await axios.get('http://192.168.1.11:8000/api/user/registeredUser',{
                headers: { "Authorization": `${token1}` }
            })
            // console.log(response)
            await dispatch(getRegisterUser(response))
            
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
export default IsGetRegisterUser