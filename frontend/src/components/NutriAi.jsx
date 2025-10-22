import React, { useEffect, useState } from "react";

const NutriAi = ({ bmiData }) => {
  const [plan, setPlan] = useState(null);
  const [tips, setTips] = useState([]);

  // ✅ Load Botpress Chatbot inline (inside page)
  useEffect(() => {
    const BOT_CONTAINER_ID = "botpress-chat-container";
    const BOT_SCRIPT_ID = "botpress-webchat-script";
    const BOT_CONFIG_URL =
      "https://files.bpcontent.cloud/2025/10/22/13/20251022132657-9130AIU9.json";

    // Prevent duplicate loading (especially in React Strict Mode)
    if (window.botpressWebChat || document.getElementById(BOT_SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = BOT_SCRIPT_ID;
    script.src = "https://cdn.botpress.cloud/webchat/v3.3/inject.js";
    script.async = true;

    script.onload = () => {
      // ⏳ Wait until the global window.botpressWebChat is ready
      const initBot = () => {
        if (window.botpressWebChat) {
          window.botpressWebChat.init({
            configUrl: BOT_CONFIG_URL,
            container: document.getElementById(BOT_CONTAINER_ID),
          });

          // Auto open chat after loading
          window.botpressWebChat.onEvent(
            () => {
              window.botpressWebChat.sendEvent({ type: "show" });
            },
            ["LIFECYCLE.LOADED"]
          );
        } else {
          setTimeout(initBot, 100); // Retry after 100ms
        }
      };
      initBot();
    };

    document.body.appendChild(script);
  }, []);

  // ✅ Meal plan & tips logic
  useEffect(() => {
    if (!bmiData) return;

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
    <div className="bg-[#F3FFF6] flex flex-col justify-center items-center py-10 px-4 relative">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-3xl mb-10">
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

      {/* ✅ Inline Botpress Chat Window */}
      <div
        id="botpress-chat-container"
        className="w-full max-w-3xl h-[600px] bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200"
      ></div>
    </div>
  );
};

export default NutriAi;
