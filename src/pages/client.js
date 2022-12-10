import React from 'react';
import axios from 'axios';

function Client() {

  const order = (e) => {
    e.preventDefault();
   
    const url = 'http://localhost:3000/lopputyo/';

    const data = {
      fullname: e.target.fullname.value,
      street: e.target.street.value,
      zipcode: e.target.zipcode.value,
      city: e.target.city.value,
      phone: e.target.phone.value,
      email: e.target.email.value
    }
    
    axios.post(url + 'order/client.php', data
    ).then(res => {
      console.log(res);
      alert('Kiitos tiedoista!');
    }).catch(error => {
      alert(error);
    });
  }

    return (
        <>
        <h5>Lisää tietosi, ole hyvä:</h5>
        <div className="container">
        <form onSubmit={order}>
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
    );
}

export default Client;