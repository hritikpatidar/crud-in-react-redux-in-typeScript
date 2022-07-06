import axios from "axios"
import { empGetData } from "../ActionCreator/ActionCreator"


function getEmployeeData(token1) {
    return async(dispatch) => {
        try {
            const response = await axios.get("http://192.168.1.11:8000/api/employees", {
                headers: { "Authorization": `${token1}` }
            })
            await dispatch(empGetData(response))
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
export default getEmployeeData