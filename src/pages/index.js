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
