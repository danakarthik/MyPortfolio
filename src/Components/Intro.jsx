import React, { useState } from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const Intro = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="absolute bottom-0 left-0 z-20 p-10 w-full text-white flex flex-col gap-5">

      {/* INTRO SECTION */}
      <div>
        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="cursor-pointer active:scale-95 mt-2 bg-black/30 px-3 py-1 rounded-md backdrop-blur-sm"
          >
            Learn About Me
          </button>
        )}

        {expanded && (
          <div className="">
           
            <h1 className="text-5xl font-bold tracking-tight mb-3">
              Karthik Bharatapu - Full Stack JAVA Developer
            </h1>

            
         


            <p className="text-sm text-justify font-semibold leading-relaxed">
              M.S. in Computer Science candidate with strong expertise in full-stack
              development, cloud-ready applications, and AI/ML solutions. Skilled in
              Java, Python, React, Spring Boot, Django, and modern front-end frameworks,
              with hands-on experience building scalable RESTful APIs, dynamic web apps,
              and production-grade ML systems. Proven ability to design modular
              architectures, optimize performance, and deliver user-centric, secure, and
              high-quality software solutions. Strong problem-solving, algorithmic, and
              system design skills, with experience mentoring and collaborating in
              fast-paced technical environments.
            </p>

            <button
              onClick={() => setExpanded(false)}
              className="cursor-pointer active:scale-95 mt-3 bg-black/30 px-3 py-1 rounded-md"
            >
              Close
            </button>
          </div>
        )}
      </div>

      {/* RESUME + LINKEDIN BUTTONS */}
      <div className="flex gap-4">

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1VSSg1y2kxzob7ExhOp83MHWaWBHJDbIc/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-2 rounded-md font-bold cursor-pointer active:scale-95 flex items-center gap-2"
        >
          <FaPlay size={18} />
          Resume
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/karthik-bharathapu/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700/80 text-white px-6 py-2 rounded-md font-bold cursor-pointer active:scale-95 flex items-center gap-2"
        >
          <FaInfoCircle size={18} />
          LinkedIn
        </a>

      </div>
    </div>
  );
};

export default Intro;