
import { DataArrayTwoTone } from "@mui/icons-material"
import { editTableData, getData, getDataForm1, login_api, addEmployees, EditEmp, empData, DeleteEmp, ChangeProfilePic, registerUser, getUserRegister, getFakeDataContants} from "../contants/Constants"

export let getDataTable=(value:any)=>{
    return{
        type:getData,
        payload:value
    }
}
export let editData=(tabledata:any)=>{
    return{
        type:editTableData,
        payload:tabledata
    }
}
export const addTodo = (todo:any) => {
    return { 
      type: getDataForm1,
      todo: todo
    };
  };

export const login = (user:any) =>{
    return {
        type: login_api,
        payload:user
    }
}
export const empGetData = (data:any)=>{
    return{
        type:empData,
        payload:data
    }
}
export const AddEmployes = (user:any)=>{
    return {
        type : addEmployees,
        payload:user
    }
}
export const editEmployee = (newData:any)=>{
    return{
        type: EditEmp,
        payload:newData.data
    }
}
export const dltEmp =(newData:any)=>{
    return{
        type:DeleteEmp,
        payload:newData
    }
}
export const userRegister=(user:any)=>{
    return{
        type:getUserRegister,
        payload:user
    }

}
export const getRegisterUser=(userData:any)=>{
    return{
        type:registerUser,
        payload:userData
    }
}
export const changeUserProfile=(image:string)=>{
    return{
        type:ChangeProfilePic,
        payload:image
    }
}

export const getFakeActionCreator=(data:any)=>{
    return{
        type:getFakeDataContants,
        payload:data
    }
}



