import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  FaEnvelope, FaLock, FaEyeSlash, FaEye } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', { email, password });
      const token = response.data.token;

      Cookies.set('token', token, { expires: 1, path: '/' });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url("/images/background.jpg")' }}></div>

      <div className=" rounded px-8 pt-6 pb-8 mb-4 relative z-10">
         <img src="/images/tasty-logo.png" alt="Tasty Logo" className="mx-auto w-48  mb-2" />
        <form onSubmit={handleSubmit}>
            <div className=" relative mb-6">
                <input 
                type="text" id="input-group-1"  
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 scale-105 shadow-lg" 
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                />
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FaEnvelope className=' text-amber-500' />
                </div>
            </div>

            <div className=" relative mb-2">
                <div>
                    <input type={showPassword ? "text" : "password"}
                     id="input-group-1" 
                     className="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5   scale-105 shadow-lg" 
                     placeholder="Password"
                     value={password}
                    onChange={handlePasswordChange}
                     />
                </div>
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FaLock className=' text-amber-500' />
                </div>
                <div className="absolute inset-y-0 end-0 flex items-center pr-3 ">
                        <button
                             type='button'
                            className="focus:outline-none text-gray-700 "
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
            </div>
            <div className='relative '>
                <Link
                className="inline-block align-baseline float-right text-sm text-blue-500 hover:text-blue-800"
                to="/reset-password"
                >
                Forgot Password ? 
                </Link>
            </div>
            <div className=" relative mt-12 mb-2 ">
            <button type="submit" className="text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-4 focus:ring-amber-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  w-full">
                Sign In
                </button>
          </div>
          <div className='relative text-sm'>
                Do not have any account?
                <Link
                className="inline-block align-baseline float-right  text-blue-500 hover:text-blue-800"
                to="/reset-password"
                >
                Register here
                </Link>
            </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
