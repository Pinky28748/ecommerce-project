import { useState , useEffect} from "react";

import Product from "./Product.jsx";
const ProductList = ({query}) => {
    const [products,setProducts] = useState([]);
    const [filteredProduct,setFilteredProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {setProducts(data);
        setfilteredProducts(data);
    });


    },[]); 
    useEffect(() => {
    const result = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(result);
}, [query, products]);
    return(
        <div className="product-container">
            {filteredProduct.map((product) => (
                <Product key={product.id} id={product.id} image={product.image} rating={product.rating} title={product.title} desc={product.desc} category={product.category} price={product.price}
                 />
            ))}
        </div>
    )
}
 

export default ProductList;