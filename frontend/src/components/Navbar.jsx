import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in on component mount
    const checkAuth = () => {
      try {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');
        const userName = localStorage.getItem('name');

        if (token && (userData || userName)) {
          if (userData) {
            setUser(JSON.parse(userData));
          } else if (userName) {
            setUser({ name: userName });
          }
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        // Clear invalid data
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('name');
      }
    };

    checkAuth();

    // Listen for storage changes (when user logs in from another tab)
    const handleStorageChange = (e) => {
      if (e.key === 'token' || e.key === 'user' || e.key === 'name') {
        checkAuth();
      }
    };

    // Listen for custom login event
    const handleUserLoggedIn = () => {
      checkAuth();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('userLoggedIn', handleUserLoggedIn);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userLoggedIn', handleUserLoggedIn);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('name');
    setUser(null);
    setIsAuthenticated(false);
  };

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
      {isAuthenticated && user ? (
        <div className="flex items-center space-x-3">
          {/* User Avatar & Name */}
          <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex justify-center items-center font-bold text-white text-sm shadow-md">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span className="text-gray-800 font-semibold text-sm">{user.name}</span>
          </div>
          
          {/* Logout Button */}
          <button
            onClick={logout}
            className="group relative flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Logout</span>
          </button>
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <a
            href="/register"
            className="px-4 py-2 text-gray-700 font-semibold hover:text-emerald-600 transition-colors duration-200 hover:bg-white/50 rounded-lg"
          >
            Sign Up
          </a>
          <a
            href="/login"
            className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
