import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

function Home() {
  const { addToCart } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="p-6">
      <Filter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
