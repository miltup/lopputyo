import React from 'react';
//import React,{useState,useEffect} from 'react';
import uuid from 'react-uuid';


function Order({cart, removeFromCart}) {
  let sum = 0;

  return (
    <div>
      <h3 className="header">Ostoskorin tuotteet:</h3>
      <table className="table">
        <tbody>
          {cart.map(product => {
            sum+=parseFloat(product.price);
            return (
              <tr key={uuid()}>
                <td>{product.product_name}</td>
                <td>{product.product_price} €</td>
                <td><a href="#" onClick={() => removeFromCart(product)}>Tyhjennä ostoskori</a></td>
              </tr>
            )
            })}
          <tr key={uuid()}>
            <td></td>
            <td>{sum.toFixed(2)} €</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Order;