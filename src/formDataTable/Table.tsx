import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getDataTable } from '../Redux/ActionCreator/ActionCreator';



function Table() {
    // state /hook

    let state = useSelector((state: any) => state)
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

    console.log("state---->",state)


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
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-1">
                                    <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                                    <input type="texy" name="first_name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="exampleInputPassword2" className="form-label">Last Name</label>
                                    <input type="text" name="last_name" className="form-control" id="exampleInputPassword2" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="exampleInputPassword3" className="form-label">Age</label>
                                    <input type="number" name="age" className="form-control" id="exampleInputPassword3" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="exampleInputPassword4" className="form-label">Email</label>
                                    <input type="email" name="email" className="form-control" id="exampleInputPassword4" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="exampleInputPassword5" className="form-label">Password</label>
                                    <input type="password" name="password" autoComplete="on" className="form-control" id="exampleInputPassword5" />
                                </div>
                                <button type="submit" className="btn btn-primary ">Submit</button>
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
                                       
                                        <button className='btn btn-info btn-sm me-1' data-bs-toggle="modal" data-bs-target="#examplemodal2">Edit</button>
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
