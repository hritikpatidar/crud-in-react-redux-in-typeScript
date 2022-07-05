import React from "react"
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import IsUserRegister from '../../Redux/middilware/IsUserRegister';
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';
import { Card, CardContent } from '@mui/material';

interface Iuser {
    userName:string,
    email:string,
    profilePic :string | File,
    password:string,
    confirmPassword:string

}
let initialState:Iuser={
    userName:"",
    email:"",
    profilePic: "" ,
    password:"",
    confirmPassword:""
}

function UserRegister() {
    //1. state/hook 
    const [user, setUser] = useState<Iuser>(initialState);
    const [clicked, setClicked] = useState(true)
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()


    //2. function defination

    let handalSubmit=async(e:any)=>{
        setClicked(false)
        
        let state = await dispatch(IsUserRegister(user))

        setClicked(true)
        if(state.status == 201){
            Swal.fire(
                state.statusText,
                state.data.message,
                'success'
            )
            navigate("/login")
        }
        
    }
    let handalChange=(e:any)=>{
        const {name,value}= e.target;
        setUser({
            ...user,
            [name]:value
        })
    }
    let handalImage=(e:any)=>{
        // console.log(e.target.files[0])
        // setFile(e.target.files[0])
        user.profilePic=e.target.files[0]

    }
    let handalLogin = () =>{
        navigate("/login")
    }
// console.log("state",state)
    //3.return statement /jsx
    return (
        <>
        
        {/* <div className="container ">
            <div className='row justify-content-md-center mt-4'>
                <div className="col-6">
                    <form className=" position-absolute top-50 start-50 translate-middle border border-1 p-3 " >
                        <h1>User Register</h1>
                        <div className="mb-1">
                            <label htmlFor="exampleInputEmail1" className="form-label">userName</label>
                            <input type="text" name="userName"  className="form-control"  onChange={handalChange}  id="exampleInputEmail1"  />
                           
                        </div>
                        <div className="mb-1 ">
                            <label htmlFor="exampleInputPassword2" className="form-label">Email</label>
                            <input type="email" name="email"  className="form-control" onChange={handalChange} id="exampleInputPassword2" />
                        </div>
                        <div className="mb-1 ">
                            <label htmlFor="exampleInputPassword3" className="form-label">Profile Pic</label>
                            <input type="file" name="profilePic"  className="form-control" onChange={handalImage} id="exampleInputPassword3" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="exampleInputPassword4" className="form-label">passwrod</label>
                            <input type="password" name="password"  className="form-control" onChange={handalChange} id="exampleInputPassword4" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="exampleInputPassword5" className="form-label">Confirm Password</label>
                            <input type="password" name="confirmPassword"  className="form-control" onChange={handalChange} id="exampleInputPassword5" />
                        </div>
                      
                        {
                            clicked 
                            ?
                            <button type="button" className="btn btn-primary " onClick={handalSubmit}>Register</button>
                            :                                   
                            <button type="button" disabled className="btn btn-primary " onClick={handalSubmit}>Register</button>
                        
                        }
                        <button type="button" className="btn btn-primary ms-2" onClick={handalLogin}>login</button>
                    </form>
                </div>
            </div>
        </div> */}
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs lg="4">
                    <Card>
                        <CardContent>
                            <Form>
                                <h1>React Functional Component </h1>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="userName" name="userName"   onChange={handalChange}  placeholder="Enter email" />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email"   onChange={handalChange}  placeholder="Enter email" />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Profile Pic</Form.Label>
                                    <Form.Control type="file" name="profilePic"  onChange={handalImage}  placeholder="Enter email" />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>passwrod</Form.Label>
                                    <Form.Control type="password" name="password"  onChange={handalChange}  placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" name="confirmPassword"  onChange={handalChange}  placeholder="Password" />
                                </Form.Group>
                                {
                                    clicked 
                                    ?
                                    <Button variant="primary" type="button" onClick={handalSubmit}>
                                        Register
                                    </Button>
                                    :                                   
                                    <Button variant="primary" disabled type="button" onClick={handalSubmit}>
                                        Register
                                    </Button>
                                
                                }
                                <Button variant="primary"  className='ms-2' type="button" onClick={handalLogin} >
                                    login
                                </Button>
                                
                            </Form> 
                        </CardContent>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default UserRegister
