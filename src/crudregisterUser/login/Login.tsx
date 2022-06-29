import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import isLogin from '../../Redux/middilware/IsLogin';
import {  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Card, CardContent } from '@mui/material';


interface Iuser {
    userName: string,
    password: string
}

let initialState: Iuser = {
    userName: "",
    password: ""
}

function Login() {
    //1. states/hook
    const [userData, setUserData] = useState<Iuser>(initialState)
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()

    //2. function defination
    let handalLogin =async (e:any) => {
        let res = await dispatch(isLogin(userData));
    //    console.log(res)
    console.log(res)
        if(res?.status == 200){
            Swal.fire(
                res.statusText,
                res.data.message,                
                'success'
            )
            navigate("/getregisteruser")
        }
       
    }
    
    let handalChange = (e: any) => {
        const{ name,value} = e?.target;
        setUserData({
            ...userData,
            [name]:value
        })

    }
    let handalRegister=()=>{
        navigate("/");
    }

    //3, return statement / jsx syntex
    return (
        <>
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs lg="4">
                    <Card>
                        <CardContent>
                            <Form className="">
                                <h1>React Functional Component </h1>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="email" name="userName" value={userData.userName || ""} onChange={(e) => handalChange(e)} placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" value={userData.password || ""} onChange={(e) => handalChange(e)} placeholder="Password" />
                                </Form.Group>

                                <Button variant="primary" type="button" onClick={handalLogin}>
                                    Submit
                                </Button>
                                <Button variant="primary" className='ms-2' type="button" onClick={handalRegister}>
                                    Register
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
export default Login
