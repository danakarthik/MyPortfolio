import React from "react";
import { FaMusic, FaHeadphones, FaPlay } from "react-icons/fa";

const Music = () => {
  const playlists = [
    {
      title: "Coding Vibes",
      desc: "Lo-fi, synthwave, and deep focus tracks I use while coding.",
      img: "https://www.windowsnoticias.com/wp-content/uploads/2025/04/0_vOaWDgTmVpMfi9ws.png",
    },
    {
      title: "Workout Energy",
      desc: "High-energy beats that keep me moving.",
      img: "https://img.freepik.com/free-vector/male-athlete-running-landscape_18591-77154.jpg",
    },
    {
      title: "Chill Evenings",
      desc: "Soft, relaxing tracks for late-night thinking.",
      img: "https://clipart-library.com/2023/staycation-backyard_23-2148596625.jpg",
    },
    {
      title: "Indian Classics",
      desc: "Timeless melodies that feel like home.",
      img: "https://static.vecteezy.com/system/resources/previews/023/875/657/original/illustration-of-young-beautiful-indian-classical-dancer-in-different-dancing-pose-vector.jpg",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black text-white px-10 py-16">

      {/* BACKGROUND VIDEO (subtle, cinematic) */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 -z-10"
      >
        <source src="https://cdn.pixabay.com/vimeo/458749473/lofi-50261.mp4?width=1280&hash=8b9c5e" type="video/mp4" />
      </video>
      <div className="mt-10">
      {/* HERO SECTION */}
      <div className="w-full h-64 bg-gradient-to-b from-black/60 to-black rounded-xl mb-12 
                      flex flex-col justify-center px-10 shadow-[0_0_40px_rgba(255,0,0,0.3)]">

        <h1 className="text-5xl font-extrabold tracking-wide mb-3 flex items-center gap-3">
          <FaMusic className="text-red-500 animate-pulse" />
          Music
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
          Playlists and sounds that fuel my coding sessions, workouts, and late-night creativity.
        </p>
      </div>

      {/* PLAYLISTS SECTION */}
      <h2 className="text-2xl font-semibold mb-4">My Playlists</h2>

      <div className="flex gap-6 scrollbar-hide pb-6">
        {playlists.map((item, index) => (
          <div
            key={index}
            className="
              bg-gray-900/80 w-64 h-72 rounded-lg cursor-pointer
              transition-all duration-300 transform hover:scale-105
              hover:shadow-[0_0_25px_rgba(255,0,0,0.6)]
              overflow-hidden backdrop-blur-sm
            "
          >
            <div
              className="w-full h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>

            <div className="p-4">
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-300 leading-snug mb-3">{item.desc}</p>

              <button className="bg-red-600 px-3 py-1  rounded-md text-white text-sm font-semibold flex items-center gap-2 hover:bg-red-700 transition">
                <FaPlay size={14} />
                Play
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* NOW PLAYING SECTION */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Now Playing</h2>

      <div className="bg-gray-900/80 rounded-lg p-6 flex items-center gap-6 shadow-[0_0_25px_rgba(255,0,0,0.4)] backdrop-blur-sm relative">

        {/* Equalizer Animation */}
        <div className="flex gap-1 absolute left-6 top-6">
          <div className="w-1 h-4 bg-red-500 animate-[bounce_0.6s_infinite]" />
          <div className="w-1 h-6 bg-red-500 animate-[bounce_0.5s_infinite]" />
          <div className="w-1 h-3 bg-red-500 animate-[bounce_0.7s_infinite]" />
        </div>

        <FaHeadphones size={40} className="text-red-500 ml-10" />

        <div>
          <h3 className="text-xl font-bold">Focus Mode</h3>
          <p className="text-gray-400 text-sm">Lo-fi beats to keep the code flowing</p>
        </div>

        <button className="ml-auto bg-red-600 px-4 py-2 rounded-md text-white font-semibold flex items-center gap-2 hover:bg-red-700 transition">
          <FaPlay size={16} />
          Listen
        </button>
      </div>

      </div>
    </div>
  );
};

export default Music;