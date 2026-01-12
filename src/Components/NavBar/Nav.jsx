import React, { useEffect, useState } from 'react'
import Nav1 from './Nav1'

const Nav = () => {

  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBg(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300
      ${showBg ? "bg-black" : "bg-transparent"}`}
    >
      {/* ❌ REMOVE padding from here */}
      <Nav1 />
    </div>
  )
}

export default Nav