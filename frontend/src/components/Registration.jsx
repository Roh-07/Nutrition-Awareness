import React, { useState } from "react";

export default function Registration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    bmi: "",
    goal: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 🔹 Validation logic
  const validate = () => {
    let tempErrors = {};

    if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Invalid email format";
    if (!formData.password) tempErrors.password = "Password is required";
    else if (formData.password.length < 6)
      tempErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      tempErrors.confirmPassword = "Passwords do not match";
    if (!formData.age) tempErrors.age = "Age is required";
    if (!formData.gender) tempErrors.gender = "Please select gender";
    if (!formData.agree) tempErrors.agree = "You must agree to continue";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // 🔹 Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      console.log("Registration Data:", formData);
    }
  };

  // 🔹 Reset form
  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: "",
      gender: "",
      bmi: "",
      goal: "",
      agree: false,
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-md p-10 border border-green-100">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-6">
          🍎 Register for Nutrition Awareness
        </h2>

        {/* ✅ Success Message */}
        {submitted ? (
          <div className="text-center bg-green-50 border border-green-200 rounded-2xl p-10 shadow-lg transition-all duration-300">
            <h3 className="text-3xl font-bold text-green-700 mb-4">
              ✅ Registration Successful!
            </h3>
            <p className="text-gray-700 text-lg font-medium mb-2">
              Welcome aboard,{" "}
              <span className="text-green-700 font-semibold">
                {formData.fullName.split(" ")[0]}
              </span>
              !
            </p>
            <p className="italic text-green-800 text-base max-w-md mx-auto leading-relaxed mb-6">
              "A healthy outside starts from the inside.  
              You’ve taken your first step toward a happier, healthier you! 🌿"
            </p>
            <button
              onClick={handleReset}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
            >
              Register Another
            </button>
          </div>
        ) : (
          // ✅ Registration Form
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.age && (
                <p className="text-red-500 text-sm">{errors.age}</p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender}</p>
              )}
            </div>

            {/* BMI */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                BMI (optional)
              </label>
              <input
                type="number"
                name="bmi"
                value={formData.bmi}
                onChange={handleChange}
                step="0.1"
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Health Goal */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Health Goal
              </label>
              <input
                type="text"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                placeholder="e.g., Weight Loss, Muscle Gain, Eat Healthy"
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-700">
                I agree to the{" "}
                <span className="text-green-600 font-medium cursor-pointer">
                  Terms & Conditions
                </span>
              </label>
            </div>
            {errors.agree && (
              <p className="text-red-500 text-sm">{errors.agree}</p>
            )}

            {/* Buttons */}
            <div className="flex justify-between items-center gap-4 pt-2">
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
              >
                Register
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500 transition duration-200"
              >
                Reset
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
