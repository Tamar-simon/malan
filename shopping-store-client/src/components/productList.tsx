import React from 'react';

interface ProductListProps {
    products: { id: string, name: string, category: string }[]; // הגדרת סוג המוצרים
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div>
            <h5>{ JSON.stringify(products)}</h5>
            <h2>Product List</h2>
            {products.length > 0 ? (
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            {product.name} - {product.category}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
};

export default ProductList;
