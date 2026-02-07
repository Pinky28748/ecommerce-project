import Footer from "./components/Footer"
import Header from "./components/Header"
import ProductList from "./components/ProductList"
import SingleProduct from "./components/SingleProduct";
import Error from "./components/Error";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./index.css";


function App() {
  

  return (
    <>
        <Header />
        
       <BrowserRouter>
         <Routes>
             <Route path="/" element={<ProductList />} />
             <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </BrowserRouter> 
      <Footer />
    
      
      

    </>
  )
}

export default App
