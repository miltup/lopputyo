import './App.css';
import React from 'react';
// import axios from 'axios';
import Categories from './pages/categories.js';
import Products from './pages/products.js';

function App() {
  return (
    <>
    <h1>Tuoteryhmät</h1>
    <Categories />
    <Products />
    </>
  );
}

export default App;
