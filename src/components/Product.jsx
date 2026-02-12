import {FaStar} from "react-icons/fa";
import {Link} from "react-router-dom";
/* id,title , price , desc , category , img  , rate , count*/

const Product = ({id,image,rating,title,desc,category,price}) => {
  const {rate , count} = rating || {};
 
  return (
  <Link to={`/product/${id}`} style={{textDecoration:"none",color:"inherit"}} >
    <div className="product-card">
      <div className="img-container">
        <img
          src={image}
          alt="product"
        />
        <div className="rating">
        <span>{rating.rate}</span>
        <FaStar className="star" />
        <span>{rating.count}</span>
      </div>
      </div>
      

      <div className="product-info">
        <span className="brand">{title}</span>
        <span className="desc">{desc}</span>
        <span >{category}</span>

        <div className="price">
          <span className="final">Rs.{price}</span>
          
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
