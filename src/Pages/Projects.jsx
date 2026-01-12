import React, { useState } from "react";

const projects = [
  {
    title: "Journal Entries REST API",
    tech: "Java • Spring Boot • MongoDB • JWT",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    bullets: [
      "Built scalable REST APIs with CRUD, pagination, sorting, filtering.",
      "Implemented JWT auth, role-based access, BCrypt hashing.",
      "Used Controller-Service-Repository architecture with DTOs.",
      "Added JUnit & Mockito tests for reliability."
    ]
  },
  {
    title: "Disease Prediction Using Machine Learning",
    tech: "Python • SVM • Random Forest",
    img: "https://tse3.mm.bing.net/th/id/OIP.jsdjeS0fZO7zEeVSW58uEwHaEU?pid=Api&P=0&h=220",
    bullets: [
      "Achieved 95% accuracy using ML models.",
      "Performed feature engineering & hyperparameter tuning.",
      "Built a cloud-ready web app for predictions.",
      "Added automated testing for model validation."
    ]
  },
  {
    title: "Deep Fake Detection System",
    tech: "React • Flask • PyTorch • AWS",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    bullets: [
      "Developed full-stack app using PyTorch & ResNet.",
      "Detected AI-generated images with high accuracy."
    ]
  },
  {
    title: "IntelliFit Exercise Detection System",
    tech: "React • Flask • OpenCV • TensorFlow • Docker",
    img: "https://picx.zhimg.com/v2-46e8a6f6993467036e04962752798569_720w.jpg?source=172ae18b",
    bullets: [
      "Real-time exercise detection using OpenCV + TensorFlow.",
      "Containerized and deployed using Docker."
    ]
  },
  {
    title: "Love Calculator",
    tech: "Spring Boot • MVC • MySQL",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    bullets: [
      "Built full-stack Spring Boot app with MVC + JDBC.",
      "Stored user data, sent emails, supported update/delete."
    ]
  },
  {
    title: "React Image Gallery with Pagination",
    tech: "React • Axios • Tailwind CSS",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    bullets: [
      "Fetched images from Picsum API with pagination.",
      "Built reusable components & smooth transitions."
    ]
  },
  {
    title: "React Notes App",
    tech: "React • Tailwind CSS",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    bullets: [
      "Real-time note creation & deletion using useState.",
      "Clean component-driven architecture."
    ]
  }
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-gray-950 min-h-screen text-white px-6 md:px-16 py-16">
      <div className="mt-7">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-12">
        Projects Showcase
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            onClick={() => setSelected(p)}
            className="relative group rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:scale-[1.03] hover:border-red-500 transition-all duration-300 cursor-pointer"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            <div className="absolute bottom-0 p-5 w-full translate-y-10 group-hover:translate-y-0 transition-all duration-500">
              <h2 className="text-xl font-bold">{p.title}</h2>
              <p className="text-red-400 text-sm mt-1">{p.tech}</p>
            </div>
          </div>
        ))}
      </div>

      {/* NETFLIX-STYLE EXPANDED MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center p-6 z-50">
          <div className="bg-gray-900 max-w-3xl w-full rounded-xl overflow-hidden shadow-xl border border-gray-700 animate-scaleUp relative">

            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-white text-2xl hover:text-red-500"
            >
              ✕
            </button>

            {/* Banner Image */}
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full h-64 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h2 className="text-3xl font-bold">{selected.title}</h2>
              <p className="text-red-400 mt-1">{selected.tech}</p>

              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base">
                {selected.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Animation */}
          <style>
            {`
              @keyframes scaleUp {
                0% { transform: scale(0.7); opacity: 0; }
                100% { transform: scale(1); opacity: 1; }
              }
              .animate-scaleUp {
                animation: scaleUp 0.3s ease forwards;
              }
            `}
          </style>
        </div>
      )}
      </div>
    </div>
  );
};

export default Projects;