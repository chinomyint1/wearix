function Filter({ selectedCategory, onCategoryChange }) {
  const categories = ["All", "Shoes", "Clothing", "Accessories"];

  return (
    <div className="flex gap-4 mb-6">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded ${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Filter;