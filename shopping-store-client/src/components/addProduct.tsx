import React, { useState, useEffect } from 'react'; // Import React and hooks
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/storeSlice'; // Update the import path as needed

interface Category {
    id: string; // Unique identifier for each category
    name: string; // Name of the category
}

const AddProduct: React.FC = () => {
    const dispatch = useDispatch();
    const [productName, setProductName] = useState<string>(''); // State for product name
    const [selectedCategory, setSelectedCategory] = useState<string>(''); // State for selected category
    const [categories, setCategories] = useState<Category[]>([]); // State for categories

    // Fetch categories from API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/categories'); // Adjust the API endpoint as needed
                if (!response.ok) {
                    throw new Error('Network response was not ok'); // Error handling
                }
                const data: Category[] = await response.json(); // Parse JSON data
                setCategories(data); // Update categories state
            } catch (error) {
                console.error("Failed to fetch categories:", error); // Log errors to the console
            }
        };

        fetchCategories(); // Call the fetch function
    }, []);

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission behavior

        if (productName && selectedCategory) {
            // Dispatch action to add product with a unique ID
            dispatch(addProduct({ id: Date.now().toString(), name: productName, category: selectedCategory }));
            setProductName(''); // Reset product name input
            setSelectedCategory(''); // Reset selected category
        } else {
            alert("Please fill in all fields!"); // Alert user if fields are empty
        }
    };

    return (
        <form onSubmit={handleSubmit}> {/* Correctly attach the handleSubmit function */}
            <input 
                type="text" 
                value={productName} 
                onChange={(e) => setProductName(e.target.value)} 
                placeholder="Product Name" 
                required // Make the input required
            />
            <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)} 
                required // Make the select required
            >
                <option value="">Select a category</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct; // Export the component
