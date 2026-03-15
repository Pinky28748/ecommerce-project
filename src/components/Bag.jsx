const Bag = ({ cartItems, removeFromCart }) => {
  return (
    <div className="bag-container">
      <h2>Your Bag</h2>

      {cartItems.length === 0 ? (
        <p className="empty">Your bag is empty</p>
      ) : (
        <div className="bag-items">
          {cartItems.map((p) => (
            <div className="bag-item" key={p.id}>
              <img src={p.image} alt={p.title} />

              <div className="bag-info">
                <h4>{p.title}</h4>
                <p className="price">Rs.{p.price}</p>
                <button onClick={() => removeFromCart(p.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};



export default Bag;