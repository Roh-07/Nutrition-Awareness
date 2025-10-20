import React, { useState } from "react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [advice, setAdvice] = useState("");
  const [colorClass, setColorClass] = useState("bg-gray-100"); // 👈 new state for dynamic color

  const calculateBMI = () => {
    if (!height || !weight) return;
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);

    let cat = "";
    let tip = "";
    let color = "";

    if (bmiValue < 18.5) {
      cat = "Underweight";
      tip =
        "Increase calorie intake with healthy foods like nuts, dairy, and whole grains. Include strength training.";
      color = "bg-blue-100 border-blue-400 text-blue-800";
    } else if (bmiValue < 25) {
      cat = "Normal";
      tip =
        "Maintain your current routine. Eat balanced meals and stay active regularly.";
      color = "bg-green-100 border-green-400 text-green-800";
    } else if (bmiValue < 30) {
      cat = "Overweight";
      tip =
        "Focus on portion control and reduce refined carbs. Include more vegetables, salads, and fiber-rich foods like millets.";
      color = "bg-yellow-100 border-yellow-400 text-yellow-800";
    } else {
      cat = "Obese";
      tip =
        "Adopt a calorie-controlled diet rich in proteins and fiber. Consult a nutritionist for a personalized plan.";
      color = "bg-red-100 border-red-400 text-red-800";
    }

    setCategory(cat);
    setAdvice(tip);
    setColorClass(color); // 👈 sets color dynamically
  };

  const resetForm = () => {
    setHeight("");
    setWeight("");
    setAge("");
    setGender("");
    setBmi(null);
    setCategory("");
    setAdvice("");
    setColorClass("bg-gray-100");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-12 px-6 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center">
        📊 BMI Calculator
      </h2>
      <p className="text-gray-600 mb-10 text-center">
        Calculate your Body Mass Index and get personalized Indian diet recommendations
      </p>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Left Form */}
        <div className="bg-white rounded-xl shadow-md border-t-4 border-green-500 p-8">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-gray-700">
            <span className="text-green-600 text-xl">🧮</span> Your Details
          </h3>

          <div className="space-y-4">
            {/* Inputs */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
              <input
                type="number"
                placeholder="e.g., 170"
                className="mt-1 w-full border border-black text-black rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
              <input
                type="number"
                placeholder="e.g., 65"
                className="mt-1 w-full border border-black text-black rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                placeholder="e.g., 25"
                className="mt-1 w-full border border-black text-black rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select
                className="mt-1 w-full border border-black text-black rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select gender</option>
                <option value="male" className="text-black">Male</option>
                <option value="female" className="text-black">Female</option>
                <option value="other" className="text-black">Other</option>
              </select>
            </div>

            <div className="flex gap-3 pt-3">
              <button
                onClick={calculateBMI}
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition"
              >
                Calculate BMI
              </button>
              <button
                onClick={resetForm}
                className="border border-green-500 text-green-600 px-5 py-2 rounded-lg hover:bg-green-50 transition"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Right Result */}
        <div
          className={`rounded-xl shadow-md border p-8 flex flex-col justify-center items-center transition-all duration-500 ${colorClass}`}
        >
          {!bmi ? (
            <div className="text-center text-gray-600">
              <div className="text-4xl mb-4">📲</div>
              <p>Enter your details to calculate your BMI</p>
              <p className="text-sm text-gray-500">and receive personalized advice</p>
            </div>
          ) : (
            <div className="w-full text-center">
              <div className="text-3xl font-semibold mb-2">{bmi}</div>
              <p className="text-lg font-medium mb-3">{category}</p>

              <div className="flex justify-between mt-2 mb-4 px-6">
                <span className="text-blue-600">Underweight</span>
                <span className="text-green-600">Normal</span>
                <span className="text-yellow-500">Overweight</span>
                <span className="text-red-500">Obese</span>
              </div>

              <div className="h-2 w-full rounded-full bg-gray-200 mb-6">
                <div
                  className={`h-2 rounded-full ${
                    bmi < 18.5
                      ? "bg-blue-500 w-1/5"
                      : bmi < 25
                      ? "bg-green-500 w-2/5"
                      : bmi < 30
                      ? "bg-yellow-500 w-3/5"
                      : "bg-red-500 w-4/5"
                  }`}
                ></div>
              </div>

              <div className="bg-white/70 p-4 rounded-lg text-left border border-gray-300">
                <h4 className="font-semibold text-gray-800 mb-2">💡 Recommendations</h4>
                <p className="text-gray-700 text-sm font-medium">{advice}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
