import React from 'react';
import { FaShoppingCart, FaPizzaSlice, FaList } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <>
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="logo-sidebar" className=" top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full w-fit px-3 py-4 overflow-y-auto bg-amber-500">
                    
                    <a href="/" className="flex items-center ps-2.5 mb-5">
                        <div className='bg-white rounded-full w-10 '>
                            <img src="/images/tasty-logo.png" className="w-10 me-3" alt="Tasty Logo" />
                        </div>
                    </a>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="/admin/commande" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <FaShoppingCart className="w-5 h-5 mr-2 group-hover:text-gray-900" />
                                <span className="group-hover:text-gray-900">Order List</span>
                            </a>
                        </li>
                        <li>
                            <a href="/admin/pizza" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <FaPizzaSlice className="w-5 h-5 mr-2 group-hover:text-gray-900" />
                                <span className="group-hover:text-gray-900">Pizza List</span>
                            </a>
                        </li>
                        <li>
                            <a href="/admin/ingredients" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <FaList className="w-5 h-5 mr-2 group-hover:text-gray-900" />
                                <span className="group-hover:text-gray-900">Ingredients </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            
        </>
    );
}

export default Sidebar;
