import React from "react";
import { FaCertificate, FaTrophy, FaExternalLinkAlt } from "react-icons/fa";

const Certificate = () => {
  const certifications = [
    {
      title: "C Programming for Everyone",
      provider: "Coursera — University of California",
      icon: <FaCertificate className="text-yellow-400" size={22} />,
    },
    {
      title: "C++ for C Programmers",
      provider: "Coursera — UC Santa Cruz",
      icon: <FaCertificate className="text-yellow-400" size={22} />,
    },
    {
      title: "Entrepreneurship NEN Program",
      provider: "Wadhwani Foundation",
      icon: <FaCertificate className="text-yellow-400" size={22} />,
    },
  ];

  const achievements = [
    {
      title: "230+ LeetCode Problems Solved",
      link: "https://leetcode.com/u/karthikbharathapu/",
      icon: <FaTrophy className="text-red-500" size={22} />,
    },
    {
      title: "2nd Place — Coding Competition",
      provider: "Florida Atlantic University (ATT Club)",
      icon: <FaTrophy className="text-red-500" size={22} />,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white px-10 py-16">

        <div className="mt-10">
      {/* HERO TITLE */}
      <div className="mb-10">
        <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-red-600 rounded"></div>
            <h1 className="text-4xl font-extrabold tracking-wide">
            Certifications & Achievements
            </h1>
        </div>
        </div>


      {/* CERTIFICATIONS SECTION */}
      <h2 className="text-2xl font-semibold mb-4">CERTIFICATIONS</h2>

      <div className="flex gap-6  scrollbar-hide pb-6">
        {certifications.map((item, index) => (
          <div
            key={index}
            className="
              bg-gray-900 w-64 h-40 rounded-lg p-5 cursor-pointer
              transition-all duration-300 transform hover:scale-105
              hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]
              flex flex-col justify-between
            "
          >

            {/**className="absolute -top-6 left-0 w-52 h-72 bg-black/95 rounded-lg p-0 z-50
                           transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.5)]
                           animate-fadeIn " */}
            <div className="flex items-center gap-3">
              {item.icon}
              <h3 className="text-lg font-bold">{item.title}</h3>
            </div>

            <p className="text-sm text-gray-300">{item.provider}</p>
          </div>
        ))}
      </div>

      {/* ACHIEVEMENTS SECTION */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">ACHIEVEMENTS</h2>

      <div className="flex flex-col gap-4">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="
              bg-gray-900 w-full rounded-lg p-5
              flex items-center justify-between
              transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]
            "
          >
            <div className="flex items-center gap-4">
              {item.icon}
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                {item.provider && (
                  <p className="text-sm text-gray-400">{item.provider}</p>
                )}
              </div>
            </div>

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-red-600 px-4 py-2 rounded-md text-white font-semibold
                  flex items-center gap-2 hover:bg-red-700 transition
                "
              >
                View <FaExternalLinkAlt size={14} />
              </a>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Certificate;