import React from 'react';
import { Link } from 'react-router-dom';
import {  FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url("/images/background.jpg")' }}></div>
      <div className=" rounded px-8 pt-4 pb-8 mb-4 relative z-10">
         <img src="/images/tasty-logo.png" alt="Tasty Logo" className="mx-auto w-48  " />
        <form>
            <div className=" relative mb-5">
                <input type="text" id="input-group-1" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 scale-105 shadow-lg" placeholder="Username"/>
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FaUser className=' text-amber-500' />
                </div>
            </div>
   
            <div className=" relative mb-5">
                <input type="text" id="input-group-1" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 scale-105 shadow-lg" placeholder="Email"/>
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FaEnvelope className=' text-amber-500' />
                </div>
            </div>

            <div className=" relative mb-2">
                <input type="text" id="input-group-1" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5   scale-105 shadow-lg" placeholder="Password"/>
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FaLock className=' text-amber-500' />
                </div>
            </div>
            <div className='relative '>
                <Link
                className="inline-block align-baseline float-right text-sm text-blue-500 hover:text-blue-800"
                to="/reset-password"
                >
                Forgot Password?
                </Link>
            </div>
            <div className=" relative mt-10 mb-2 ">
            <button type="button" className="text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-4 focus:ring-amber-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  w-full">
                Sign Up
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

export default RegisterPage;
