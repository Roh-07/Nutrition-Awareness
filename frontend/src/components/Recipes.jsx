import React, { useState } from "react";

const recipesData = [
  {
    id: 1,
    name: "Masala Dosa",
    image: "DO it",
    category: "Breakfast",
    time: "30 min",
    servings: 4,
    calories: 250,
    tags: ["South Indian", "Vegetarian", "Gluten-free"],
    ingredients: ["Rice batter", "Urad dal", "Potato", "Onion", "Turmeric", "Mustard seeds"],
    instructions: [
      "Prepare batter overnight",
      "Make thin crispy dosa",
      "Add potato masala filling",
      "Serve hot with chutney",
    ],
  },
  {
    id: 2,
    name: "Dal Tadka",
    image: "/images/daltadka.jpg",
    category: "Lunch",
    time: "25 min",
    servings: 4,
    calories: 180,
    tags: ["North Indian", "Protein-rich", "Vegan"],
    ingredients: ["Toor dal", "Onion", "Garlic", "Ghee", "Cumin seeds", "Turmeric"],
    instructions: [
      "Boil dal with turmeric",
      "Prepare tadka with ghee, cumin, and garlic",
      "Mix tadka with dal and simmer for 5 minutes",
      "Serve hot with rice",
    ],
  },
  {
    id: 3,
    name: "Paneer Tikka",
    image: "Paneer-Tikka-Featured-1.jpg",
    category: "Snacks",
    time: "20 min",
    servings: 3,
    calories: 220,
    tags: ["High-protein", "Vegetarian", "Party Food"],
    ingredients: ["Paneer cubes", "Yogurt", "Spices", "Bell peppers", "Onion"],
    instructions: [
      "Marinate paneer in yogurt and spices",
      "Grill or bake until golden",
      "Serve hot with mint chutney",
    ],
  },
  {
    id: 4,
    name: "Poha",
    image: "/images/poha.jpg",
    category: "Breakfast",
    time: "15 min",
    servings: 2,
    calories: 200,
    tags: ["Quick", "Light", "Gluten-free"],
    ingredients: ["Poha", "Onion", "Mustard seeds", "Green chilies", "Lemon juice"],
    instructions: [
      "Rinse poha lightly and drain",
      "Fry mustard seeds, onion, and chilies",
      "Add poha and stir for 5 minutes",
      "Garnish with lemon and coriander",
    ],
  },
  {
    id: 5,
    name: "Vegetable Thali",
    image: "/images/thali.jpg",
    category: "Lunch",
    time: "45 min",
    servings: 2,
    calories: 450,
    tags: ["Complete meal", "Balanced", "Traditional"],
    ingredients: ["Rice", "Roti", "Curry", "Dal", "Vegetables", "Curd"],
    instructions: [
      "Prepare individual dishes like dal, sabzi, rice, and roti",
      "Serve together with curd and pickle",
      "Enjoy a balanced Indian meal",
    ],
  },
  {
    id: 6,
    name: "Samosa",
    image: "/images/samosa.jpg",
    category: "Snacks",
    time: "35 min",
    servings: 6,
    calories: 150,
    tags: ["Fried", "Popular", "Tea-time"],
    ingredients: ["Potatoes", "Peas", "Spices", "Flour", "Oil"],
    instructions: [
      "Prepare spicy potato filling",
      "Fill pastry dough and fold into triangles",
      "Deep fry until golden",
      "Serve with chutney",
    ],
  },
];

const Recipes = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes =
    selectedCategory === "All"
      ? recipesData
      : recipesData.filter((recipe) => recipe.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-12 px-6 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center">
        🥗 Healthy Indian Recipes
      </h2>
      <p className="text-gray-600 mb-8 text-center">
        Discover delicious and nutritious recipes from across India
      </p>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {["All", "Breakfast", "Lunch", "Snacks"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              selectedCategory === cat
                ? "bg-green-500 text-white border-green-500"
                : "border-gray-300 text-gray-700 hover:bg-green-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Recipe Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md border-t-4 border-green-100 overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md font-medium">
                {recipe.category}
              </span>
              <h3 className="text-lg font-semibold mt-2 text-gray-800">
                {recipe.name}
              </h3>

              <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                <span>⏱ {recipe.time}</span>
                <span>👥 {recipe.servings}</span>
                <span>🔥 {recipe.calories} kcal</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {recipe.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-green-50 text-green-700 px-2 py-1 text-xs rounded-md border border-green-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* ✅ Clean White Button */}
              <button
                onClick={() => setSelectedRecipe(recipe)}
                className="mt-4 w-full border border-green-500 text-green-600 font-semibold rounded-lg py-2 text-sm bg-white hover:bg-green-100 hover:text-green-700 hover:shadow-sm transition duration-300"
              >
                View Recipe →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full relative overflow-y-auto max-h-[80vh]">
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-lg"
              onClick={() => setSelectedRecipe(null)}
            >
              ✖
            </button>
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {selectedRecipe.name}
            </h3>
            <div className="flex gap-4 text-sm text-gray-600 mb-4">
              <span>⏱ {selectedRecipe.time}</span>
              <span>👥 {selectedRecipe.servings}</span>
              <span>🔥 {selectedRecipe.calories} kcal</span>
            </div>

            <h4 className="font-semibold text-gray-700 mb-1">Ingredients</h4>
            <ul className="list-disc pl-5 text-gray-600 text-sm mb-3">
              {selectedRecipe.ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>

            <h4 className="font-semibold text-gray-700 mb-1">Instructions</h4>
            <ol className="list-decimal pl-5 text-gray-600 text-sm space-y-1">
              {selectedRecipe.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;
