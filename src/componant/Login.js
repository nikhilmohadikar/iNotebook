import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [creadintials, setcreadintials] = useState({ email: "", password: "" })
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // API Call 
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: creadintials.email, password: creadintials.password })
        });
        const json = await response.json()
        console.log(json)

        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem('token', json.authtoken)
            props.showAlert("Logged in Successfully", "success")
            navigate("/")
        }
        else {
            props.showAlert("Invalid Credentials", "danger")
        }
    }

    const onChange = (e) => {
        setcreadintials({ ...creadintials, [e.target.name]: e.target.value })
    }

    return (
        <div className='mt-3'>
            <h2>Login to continue to iNotebook</h2>
            <form onSubmit={handleSubmit} className='mt-4'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' value={creadintials.email} onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={creadintials.password} onChange={onChange} id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
