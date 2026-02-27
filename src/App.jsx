import Footer from "./components/Footer"
import Header from "./components/Header"
import ProductList from "./components/ProductList"
import SingleProduct from "./components/SingleProduct";
import Profile from "./components/Profile";
import Error from "./components/Error";
import { Routes,Route } from "react-router-dom";
import "./index.css";
import Wishlist from "./components/Wishlist";
import Bag from "./components/Bag";


function App() {
  

  return (
    <>
        <Header />
        
       
         <Routes>
             <Route path="/" element={<ProductList />} /> 
             <Route path="/profile" element={<Profile />} />
             <Route path="/wishlist" element={<Wishlist />} />
             <Route path="/bag" element={<Bag />} />
             <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="*" element={<Error />} />
         </Routes>
      
      <Footer />
    
      
      

    </>
  )
}

export default App
