import React, { useState } from "react";

export default function NutritionPyramid() {
  const [hoveredLevel, setHoveredLevel] = useState(null);

  const pyramidLevels = [
    {
      name: "Fats, Oils & Sweets",
      servings: "Use Sparingly",
      description: "Ghee, butter, and sweets should be consumed minimally.",
      examples: "Ghee, coconut oil, jaggery, mithai",
      color: "#FFD700",
      width: 200,
    },
    {
      name: "Milk & Dairy",
      servings: "2–3 servings/day",
      description: "Rich in calcium and protein for bone health.",
      examples: "Paneer, dahi, milk, buttermilk",
      color: "#87CEEB",
      width: 300,
    },
    {
      name: "Protein Foods",
      servings: "2–3 servings/day",
      description: "Essential for muscle building and repair.",
      examples: "Dal, rajma, chana, eggs, chicken",
      color: "#FF6347",
      width: 400,
    },
    {
      name: "Vegetables",
      servings: "3–5 servings/day",
      description: "High in vitamins, minerals, and fiber.",
      examples: "Spinach, tomatoes, carrots, broccoli",
      color: "#3CB371",
      width: 500,
    },
    {
      name: "Fruits",
      servings: "2–4 servings/day",
      description: "Rich in vitamins, minerals, and antioxidants.",
      examples: "Mango, banana, apple, papaya",
      color: "#FF8C00",
      width: 600,
    },
    {
      name: "Grains & Cereals",
      servings: "6–11 servings/day",
      description: "Foundation of energy – whole grains are best.",
      examples: "Roti, rice, jowar, bajra, oats",
      color: "#DEB887",
      width: 700,
    },
  ];

  const active = pyramidLevels[hoveredLevel];

  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
        padding: "60px 0",
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "#5B21B6", fontSize: "32px", marginBottom: "10px" }}>
        🍽 Indian Food Pyramid
      </h2>
      <p
        style={{
          color: "#555",
          textAlign: "center",
          marginBottom: "50px",
          maxWidth: "600px",
          fontSize: "16px",
        }}
      >
        Hover over each level to learn about recommended daily servings and food
        groups.
      </p>

      {/* Pyramid */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          marginBottom: "60px",
        }}
      >
        {pyramidLevels.map((level, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredLevel(index)}
            onMouseLeave={() => setHoveredLevel(null)}
            style={{
              width: `${level.width}px`,
              height: "80px",
              backgroundColor: level.color,
              clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              transform: hoveredLevel === index ? "scale(1.05)" : "scale(1)",
              boxShadow:
                hoveredLevel === index
                  ? "0 8px 20px rgba(0,0,0,0.25)"
                  : "0 4px 10px rgba(0,0,0,0.1)",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            <div>{level.name}</div>
            <div style={{ fontSize: "14px", fontWeight: "500" }}>
              {level.servings}
            </div>
          </div>
        ))}
      </div>

      {/* Info Box */}
      {active && (
        <div
          style={{
            width: "500px",
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            padding: "25px 30px",
            textAlign: "left",
            borderTop: `5px solid ${active.color}`,
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "12px",
              fontWeight: "600",
              color: "#333",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: active.color,
                marginRight: "10px",
              }}
            ></div>
            {active.name}
          </div>
          <p style={{ color: "#444", marginBottom: "10px", lineHeight: "1.5" }}>
            {active.description}
          </p>
          <p style={{ color: "#555", fontSize: "15px" }}>
            <strong style={{ color: "#5B21B6" }}>Examples: </strong>
            <span style={{ color: "#16A34A" }}>{active.examples}</span>
          </p>
        </div>
      )}
    </div>
  );
}
