import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getDataTable } from '../Redux/ActionCreator/ActionCreator';




function Table() {
    // state /hook
    
    let state = useSelector((state: any) => state)
    const [tableData, setTableData] = useState(state);
    const [index, setIndex] = useState<number>()
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    

    useEffect(()=>{
        
    },[state])

    //2. function defination

    let deleteTableRows=(index:number)=>{
        let newState = state.user
        newState.splice(index,1);
        dispatch(getDataTable(newState))
    }

    let editButton=(index:number,e:any)=>{
        e.preventDefault();
        //console.log("edit button ==>",state.user[index])
        let newData = state.user[index];
        newData.index = index
        //dispatch(editData([newData]));
        setIndex(index);
        setTableData(newData)
    }

    let handalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //console.log('okokok');
        let name = e.target.name;
        let value = e.target.value;
        setTableData(
            { 
                ...tableData, 
                [name]: value 
            }
        );
    }

    let handalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let temp_state = [...state.user];
	    let temp_element = { ...temp_state[0] };
        temp_element.counter = temp_element.counter+1;
        temp_state[0] = temp_element;
        setTableData( temp_state );
        //console.log("tableData",tableData)
       
        let objIndex = state.user.findIndex(((tableData:any) => tableData.index === index));
        console.log("objIndex",objIndex);
        state.user[objIndex]=tableData  
        // console.log(state.user)
       
    }

    // console.log("state---->",state)
    //console.log("tableData---->",tableData)


    //3. return statement /jsx
    return (
        <>
           

            {/*Edit Button modal */}
            <div className="modal fade " id="examplemodal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div >
                        <div className="modal-body">
                            <form onSubmit={handalSubmit}>
                                <div className="mb-1">
                                    <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                                    <input type="texy" name="first_name" value={tableData.first_name} onChange={handalChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="exampleInputPassword2" className="form-label">Last Name</label>
                                    <input type="text" name="last_name" value={tableData.last_name} onChange={handalChange} className="form-control" id="exampleInputPassword2" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="exampleInputPassword3" className="form-label">Age</label>
                                    <input type="number" name="age" value={tableData.age} onChange={handalChange} className="form-control" id="exampleInputPassword3" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="exampleInputPassword4" className="form-label">Email</label>
                                    <input type="email" name="email" value={tableData.email} onChange={handalChange} className="form-control" id="exampleInputPassword4" />
                                </div>
                               
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* table */}
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.user.map((cv: any, index: number) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{cv.first_name}</td>
                                    <td>{cv.last_name}</td>
                                    <td>{cv.age}</td>
                                    <td>{cv.email}</td>
                                    <td>
                                       
                                        <button className='btn btn-info btn-sm me-1' onClick={(e)=>{editButton(index,e)}} data-bs-toggle="modal" data-bs-target="#examplemodal2" >Edit</button>
                                        <button className='btn btn-danger btn-sm' onClick={()=>(deleteTableRows(index))}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button type="submit" className="btn btn-primary" onClick={() => { Navigate('/') }}>Add More Data</button>
        </>

    )
}

export default Table
