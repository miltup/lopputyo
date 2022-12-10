import './App.css';
import React from 'react';
// import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import Categories from './pages/categories.js';
import Products from './pages/products.js';
import Client from './pages/client.js';

const url ='http://localhost:3000/lopputyo/';

function App() {
  return (
    <>
    <h1>Tuoteryhmät ja tuotteet</h1>
    <Categories />
     <div className='container'>
        <Routes>
          <Route path="/products/:categoryId" element={<Products url={url}/>} />
        </Routes>
    </div>
    <h2>Asiakas</h2>
    <Client />
    </>
  );
}

export default App;
