import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store'; // עדכן את הנתיב בהתאם
import AddProduct from 'components/addProduct';
import ProductList from 'components/productList';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Shopping List</h1>
                <AddProduct />
                <ProductList />
            </div>
        </Provider>
    );
};

export default App;
