import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-6">
      <img src={product.image} className="w-full h-60 object-cover" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-lg">${product.price}</p>
      <p>Category: {product.category}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;