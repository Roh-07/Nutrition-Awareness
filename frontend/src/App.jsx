import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Recipes from "./components/Recipes";
import BMICalculator from "./components/BMICalculator";
import MealPlanner from "./components/MealPlanner";
import QuizSection from "./components/QuizSection";
import NutritionPyramid from "./components/NutritionPyramid"; // ✅ Added
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [bmiData, setBmiData] = useState(null);

  const handleBmiCalculated = (data) => {
    setBmiData(data);
  };

  return (
    <div className="font-sans scroll-smooth bg-white text-gray-900">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <section id="hero" className="scroll-mt-24">
        <HeroSection />
      </section>
      
       {/* ✅ Nutrition Pyramid */}
      <section id="pyramid" className="scroll-mt-24">
        <NutritionPyramid />
      </section>

      {/* ✅ Recipes */}
      <section id="recipes" className="scroll-mt-24">
        <Recipes />
      </section>

      {/* ✅ BMI Calculator */}
      <section id="bmi" className="scroll-mt-24">
        <BMICalculator onBmiCalculated={handleBmiCalculated} />
      </section>

      {/* ✅ Meal Planner */}
      <section id="mealplans" className="scroll-mt-24">
        <MealPlanner bmiData={bmiData} />
      </section>

     

      {/* ✅ Quiz Section */}
      <section id="quiz" className="scroll-mt-24">
        <QuizSection />
      </section>

      {/* ✅ FAQ Section */}
      <section id="faq" className="scroll-mt-24">
        <FAQ />
      </section>

      {/* ✅ Footer */}
      <section id="contact" className="scroll-mt-24">
        <Footer />
      </section>
    </div>
  );
};

export default App;
