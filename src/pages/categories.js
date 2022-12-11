import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Categories() {
    const [categories, setCategories] = useState([]);
    const URL = 'http://localhost:3000/lopputyo/';

    useEffect(() => {
        axios.get(URL + 'products/getcategories.php')
            .then((response) => {
                const json = response.data;
                setCategories(json);
            }).catch (error => {
                alert(error);
            })
    }, [])
return (
<>
    <div>
        <h3>Tuoteryhmät:</h3>
        {categories.map(category => (
            <li key={category.category_id}>
            <Link to={'/products/' + category.category_id}>
            {category.category_name}
           </Link>
           </li>     
        ))}
    </div>
</>
);
};

export default Categories;