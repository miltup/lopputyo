import React from 'react';
import axios from 'axios';

function Categories() {
    const [categories, setCategories] = useState([]);
    const URL = 'http://localhost/lopputyo/';

    useEffect(() => {
        console.log(URL);
        axios.get(URL + 'products/getcategories.php')
            .then((response) => {
                const json = response.data;
                setCategories(json);
                console.log(json);
            }).catch (error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }, [])
return (
<>
    <div>
    {categories.map(category => (
                <li>
                    <ul>
                    {'/products/' + category.category_id},{category.category_name}
                    </ul>
                </li>
            ))}
    </div>
</>
);
};

export default Categories;