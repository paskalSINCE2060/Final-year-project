import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { assignUserRole, setLoginDetails } from '../../../redux/reducers/userSlice'
import './login.css';

const baseUrl = process.env.REACT_APP_BASE_URL

function AdminLoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${baseUrl}/admin-login`, {
                email,
                password
            });

            if (response.status === 200) {
                const res = response.data;
                dispatch(assignUserRole(res.userRole));
                dispatch(
                    setLoginDetails({
                        isLoggedIn: true,
                        userDbId: res?.id,
                        userDept: res?.department,
                        email: res?.email,
                        name: res?.name,
                        token: res?.token
                    })
                );
                setSuccess('Logged in successfully');
                setError('');
                navigate("/")
            } else {
                setError("Server error");
            }
        } catch (error) {
            setSuccess('');

            if (error.response && error.response.data) {
                setError(error.response.data.msg);
            } else {
                setError('An unexpected error occurred');
            }
        }
    };


    return (
        <div className='outer-container'>
            <div className='login-container'>
                <label>Log in</label>
                <div className='inputs'>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        type='email'
                        className={error ? 'error' : ''}
                    />
                    {error && !success && <span className='error-message'>{error}</span>}
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        type='password'
                        className={error ? 'error' : ''}
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className='button login-button'
                >
                    Log in now
                </button>
                <div className='links'>
                    <a
                        className='link-text'
                        href='/admin-signup'
                    >
                        Create new account
                    </a>
                    <p className='link-text'>Forgot password</p>
                </div>
                {success && <div className='success-message'>{success}</div>}
            </div>
        </div>
    );
}

export default AdminLoginForm;