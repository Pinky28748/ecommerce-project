import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


const Header = () => 
{
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
            <input type="text" placeholder="Search for products" />
          </form>
        </div>
        <div className="icons">
          <div className="icon">
        <FaUser />
        <span>Profile</span>
      </div>

      <div className="icon">
        <FaHeart />
        <span>Wishlist</span>
      </div>

      <div className="icon">
        <FaShoppingBag />
        <span>Bag</span>
      </div>
        </div>
      </div>
    </header>
  )
}

export default Header;