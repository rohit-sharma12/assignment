import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Auth = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-5 text-center">Sign in to your PopX account</h2>
        <p className="text-gray-600 text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <form>
          <label className="block mb-2 text-sm font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-[40px] p-2 border rounded-md mb-3"
            placeholder="Enter email address"
          />

          <label className="block mb-2 text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full h-[40px] p-2 border rounded-md mb-3"
            placeholder="Enter password"
          />

          <button onClick={() => navigate('/setting')} className="w-full h-[40px] bg-gray-400 text-black hover:bg-gray-600 py-2 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Auth
