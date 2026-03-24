import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Product from "./Product";

const SearchResults = () => {
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q"); // get query from URL

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    fetch(`http://localhost:5000/api/search?q=${encodeURIComponent(query)}`)
      .then(res => res.json())
      .then(data => {
        setFiltered(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Search fetch error:", err);
        setFiltered([]);
        setLoading(false);
      });

  }, [query]);

  return (
    <div className="product-container">
      <h2>Search Results for "{query}"</h2>

      {loading ? (
        <h3>Loading...</h3>
      ) : filtered.length > 0 ? (
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