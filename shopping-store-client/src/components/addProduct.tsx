import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/storeSlice'; // הוספת מוצר ל-Redux

interface AddProductProps {
    categories: { id: string, name: string }[]; // הגדרת סוג הנתונים עבור הקטגוריות
}

const AddProduct: React.FC<AddProductProps> = ({ categories }) => {
    const dispatch = useDispatch();
    const [productName, setProductName] = useState<string>(''); // state עבור שם המוצר
    const [selectedCategory, setSelectedCategory] = useState<string>(''); // state עבור קטגוריה

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (productName && selectedCategory) {
            // שליחת פעולה ל-Redux להוספת המוצר
            dispatch(addProduct({ id: Date.now().toString(), name: productName, category: selectedCategory }));
            setProductName(''); // איפוס שם המוצר
            setSelectedCategory(''); // איפוס הקטגוריה
        } else {
            alert("Please fill in all fields!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Product Name"
                required
            />
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                required
            >
                <option value="">Select a category</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
