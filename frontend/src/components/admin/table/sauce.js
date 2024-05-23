import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Sauce = () => {
    const [sauces, setSauces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [sauceName, setSauceName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [currentSauceId, setCurrentSauceId] = useState(null);

    useEffect(() => {
        fetchSauces();
    }, []);

    const fetchSauces = () => {
        axios.get('http://localhost:3001/api/sauces')
            .then(response => {
                setSauces(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching sauces:', error);
                setError('Error fetching sauces');
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
                axios.delete(`http://localhost:3001/api/sauces/${id}`)
                    .then(() => {
                        fetchSauces();
                        Swal.fire(
                            'Deleted!',
                            'Your sauce has been deleted.',
                            'success'
                        );
                    })
                    .catch(error => {
                        console.error('Error deleting sauce:', error);
                        Swal.fire(
                            'Error!',
                            'There was an error deleting the sauce.',
                            'error'
                        );
                    });
            }
        });
    };

    const handleEdit = (sauce) => {
        setModalTitle('Edit Sauce');
        setSauceName(sauce.sauceName);
        setQuantity(sauce.sauceQuantite);
        setImagePreview(`http://localhost:3001${sauce.sauceImage}`);
        setCurrentSauceId(sauce._id);
        setIsModalOpen(true);
    };

    const handleAddClick = () => {
        setModalTitle('Add New Sauce');
        setSauceName('');
        setQuantity('');
        setImageFile(null);
        setImagePreview('');
        setCurrentSauceId(null);
        setIsModalOpen(true);
    };

    const handleSubmit = async () => {
        try {
            if (!quantity || !sauceName || !imageFile) {
                Swal.fire('Error!', 'Please fill in all fields.', 'error');
                return;
            }

            const formData = new FormData();
            formData.append('sauceQuantite', quantity);
            formData.append('sauceName', sauceName);
            formData.append('sauceImage', imageFile);

            if (currentSauceId) {
                // Update existing sauce
                await axios.put(`http://localhost:3001/api/sauces/${currentSauceId}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                Swal.fire('Success!', 'Sauce has been updated successfully.', 'success');
            } else {
                // Add new sauce
                await axios.post('http://localhost:3001/api/sauces', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                Swal.fire('Success!', 'Sauce has been added successfully.', 'success');
            }

            fetchSauces();
            closeModal();
        } catch (error) {
            console.error('Error submitting sauce:', error.message);
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
        setSauceName('');
        setQuantity('');
        setImageFile(null);
        setImagePreview('');
        setCurrentSauceId(null);
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
                        <th scope="col" className="px-6 py-3">Sauce</th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">Quantity</div>
                        </th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {sauces.map((sauce, index) => (
                        <tr key={index} className="bg-white border-b hover:bg-gray-50">
                            <td className="p-4">
                                <img 
                                    src={`http://localhost:3001${sauce.sauceImage}`} 
                                    className="w-10 max-w-full max-h-full" 
                                    alt={sauce.sauceName} 
                                />                        
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900">{sauce.sauceName}</td>
                            <td className="px-6 py-4 font-semibold text-gray-900">{sauce.sauceQuantite}</td>
                            <td className="px-6 py-4">
                                <button
                                    className="font-medium text-red-600 hover:underline"
                                    onClick={() => handleRemove(sauce._id)}
                                >
                                    Remove
                                </button>
                                <button
                                    className="font-medium text-blue-600 hover:underline ms-2"
                                    onClick={() => handleEdit(sauce)}
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
                                    <label htmlFor="sauceName" className="block text-gray-700 mb-1">Sauce Name</label>
                                    <input 
                                        type="text" 
                                        id="sauceName"  
                                        value={sauceName}
                                        onChange={(e) => setSauceName(e.target.value)}
                                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                                        placeholder="Sauce Name"
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
                                            <img src={imagePreview} alt="Preview" className="max-h-24"/>
                                        ) : (
                                            <>
                                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18M13 8l4 4-4 4"></path></svg>
                                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500">PNG, JPG (MAX. 800x400px)</p>
                                            </>
                                        )}
                                    </div>
                                </label>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                    onClick={handleSubmit}
                                >
                                    {currentSauceId ? 'Update' : 'Add'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sauce;
