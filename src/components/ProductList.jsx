import { useState,useEffect } from "react";
import Product from "./Product";
const ProductList = () => {

 const [products,setProducts] = useState([]);

 useEffect(()=>{
   fetch("http://localhost:5000/api/products")
   .then(res => res.json())
   .then(data => setProducts(data));
 },[]);

 return(
   <div className="product-container">
     {products.map(product => (
       <Product key={product.id} {...product} />
     ))}
   </div>
 )
}
export default ProductList;