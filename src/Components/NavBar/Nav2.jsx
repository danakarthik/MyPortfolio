import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Nav2 = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Professional", path: "/professional" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Hire me", path: "/hire" },
  ];

  return (
    <div className="relative">

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-lg">
        {menuItems.map((item, i) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={i}
              to={item.path}
              className={`cursor-pointer transition leading-tight whitespace-nowrap
                ${isActive ? "text-red-500" : "hover:text-red-500"}
              `}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-10 right-0 bg-black/90 p-4 rounded-lg shadow-lg flex flex-col gap-4 md:hidden z-50">
          {menuItems.map((item, i) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={i}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`cursor-pointer transition
                  ${isActive ? "text-red-500" : "hover:text-red-500"}
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Nav2;