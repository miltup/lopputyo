import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
// import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import Categories from './pages/categories.js';
import Products from './pages/products.js';
//import Client from './pages/client.js';
import Cart from './pages/cart.js';
import Order from './pages/order.js';

const url ='http://localhost:3000/lopputyo/';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
   }, [])
   
   function addToCart(product) {
       const newCart = [...cart,product];
       setCart(newCart);
       localStorage.setItem('cart',JSON.stringify(newCart));
     }

   function removeFromCart(product) {
      const itemsWithoutRemoved = cart.filter(item => item.product_id !== product.product_id);
      setCart(itemsWithoutRemoved);
      localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
    }

  return (
    <>
    <h1>Tuoteryhmät ja tuotteet</h1>
    <Categories />
     <div className='container'>
        <Routes>
          <Route path="/products/:categoryId" element={<Products url={url} addToCart={addToCart}/>} />
        </Routes>
    </div>
    <h2>Ostoskori</h2>
    <div>
      <Cart cart={cart} />
    </div>
    <h3>Tilaus</h3>
    <div className='container'>
        <Routes>
          <Route path="/order" element={<Order cart={cart} removeFromCart={removeFromCart}/>} />
        </Routes>
    </div>
    </>
  );
}

export default App;
