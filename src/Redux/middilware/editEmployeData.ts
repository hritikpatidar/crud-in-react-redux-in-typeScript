import axios from "axios"
import { editEmployee} from "../ActionCreator/ActionCreator"
import Swal from 'sweetalert2'


 function editEmployeData(id:any,token1:any,data:any,state:any) {
    return async(dispatch:any) => {
        try {
            const response = await axios.patch('http://192.168.1.11:8000/api/employees/' + id, data,
                { headers: { "Authorization": token1 } }
            );

            const objIndex = state.findIndex((user:any)=>user._id === response.data._id)
            state[objIndex]=response.data  

            await dispatch(editEmployee(response))
        
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
export default editEmployeData