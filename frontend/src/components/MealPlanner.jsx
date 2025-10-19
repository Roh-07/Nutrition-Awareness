import React from "react";

const MealPlanner = () => {
  const meals = [
    { time: "Breakfast", meal: "Oats with Fruits", calories: "300 kcal" },
    { time: "Lunch", meal: "Brown Rice with Dal", calories: "450 kcal" },
    { time: "Dinner", meal: "Vegetable Soup & Roti", calories: "350 kcal" },
  ];

  return (
    <section id="meal" className="bg-green-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold text-green-800 mb-8">Personalized Meal Plans</h2>
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3">
        {meals.map((m, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-green-700 font-semibold text-lg">{m.time}</h3>
            <p className="text-gray-700 mt-2">{m.meal}</p>
            <p className="text-sm text-gray-500">{m.calories}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MealPlanner;