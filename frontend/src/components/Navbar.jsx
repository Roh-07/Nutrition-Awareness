import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-gradient-to-r from-green-50 to-green-100 shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="bg-green-600 text-white p-2 rounded-full font-bold">N</div>
        <h1 className="text-xl font-semibold text-gray-800">NutriWell</h1>
      </div>

      {/* Links */}
      <ul className="flex space-x-8 text-gray-700 font-medium">
        <li><a href="/" className="hover:text-green-600">Home</a></li>
        <li><a href="/recipes" className="hover:text-green-600">Recipes</a></li>
        <li><a href="/bmi" className="hover:text-green-600">BMI Calculator</a></li>
        <li><a href="/meal-plans" className="hover:text-green-600">Meal Plans</a></li>
        <li><a href="/contact" className="hover:text-green-600">Contact</a></li>
      </ul>

      {/* Button */}
      <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
        Explore Recipes
      </button>
    </nav>
  );
};

export default Navbar;