import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:5000/api/auth/login`, formData);
            setSuccess(res.data.token);
            setError(null);
        } catch (err) {
            setError(err.response.data.msg);
            setSuccess(null);
        }
    };

    return (
        <div className= 'min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4 '>
           
            <h2 className='mb-10 text-lg '>Login Now</h2>
            
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {success && <div style={{ color: 'green' }}>Login successful</div>}
            <form onSubmit={onSubmit} className= 'flex flex-col w-full justify-center items-center'>
                <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required  className=' h-14 m-2 bg-gray-200 w-1/3 p-2 rounded-lg border border-gray-400'/>
                <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required  className=' h-14 m-2 bg-gray-200 w-1/3 rounded-lg p-2 border border-gray-400'/>
                <button type="submit" className='bg-blue-400 p-2 rounded-lg text-white hover:bg-blue-500'>Login</button>
            </form>
        </div>
    );
};

export default Login;
