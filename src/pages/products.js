import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Products({url}) {
    const [categoryName, setCategoryName] = useState('');
    const [products, setProducts] = useState([]);
    //const url = 'http://localhost:3000/lopputyo/';

    let params = useParams();

    useEffect(() => {
        console.log(url);
        axios.get(url + 'products/getproducts.php/' + params.categoryId)
            .then(response => {
                const json = response.data;
                console.log(json);
                setCategoryName(json.category);
                setProducts(json.products);
                console.log(json.category);
                console.log(json.products);
            }).catch (error => {
                alert(error);
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
               </li>
            )}
            </ul>
        </div>
    </>
    );
};

export default Products;
