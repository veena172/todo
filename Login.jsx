import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password }, { withCredentials: true });
      localStorage.setItem('user', JSON.stringify(res.data));
      navigate(res.data.role === 0 ? '/admin' : '/client');
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input type="email" placeholder="Email" className="input" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="input mt-4" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="btn mt-6 w-full">Login</button>
      </div>
    </div>
  );
};

export default Login;