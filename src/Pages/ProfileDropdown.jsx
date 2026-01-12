import React, { useState } from "react";
import { Link } from "react-router-dom";

const profiles = [
  { id: 1, name: "Recruiter", img: "https://i.pravatar.cc/40?img=11" },
  { id: 2, name: "Developer", img: "https://i.pravatar.cc/40?img=32" },
  { id: 3, name: "Guest", img: "https://i.pravatar.cc/40?img=15" },
];

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Profile Icon */}
      <img
        src="https://i.pravatar.cc/40?img=12"
        alt="profile"
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-md cursor-pointer hover:scale-110 transition-all duration-300"
      />

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 mt-3 w-48 bg-black border border-gray-700 rounded-lg shadow-lg
                     animate-dropdown z-50"
        >
          {profiles.map((p) => (
            <Link
              key={p.id}
              to={`/profile/${p.id}`}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition-all"
              onClick={() => setOpen(false)}
            >
              <img src={p.img} className="w-8 h-8 rounded-md" />
              <p className="text-gray-300 hover:text-white">{p.name}</p>
            </Link>
          ))}

          <div className="border-t border-gray-700"></div>

          <Link
            to="/profiles"
            className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
            onClick={() => setOpen(false)}
          >
            Manage Profiles
          </Link>
        </div>
      )}

      {/* Animation */}
      <style>
        {`
          @keyframes dropdown {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-dropdown {
            animation: dropdown 0.15s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default ProfileDropdown;