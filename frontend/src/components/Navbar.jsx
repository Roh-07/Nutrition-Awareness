import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) setUsername(storedName);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "Recipes", id: "recipes" },
    { name: "BMI Calculator", id: "bmi" },
    { name: "Meal Plans", id: "mealplans" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-10 py-4 backdrop-blur-md bg-gradient-to-br from-blue-50 to-indigo-100 shadow-md fixed w-full z-50 top-0">
      {/* Logo */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => scrollToSection("hero")}
      >
        <div className="bg-green-600 text-white p-2 rounded-full font-bold text-lg">N</div>
        <h1 className="text-xl font-semibold text-gray-800 hover:text-green-600 transition-colors duration-200">
          NutriWell
        </h1>
      </div>

      {/* Nav Links */}
      <ul className="flex space-x-8 text-gray-700 font-medium text-lg">
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <a
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className="relative group text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Profile / Auth Links */}
      {username ? (
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-green-100 flex justify-center items-center font-semibold text-green-700">
            {username.charAt(0).toUpperCase()}
          </div>
          <span className="text-gray-800 font-medium">{username}</span>
        </div>
      ) : (
        <div className="flex items-center space-x-6">
          <a
            href="/Register"
            className="text-gray-700 font-medium hover:text-green-600 transition-colors duration-200"
          >
            Sign Up
          </a>
          <a
            href="/Login"
            className="text-gray-700 font-medium hover:text-green-600 transition-colors duration-200"
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
