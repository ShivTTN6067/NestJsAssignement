import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { userSignUpDB } from '../Utills/loginDbConnect'

function SignupPage() {
    
    const navigate = useNavigate();

    const [Email, setEmail ]= useState("");
    const [pswd , setPassword ]= useState("");
    const [userName, setUserName ]= useState("");
    const [designation , setDesignation ]= useState("");

    const userLogin = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const res = await userSignUpDB({Email: Email, password: pswd, username: userName, designation: designation});
        if (res === "created") {
            navigate('/')
        }
    }

    return (
        <Form onSubmit={userLogin}>

            <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>UserName</Form.Label>
                <Form.Control type="text" placeholder="UserName"value={userName} onChange={(e)=>setUserName(e.target.value)} />
            </Form.Group>

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

            <Form.Group className="mb-3" controlId="formBasicDesignation">
                <Form.Label>Designation</Form.Label>
                <Form.Control type="text" placeholder="Designation" value={designation} onChange={(e)=>setDesignation(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default SignupPage;