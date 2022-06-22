import axios from 'axios';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dltEmp, editEmployee, empGetData } from '../Redux/ActionCreator/ActionCreator';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';



function EmployeeTable() {
    //1. state/hook
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector((state: any) => state)
    const [user, setUser] = useState<any>(state)
    const [index, setIndex] = useState<number>()
    const [show, setShow] = useState(false);

    useEffect(()=>{
        getData()
    })

    //2.function defination
    const handleClose = () => setShow(false);
    const handleShow = (index: number) => {
        let newData = state.getEmpData.userData[index]
        setUser(newData)
        setIndex(index)
        setShow(true)
    };
    let getData = async () => {
        const token1 = localStorage.getItem("token")
        try {
            const response = await axios.get("http://192.168.1.11:8000/api/employees", {
                headers: { "Authorization": `${token1}` }
            })
            dispatch(empGetData(response))
        } catch (error) {

        }
    }

    let handalChange = (e: any) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    let handalEdit = async () => {
        var ind: any = index
        var id = state.getEmpData?.userData[ind]._id
        const token1 = localStorage.getItem('token') || " ";
        const data = {
            name: user.name,
            email: user.email,
            dob: user.dob,
            position: user.position,
            technologies_known: user.technologies_known,
            technologie_type: user.technologie_type
        }
        try {
            const response = await axios.patch('http://192.168.1.11:8000/api/employees/' + id, data,
                { headers: { "Authorization": token1 } }
            );

            const objIndex = state.getEmpData.userData.findIndex((user:any)=>user._id === response.data._id)
            state.getEmpData.userData[objIndex]=response.data  

            dispatch(editEmployee(response))
        
        } catch (error) {

        }

    }
    let handalDelete=async(index:number)=>{
        var id = state.getEmpData?.userData[index]._id;
        const token1 = localStorage.getItem('token') || " ";
        
        try {
            await axios.delete('http://192.168.1.11:8000/api/employees/' + id,{
                headers: { "Authorization": token1 } 
            })
            
            let newState = state.getEmpData.userData
            newState.splice(index,1);

            dispatch(dltEmp(newState))
            
        } catch (error) {
            
        }
    }
    let handalAddData =()=>{
        navigate('/addemployees')
    }
    //3. return statement / jsx
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <form  >
                            <div className="mb-1">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="texy" name="name" className="form-control" value={user.name} onChange={handalChange} id="exampleInputEmail1" />

                            </div>
                            <div className="mb-1 ">
                                <label htmlFor="exampleInputPassword2" className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" value={user.email} onChange={handalChange} id="exampleInputPassword2" />
                            </div>
                            <div className="mb-1 ">
                                <label htmlFor="exampleInputPassword3" className="form-label">Dob</label>
                                <input type="date" name="dob" className="form-control" value={moment(new Date(user.dob)).format("YYYY-MM-DD")} onChange={handalChange} id="exampleInputPassword3" />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="exampleInputPassword4" className="form-label">position</label>
                                <input type="text" name="position" className="form-control" value={user.position} onChange={handalChange} id="exampleInputPassword4" />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="exampleInputPassword5" className="form-label">technologies known</label>
                                <input type="text" name="technologies_known" className="form-control" value={user.technologies_known} onChange={handalChange} id="exampleInputPassword5" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword6" className="form-label">technologie type</label>
                                <input type="text" name="technologie_type" className="form-control" value={user.technologie_type} onChange={handalChange} id="exampleInputPassword6" />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handalEdit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
         
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">dob</th>
                        <th scope="col">position</th>
                        <th scope="col">technologie_type</th>
                        <th scope="col">technologies_known</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // moment(new Date()).format("DD/MM/YYYY")
                        state.getEmpData.userData.map((cv: any, index: number) => {

                            const dateString = cv.dob; // ISO8601 compliant dateString
                            const D = new Date(dateString);
                            const result = D.getDate() + "-" + (D.getMonth() + 1) + "-" + D.getFullYear();
                            return (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{cv.name}</td>
                                    <td>{cv.email}</td>
                                    <td>{result}</td>
                                    <td>{cv.position}</td>
                                    <td>{cv.technologie_type}</td>
                                    <td>{cv.technologies_known}</td>
                                    <td>
                                        <button className="btn btn-success btn-sm " onClick={() => handleShow(index)}>Edit</button>
                                        <button className="btn btn-danger btn-sm m-1" onClick={()=>handalDelete(index)}>Delete</button>
                                    </td>

                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
            <Button variant="primary" onClick={handalAddData}>
                Add More Data
            </Button>
        </>
    )
}

export default EmployeeTable
