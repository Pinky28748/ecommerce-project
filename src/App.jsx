
import SingleProduct from "./components/SingleProduct";
import Profile from "./components/Profile";
import Error from "./components/Error";
import { Routes,Route } from "react-router-dom";
import "./index.css";
import Wishlist from "./components/Wishlist";
import Bag from "./components/Bag";
import HomePage from "./components/HomePage";
import { useState } from "react";


function App() {
  const [cartItems,setcartItems] = useState([]);
  const addToCart = (product) => {
    setcartItems([...cartItems,product]);
  };
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setcartItems(updatedCart);
  } 
  
  return (
    <>
        
        
       
         <Routes>
             <Route path="/" element={<HomePage />} /> 
             <Route path="/profile" element={<Profile />} />
             <Route path="/wishlist" element={<Wishlist />} />
             <Route path="/bag" element={<Bag cartItems={cartItems} removeFromCart={removeFromCart} />} />
             <Route path="/product/:id" element={<SingleProduct addToCart={addToCart} />} />
            <Route path="*" element={<Error />} />
         </Routes>
      
      
    
      
      

    </>
  )
}

export default App
