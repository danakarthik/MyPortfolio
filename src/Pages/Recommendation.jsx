import React from "react";
import { FaQuoteLeft, FaStar, FaBrain, FaCode, FaBolt } from "react-icons/fa";

const Recommendation = () => {
  const strengths = [
    {
      icon: <FaCode size={22} className="text-red-500" />,
      title: "Strong in DSA & System Design",
      desc: "You think in algorithms first. Your problem‑solving mindset shows up in every project you build.",
    },
    {
      icon: <FaBrain size={22} className="text-red-500" />,
      title: "AI/ML Engineering Mindset",
      desc: "From ML models to deep learning systems, you understand how to build intelligent, scalable solutions.",
    },
    {
      icon: <FaBolt size={22} className="text-red-500" />,
      title: "Full‑Stack Speed & Precision",
      desc: "React, Spring Boot, Django, Next.js — you ship fast, clean, and production‑ready code.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Karthik is one of those engineers who can understand a problem deeply and solve it elegantly. His DSA foundation is rock solid.",
      from: "Mentor — Smart Interviews",
    },
    {
      quote:
        "He builds scalable systems with clean architecture. His ability to learn fast and deliver high‑quality features stands out.",
      from: "Senior Developer — SRIMA Tech",
    },
    {
      quote:
        "A natural problem solver. Whether it's debugging, optimizing, or designing, he approaches everything with clarity and confidence.",
      from: "Peer — FAU Coding Community",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white px-10 py-16">

        <div className="mt-12">
      {/* HERO SECTION */}
      <div className="w-full h-54 bg-gradient-to-b from-red-900/40 to-black rounded-xl mb-12 
                      flex flex-col justify-center px-10 shadow-[0_0_40px_rgba(255,0,0,0.3)]">

        <h1 className="text-5xl font-extrabold tracking-wide mb-3">
          Recommendations
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
          A curated collection of what mentors, peers, and collaborators say about my work —
          along with the engineering strengths that define how I build, solve, and deliver.
        </p>
      </div>

      {/* WHAT PEOPLE SAY */}
      <h2 className="text-2xl font-semibold mb-4">What People Say</h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="
              bg-gray-900 w-80 h-48 rounded-lg p-5 cursor-pointer
              transition-all duration-300 transform hover:scale-105
              hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]
              flex flex-col justify-between
            "
          >
            <FaQuoteLeft className="text-red-500 opacity-80" size={20} />
            <p className="text-sm text-gray-300 leading-snug">{item.quote}</p>
            <p className="text-xs text-gray-400 text-right">— {item.from}</p>
          </div>
        ))}
      </div>

      {/* YOUR ENGINEERING STRENGTHS */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Why You Stand Out</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {strengths.map((item, index) => (
          <div
            key={index}
            className="
              bg-gray-900 rounded-lg p-6
              transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]
            "
          >
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h3 className="text-lg font-bold">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* BADGE SECTION */}
      <div className="mt-12 flex flex-wrap gap-4">
        <div className="bg-red-600 px-4 py-2 rounded-md font-semibold">
          230+ LeetCode Problems Solved
        </div>
        <div className="bg-red-600 px-4 py-2 rounded-md font-semibold">
          2nd Place — FAU Coding Competition
        </div>
        <div className="bg-red-600 px-4 py-2 rounded-md font-semibold">
          Full‑Stack + AI/ML Engineer
        </div>
      </div>
      </div>
    </div>
  );
};

export default Recommendation;