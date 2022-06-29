import axios from "axios"
import { getFakeActionCreator} from "../ActionCreator/ActionCreator"
import Swal from 'sweetalert2'


 function isGetFakeData() {
    return async(dispatch:any) => {
        try {
            const response:any =await axios.get('https://jsonplaceholder.typicode.com/todos',{
                headers: { 
                    "accept": "text/plain",
                    "Content-Type": "application/json" }
            })
            // console.log(response)
            await dispatch(getFakeActionCreator(response.data))
            
            
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
export default isGetFakeData