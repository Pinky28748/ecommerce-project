import { FaUser, FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown.jsx";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  // --- Fetch suggestions with debounce ---
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim()) {
        fetch(`http://localhost:5000/api/suggestions?q=${encodeURIComponent(search)}`)
          .then(res => res.json())
          .then(data => setSuggestions(data))
          .catch(err => {
            console.error("Suggestions fetch error:", err);
            setSuggestions([]);
          });
      } else {
        setSuggestions([]);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [search]);

  // --- Handle Enter key ---
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (!search.trim()) return;
      setSuggestions([]);
      navigate(`/search?q=${encodeURIComponent(search)}`);
    }
  };

  // --- Handle click on suggestion ---
  const handleSuggestionClick = (value) => {
    setSearch(value);
    setSuggestions([]);
    navigate(`/search?q=${encodeURIComponent(value)}`);
  };

  // --- Toggle profile dropdown ---
  const toggleDropdown = () => setIsOpen(!isOpen);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <div className="container">
        {/* Navbar */}
        <div className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </div>

        {/* Search bar */}
        <div className="search-bar" style={{ position: "relative" }}>
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          {/* Suggestions dropdown */}
          {suggestions.length > 0 && (
            <ul className="dropdown">
              {suggestions.map((s, i) => (
                <li key={i} onClick={() => handleSuggestionClick(s)}>
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Icons */}
        <div className="icons">
          <div className="icon">
            <div className="link-item" onClick={toggleDropdown}>
              <FaUser />
              <span>Profile</span>
            </div>
            {isOpen && <Dropdown />}
          </div>

          <div className="icon">
            <Link to="/wishlist" className="link-item">
              <FaHeart />
              <span>Wishlist</span>
            </Link>
          </div>

          <div className="icon">
            <Link to="/bag" className="link-item">
              <FaShoppingBag />
              <span>Bag</span>
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;