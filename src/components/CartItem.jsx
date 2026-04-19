import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <p>{item.name}</p>
        <p>${item.price}</p>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;