import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";

import { FaSearch } from "react-icons/fa";
import { Link} from "react-router-dom"
import Dropdown from "./Dropdown.jsx";
import { useRef, useState,useEffect } from "react";


const Header = ({query,setQuery}) => 
{
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const [isOpen,setisOpen] = useState(false);
  

  const toggleDropdown = () => {
    setisOpen(!isOpen);
  }
  
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
          <form>
            <input type="text" placeholder="Search for products" value={query} onChange={(e)=> setQuery(e.target.value)}  />
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
        </Link>
        
      </div>
        </div>
      </div>
    </header>
  )
}

export default Header;