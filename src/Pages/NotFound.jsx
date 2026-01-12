import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden bg-black">

      {/* Background image with slow zoom */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>

      {/* Dark cinematic gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/40 to-black"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-7xl font-extrabold text-red-600 tracking-widest drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]">
          404
        </h1>

        <p className="text-xl text-gray-300 mt-4 max-w-lg">
          The page you’re looking for has vanished into the upside down.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-red-600 px-8 py-3 rounded-md font-semibold text-white hover:bg-red-700 active:scale-95 transition"
        >
          Go Home
        </Link>
      </div>

      {/* Zoom animation */}
      <style>
        {`
          @keyframes zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.15); }
          }
          .animate-zoom {
            animation: zoom 20s ease-in-out infinite alternate;
          }
        `}
      </style>
    </div>
  );
};

export default NotFound;