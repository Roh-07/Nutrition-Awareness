import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Facts from "./components/Facts";
import Recipes from "./components/Recipes";
import BMICalculator from "./components/BMICalculator";
import MealPlanner from "./components/MealPlanner";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import './App.css'
import NutritionPyramid from "./components/NutritionPyramid";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <Navbar />
      
      <HeroSection/>
      <Facts />
      <NutritionPyramid/>
      <Recipes />
      <BMICalculator />
      <MealPlanner />
      <Feedback />
      <Footer />
      
    </>
  );
}

export default App;