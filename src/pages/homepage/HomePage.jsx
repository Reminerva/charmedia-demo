// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { productList } from '../../assets/database/database'; // Sesuaikan path

function HomePage() {
  return (
    <div>
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