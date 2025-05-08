// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import productList from '../../assets/database/database'; // Sesuaikan path

function HomePage() {
  return (
    <div className='bg-[#FFF8F0] p-6 mx-1 min-h-screen'>
      <h1>Daftar Produk</h1>
      <ul>
        {productList.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.slug}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;