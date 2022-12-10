import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Products() {
    const [products, setProducts] = useState([]);
    const URL = 'http://localhost:3000/lopputyo/';

    useEffect(() => {
        console.log(URL);
        axios.get(URL + 'products/getproducts.php')
            .then((response) => {
                const json = response.data;
                setProducts(json);
            }).catch (error => {
                alert(error);
            })
    }, [])

return (
    <>
        <div>
            <h3>Tuotteet: </h3>
            {products.map(product => (
                <div key={product.product_id}>
                {product.product_name}
               </div>     
            ))}
        </div>
    </>
    );
};

export default Products;