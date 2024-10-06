import React from 'react';
import { useSelector } from 'react-redux';

const ShoppingSummary: React.FC = () => {
    const products = useSelector((state: any) => state.shoppingList.products);

    return (
        <div>
            <h2>סיכום רכישות</h2>
            {products.length === 0 ? (
                <p>לא הוספת מוצרים עדיין.</p>
            ) : (
                <ul>
                    {products.map((product: any) => (
                        <li key={product.id}>
                            {product.name} - {product.category}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ShoppingSummary;
