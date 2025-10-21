import React, { useState } from "react";
import { Send } from "lucide-react";

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

  const handleClear = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-green-50 py-16 px-6 flex justify-center">
      <div className="bg-white shadow-md rounded-2xl p-10 max-w-2xl w-full">
        {/* MAIN HEADING */}
        <h1 className="text-3xl font-extrabold text-green-600 text-center mb-8">
          FEEDBACK
        </h1>

        {/* Subheading */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Send Us a Message
        </h2>
        <p className="text-gray-600 mb-8">
          Share your thoughts, suggestions, or questions
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what you think about our Nutrition Awareness Website..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 
                         focus:ring-2 focus:ring-green-400 outline-none resize-none
                         text-gray-900 placeholder-gray-400 bg-white"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 
                         text-white font-medium px-6 py-3 rounded-md transition-all"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="border border-green-500 text-green-600 font-medium px-6 py-3 
                         rounded-md hover:bg-green-50 transition-all"
            >
              Clear
            </button>
          </div>

          {submitted && (
            <p className="text-green-600 mt-4 font-medium text-center">
              ✅ Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Feedback;