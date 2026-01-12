import React from "react";
import { Link } from "react-router-dom";

const profiles = [
  { id: 1, name: "Recrutier", img: "https://i.pravatar.cc/150?img=3" },
  { id: 2, name: "Developer", img: "https://i.pravatar.cc/150?img=5" },
  { id: 3, name: "Stalker", img: "https://i.pravatar.cc/150?img=12" },
];

const LoadingPage = () => {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-semibold mb-10">Who's watching?</h1>

      <div className="flex gap-10 flex-wrap justify-center">
        {profiles.map((profile) => (
          <Link
            key={profile.id}
            to={`/profile/${profile.id}`}
            className="flex flex-col items-center cursor-pointer group"
          >
            <img
              src={profile.img}
              alt={profile.name}
              className="w-32 h-32 rounded-md object-cover border-2 border-transparent group-hover:border-gray-300 group-hover:scale-110 transition-all duration-300"
            />
            <p className="mt-3 text-lg text-gray-300 group-hover:text-white transition">
              {profile.name}
            </p>
          </Link>
        ))}
      </div>

      <button className="mt-12 text-gray-400 hover:text-white transition">
        Manage Profiles
      </button>
    </div>
  );
};

export default LoadingPage;