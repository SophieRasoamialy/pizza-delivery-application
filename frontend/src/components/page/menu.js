import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Menu = () => {
    

  return (
    <div className="container  mx-auto my-8">
      <h2 className="text-3xl text-gray-800  font-bold mb-4 text-center ">We have the best Pizza</h2>
      <div className='flex space-x-10 mx-12'>
            <div className='flex space-x-4'>
                <div className="w-full max-w-sm h-fit hover:border hover:shadow-lg hover:rounded-xl hover:bg-gray-50">
                    <a href="#" className='flex justify-center items-center '>
                        <img className="p-4 rounded-t-lg w-5/6 " src="/images/pizza.png" alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-800 text-center">Apple Watch Series 7 GPS</h5>
                        </a>
                        <div className="flex justify-center items-center mt-2.5 mb-5 text-sm text-gray-600">
                            <p>ingredients, ingredients, ingredients, ingredients, ingredients </p>
                        </div>
                        <div className="flex justify-center items-center mt-2.5 mb-5">
                            <p>$5.00</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <button type="button" className="text-white shadow-lg bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  mb-2">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-sm h-fit hover:border hover:shadow-lg hover:rounded-xl hover:bg-gray-50">
                    <a href="#" className='flex justify-center items-center '>
                        <img className="p-4 rounded-t-lg w-5/6" src="/images/pizza.png" alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-800 text-center">Apple Watch Series 7 GPS</h5>
                        </a>
                        <div className="flex justify-center items-center mt-2.5 mb-5 text-sm text-gray-600">
                            <p>ingredients, ingredients, ingredients, ingredients, ingredients </p>
                        </div>
                        <div className="flex justify-center items-center mt-2.5 mb-5">
                            <p>$5.00</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <button type="button" className="text-white shadow-lg bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  mb-2">
                                ADD TO CART
                            </button>
                        </div>

                    </div>
                </div>
                <div className="w-full max-w-sm h-fit hover:border hover:shadow-lg hover:rounded-xl hover:bg-gray-50">
                    <a href="#" className='flex justify-center items-center '>
                        <img className="p-4 rounded-t-lg w-5/6" src="/images/pizza.png" alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-800 text-center">Apple Watch Series 7 GPS</h5>
                        </a>
                        <div className="flex justify-center items-center mt-2.5 mb-5 text-sm text-gray-600">
                            <p>ingredients, ingredients, ingredients, ingredients, ingredients </p>
                        </div>
                        <div className="flex justify-center items-center mt-2.5 mb-5">
                            <p>$5.00</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <button type="button" className="text-white shadow-lg bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  mb-2">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-10'>
                <div className="block max-w-sm p-6 bg-amber-500 border rounded-xl shadow  ">
                    <form className="max-w-lg mx-auto">
                        <div className="relative">
                            <input
                                type="search"
                                className="block p-2.5 pr-10 w-full text-sm text-gray-800 bg-white rounded-full border border-gray-300 focus:ring-amber-500 focus:border-amber-500 "
                                placeholder="Search ..."
                                required
                            />
                            <button
                                type="submit"
                                className="absolute top-0.5 right-1 p-2.5 text-sm font-medium text-white bg-red-700 rounded-full border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
                            >
                                <FaSearch className="w-4 h-4" />
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                    <div className="mt-4">
                        <div className="flex justify-between">
                        <label htmlFor="minPrice" className="text-gray-800 font-semibold">Min Price:</label>
                        <input
                        type="number"
                            id="minPrice"
                            className="w-24 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                            min={0}
                            max={100}
                            placeholder="Min"
                        />
                        </div>
                        <div className="mt-4 flex justify-between">
                        <label htmlFor="maxPrice" className="text-gray-800 font-semibold">Max Price:</label>
                        <input
                            type="number"
                            id="maxPrice"
                            className="w-24 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                            min={0}
                            max={100}
                            placeholder="Max"
                        />
                        </div>
                    </div>
                </div>
                <div className="block max-w-sm p-6 bg-amber-500 border rounded-xl shadow  ">
                    <button type="button" className="text-white shadow-lg bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 m-auto  ">
                    Custum your pizza
                    </button>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Menu;
