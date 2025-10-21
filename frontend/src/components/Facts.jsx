import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Heart, Droplet, Zap, Apple, Moon } from 'lucide-react';

const facts = [
  {
    icon: Lightbulb,
    title: '70% Water',
    description: 'The human body is composed of approximately 70% water. Stay hydrated!'
  },
  {
    icon: Heart,
    title: 'Heart Health',
    description: 'Eating just 30g of nuts daily can reduce heart disease risk by 30%'
  },
  {
    icon: Droplet,
    title: 'Dal Power',
    description: 'Indian dal provides 25% of daily protein needs in just one serving'
  },
  {
    icon: Zap,
    title: 'Turmeric Benefits',
    description: 'Curcumin in turmeric has powerful anti-inflammatory properties'
  },
  {
    icon: Apple,
    title: 'Fiber Intake',
    description: 'Adults need 25-30g of fiber daily. Most Indians get only 15g'
  },
  {
    icon: Moon,
    title: 'Sleep & Diet',
    description: 'A balanced diet improves sleep quality by up to 40%'
  }
];

export default function Facts() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let animationId;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="py-16 bg-gradient-to-r from-[#E8F5E9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#222] mb-4 text-2xl font-semibold">💡 Did You Know?</h2>
          <p className="text-[#555]">Fascinating facts about nutrition and health</p>
        </motion.div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
          style={{ scrollBehavior: 'auto' }}
        >
          {[...facts, ...facts].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % facts.length) * 0.1 }}
                className="flex-shrink-0 w-80 bg-white rounded-xl p-6 border-l-4 border-[#3CB371] shadow-md hover:shadow-xl transition-shadow duration-400 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3CB371] to-[#00A676] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#222] mb-2 font-medium">{item.title}</h3>
                    <p className="text-[#555]">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
