import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";

import { FaSearch } from "react-icons/fa";
import { Link} from "react-router-dom"
import Dropdown from "./Dropdown.jsx";
import { useRef, useState,useEffect, use } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const Header = () => 
{
  const {cart} = useContext(CartContext);
  const [search,setSearch] = useState("");
  const navigate = useNavigate();
  const handleKeyDown = (e) => {
    if(e.key === "Enter")
    {
      navigate(`/search?q=${search}`);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const [isOpen,setisOpen] = useState(false);
  

  const toggleDropdown = () => {
    setisOpen(!isOpen);
  }
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <ul>
            
            <li>
              <Link to="/">
               Home
              </Link>
             
              </li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
          
        </div>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <form onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder="Search for products" value={search} onChange={(e)=> setSearch(e.target.value)} onKeyDown={handleKeyDown}  />
          </form>
        </div>
        <div className="icons">
          <div className="icon" >
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
  )
}

export default Header;