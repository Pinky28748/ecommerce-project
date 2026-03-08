import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const SingleProduct = ({addToCart}) => {
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
        <>
        <Header />
        <div className="single-product-container">
            <div className="single-img-container">
               <img src={products.image} alt="product image" />
            </div>
            <div className="product-details">
               <h3 className="title">{products.title}</h3>
            <h3 className="price">Rs.{products.price}</h3>
            <h3 className="category">{products.category}</h3>
            <div className="single-product-button">
                <button className="bag-button" onClick={() => {addToCart(products)}}>ADD TO BAG</button>
                <button className="wish-button">WISHLIST</button>
            </div>
            </div>
        </div>
        <Footer />
        </>
        
    )

}
export default SingleProduct;