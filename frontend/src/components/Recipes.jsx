import React from "react";

const Recipes = () => {
  const recipes = [
    { name: "Vegetable Khichdi", calories: "320 kcal", img: "/recipes/khichdi.jpg" },
    { name: "Paneer Salad", calories: "250 kcal", img: "/recipes/salad.jpg" },
    { name: "Fruit Smoothie", calories: "180 kcal", img: "/recipes/smoothie.jpg" },
  ];

  return (
    <section id="recipes" className="bg-green-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold text-green-800 mb-8">Healthy Indian Recipes</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {recipes.map((r, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition">
            <img src={r.img} alt={r.name} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="font-semibold text-lg text-green-800">{r.name}</h3>
              <p className="text-gray-600">{r.calories}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recipes;