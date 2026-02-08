import {FaStar} from "react-icons/fa";
import {Link} from "react-router-dom";

const Product = ({id,img,rating,brand,desc,final,original,discount}) => {
 
  return (
  <Link to={`/product/${id}`} style={{textDecoration:"none",color:"inherit"}} >
    <div className="product-card">
      <div className="img-container">
        <img
          src={img}
          alt="product"
        />
        <div className="rating">
        <span>{rating}</span>
        <FaStar className="star" />
      </div>
      </div>
      

      <div className="product-info">
        <span className="brand">{brand}</span>
        <span className="desc">{desc}</span>

        <div className="price">
          <span className="final">Rs.{final}</span>
          <span className="original"><strike>Rs.{original}</strike></span>
          <span className="discount">({discount})</span>
        </div>
      </div>
      
    </div>
   
  </Link>
      
    
    
  );
}; 
/*id,title , price , description , category , image */

/*const Product = ({title,price,desc,cat,img}) => {
  return (
    <div className="product-card">
      <div className="img-container">
        <img
          src={img}
          alt="product"
        />
        
      </div>
      

      <div className="product-info">
        <span className="brand">{cat}</span>
        <span className="title">{title}</span>
        <span className="desc">{desc}</span>

        <div className="price">
          <span className="final">{price}</span>
          
        </div>
      </div>
      
    </div>

  )
}*/

export default Product;
