import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CustomPizza = () => {
  return (
    <div className="container mx-auto w-full h-screen flex justify-center items-center ">
      <div className="mx-auto  py-6 px-16 bg-white border w-3/4 h-5/6 border-gray-200 rounded-lg shadow ">
        <div className='mx-auto space-x-10 flex  '>
            <div className="relative w-1/3">
                <div className="flex flex-col  space-y-6">
                    <h2 className="font-bold text-3xl">Custom  Your Pizza</h2>
                    <div className="flex items-center">
                        <div className="w-12 h-12  -left-1 absolute rounded-full overflow-hidden bg-white border  shadow">
                            <img src="/images/sauce.png" alt="Image 1" className="w-full h-full object-cover" />
                        </div>
                        <button className="px-5 py-2 ml-7 items-center border shadow justify-center me-2 overflow-hidden text-sm font-medium text-red-700 rounded-full group bg-white hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300">
                            Pizza Base
                        </button>
                    </div>
                    <div className="flex items-center">
                        <div className="w-12 h-12  -left-1 absolute rounded-full overflow-hidden bg-white border  shadow">
                            <img src="/images/sauce.png" alt="Image 1" className="w-full h-full object-cover" />
                        </div>
                        <button className="px-5 py-2 ml-7 items-center border shadow justify-center me-2 overflow-hidden text-sm font-medium text-red-700 rounded-full group bg-white hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300">
                            Sauce
                        </button>
                    </div>
                    <div className="flex items-center">
                        <div className="w-12 h-12  -left-1 absolute rounded-full overflow-hidden bg-white border  shadow">
                            <img src="/images/sauce.png" alt="Image 1" className="w-full h-full object-cover" />
                        </div>
                        <button className="px-5 py-2 ml-7 items-center border shadow justify-center me-2 overflow-hidden text-sm font-medium text-red-700 rounded-full group bg-white hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300">
                            Cheese
                        </button>
                    </div>
                    <div className="flex items-center">
                        <div className="w-12 h-12  -left-1 absolute rounded-full overflow-hidden bg-white border  shadow">
                            <img src="/images/sauce.png" alt="Image 1" className="w-full h-full object-cover" />
                        </div>
                        <button className="px-5 ml-7 py-2 items-center border shadow justify-center me-2 overflow-hidden text-sm font-medium text-red-700 rounded-full group bg-white hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300">
                            Veggies
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-1/3'>
            <img src="/images/pizza.png" alt="Image 1" className=" mx-auto top-0 p-6 object-cover" />
            </div>

            <div className="block  max-w-sm p-6 h-fit bg-amber-500 border space-y-5 rounded-xl shadow  ">
                <p className='font-bold text-2xl text-white text-center'>$5.00</p>
                <button type="button" className="text-white shadow-lg bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  mb-2">
                    COMMANDER
                </button>
            </div> 
        </div>
        <div className=' my-5 mx-auto w-3/4 px-3  rounded-lg h-28 bg-gray-50 shadow flex  space-x-5'>
            <button className='bg-amber-500 m-2 p-2 rounded-lg' >
                <FaArrowLeft className="text-gray-800" />
            </button>
            <div className=' w-20 bg-white m-2.5 border p-2'>
                <img src="/images/pepper.png" alt="Image 1" className="object-cover" />
                <p className='text-xs text-center text-gray-800'>pizza base</p>
            </div>
            <div className=' w-20 bg-white m-2.5 border p-2'>
                <img src="/images/pepper.png" alt="Image 1" className="object-cover" />
                <p className='text-xs text-center text-gray-800'>pizza base</p>
            </div>
            <div className=' w-20 bg-white m-2.5 border p-2'>
                <img src="/images/pepper.png" alt="Image 1" className="object-cover" />
                <p className='text-xs text-center text-gray-800'>pizza base</p>
            </div>
            <div className=' w-20 bg-white m-2.5 border p-2'>
                <img src="/images/pepper.png" alt="Image 1" className="object-cover" />
                <p className='text-xs text-center text-gray-800'>pizza base</p>
            </div>
            <div className=' w-20 bg-white m-2.5 border p-2'>
                <img src="/images/pepper.png" alt="Image 1" className="object-cover" />
                <p className='text-xs text-center text-gray-800'>pizza base</p>
            </div>
            <button className='bg-amber-500 m-2 p-2 rounded-lg' >
                <FaArrowRight className="text-gray-800" />
            </button>
        </div>
      </div>
    </div>
  );
}

export default CustomPizza;
