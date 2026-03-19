
import SingleProduct from "./components/SingleProduct";
import Profile from "./components/Profile";
import Error from "./components/Error";
import { Routes,Route } from "react-router-dom";
import "./index.css";
import Wishlist from "./components/Wishlist";
import Bag from "./components/Bag";
import HomePage from "./components/HomePage";
import { useState } from "react";
import SearchResults from "./components/SearchResults";
import { CartProvider } from "./context/CartContext";


function App() {
  /* const [cartItems,setcartItems] = useState([]);
  const addToCart = (product) => {
    setcartItems([...cartItems,product]);
  };
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setcartItems(updatedCart);
  } */
  
  return (
    <>
        <CartProvider>
          <Routes>
             <Route path="/" element={<HomePage />} /> 
             <Route path="/profile" element={<Profile />} />
             <Route path="/wishlist" element={<Wishlist />} />
             <Route path="/bag" element={<Bag />} />
             <Route path="/product/:id" element={<SingleProduct />} />
             <Route path="/search" element={<SearchResults />} />
            <Route path="*" element={<Error />} />
         </Routes>

        </CartProvider>
        
       
         
      
      
    
      
      

    </>
  )
}

export default App
