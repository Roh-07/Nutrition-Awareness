import React from "react";

const Navbar = () => {
  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-gradient-to-r from-green-50 to-green-100 shadow-sm fixed w-full z-50 top-0">
      {/* Logo */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => scrollToSection("hero")}
      >
        <div className="bg-green-600 text-white p-2 rounded-full font-bold">N</div>
        <h1 className="text-xl font-semibold text-gray-800">NutriWell</h1>
      </div>

      {/* Links */}
      <ul className="flex space-x-8 text-gray-700 font-medium">
        <li>
          <button onClick={() => scrollToSection("hero")} className="hover:text-green-600">
            Home
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("recipes")} className="hover:text-green-600">
            Recipes
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("bmi")} className="hover:text-green-600">
            BMI Calculator
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("mealplans")} className="hover:text-green-600">
            Meal Plans
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("contact")} className="hover:text-green-600">
            Contact
          </button>
        </li>
      </ul>

      {/* Explore Recipes Button */}
      <button
        onClick={() => scrollToSection("recipes")}
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
      >
        Explore Recipes
      </button>
    </nav>
  );
};

export default Navbar;
