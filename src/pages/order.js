import React from 'react';
//import React,{useState,useEffect} from 'react';
import uuid from 'react-uuid';
import axios from 'axios';

function Order({cart, removeFromCart}) {
  let sum = 0;

  const client = (e) => {
    e.preventDefault();
   
    const url = 'http://localhost:3000/lopputyo/';

    const data = {
      fullname: e.target.fullname.value,
      street: e.target.street.value,
      zipcode: e.target.zipcode.value,
      city: e.target.city.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      cart: cart
    }
    console.log(data);
    axios.post(url + 'order/order.php', data
    ).then(res => {
      console.log(res);
      alert('Kiitos tilauksestasi!');
    }).catch(error => {
      alert(error.response === undefined ? error : error.response.data.error);
    });
  }

  return (
    <>
      <h3 className="header">Ostoskorin tuotteet:</h3>
      <table className="table">
        <tbody>
          {cart.map(product => {
            sum+=parseFloat(product.product_price);
            return (
              <tr key={uuid()}>
                <td>{product.product_name}</td>
                <td>{product.product_price} €</td>
                <td><a href="#" onClick={() => removeFromCart(product)}>Poista tuote</a></td>
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
      {cart.length > 0 &&
    <>
      <h5>Lisää tietosi, ole hyvä:</h5>
      <div className="container">
          <form onSubmit={client}>
          <div className="field">
              <label>Nimi: </label>
              <input type="text" name="fullname"/>
          </div>
          <div className="field">
              <label>Katuosoite: </label>
              <input type="text" name="street"/>
          </div>
          <div className="field">
              <label>Postinumero: </label>
              <input type="text" name="zipcode"/>
          </div>
            <div className="field">
              <label>Postitoimipaikka: </label>
              <input type="text" name="city" />
          </div>
          <div className="field">
              <label>Puhelinnumero: </label>
              <input type="text" placeholder="0401234567" name="phone" />
          </div>
          <div className="field">
              <label>Sähköpostiosoite: </label>
              <input type="text" placeholder="name@example.com" name="email"/>
          </div>
          <button variant="primary" type="submit">
              Syötä tiedot
          </button>
        </form>
      </div>
    </>
  }
  </>
  )
}

export default Order;