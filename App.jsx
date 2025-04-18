// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import ClientDashboard from './components/ClientDashboard';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/client" element={<ClientDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
