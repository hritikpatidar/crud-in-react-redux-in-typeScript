import { editTableData, getData, getDataForm1, login_api, addEmployees} from "../contants/Constants"

export let getDataTable=(value:any)=>{
    // console.log("propss",value);
    
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
    debugger
    return {
        type: login_api,
        payload:user
    }
}
export const AddEmployes = (user:any)=>{
    return {
        type : addEmployees,
        payload:user
    }
}


