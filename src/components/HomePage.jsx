import Footer from "./Footer";
import Header from "./Header";
import ProductList from "./ProductList";
import { useState } from "react";

const HomePage = () => {
    const [query,setQuery] = useState("");
    return(
        <>
        <Header query={query} setQuery={setQuery} />
        <ProductList query={query} />
        <Footer />
        </>
       
    )

}

export default HomePage;