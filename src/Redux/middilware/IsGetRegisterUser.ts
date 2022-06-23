import axios from "axios"
import { getRegisterUser, login } from "../ActionCreator/ActionCreator"


 function IsGetRegisterUser(token1:any) {
    return async(dispatch:any) => {
        try {
            const response:any =await axios.get('http://192.168.1.11:8000/api/user/registeredUser',{
                headers: { "Authorization": `${token1}` }
            })
            // console.log(response)
            await dispatch(getRegisterUser(response))
            
        } catch (error) {
            
        }

    }
}
export default IsGetRegisterUser