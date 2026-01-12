import React from "react";
import { FaBook, FaExternalLinkAlt } from "react-icons/fa";

const Reading = () => {
  const books = [
    {
      title: "Clean Code",
      desc: "A handbook of agile software craftsmanship.",
      link: "https://www.goodreads.com/book/show/3735293-clean-code",
      img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1436202607i/3735293.jpg",
    },
    {
      title: "Designing Data‑Intensive Applications",
      desc: "",
      link: "https://dataintensive.net/",
      img: "https://dataintensive.net/images/book-cover.png",
    },
    {
      title: "Grokking Algorithms",
      desc: "A friendly guide to DSA with visuals.",
      link: "https://www.manning.com/books/grokking-algorithms",
      img: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781633438538/grokking-algorithms-second-edition-9781633438538_hr.jpg",
    },
    {
      title: "Deep Learning with Python",
      desc: "A practical introduction to deep learning using Keras.",
      link: "https://www.manning.com/books/deep-learning-with-python",
      img: "https://images.manning.com/360/480/resize/book/7/65fca1c-6826-472d-bbea-c1d4a7b3c570/Chollet-DLP-HI.png",
    },
  ];

  const blogs = [
    {
      title: "FAANG System Design",
      desc: "High‑level architecture breakdowns for interviews.",
      link: "https://github.com/donnemartin/system-design-primer",
    },
    {
      title: "Machine Learning Mastery",
      desc: "Hands‑on ML tutorials and practical guides.",
      link: "https://machinelearningmastery.com/",
    },
    {
      title: "LeetCode Discuss",
      desc: "Community‑driven solutions and patterns.",
      link: "https://leetcode.com/discuss/",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white px-10 py-16">

        <div className="mt-10">

      {/* HERO SECTION */}
      <div className="w-full h-64 bg-gradient-to-b from-red-900/40 to-black rounded-xl mb-12 
                      flex flex-col justify-center px-10 shadow-[0_0_40px_rgba(255,0,0,0.3)]">

        <h1 className="text-5xl font-extrabold tracking-wide mb-3 flex items-center gap-3">
          <FaBook className="text-red-500" />
          Reading
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
          Books, blogs, and resources that shape my thinking as a developer and fuel my curiosity.
        </p>
      </div>

      {/* BOOKS SECTION */}
      <h2 className="text-2xl font-semibold mb-4">Books I Recommend</h2>

      <div className="flex gap-6  scrollbar-hide pb-6">
        {books.map((item, index) => (
          <div
            key={index}
            className="
              bg-gray-900/80 w-56 h-80 rounded-xl cursor-pointer
              transition-all duration-300 transform hover:scale-105
              hover:shadow-[0_0_25px_rgba(255,0,0,0.6)]
              overflow-hidden backdrop-blur-sm flex flex-col
            "
          >
            {/* Image with fallback */}
            <div className="w-full h-36 bg-black">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f";
                }}
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-snug">
                  {item.desc}
                </p>
              </div>

              {/* Button ALWAYS at bottom */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-red-600 px-3 py-1 rounded-md text-white text-sm font-semibold 
                  flex items-center gap-2 hover:bg-red-700 transition mt-3
                "
              >
                View <FaExternalLinkAlt size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* BLOGS SECTION */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Blogs & Resources</h2>

      <div className="flex flex-col gap-4">
        {blogs.map((item, index) => (
          <div
            key={index}
            className="
              bg-gray-900/80 rounded-lg p-5
              transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,0,0.6)]
              flex justify-between items-center backdrop-blur-sm
            "
          >
            <div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-red-600 px-4 py-2 rounded-md text-white font-semibold 
                flex items-center gap-2 hover:bg-red-700 transition
              "
            >
              Visit <FaExternalLinkAlt size={14} />
            </a>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Reading;