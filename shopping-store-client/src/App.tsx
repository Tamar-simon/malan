import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductWrapper from './components/ProductWrapper';
import OrderContact from './components/OrderContact';
import './styles.css';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductWrapper />} />
        <Route path="/shopping-list" element={<ProductWrapper />} />
        <Route path="/order-contact" element={<OrderContact />} />
      </Routes>
    </div>
  );
};

export default App;
