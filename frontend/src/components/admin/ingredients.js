import React, { useState } from 'react';
import Sidebar from './sidebar';
import { FaPlus } from 'react-icons/fa';
import CheeseType from './table/cheese';
import PizzaBase from './table/pizzaBase';
import Veggie from './table/veggie';
import Sauce from './table/sauce';
import OtherIngredients from './table/other';

const Ingredients = () => {
    const [selectedOption, setSelectedOption] = useState(''); 


    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const renderSelectedComponent = () => {
        switch (selectedOption) {
            case 'sauce':
                return <Sauce />;
            case 'cheese':
                return <CheeseType />;
            case 'base':
                return <PizzaBase />;
            case'veggie':
                return <Veggie />;
            case 'other':
                return <OtherIngredients />;
            default:
                return <h1 className='text-center text-2xl font-bold text-gray-800'> Select Ingredients</h1>;
        }
    };

    return (
        <div className='flex'>
            <Sidebar />
            <div className='p-4  w-full'>
                <div className="flex justify-between mb-4">
                    <select id="countries" className=" border shadow-lg mr-5 border-gray-300 text-gray-900 text-sm rounded-full focus:ring-red-700 focus:border-red-700 block p-2" onChange={handleOptionChange}>
                        <option value="" selected disabled>Select ingredients</option>
                        <option value="base">Pizza base</option>
                        <option value="veggie">Veggies</option>
                        <option value="sauce">Sauce</option>
                        <option value="cheese">Cheese</option>
                        <option value="other">Other</option>
                    </select>
                    <div className="relative flex-1 mr-4">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="search" className="block  p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full shadow-lg focus:ring-red-700 focus:border-red-700" placeholder="Search..." required />
                    </div>
                    <button type="button" className="text-white flex items-center shadow-lg bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5">
                        <FaPlus className="mr-1" />
                        New
                    </button>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg top-7">
                    
                    {renderSelectedComponent()}
                </div>
            </div>
        </div>
    );
}

export default Ingredients;
