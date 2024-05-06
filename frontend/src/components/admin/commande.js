import React from 'react';
import Sidebar from './sidebar';

const Commande = () => {
    return (
        <div className='flex'>
        <Sidebar/>
        <div className='p-4 w-full '>
            <div className='flex space-x-8 '>
                <h1 className=' font-extrabold text-2xl text-gray-800'>Orders</h1>
                <select id="countries" className=" border shadow-lg border-gray-300 text-gray-900 text-sm rounded-full focus:ring-red-700 focus:border-red-700 block  p-2  ">
                    <option selected>Trier par</option>
                    <option value="week">This week</option>
                    <option value="month">This month</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
                <select id="countries" className=" border shadow-lg border-gray-300 text-gray-900 text-sm rounded-full focus:ring-red-700 focus:border-red-700 block  p-2">
                    <option selected>Today</option>
                    <option value="week">This week</option>
                    <option value="month">This month</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full shadow-lg  focus:ring-red-700 focus:border-red-700 " placeholder="Search..." required />
                </div>

            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg top-10 ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr> 
                            <th scope="col" className="px-6 py-3">
                                Reference
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                            <div class="flex items-center">
                                Quantity
                                <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                            </svg></a>
                            </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                            <div class="flex items-center">
                                Prix
                                <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                </svg></a>
                            </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 font-semibold text-gray-900">
                                ref
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900">
                                00/00/0000
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900">
                                Pizza
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900">
                                1
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900">
                                5$
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900">
                                <div className=' bg-blue-100 p-2  rounded-full '>
                                    <span className=' text-blue-800 flex items-center justify-center'>order received</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900">
                                <a href="#" className="font-medium text-red-700 hover:underline">Change Status</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className=" p-4 bg-white border border-gray-200  shadow ">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900">Latest Orders</h5>
                
        </div>
        <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center">
                            
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    Neil Sims
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
        </div>
        </div>
        </div>
    );
}

export default Commande;
