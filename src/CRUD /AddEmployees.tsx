import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import IsRegister from '../Redux/middilware/IsRegister'


interface Iuser {
    name:string,
    email:string,
    dob:string,
    position:string,
    technologies_known:string,
    technologie_type:string
}

const initialState : Iuser ={
    name:"",
    email:"",
    dob:"",
    position:"",
    technologies_known:"",
    technologie_type:""
}

function AddEmployees() {
    //1. state/Hooks
    const [user, setUser] = useState<Iuser>(initialState)
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()
    //2. function defination
    let handalSubmit=async()=>{
        const token1 = localStorage.getItem('token');
        await dispatch(IsRegister(user,token1))
        navigate('/employeestable')
    }

    let handalChange=(e:any)=>{
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value
        })

    }


    //3. return statement 
    return (
        <div className="container ">
            <div className='row justify-content-md-center mt-4'>
                <div className="col-6">
                    <form className=" position-absolute top-50 start-50 translate-middle border border-1 p-3" >
                        <h1>Add Employee</h1>
                        <div className="mb-1">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="texy" name="name"  className="form-control" onChange={handalChange} id="exampleInputEmail1"  />
                           
                        </div>
                        <div className="mb-1 ">
                            <label htmlFor="exampleInputPassword2" className="form-label">Email</label>
                            <input type="email" name="email"  className="form-control" onChange={handalChange} id="exampleInputPassword2" />
                        </div>
                        <div className="mb-1 ">
                            <label htmlFor="exampleInputPassword3" className="form-label">Dob</label>
                            <input type="date" name="dob"  className="form-control" onChange={handalChange} id="exampleInputPassword3" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="exampleInputPassword4" className="form-label">position</label>
                            <input type="text" name="position"  className="form-control" onChange={handalChange} id="exampleInputPassword4" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="exampleInputPassword5" className="form-label">technologies known</label>
                            <input type="text" name="technologies_known"  className="form-control" onChange={handalChange} id="exampleInputPassword5" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword6" className="form-label">technologie type</label>
                            <input type="text" name="technologie_type"  className="form-control" onChange={handalChange} id="exampleInputPassword6" />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handalSubmit} >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddEmployees
