import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Recipes from "./components/Recipes";
import BMICalculator from "./components/BMICalculator";
import MealPlanner from "./components/MealPlanner";
import QuizSection from "./components/QuizSection";
import NutritionPyramid from "./components/NutritionPyramid";
import FAQ from "./components/FAQ";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";

const Home = () => {
  const [bmiData, setBmiData] = useState(null);

  const handleBmiCalculated = (data) => setBmiData(data);

  return (
    <div className="font-sans scroll-smooth bg-white text-gray-900">
      <Navbar />

      {/* All homepage sections */}
      <section id="hero" className="scroll-mt-24"><HeroSection /></section>
      <section id="pyramid" className="scroll-mt-24"><NutritionPyramid /></section>
      <section id="recipes" className="scroll-mt-24"><Recipes /></section>
      <section id="bmi" className="scroll-mt-24"><BMICalculator onBmiCalculated={handleBmiCalculated} /></section>
      <section id="mealplans" className="scroll-mt-24"><MealPlanner bmiData={bmiData} /></section>
      <section id="quiz" className="scroll-mt-24"><QuizSection /></section>
      <section id="faq" className="scroll-mt-24"><FAQ /></section>
      <section id="feedback" className="scroll-mt-24"><Feedback /></section>
      <section id="contact" className="scroll-mt-24"><Footer /></section>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* Separate routes for login and register */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
