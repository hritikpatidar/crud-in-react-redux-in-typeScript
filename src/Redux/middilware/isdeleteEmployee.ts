import axios from "axios"
import { dltEmp} from "../ActionCreator/ActionCreator"
import Swal from 'sweetalert2'


function isdeleteEmployee(id:any,token1:any,state:any,index:number) {
    return async(dispatch:any) => {
        try {
            await axios.delete('http://192.168.1.11:8000/api/employees/' + id,{
                headers: { "Authorization": token1 } 
            })
            
            let newState = state
            newState.splice(index,1);

            await dispatch(dltEmp(newState))
            
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
export default isdeleteEmployee