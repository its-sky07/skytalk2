"use client";

import axios from 'axios';
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaImage } from 'react-icons/fa';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    bio: '',
    password: '',
    avatar: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, avatar: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    
    // Append form data
    data.append('name', formData.name);
    data.append('username', formData.username);
    data.append('bio', formData.bio);
    data.append('password', formData.password);

    // Append avatar if available
    if (formData.avatar) {
      data.append('avatar', formData.avatar);
    }

    try {
      console.log(formData)
      const res = await axios.post("/api/user/register",formData );
      alert("Registration successful");
      console.log(res.data);
    } catch (error) {
      console.error("USER NOT REGISTERED", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-8">Create an Account</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full bg-gray-100 text-gray-700 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Username Field */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full bg-gray-100 text-gray-700 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Bio Field */}
          <div className="relative">
            <textarea
              name="bio"
              placeholder="Short Bio"
              className="w-full bg-gray-100 text-gray-700 pl-4 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="3"
              value={formData.bio}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full bg-gray-100 text-gray-700 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Avatar Upload Field */}
          <div className="relative">
            <FaImage className="absolute left-3 top-3 text-gray-400" />
            <input
              type="file"
              name="avatar"
              className="w-full bg-gray-100 text-gray-700 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-all"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
