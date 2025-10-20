import React, { useState } from "react";

const pyramidData = [
  {
    label: "Fats, Oils & Sweets",
    servings: "Use Sparingly",
    gradient: "linear-gradient(to right, #facc15, #fcd34d)",
    details: {
      title: "Fats, Oils & Sweets",
      text: "Use these sparingly. High in calories but low in nutrients.",
      examples: "Butter, sweets, fried foods, oils",
    },
  },
  {
    label: "Milk & Dairy",
    servings: "2–3 servings/day",
    gradient: "linear-gradient(to right, #38bdf8, #60a5fa)",
    details: {
      title: "Milk & Dairy",
      text: "Provide calcium and protein for bone and muscle health.",
      examples: "Milk, yogurt, cheese",
    },
  },
  {
    label: "Protein Foods",
    servings: "2–3 servings/day",
    gradient: "linear-gradient(to right, #f87171, #fca5a5)",
    details: {
      title: "Protein Foods",
      text: "Help build and repair body tissues.",
      examples: "Eggs, fish, chicken, beans",
    },
  },
  {
    label: "Vegetables",
    servings: "3–5 servings/day",
    gradient: "linear-gradient(to right, #22c55e, #4ade80)",
    details: {
      title: "Vegetables",
      text: "Packed with vitamins, minerals, and fiber.",
      examples: "Spinach, tomatoes, carrots, broccoli",
    },
  },
  {
    label: "Fruits",
    servings: "2–4 servings/day",
    gradient: "linear-gradient(to right, #f97316, #fb923c)",
    details: {
      title: "Fruits",
      text: "Rich in vitamins and natural sugars for energy.",
      examples: "Apples, bananas, oranges, grapes",
    },
  },
  {
    label: "Grains & Cereals",
    servings: "6–11 servings/day",
    gradient: "linear-gradient(to right, #fbbf24, #fcd34d)",
    details: {
      title: "Grains & Cereals",
      text: "Primary source of energy; rich in carbohydrates and fiber.",
      examples: "Rice, wheat, oats, bread, pasta",
    },
  },
];

export default function NutritionPyramid() {
  const [active, setActive] = useState(null);
  const totalLayers = pyramidData.length;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "32px", color: "#15803d", marginBottom: "12px" }}>
        The Nutrition Pyramid
      </h1>
      <p
        style={{
          color: "#4b5563",
          maxWidth: "500px",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        A balanced diet includes all food groups in the right proportions.
        Follow the Nutrition Pyramid to maintain a healthy and active lifestyle.
      </p>

      {/* Pyramid */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "600px",
          gap: "2px",
        }}
      >
        {pyramidData.map((layer, index) => {
          const minWidth = 40;
          const maxWidth = 100;
          const widthPercent =
            minWidth + ((maxWidth - minWidth) * index) / (totalLayers - 1);

          return (
            <div
              key={index}
              style={{ position: "relative", width: "100%" }} // container for description
            >
              <div
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                style={{
                  width: `${widthPercent}%`,
                  padding: "20px 0",
                  background: layer.gradient,
                  color: "white",
                  fontWeight: "600",
                  textAlign: "center",
                  cursor: "pointer",
                  margin: "0 auto",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ fontSize: "16px" }}>{layer.label}</div>
                <div style={{ fontSize: "12px", marginTop: "4px" }}>
                  {layer.servings}
                </div>
              </div>

              {/* Description box beside tile */}
              {active === index && (
                <div
                  style={{
                    position: "absolute",
                    left: "105%", // right side of tile
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "white",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                    borderRadius: "6px",
                    padding: "12px 16px",
                    width: "300px",
                    border: "1px solid #e5e7eb",
                    zIndex: 10,
                  }}
                >
                  <p style={{ fontWeight: "600", color: "#1f2937" }}>
                    {layer.details.title}
                  </p>
                  <p
                    style={{
                      color: "#4b5563",
                      fontSize: "14px",
                      marginTop: "6px",
                    }}
                  >
                    {layer.details.text}
                  </p>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "14px",
                      marginTop: "8px",
                    }}
                  >
                    <span
                      style={{ fontWeight: "500", color: "#374151" }}
                    >
                      Examples:{" "}
                    </span>
                    <span style={{ color: "#15803d" }}>
                      {layer.details.examples}
                    </span>
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
