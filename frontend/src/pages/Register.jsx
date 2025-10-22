import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import bg from "../assets/bg.png";

export default function Register() {
  const navigate = useNavigate(); // ✅ initialize navigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      setMessage("Registration successful! Redirecting...");
      
      // ✅ Redirect to main page after a short delay (optional)
      setTimeout(() => {
        navigate("/"); // redirect to main page
      }, 1500);
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 min-w-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create your account</h1>
          <p className="text-gray-600">Join us today and get started</p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-xl rounded-2xl sm:px-10 border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* --- Name Field --- */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-400"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* --- Email Field --- */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-400"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* --- Password Field --- */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-400"
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="mt-2 text-xs text-gray-500">
                Use 8+ characters with a mix of letters, numbers & symbols
              </p>
            </div>

            {/* --- Submit Button --- */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 transform hover:-translate-y-0.5"
              >
                Create Account
              </button>
            </div>

            {/* --- Login Redirect --- */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="font-medium text-blue-600 hover:text-blue-500 transition duration-200">
                  Sign in
                </a>
              </p>
            </div>
          </form>

          {message && (
            <div
              className={`mt-6 p-4 rounded-lg border ${
                message.includes("error") || message.includes("Invalid") || message.includes("failed")
                  ? "bg-red-50 border-red-200 text-red-700"
                  : "bg-green-50 border-green-200 text-green-700"
              }`}
            >
              <p className="text-sm font-medium text-center">{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
