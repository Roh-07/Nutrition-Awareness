import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const h = height / 100;
    const result = (weight / (h * h)).toFixed(2);
    setBmi(result);
  };

  const getStatus = () => {
    if (!bmi) return "";
    if (bmi < 18.5) return "Underweight";
    if (bmi < 24.9) return "Normal";
    if (bmi < 29.9) return "Overweight";
    return "Obese";
  };

  return (
    <section id="bmi" className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold text-green-800 mb-6">BMI Calculator</h2>
      <div className="max-w-md mx-auto bg-green-50 p-8 rounded-2xl shadow-md">
        <input
          type="number"
          placeholder="Enter weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl"
        />
        <input
          type="number"
          placeholder="Enter height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl"
        />
        <button onClick={calculateBMI} className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700">
          Calculate
        </button>
        {bmi && (
          <div className="mt-6 text-green-800">
            <p>Your BMI: <strong>{bmi}</strong></p>
            <p>Status: {getStatus()}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BMICalculator;