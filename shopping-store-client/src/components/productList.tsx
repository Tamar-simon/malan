import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store'; // עדכן את הנתיב בהתאם

const ProductList: React.FC = () => {
    const products = useSelector((state: RootState) => state.store.products); // שליפת מוצרים מתוך ה-state

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
