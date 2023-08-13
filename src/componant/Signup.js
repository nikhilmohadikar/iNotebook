import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [creadintials, setcreadintials] = useState({ name: "", email: "", password: "", cpassword: "" })
    const navigate = useNavigate();
    const { name, email, password } = creadintials
    const handleSubmit = async (e) => {
        e.preventDefault();
        // API Call 
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log(json)
        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem('token', json.authtoken)
            navigate("/")
        }
        else {
            alert("Invalid credintials")
        }
    }

    const onChange = (e) => {
        setcreadintials({ ...creadintials, [e.target.name]: e.target.value })
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Enter a name</label>
                    <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Enter a email</label>
                    <input type="email" className="form-control" id="email" name='email' onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Enter a password</label>
                    <input type="password" className="form-control" id="password" name='password' minLength={5} required onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm password</label>
                    <input type="password" className="form-control" id="cpassword" name='cpassword' minLength={5} required onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form >
        </div >
    )
}

export default Signup
