import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import { RootState } from '../store/store'; 

const ProductWrapper: React.FC = () => {
    const [categories, setCategories] = useState<{ id: string, name: string }[]>([]); 
    const products = useSelector((state: RootState) => state.store.products); 

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
        <div>
            <h1>Product Management</h1>
            <AddProduct categories={categories} /> 
            <ProductList products={products} /> 
        </div>
    );
};

export default ProductWrapper;
