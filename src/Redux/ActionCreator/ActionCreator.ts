import getData from "../contants/Constants"

export let getDataTable=(value:any)=>{
    console.log("props",value);
    return{
        type:getData,
        payload:value
    }
}