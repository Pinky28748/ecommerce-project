import Footer from "./components/Footer"
import Header from "./components/Header"
import ProductList from "./components/ProductList"
import SingleProduct from "./components/SingleProduct";
import Profile from "./components/Profile";
import Error from "./components/Error";
import { Routes,Route } from "react-router-dom";
import "./index.css";


function App() {
  

  return (
    <>
        <Header />
        
       
         <Routes>
             <Route path="/" element={<ProductList />} />
             <Route path="/profile" element={<Profile />} />
             <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="*" element={<Error />} />
         </Routes>
      
      <Footer />
    
      
      

    </>
  )
}

export default App
