import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { AddEmployes } from '../ActionCreator/ActionCreator'

function IsRegister(user:any,token1:any) {
    return async(dispatch:any) => {
        // console.log("dispatch",dispatch)
        
        try {
            const response =await axios.post('http://192.168.1.11:8000/api/employees',user,{
                headers: {"Authorization" : token1} 
            })
            // console.log("response",response);
            dispatch(AddEmployes(response))
        } catch (error) {

        }

    }
}

export default IsRegister
