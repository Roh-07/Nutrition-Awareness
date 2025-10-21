import React from "react";
import heroImage from "../assets/healthy-plate.jpeg";

const HeroSection = () => {
  const scrollToBMI = () => {
    document.getElementById("bmi")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-green-50 py-24 px-6 md:px-20 lg:px-28 flex flex-col md:flex-row items-center justify-between gap-12 mt-20">
      {/* Text */}
      <div className="w-full md:w-3/5 lg:w-1/2 text-center md:text-left space-y-6">
        <span className="text-green-700 bg-green-100 px-5 py-1.5 rounded-full text-sm font-semibold inline-block">
          SDG 3 – Good Health & Well-being
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-snug">
          Nourish Your Body, <br />
          <span className="text-green-700">Fuel Your Future</span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
          Discover the power of healthy eating with Indian nutrition. Get personalized
          meal plans, calculate your BMI, and explore delicious recipes tailored to your
          wellness journey.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-5 pt-4">
          <button
            onClick={() => document.getElementById("recipes")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-black text-white font-semibold px-7 py-3 rounded-xl shadow hover:bg-gray-900 transition duration-200"
          >
            Get Started →
          </button>
          <button
            onClick={scrollToBMI}
            className="bg-green-100 text-green-700 font-semibold px-7 py-3 rounded-xl shadow hover:bg-green-200 transition duration-200"
          >
            Calculate BMI
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:w-[45%] lg:w-[50%] flex justify-center relative">
        <img
          src={heroImage}
          alt="Healthy Indian Food"
          className="rounded-3xl shadow-lg w-full max-w-xl lg:max-w-2xl object-cover transition-transform duration-300"
        />
        <div className="absolute bottom-5 right-5 bg-white shadow-lg rounded-2xl px-5 py-3 flex items-center gap-2">
          <span className="text-green-600 text-sm font-medium">🥗 Daily Goal</span>
          <span className="font-semibold text-green-700">2000 kcal</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
