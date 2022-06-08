import { editTableData, getData} from "../contants/Constants"

export let getDataTable=(value:any)=>{
    console.log("props",value);
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
