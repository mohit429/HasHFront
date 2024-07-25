import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  const [name, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onclickhandler = async () => {
    try {
      const response = await axios.post(`https://hashbackend.onrender.com/api/v1/user/signup`, {
        name,
        email,
        password
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        navigate("/dashboard");
      } else {
        alert(response.data.message);
        window.location.reload();
      }
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error states here, e.g., show error message to user
      alert('Error signing up. Please try again.');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-stone-400 via-lime-200 to-cyan-500">
      <button
        onClick={() => navigate('/home')}
        className="absolute top-4 right-4 p-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition flex items-center"
      >
        <FontAwesomeIcon icon={faHome} className="text-lg" />
      </button>
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-transform hover:scale-105">
        <h1 className="font-extrabold text-5xl text-gray-900 mb-6 text-center">Sign Up</h1>
        <form>
          <div className="mb-6">
            <label htmlFor="full_name" className="block text-lg font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              onChange={(e) => setFullname(e.target.value)}
              id="full_name"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 ease-in-out"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300 ease-in-out"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 ease-in-out"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="button"
            onClick={onclickhandler}
            className="w-full py-3 px-4 bg-gradient-to-r from-stone-400 via-lime-200 to-cyan-500 text-black rounded-lg shadow-lg hover:from-stone-300 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?
          <a href="/Signin" className="ml-1 font-medium text-slate-600 hover:text-gray-700 transition ease-in-out duration-150">
            Click here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
