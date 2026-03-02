import { useState , useEffect} from "react";

import Product from "./Product.jsx";
const ProductList = ({query}) => {
    const [products,setProducts] = useState([]);
    const [filteredProduct,setFilteredProducts] = useState([]);
    const [debounceQuery,setDebouncedQuery] = useState(query);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {setProducts(data);
        setFilteredProducts(data);
    });


    },[]); 
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500); // 500ms delay

        return () => {
            clearTimeout(timer); // cleanup previous timer
        };
    }, [query]);
    useEffect(() => {
    const result = products.filter((product) =>
        product.title.toLowerCase().includes(debounceQuery.toLowerCase())
    );

    setFilteredProducts(result);
}, [debounceQuery, products]);
    return(
        <div className="product-container">
            {filteredProduct.map((product) => (
                <Product key={product.id} id={product.id} image={product.image} rating={product.rating} title={product.title} desc={product.desc} category={product.category} price={product.price}
                 />
            ))}
        </div>
    )
}
 

export default ProductList;