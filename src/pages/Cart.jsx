import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {cart.map(item => (
        <div key={item.id} className="flex justify-between items-center mb-4">
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
      ))}

      <h2 className="text-xl font-bold mt-6">
        Total: ${total.toFixed(2)}
      </h2>
    </div>
  );
}

export default Cart;