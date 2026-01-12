import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Card = ({ items }) => {
  const [hovered, setHovered] = useState(null);
  const timerRef = useRef(null);

  const handleEnter = (index) => {
    timerRef.current = setTimeout(() => {
      setHovered(index);
    }, 500);
  };

  const handleLeave = () => {
    clearTimeout(timerRef.current);
    setHovered(null);
  };

  return (
    <div className="relative px-5 pb-4 overflow-visible">
      <div className="flex gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => handleEnter(index)}
            onMouseLeave={handleLeave}
          >
            {/* Base Card */}
            <div
              className="h-52 w-45 rounded-md bg-cover bg-center shadow-lg shadow-black/40 cursor-pointer"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="absolute inset-0 bg-black/60 rounded-md"></div>
              <h4 className="absolute inset-0 flex items-center justify-center text-white font-semibold z-10">
                {item.title}
              </h4>
            </div>

            {/* Expanded Card */}
            {hovered === index && (
              <div
                className="absolute -top-6 left-0 w-52 h-72 bg-black/95 rounded-lg p-0 z-50
                           transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.5)]
                           animate-fadeIn "
              >
               
                {/* Image with NO border, NO radius */}
                 <div
                  className="w-full h-32 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
                
                <div className="ml-3 mt-2">

                {/* Title */}
                <h3 className="text-md font-bold mb-1">{item.title}</h3>

                {/* Description */}
                <p className="text-xs text-gray-300 mb-3 leading-snug">
                  {item.description || `Learn more about ${item.title}.`}
                </p>

                {/* Link */}
                <Link
                  to={item.link}
                  className="bg-red-600 px-3 py-1 rounded-md text-white text-sm font-semibold hover:bg-red-700 transition"
                >
                  Visit Page
                </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;