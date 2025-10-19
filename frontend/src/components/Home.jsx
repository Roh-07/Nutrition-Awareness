import React from "react";
import heroImage from "../assets/healthy-plate.jpeg"; 

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-green-50">
      {/* Left Text Section */}
      <div className="max-w-xl px-10">
        <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
          SDG 3 – Good Health & Well-being
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Nourish Your Body,
        </h2>
        <p className="text-green-700 text-lg font-semibold mb-6">
          Fuel Your Future
        </p>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Discover the power of healthy eating with Indian nutrition.
          Get personalized meal plans, calculate your BMI, and explore
          delicious recipes tailored to your wellness journey.
        </p>

        <div className="flex gap-4">
          <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
            Get Started →
          </button>
          <button className="border border-green-600 text-green-700 px-5 py-2 rounded-md hover:bg-green-100 transition">
            Calculate BMI
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-8 mt-10 text-gray-700">
          <div>
            <h3 className="text-xl font-bold text-green-600">500+</h3>
            <p>Healthy Recipes</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-600">10k+</h3>
            <p>Happy Users</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-600">100%</h3>
            <p>Indian Cuisine</p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative mt-10 md:mt-0  px-10">
        <img
          src={heroImage}
          alt="Healthy Indian Meal"
          className="rounded-2xl shadow-xl w-[450px] object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
          <div className="bg-green-100 p-2 rounded-full">
            🥗
          </div>
          <div>
            <p className="text-sm text-gray-600">Daily Goal</p>
            <p className="text-green-700 font-semibold">2000 kcal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;