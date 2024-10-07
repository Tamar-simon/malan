import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const ProductList: React.FC = () => {
    const products = useSelector((state: RootState) => state.store.products);

    // Group products by category and count duplicates
    const groupedProducts = products.reduce((acc: any, product) => {
        const { category, name } = product;
        if (!acc[category]) {
            acc[category] = {};
        }
        if (!acc[category][name]) {
            acc[category][name] = 1;
        } else {
            acc[category][name] += 1;
        }
        return acc;
    }, {});

    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            {Object.keys(groupedProducts).map(category => (
                <div key={category} style={{ border: '1px solid black', padding: '10px', borderRadius: '5px' }}>
                    <h3>{category}</h3>
                    <ul>
                        {Object.keys(groupedProducts[category]).map(productName => (
                            <li key={productName}>
                                {productName} - {groupedProducts[category][productName]}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
