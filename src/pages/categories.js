import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Categories() {
    const [categories, setCategories] = useState([]);
    const URL = 'http://localhost:3000/lopputyo/';

    useEffect(() => {
        console.log(URL);
        axios.get(URL + 'products/getcategories.php')
            .then((response) => {
                const json = response.data;
                setCategories(json);
                console.log(json);
            }).catch (error => {
                alert(error);
            })
    }, [])
return (
<>
    <div>
        <h3>Tuoteryhmät:</h3>
        {categories.map(category => (
            <div key={category.category_id}>
            {category.category_name}
           </div>     
        ))}
    </div>
</>
);
};

export default Categories;