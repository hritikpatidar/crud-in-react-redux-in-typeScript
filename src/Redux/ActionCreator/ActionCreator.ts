import { editTableData, getData, getDataForm1} from "../contants/Constants"

export let getDataTable=(value:any)=>{
    console.log("propss",value);
    
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

