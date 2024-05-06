import React from 'react';
import Cookies from 'js-cookie';


const Jumbotron = () => {

  const checkIsAuthenticated = () => {
    const token = Cookies.get('token');
    return !!token; 
  };

  const isAuthenticated = checkIsAuthenticated();

  const handleSignOut = () => {
};
  
  return (
    <div className="bg-cover  h-screen bg-no-repeat flex items-center justify-center" style={{ backgroundImage: "url('/images/landscape.jpg')" }}>
      {/* Navbar */}
      <nav className="p-4 absolute top-0 left-0 right-0 z-10 bg-transparent">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full">
                <img src="/images/tasty-logo.png" alt="logo" className="w-20 h-20 p-0 rounded-full" />
              </div>
              <div className="text-white">
                <ul className="flex space-x-4">
                  <li className="cursor-pointer"><a href='/'>Home</a></li>
                  <li className="cursor-pointer"><a href='/service'>Services</a></li>
                  <li className="cursor-pointer"><a href='/about'>About</a></li>
                  <li className="cursor-pointer"><a href='/contact'>Contact</a></li>
                </ul>
              </div>
            </div>
            <div>
            {isAuthenticated ? (
                <>
                    <button type="button" className="text-white shadow-lg bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                        My Order
                    </button>
                    <button onClick={handleSignOut} className="relative inline-flex items-center justify-center mb-2 me-2 overflow-hidden text-sm font-medium text-red-700 rounded-full group bg-white hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                            Sign Out
                        </span>
                    </button>
                </>
            ) : (
                <>
                    <button type="button" className="text-white shadow-lg bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Sign Up
                    </button>
                    <button className="relative inline-flex items-center justify-center mb-2 me-2 overflow-hidden text-sm font-medium text-red-700 rounded-full group bg-white hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                            Sign In
                        </span>
                    </button>
                </>
            )}
        </div>
          </div>
        </div>
      </nav>


      {/* Jumbotron Content */}
      <div className="container h-screen flex flex-col justify-center items-start relative z-20 px-8">
        <h1 className="text-5xl text-white font-bold mb-4 text-center">Enjoy Your Pizza</h1>
        <p className="text-white text-lg text-center">Discover amazing features and services.</p>
      </div>
    </div>
  );
}

export default Jumbotron;
