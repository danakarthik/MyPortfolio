import React, { useState } from "react";
import { FaPenNib, FaExternalLinkAlt, FaTag, FaQuoteLeft, FaSearch } from "react-icons/fa";

const Blog = () => {
  const featured = {
    title: "The Mindset of a Modern Engineer",
    desc: "Engineering today is not just about writing code. It's about thinking in systems, designing for scale, and learning continuously.",
    tags: ["Mindset", "Career", "Engineering"],
  };

  const allPosts = [
    {
      title: "Why DSA Still Matters",
      desc: "Data Structures and Algorithms shape how I think about problems. They help me write cleaner, faster, and more scalable code.",
      tags: ["DSA", "Problem Solving"],
      link: "#",
    },
    {
      title: "How I Approach Debugging",
      desc: "Debugging is not guessing. It’s a structured process of isolating variables, validating assumptions, and understanding system behavior.",
      tags: ["Debugging", "Best Practices"],
      link: "#",
    },
    {
      title: "My Love for Java",
      desc: "Java taught me discipline. Strong typing, OOP principles, and clean architecture shaped the way I design systems.",
      tags: ["Java", "OOP"],
      link: "#",
    },
    {
      title: "Building ML Systems",
      desc: "Machine learning isn’t just about models. It’s about data pipelines, evaluation, deployment, and reliability.",
      tags: ["ML", "Systems"],
      link: "#",
    },
  ];

  const quote =
    "“The best engineers aren’t the ones who know everything — they’re the ones who never stop learning.”";

  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const tags = ["All", "DSA", "Debugging", "Java", "ML", "Systems", "OOP", "Career", "Mindset"];

  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.desc.toLowerCase().includes(search.toLowerCase());

    const matchesTag = activeTag === "All" || post.tags.includes(activeTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="w-full min-h-screen bg-black text-white px-10 py-16">

        <div className="mt-10">

      {/* HERO SECTION */}
      <div className="w-full h-64 bg-gradient-to-b from-red-900/40 to-black rounded-xl mb-12 
                      flex flex-col justify-center px-10 shadow-[0_0_40px_rgba(255,0,0,0.3)]">

        <h1 className="text-5xl font-extrabold tracking-wide mb-3 flex items-center gap-3">
          <FaPenNib className="text-red-500" />
          Blog
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
          Thoughts, lessons, and insights from my journey as a developer.
        </p>
      </div>

      {/* FEATURED POST */}
      <h2 className="text-2xl font-semibold mb-4">Featured Post</h2>

      <div className="bg-gray-900/80 rounded-xl p-6 mb-10 backdrop-blur-sm shadow-[0_0_25px_rgba(255,0,0,0.4)]">
        <h3 className="text-2xl font-bold mb-2">{featured.title}</h3>
        <p className="text-gray-300 mb-4">{featured.desc}</p>

        <div className="flex gap-2 mb-4">
          {featured.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-red-700/60 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
            >
              <FaTag size={10} /> {tag}
            </span>
          ))}
        </div>

        <button className="bg-red-600 px-4 py-2 rounded-md text-white font-semibold hover:bg-red-700 transition">
          Read More
        </button>
      </div>

      {/* QUOTE OF THE DAY */}
      <div className="bg-gray-900/60 rounded-lg p-6 mb-10 flex items-start gap-3 shadow-[0_0_20px_rgba(255,0,0,0.3)] backdrop-blur-sm">
        <FaQuoteLeft className="text-red-500 mt-1" size={22} />
        <p className="text-gray-300 italic">{quote}</p>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-6 flex items-center gap-3 bg-gray-900/70 px-4 py-3 rounded-lg shadow-[0_0_15px_rgba(255,0,0,0.2)]">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none text-white w-full"
        />
      </div>

      {/* TAG FILTERS */}
      <div className="flex gap-3 flex-wrap mb-8">
        {tags.map((tag, i) => (
          <button
            key={i}
            onClick={() => setActiveTag(tag)}
            className={`
              px-4 py-1 rounded-full text-sm font-semibold transition
              ${activeTag === tag ? "bg-red-600" : "bg-gray-800 hover:bg-gray-700"}
            `}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* BLOG POSTS */}
      <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>

      <div className="flex flex-col gap-6">
        {filteredPosts.map((item, index) => (
          <div
            key={index}
            className="
              bg-gray-900/80 rounded-lg p-6
              transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,0,0.6)]
              backdrop-blur-sm
            "
          >
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{item.desc}</p>

            {/* TAGS */}
            <div className="flex gap-2 mb-4">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-red-700/60 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
                >
                  <FaTag size={10} /> {tag}
                </span>
              ))}
            </div>

            <a
              href={item.link}
              className="
                bg-red-600 px-4 py-2 rounded-md text-white font-semibold 
                flex items-center gap-2 w-fit hover:bg-red-700 transition
              "
            >
              Read More <FaExternalLinkAlt size={14} />
            </a>
          </div>
        ))}

        {filteredPosts.length === 0 && (
          <p className="text-gray-400 text-center mt-10">No posts found.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default Blog;