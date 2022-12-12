import React from 'react';
import axios from 'axios';

function Admin() {

    const addCategory = (e) => {
        e.preventDefault();

        const URL = 'http://localhost:3000/lopputyo/';

        const data = {
          category_name: e.target.category_name.value
        }
        axios.post(URL + 'admin/addcategories.php', data)
        .then(response => {
            console.log(response);
            alert('Tuoteryhmä lisätty.')
        })
        .catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
      }

    return (
    <>
    <div className="container">
        <form onSubmit={addCategory}>
            <div>
            <label>Tuoteryhmän nimi</label>
            <input type="text" placeholder="Lisää tuoteryhmän nimi" name="category_name" />
            </div>
            <button variant="primary" type="submit">Lisää tuoteryhmä</button>
        </form>
    </div>
    </>
    );
} 

export default Admin;