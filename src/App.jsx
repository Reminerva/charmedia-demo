// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ProductDetailPage from './pages/product/ProductDetailPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/product/:productName.html" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;