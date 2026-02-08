import { useState , useEffect} from "react";
import products from "./products.js"
import Product from "./Product.jsx";
const ProductList = () => {
    /*const [products,setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));

    },[]); */
    return(
        <div className="product-container">
            {products.map((product) => (
                <Product key={product.id} img={product.img} rating={product.rating} brand={product.brand} desc={product.desc} final={product.final} original={
                    product.original}  discount={product.discount}
                 />
            ))}
        </div>
    )
}
 

export default ProductList;