import { useState , useEffect} from "react";

import Product from "./Product.jsx";
const ProductList = () => {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));

    },[]); 
    return(
        <div className="product-container">
            {products.map((product) => (
                <Product key={product.id} id={product.id} image={product.image} rating={product.rating} title={product.title} desc={product.desc} category={product.category} price={product.price}
                 />
            ))}
        </div>
    )
}
 

export default ProductList;