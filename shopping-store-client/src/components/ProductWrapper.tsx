import React, { useState, useEffect } from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import { useNavigate } from 'react-router-dom'; 
import {  useSelector } from 'react-redux';
import { RootState } from '../store/store';


const ProductWrapper: React.FC = () => {
    const navigate = useNavigate(); 
    const [categories, setCategories] = useState<{ id: string; name: string; }[]>([]); 
    const selectedProducts = useSelector((state: RootState) => state.store.products); 

    // Fetch categories from an API (or mock)
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/categories'); 
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
            <h1>רשימת קניות</h1>
            <AddProduct categories={categories} />
            <ProductList />
            {selectedProducts.length>0&&<button onClick={() => navigate('/order-contact')} style={{ marginTop: '20px' }}>
               המשך להזמנה
            </button>}
        </div>
    );
};

export default ProductWrapper;
