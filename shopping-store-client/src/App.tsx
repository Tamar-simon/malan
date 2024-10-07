import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductWrapper from './components/ProductWrapper';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductWrapper />} />
        <Route path="/shopping-list" element={<ProductWrapper />} />
        {/* <Route path="/order-summary" element={<OrderSummary />} /> */}
      </Routes>
    </div>
  );
};

export default App;
