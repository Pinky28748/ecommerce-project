import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link} from "react-router-dom"
import { useState } from "react";


const Header = () => 
{
  const [query,setQuery] = useState("women")
  console.log(query)
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
          
        </div>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <form>
            <input type="text" placeholder="Search for products" value={query} onChange={(e) => {e.preventDefault()}} />
          </form>
        </div>
        <div className="icons">
          <div className="icon">
            <Link to="/profile" className="link-item">
              <FaUser />
        <span>Profile</span>
            </Link>
        
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