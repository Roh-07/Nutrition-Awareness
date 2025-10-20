import React, { useState } from "react";

const MealPlanner = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [dietType, setDietType] = useState("");
  const [plan, setPlan] = useState(null);

  const generatePlan = (e) => {
    e.preventDefault();
    setPlan({
      breakfast: "Oats with fruits & milk",
      lunch: "Grilled paneer/chicken with rice & veggies",
      dinner: "Mixed dal soup with roti & salad",
    });
  };

  const resetForm = () => {
    setAge("");
    setGender("");
    setActivityLevel("");
    setDietType("");
    setPlan(null);
  };

  return (
    <div className="min-h-screen bg-[#F3FFF6] flex justify-center items-center py-10 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-2">
          AI Meal Plan Generator
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Generate a personalized meal plan based on your details and preferences.
        </p>

        <form
          onSubmit={generatePlan}
          className="flex flex-col gap-4 text-gray-700"
        >
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select activity level</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>

          <input
            type="text"
            value={dietType}
            onChange={(e) => setDietType(e.target.value)}
            placeholder="e.g., vegetarian, non-veg, vegan"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <div className="flex justify-between mt-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Generate Plan
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
            >
              Reset
            </button>
          </div>
        </form>

        {plan && (
          <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              Your Meal Plan 🍽️
            </h3>
            <p><strong>Breakfast:</strong> {plan.breakfast}</p>
            <p><strong>Lunch:</strong> {plan.lunch}</p>
            <p><strong>Dinner:</strong> {plan.dinner}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealPlanner;
