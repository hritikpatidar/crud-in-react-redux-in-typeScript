import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import isLogin from '../Redux/middilware/IsLogin';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


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
    const state = useSelector((state:any) => state?.login?.userData)
    const [userData, setUserData] = useState<Iuser>(initialState)
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()

    //2. function defination
    let handalLogin =async (e:any) => {
        let res = await dispatch(isLogin(userData));
       console.log(res)
        if(res.status == 200){
            Swal.fire(
                res.statusText,
                res.data.message,                
                'success'
            )
            navigate("/getregisteruser")
        }
    }
    
    let handalChange = (e: any) => {
        const{ name,value} = e.target;
        setUserData({
            ...userData,
            [name]:value
        })

    }

    //3, return statement / jsx syntex
    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs lg="4">
                    <Form>
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
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Login
