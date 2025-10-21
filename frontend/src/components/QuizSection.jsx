import React, { useState } from "react";

const questions = [
  {
    question: "Which vitamin is primarily obtained from sunlight?",
    options: ["Vitamin A", "Vitamin D", "Vitamin C", "Vitamin B12"],
    answer: "Vitamin D",
  },
  {
    question: "Which nutrient is essential for muscle growth?",
    options: ["Protein", "Carbohydrates", "Fats", "Fiber"],
    answer: "Protein",
  },
  {
    question: "What is the main source of energy for the body?",
    options: ["Vitamins", "Carbohydrates", "Minerals", "Water"],
    answer: "Carbohydrates",
  },
  {
    question: "Which mineral helps in strengthening bones?",
    options: ["Iron", "Calcium", "Zinc", "Potassium"],
    answer: "Calcium",
  },
  {
    question: "Which vitamin helps in improving vision?",
    options: ["Vitamin D", "Vitamin A", "Vitamin B12", "Vitamin K"],
    answer: "Vitamin A",
  },
  {
    question: "Which of the following is a healthy fat source?",
    options: ["Butter", "Olive oil", "Fried snacks", "Processed cheese"],
    answer: "Olive oil",
  },
  {
    question: "Which of these foods is rich in fiber?",
    options: ["White rice", "Apple", "Paneer", "Chicken"],
    answer: "Apple",
  },
  {
    question: "How much water should an average adult drink daily?",
    options: ["1 litre", "2–3 litres", "5 litres", "Half litre"],
    answer: "2–3 litres",
  },
  {
    question: "Which food group provides the most energy?",
    options: ["Proteins", "Carbohydrates", "Vitamins", "Minerals"],
    answer: "Carbohydrates",
  },
  {
    question: "What is the healthiest cooking method?",
    options: ["Deep frying", "Grilling", "Steaming", "Re-frying"],
    answer: "Steaming",
  },
];

const QuizSection = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setShowAnswer(true);
    if (option === questions[currentQ].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
      setSelected("");
      setShowAnswer(false);
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentQ(0);
    setSelected("");
    setScore(0);
    setShowAnswer(false);
    setFinished(false);
  };

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">🧠 Nutrition Quiz</h2>
      <p className="text-gray-600 mb-10">
        Answer these 10 quick questions and test your nutrition knowledge!
      </p>

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-green-100">
        {!finished ? (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Question {currentQ + 1} of {questions.length}
            </h3>
            <p className="text-gray-700 mb-6">{questions[currentQ].question}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {questions[currentQ].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => !showAnswer && handleSelect(option)}
                  disabled={showAnswer}
                  className={`px-4 py-2 border rounded-xl transition text-gray-700 font-medium ${
                    showAnswer && option === questions[currentQ].answer
                      ? "bg-green-500 text-white border-green-500"
                      : selected === option && selected !== questions[currentQ].answer
                      ? "bg-red-500 text-white border-red-500"
                      : "hover:bg-green-50 border-gray-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {showAnswer && (
              <div className="mt-6 text-gray-700">
                {selected === questions[currentQ].answer ? (
                  <p className="text-green-600 font-semibold">✅ Correct!</p>
                ) : (
                  <p className="text-red-500 font-semibold">
                    ❌ Wrong! Correct Answer:{" "}
                    <span className="text-green-600 font-semibold">
                      {questions[currentQ].answer}
                    </span>
                  </p>
                )}
                <button
                  onClick={handleNext}
                  className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition"
                >
                  {currentQ === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              🎉 Quiz Completed!
            </h3>
            <p className="text-gray-700 mb-4">
              You scored{" "}
              <span className="text-green-600 font-bold">
                {score} / {questions.length}
              </span>
            </p>

            {/* ✅ Reset Button */}
            <button
              onClick={handleReset}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              🔄 Reset Quiz
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizSection;
