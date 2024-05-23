import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Veggies = () => {
    const [veggies, setVeggies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [veggiesName, setVeggiesName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [currentVeggieId, setCurrentVeggieId] = useState(null);

    useEffect(() => {
        fetchVeggies();
    }, []);

    const fetchVeggies = () => {
        axios.get('http://localhost:3001/api/veggies')
            .then(response => {
                setVeggies(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching veggies:', error);
                setError('Error fetching veggies');
                setLoading(false);
            });
    };

    const handleRemove = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3001/api/veggies/${id}`)
                    .then(() => {
                        fetchVeggies();
                        Swal.fire(
                            'Deleted!',
                            'Your veggie has been deleted.',
                            'success'
                        );
                    })
                    .catch(error => {
                        console.error('Error deleting veggie:', error);
                        Swal.fire(
                            'Error!',
                            'There was an error deleting the veggie.',
                            'error'
                        );
                    });
            }
        });
    };

    const handleEdit = (veggie) => {
        setModalTitle('Edit Veggie');
        setVeggiesName(veggie.veggiesName);
        setQuantity(veggie.veggiesQuantite);
        setImagePreview(`http://localhost:3001${veggie.veggiesNameImage}`);
        setCurrentVeggieId(veggie._id);
        setIsModalOpen(true);
    };

    const handleAddClick = () => {
        setModalTitle('Add New Veggie');
        setVeggiesName('');
        setQuantity('');
        setImageFile(null);
        setImagePreview('');
        setCurrentVeggieId(null);
        setIsModalOpen(true);
    };

    const handleSubmit = async () => {
        try {
            if (!quantity || !veggiesName || !imageFile) {
                Swal.fire('Error!', 'Please fill in all fields.', 'error');
                return;
            }

            const formData = new FormData();
            formData.append('veggiesQuantite', quantity);
            formData.append('veggiesName', veggiesName);
            formData.append('veggiesNameImage', imageFile);

            if (currentVeggieId) {
                // Update existing veggie
                await axios.put(`http://localhost:3001/api/veggies/${currentVeggieId}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                Swal.fire('Success!', 'Veggie has been updated successfully.', 'success');
            } else {
                // Add new veggie
                await axios.post('http://localhost:3001/api/veggies', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                Swal.fire('Success!', 'Veggie has been added successfully.', 'success');
            }

            fetchVeggies();
            closeModal();
        } catch (error) {
            console.error('Error submitting veggie:', error.message);
            Swal.fire('Error!', error.message, 'error');
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setVeggiesName('');
        setQuantity('');
        setImageFile(null);
        setImagePreview('');
        setCurrentVeggieId(null);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <button type="button" className="text-white float-right flex items-center shadow-lg bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2" onClick={handleAddClick}>
                <FaPlus className="mr-1" />
                New
            </button>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-16 py-3">
                            <span className="sr-only">Image</span>
                        </th>
                        <th scope="col" className="px-6 py-3">Veggie</th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">Quantity</div>
                        </th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {veggies.map((veggie, index) => (
                        <tr key={index} className="bg-white border-b hover:bg-gray-50">
                            <td className="p-4">
                                <img 
                                    src={`http://localhost:3001${veggie.veggiesNameImage}`} 
                                    className="w-10 max-w-full max-h-full" 
                                    alt={veggie.veggiesName} 
                                />                        
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900">{veggie.veggiesName}</td>
                            <td className="px-6 py-4 font-semibold text-gray-900">{veggie.veggiesQuantite}</td>
                            <td className="px-6 py-4">
                                <button
                                    className="font-medium text-red-600 hover:underline"
                                    onClick={() => handleRemove(veggie._id)}
                                >
                                    Remove
                                </button>
                                <button
                                    className="font-medium text-blue-600 hover:underline ms-2"
                                    onClick={() => handleEdit(veggie)}
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">{modalTitle}</h2>
                        <form>
                            <div className="mb-6 flex flex-wrap">
                                <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
                                    <label htmlFor="quantity" className="block text-gray-700 mb-1">Quantity</label>
                                    <input 
                                        type="text" 
                                        id="quantity"  
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                                        placeholder="Quantity"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 md:pl-2">
                                    <label htmlFor="veggiesName" className="block text-gray-700 mb-1">Veggie Name</label>
                                    <input 
                                        type="text" 
                                        id="veggiesName"  
                                        value={veggiesName}
                                        onChange={(e) => setVeggiesName(e.target.value)}
                                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                                        placeholder="Veggie Name"
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="dropzone-file" className="block text-gray-700 mb-1">Upload Image</label>
                                <input 
                                    type="file" 
                                    id="dropzone-file"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                                
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        {imagePreview ? (
                                            <img src={imagePreview} alt="Preview" className="w-full h-32 object-cover"/>
                                        ) : (
                                            <>
                                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V8m0 0a5 5 0 00-5-5h0a5 5 0 00-5 5m0 0h16m-5 8h5M5 8h14M5 8a5 5 0 01-5-5m0 0a5 5 0 015-5"/>
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                            </>
                                        )}
                                    </div>
                                </label>
                            </div>
                            <div className="flex justify-end">
                                <button type="button" className="text-gray-700 mr-2" onClick={closeModal}>Cancel</button>
                                <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-6 py-2.5" onClick={handleSubmit}>
                                    {currentVeggieId ? 'Update' : 'Add'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Veggies;
