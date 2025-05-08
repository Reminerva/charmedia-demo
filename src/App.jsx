import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ProductDetailPage from './pages/product/ProductDetailPage';
import NotFoundPage from './pages/error/NotFoundPage'; // Tambahkan ini

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/product/:productName" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Tambahkan ini */}
      </Routes>
    </Router>
  );
}

export default App;
