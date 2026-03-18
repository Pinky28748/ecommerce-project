import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {

  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>

      {cart.map(item => (

        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Qty: {item.quantity}</p>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>

        </div>

      ))}

    </div>
  );
};

export default Cart;