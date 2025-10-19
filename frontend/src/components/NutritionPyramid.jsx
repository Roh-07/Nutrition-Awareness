import React, { useState } from "react";

const pyramidData = [
  {
    label: "Fats, Oils & Sweets",
    servings: "Use Sparingly",
    color: "bg-yellow-400",
    details: {
      title: "Fats, Oils & Sweets",
      text: "Use these sparingly. High in calories but low in nutrients.",
      examples: "Butter, sweets, fried foods, oils",
    },
  },
  {
    label: "Milk & Dairy",
    servings: "2–3 servings/day",
    color: "bg-sky-300",
    details: {
      title: "Milk & Dairy",
      text: "Provide calcium and protein for bone and muscle health.",
      examples: "Milk, yogurt, cheese",
    },
  },
  {
    label: "Protein Foods",
    servings: "2–3 servings/day",
    color: "bg-red-400",
    details: {
      title: "Protein Foods",
      text: "Help build and repair body tissues.",
      examples: "Eggs, fish, chicken, beans",
    },
  },
  {
    label: "Vegetables",
    servings: "3–5 servings/day",
    color: "bg-green-500",
    details: {
      title: "Vegetables",
      text: "Packed with vitamins, minerals, and fiber.",
      examples: "Spinach, tomatoes, carrots, broccoli",
    },
  },
  {
    label: "Fruits",
    servings: "2–4 servings/day",
    color: "bg-orange-500",
    details: {
      title: "Fruits",
      text: "Rich in vitamins and natural sugars for energy.",
      examples: "Apples, bananas, oranges, grapes",
    },
  },
  {
    label: "Grains & Cereals",
    servings: "6–11 servings/day",
    color: "bg-amber-400",
    details: {
      title: "Grains & Cereals",
      text: "Primary source of energy; rich in carbohydrates and fiber.",
      examples: "Rice, wheat, oats, bread, pasta",
    },
  },
];

export default function NutritionPyramid() {
  const [active, setActive] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-3xl font-semibold mb-2 text-green-700">
        The Nutrition Pyramid
      </h1>
      <p className="text-gray-600 max-w-md text-center mb-8">
        A balanced diet includes all food groups in the right proportions.
        Follow the Nutrition Pyramid to maintain a healthy and active lifestyle.
      </p>

      {/* Pyramid */}
      <div className="flex flex-col items-center space-y-2">
        {pyramidData.map((layer, index) => (
          <div
            key={index}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            className={`relative ${layer.color} text-white font-medium py-3 text-center cursor-pointer transition-transform duration-300 hover:scale-105`}
            style={{
              width: `${100 + index * 30}%`,
              height:'80px',
              clipPath:
                "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <p>{layer.label}</p>
            <p className="text-sm">{layer.servings}</p>
          </div>
        ))}
      </div>

      {/* Info box */}
      {active !== null && (
        <div className="mt-6 bg-white shadow-lg rounded-xl p-4 w-[320px] border border-gray-200 transition-all duration-300">
          <p className="font-semibold text-gray-800">
            {pyramidData[active].details.title}
          </p>
          <p className="text-gray-600 text-sm mt-1">
            {pyramidData[active].details.text}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            <span className="font-medium text-gray-700">Examples: </span>
            <span className="text-green-600">
              {pyramidData[active].details.examples}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
