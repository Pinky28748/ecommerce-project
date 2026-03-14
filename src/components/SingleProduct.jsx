import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const SingleProduct = ({addToCart,price}) => {
    const {id} = useParams();
    const [products,setProducts]=useState(null);
    const [quantity,setquantity] = useState(1);
    
    
    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${id}`)
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
                <div className="btn-add">
                <button className="add" onClick={() => setquantity(e=>e>=10 ? e : e+1)} >+</button>
                <span>{quantity}</span>
                {quantity===1 ? (
                    <button onClick={() => setquantity(0)}>Delete</button>
                ) : (
                    <button className="minus" onClick={() => setquantity(e=>e<=1 ? e : e-1)}>-</button>
                )}
                
                </div>
               {quantity>1 && <h3>Total price : Rs.{(products.price*quantity).toFixed(2)}</h3>}
            </div>
            </div>
        </div>
        <Footer />
        </>
        
    )

}
export default SingleProduct;