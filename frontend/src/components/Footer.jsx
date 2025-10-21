import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-10 border-b border-green-700 pb-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-green-100 mb-3">NutriWell</h2>
          <p className="text-green-200 text-sm leading-relaxed">
            Empowering students to make healthy food choices for a better tomorrow.  
            Aligning with <strong>SDG 3 – Good Health & Well-being</strong>.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-green-200">
            <li><a href="#home" className="hover:text-green-400">Home</a></li>
            <li><a href="#recipes" className="hover:text-green-400">Recipes</a></li>
            <li><a href="#bmi" className="hover:text-green-400">BMI Calculator</a></li>
            <li><a href="#meal" className="hover:text-green-400">Meal Planner</a></li>
            <li><a href="#feedback" className="hover:text-green-400">Feedback</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-green-200 text-sm">
            <li className="flex items-center gap-2"><Mail size={16} /> support@nutriwell.in</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Mumbai, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="p-2 bg-green-700 rounded-full hover:bg-green-600 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-green-700 rounded-full hover:bg-green-600 transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-green-700 rounded-full hover:bg-green-600 transition">
              <Twitter size={18} />
            </a>
          </div>
          <p className="text-xs text-green-300 mt-4">
            Response Time: within 24 hours
          </p>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center pt-8 text-green-300 text-sm">
        <p>© 2025 NutriWell | Designed for SDG 3 – Good Health & Well-being</p>
        <p className="text-green-400 mt-1">Made with ❤ using React & TailwindCSS</p>
      </div>
    </footer>
  );
};

export default Footer;