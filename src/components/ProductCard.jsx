import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="border p-4 rounded-xl shadow hover:scale-105 transition">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} className="w-full h-40 object-cover" />
        <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      </Link>

      <p>${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;