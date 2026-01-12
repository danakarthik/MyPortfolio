import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-red-900/40 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8">

        {/* Social Icons */}
        <div className="flex gap-10">

          {/* LinkedIn */}
          <FooterIcon
            link="https://www.linkedin.com/in/karthik-bharathapu/"
            icon="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          />

          {/* GitHub */}
          <FooterIcon
            link="https://github.com/danakarthik"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            invert
          />

          {/* LeetCode */}
          <FooterIcon
            link="https://leetcode.com/u/karthikbharathapu/"
            icon="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          />

          {/* Email */}
          <FooterIcon
            link="mailto:danakarthik7@gmail.com"
            icon="https://cdn-icons-png.flaticon.com/512/732/732200.png"
          />

          {/* Phone */}
          <FooterIcon
            link="tel:5618435847"
            icon="https://cdn-icons-png.flaticon.com/512/724/724664.png"
          />

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-red-900/30"></div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm tracking-wide opacity-80">
          © {new Date().getFullYear()} Karthik Bharathapu • Crafted with passion
        </p>
      </div>
    </footer>
  );
};

const FooterIcon = ({ link, icon, invert }) => (
  <a
    href={link}
    target="_blank"
    className="transition-all duration-300 hover:scale-125 hover:opacity-100 opacity-80"
  >
    <img
      src={icon}
      alt="icon"
      className={`w-8 h-8 ${invert ? "invert" : ""}`}
    />
  </a>
);

export default Footer;