import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is this Nutrition Awareness Website free to use?",
      answer:
        "Yes! Our website is completely free for everyone. It’s designed to promote healthy eating and nutrition awareness without any subscription or hidden charges.",
    },
    {
      question: "How does the AI Meal Planner work?",
      answer:
        "Our AI Meal Planner suggests healthy meal options based on your BMI category. It uses predefined nutrition guidelines to recommend balanced and goal-oriented meals.",
    },
    {
      question: "Can I trust the BMI and meal recommendations?",
      answer:
        "Yes, the recommendations are generated using standard health and nutrition principles. However, for personalized medical advice, consult a certified healthcare professional.",
    },
    {
      question: "Do I need to create an account to use the features?",
      answer:
        "No login is required! You can access the BMI Calculator, AI Meal Planner, and all educational sections without any registration.",
    },
    {
      question: "Will my data be stored or shared?",
      answer:
        "No personal data is collected or stored. All calculations happen locally in your browser for privacy and safety.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-green-50 py-16 px-6 flex justify-center">
      <div className="bg-white shadow-md rounded-2xl p-10 max-w-3xl w-full">
        <h1 className="text-3xl font-extrabold text-green-600 text-center mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Find answers to common questions about our Nutrition Awareness Website
        </p>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-gray-800 hover:bg-green-100 transition-all"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="text-green-600 w-5 h-5" />
                ) : (
                  <ChevronDown className="text-green-600 w-5 h-5" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-700 bg-green-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-green-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-600 transition-all"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
