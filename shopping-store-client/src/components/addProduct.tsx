import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/storeSlice'; // ייבוא הפעולה להוספת מוצר מה-slice

interface AddProductProps {
  categories: { id: string; name: string }[]; // הגדרה של פרופס קטגוריות
}

const AddProduct: React.FC<AddProductProps> = ({ categories }) => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState<string>(''); // שם המוצר
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // קטגוריה שנבחרה

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (productName && selectedCategory) {
      dispatch(addProduct({ id: Date.now().toString(), name: productName, category: selectedCategory }));
      setProductName('');
      setSelectedCategory('');
    } else {
      alert('אנא מלא את כל השדות!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="שם המוצר"
        required
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        required
      >
        <option value="">בחר קטגוריה</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <button type="submit">הוסף מוצר</button>
    </form>
  );
};

export default AddProduct;
