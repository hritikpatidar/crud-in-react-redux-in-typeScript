import { editTableData, getData, getDataForm1, login_api, addEmployees, EditEmp, empData, DeleteEmp} from "../contants/Constants"

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


