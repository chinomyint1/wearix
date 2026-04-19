import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="flex justify-between items-center p-4 shadow">
      <Link to="/" className="text-xl font-bold">Shop</Link>

      <Link to="/cart">
        Cart ({cart.length})
      </Link>
    </nav>
  );
}

export default Navbar;
