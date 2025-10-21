import React, { useEffect, useState } from "react";

const MealPlanner = ({ bmiData }) => {
  const [plan, setPlan] = useState(null);
  const [tips, setTips] = useState([]);

  useEffect(() => {
    if (!bmiData) return;

    // ✅ Static meal plans based on BMI category
    const plans = {
      Underweight: {
        breakfast: "Paneer paratha + banana shake",
        lunch: "Dal, rice, ghee, and mixed veggies",
        dinner: "Chapati, sabzi, curd, and nuts",
      },
      Normal: {
        breakfast: "Oats with fruits and nuts",
        lunch: "Roti, sabzi, dal, and salad",
        dinner: "Brown rice, dal, and soup",
      },
      Overweight: {
        breakfast: "Sprouts salad, green tea",
        lunch: "Grilled paneer/chicken, brown rice, veggies",
        dinner: "Vegetable soup, boiled lentils",
      },
      Obese: {
        breakfast: "Green smoothie (spinach + chia + apple)",
        lunch: "Quinoa salad with chickpeas and sprouts",
        dinner: "Steamed vegetables + lentil soup",
      },
    };

    // ✅ Pro tips based on BMI category
    const tipsData = {
      Underweight: [
        "Eat more frequently with calorie-dense foods 🍞",
        "Include nuts, dairy, and healthy fats 🥜",
        "Add protein shakes or smoothies 🍌",
        "Get enough rest to aid muscle gain 😴",
      ],
      Normal: [
        "Maintain a balanced diet 🥗",
        "Stay active for at least 30 minutes daily 🚶‍♀️",
        "Stay hydrated with 8+ glasses of water 💧",
        "Avoid processed foods and excess sugar 🚫",
      ],
      Overweight: [
        "Reduce portion size gradually 🍽️",
        "Avoid sugary drinks and snacks 🧃",
        "Eat more fiber-rich foods 🥦",
        "Do light workouts like walking or yoga 🧘‍♂️",
      ],
      Obese: [
        "Prioritize vegetables and lean protein 🥬",
        "Avoid fried and packaged foods 🚫",
        "Drink water before meals 💧",
        "Consult a dietitian for tailored guidance 👩‍⚕️",
      ],
    };

    setPlan(plans[bmiData.category] || null);
    setTips(tipsData[bmiData.category] || []);
  }, [bmiData]);

  return (
    <div className="bg-[#F3FFF6] flex justify-center items-center py-10 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-2">
          AI Meal Plan Generator 🍽
        </h2>

        {!bmiData ? (
          <p className="text-center text-gray-500 mt-4">
            Please calculate your BMI first to get your personalized meal plan.
          </p>
        ) : (
          <>
            <p className="text-gray-600 text-center mb-6">
              Based on your BMI category:{" "}
              <strong className="text-green-600">{bmiData.category}</strong>
            </p>

            {plan && (
              <div className="bg-white text-black border border-gray-200 rounded-xl p-6 shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Your Recommended Meal Plan 🍱
                </h3>
                <p className="mb-2">
                  <strong>Breakfast:</strong> {plan.breakfast}
                </p>
                <p className="mb-2">
                  <strong>Lunch:</strong> {plan.lunch}
                </p>
                <p className="mb-2">
                  <strong>Dinner:</strong> {plan.dinner}
                </p>
              </div>
            )}

            {/* ✅ Pro Tips Section */}
            {tips.length > 0 && (
              <div className="bg-green-100 border border-green-300 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-green-700 mb-4 text-center">
                  💡 Pro Tips for You
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MealPlanner;
