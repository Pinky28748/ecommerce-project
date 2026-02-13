import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const {id} = useParams();
    const [products,setProducts]=useState(null);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    },[id]);

    if(!products)
    {
        return <h2>Loading...</h2>
    }
    return (
        <div className="single-product-container">
            <img src={products.image} alt="product image" />
            <h3>{products.title}</h3>
            <h3>{products.price}</h3>
            <h3>{products.category}</h3>

        </div>
    )

}
export default SingleProduct;