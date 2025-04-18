import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', role: 1 });
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input type="text" placeholder="Name" className="input" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" className="input mt-4" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="text" placeholder="Phone" className="input mt-4" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
        <input type="password" placeholder="Password" className="input mt-4" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
        <button onClick={handleRegister} className="btn mt-6 w-full">Register</button>
      </div>
    </div>
  );
};

export default Register;