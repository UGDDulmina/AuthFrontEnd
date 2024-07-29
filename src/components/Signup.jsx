import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        secondName: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const { firstName, secondName, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:5000/api/auth/signup`, formData);
            setSuccess(res.data.token);
            setError(null);
        } catch (err) {
            setError(err.response.data.msg);
            setSuccess(null);
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {success && <div style={{ color: 'green' }}>Signup successful</div>}
            <form onSubmit={onSubmit}>
                <input type="text" name="firstName" value={firstName} onChange={onChange} placeholder="First Name" required />
                <input type="text" name="secondName" value={secondName} onChange={onChange} placeholder="Second Name" required />
                <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
                <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
