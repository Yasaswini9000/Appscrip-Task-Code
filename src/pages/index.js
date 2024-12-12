import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';
import Head from 'next/head';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    }
    fetchProducts();
  }, []);
  return (
    <>
      <Head>
        <title>Discover Our Products</title>
        <meta name="description" content="Discover and explore our wide range of products." />
      </Head>

      <div className="main-container">
        <header>
          <h1>Discover Our Products</h1>
          <button className="filter-toggle" onClick={() => setFiltersVisible(!filtersVisible)}>
            {filtersVisible ? 'Hide Filters' : 'Show Filters'}
          </button>
        </header>
        <div className="content">
          {filtersVisible && <FilterSidebar />}
          <div className="product-list">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <footer>
          <div className="footer-content">
            <p>Contact Us</p>
            <p>Follow Us: [Social Media Links]</p>
          </div>
        </footer>
      </div>
    </>
  );
}
