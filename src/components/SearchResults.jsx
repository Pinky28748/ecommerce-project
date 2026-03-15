import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Product from "./Product";

const SearchResults = () => {

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  // Fetch products
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  // Search filtering
  useEffect(() => {

    if (!query) {
      setFiltered(products);
      return;
    }

    const cleanQuery = query.toLowerCase().trim();
    const words = cleanQuery.split(" ");

    const result = products.filter(product =>
      words.some(word =>
        product.title.toLowerCase().includes(word)
      )
    );

    setFiltered(result);

  }, [query, products]);

  return (
    <div className="product-container">

      

      {filtered.length > 0 ? (
        filtered.map(product => (
          <Product key={product.id} {...product} />
        ))
      ) : (
        <h3>No products found</h3>
      )}

    </div>
  );
};

export default SearchResults;