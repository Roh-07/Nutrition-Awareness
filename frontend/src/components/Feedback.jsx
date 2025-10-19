import React, { useState } from "react";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-green-50 py-16 px-6 md:px-20" id="feedback">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-green-800 mb-4">
          We Value Your Feedback
        </h2>
        <p className="text-gray-600 mb-10">
          Your opinion helps us improve NutriWell. Share your thoughts or
          suggestions below — we’d love to hear from you!
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md p-8 md:p-10 text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your feedback..."
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
            ></textarea>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-all shadow-md"
            >
              Submit Feedback
            </button>
          </div>

          {submitted && (
            <p className="text-green-600 text-center mt-6 font-medium">
              ✅ Thank you! Your feedback has been received.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Feedback;