import React, { useState, useEffect } from "react";
import { Heart, Droplet, Zap, Apple } from "lucide-react"; // icons from lucide-react

const facts = [
  {
    title: "Heart Health",
    text: "Eating just 30g of nuts daily can reduce heart disease risk by 30%.",
    icon: <Heart className="text-green-600 w-6 h-6" />,
  },
  {
    title: "Dal Power",
    text: "Indian dal provides 25% of daily protein needs in just one serving.",
    icon: <Droplet className="text-green-600 w-6 h-6" />,
  },
  {
    title: "Turmeric Benefits",
    text: "Curcumin in turmeric has powerful anti-inflammatory properties.",
    icon: <Zap className="text-green-600 w-6 h-6" />,
  },
  {
    title: "Fiber Intake",
    text: "Adults need 25–30g of fiber daily. Most Indians get only about 15g.",
    icon: <Apple className="text-green-600 w-6 h-6" />,
  },
  {
    title: "Hydration",
    text: "Drinking enough water helps maintain body temperature and digestion.",
    icon: <Droplet className="text-green-600 w-6 h-6" />,
  },
];

export default function Facts() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % facts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      id="facts"
      className="bg-gradient-to-b from-green-50 to-white py-16 px-6 text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 flex items-center justify-center gap-2">
          <span role="img" aria-label="lightbulb">💡</span> Did You Know?
        </h2>
        <p className="text-gray-600 mb-8">
          Fascinating facts about nutrition and health
        </p>

        {/* Carousel Wrapper */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 25}%)`, // show 4 at a time
              width: `${facts.length * 25}%`,
            }}
          >
            {facts.map((fact, i) => (
              <div
                key={i}
                className="w-1/4 flex-shrink-0 px-3"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100 hover:shadow-md transition text-left h-full flex flex-col justify-center">
                  <div className="mb-3 flex items-center justify-start">
                    <div className="bg-green-50 p-3 rounded-full">
                      {fact.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {fact.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{fact.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {facts.map((_, i) => (
            <button
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === i ? "bg-green-600" : "bg-green-300"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
