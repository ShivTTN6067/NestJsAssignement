import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { userLoginDB } from '../Utills/loginDbConnect'

function LoginPage() {
    const navigate = useNavigate();

    const [Email, setEmail ]= useState("");
    const [pswd , setPassword ]= useState("");

    const userLogin = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const res = await userLoginDB({Email: Email, password: pswd});
        if (res === true) {
            navigate('/dashboard')
        }else{
            navigate('/Signup')
        }
    }

    return (
        <Form onSubmit={userLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={pswd} onChange={(e)=>setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default LoginPage;