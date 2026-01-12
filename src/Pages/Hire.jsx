import React from "react";

const Hire = () => {
  return (
    <div className="bg-gray-950 min-h-screen flex justify-center items-center px-6 py-16 text-white">
      <div className="mt-7">

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 max-w-xl w-full shadow-xl hover:shadow-red-500/20 transition-all duration-300">

        {/* Profile Section */}
        <div className="flex flex-col items-center text-center">
          <img
            src="https://avatars.githubusercontent.com/u/00000000?v=4"
            alt="Profile"
            className="w-28 h-28 rounded-full border-2 border-red-500 shadow-lg object-cover"
          />

          <h1 className="text-3xl font-bold mt-4">Karthik Bharathapu</h1>
          <p className="text-red-400 text-lg font-semibold mt-1">
            Full‑Stack Developer • AI/ML Engineer
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed text-sm">
            Passionate about building scalable systems, intelligent applications,
            and cinematic user experiences. Skilled in Java, Spring Boot, React,
            Python, ML, and Cloud technologies. Always excited to collaborate and
            create something impactful.
          </p>

          {/* View Profile Button */}
          <a
            href="https://www.linkedin.com/in/karthik-bharathapu/"
            target="_blank"
            className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300"
          >
            View LinkedIn Profile
          </a>
        </div>

        {/* Contact Section */}
        <div className="mt-10 space-y-4">

          <ContactItem
            label="Email"
            value="danakarthik7@gmail.com"
            link="mailto:danakarthik7@gmail.com"
            icon="https://cdn-icons-png.flaticon.com/512/732/732200.png"
          />

          <ContactItem
            label="Phone"
            value="561‑843‑5847"
            link="tel:5618435847"
            icon="https://cdn-icons-png.flaticon.com/512/724/724664.png"
          />

          <ContactItem
            label="GitHub"
            value="github.com/danakarthik"
            link="https://github.com/danakarthik"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />

          <ContactItem
            label="LeetCode"
            value="leetcode.com/u/karthikbharathapu"
            link="https://leetcode.com/u/karthikbharathapu/"
            icon="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          />

        </div>

        {/* Footer Message */}
        <p className="text-gray-400 text-center mt-8 text-sm">
          Let’s connect and build something amazing together.
        </p>
      </div>
      </div>
    </div>
  );
};

const ContactItem = ({ label, value, link, icon }) => (
  <a
    href={link}
    target="_blank"
    className="flex items-center gap-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-red-500 rounded-lg p-4 transition-all duration-300"
  >
    <img src={icon} alt={label} className="w-8 h-8" />
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-white font-semibold">{value}</p>
    </div>
  </a>
);

export default Hire;