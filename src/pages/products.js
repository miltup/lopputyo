import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Products({url, addToCart}) {
    const [categoryName, setCategoryName] = useState('');
    const [products, setProducts] = useState([]);
    //const url = 'http://localhost:3000/lopputyo/';

    let params = useParams();

    useEffect(() => {
        axios.get(url + 'products/getproducts.php/' + params.categoryId)
            .then(response => {
                const json = response.data;
                setCategoryName(json.category);
                setProducts(json.products);
            }).catch (error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }, [params, url])
return (
    <>
        <div>
            <h3>Tuoteryhmä: {categoryName.category_name}</h3>
            <ul>
            {products.map(product => 
                <li key={product.product_id}>
                {product.product_name}
                <button type='button' onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
               </li>
            )}
            </ul>
        </div>
    </>
    );
};

export default Products;
