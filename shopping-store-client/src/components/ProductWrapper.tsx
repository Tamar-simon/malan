import React, { useState, useEffect } from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import {  useSelector } from 'react-redux';
import { RootState } from '../store/store'; // Import RootState


const ProductWrapper: React.FC = () => {
    const navigate = useNavigate(); // Hook to navigate to different routes
    const [categories, setCategories] = useState<{ id: string; name: string; }[]>([]); // Local state for categories
    const selectedProducts = useSelector((state: RootState) => state.store.products); // Get selected products from the store


    // Fetch categories from an API (or mock)
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/categories'); // Use your API here
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Shopping List</h1>
            <AddProduct categories={categories} />
            <ProductList />
            {selectedProducts.length>0&&<button onClick={() => navigate('/order-contact')} style={{ marginTop: '20px' }}>
                Go to Order Contact
            </button>}
        </div>
    );
};

export default ProductWrapper;
