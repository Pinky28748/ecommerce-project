

const Product = ({img,brand,desc,final,original,discount}) => {
 
  return (
  
      <div className="product-card">
      <div className="img-container">
        <img
          src={img}
          alt="product"
        />
      </div>

      <div className="product-info">
        <span className="brand">{brand}</span>
        <span className="desc">{desc}</span>

        <div className="price">
          <span className="final">{final}</span>
          <span className="original"><strike>{original}</strike></span>
          <span className="discount">({discount})</span>
        </div>
      </div>
      
    </div>
   
    
    
  );
};

export default Product;
