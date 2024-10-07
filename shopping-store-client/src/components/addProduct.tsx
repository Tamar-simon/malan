import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/storeSlice';

interface AddProductProps {
    categories: { id: string; name: string; }[];
}

const AddProduct: React.FC<AddProductProps> = ({ categories }) => {
    const dispatch = useDispatch();
    const [productName, setProductName] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (productName && selectedCategory) {
            dispatch(addProduct({ id: Date.now().toString(), name: productName, category: selectedCategory }));
            setProductName('');
            setSelectedCategory('');
        } else {
            alert("Please fill in all fields");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input 
                type="text" 
                value={productName} 
                onChange={(e) => setProductName(e.target.value)} 
                placeholder="שם מוצר" 
                required 
            />
            <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)} 
                required
            >
                <option value="">בחר קטגוריה</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.name}>{category.name}</option>
                ))}
            </select>
            <button type="submit">הוסף</button>
        </form>
    );
};

export default AddProduct;
