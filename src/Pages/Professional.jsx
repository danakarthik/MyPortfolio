import React from "react";

const Professional = () => {
  return (
    <div className="bg-gray-950 min-h-screen text-white px-6 md:px-16 py-16">
      <div className="mt-10">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Work Experience & Education Timeline
      </h1>

      <div className="max-w-5xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-6 top-0 h-full border-l-2 border-gray-700" />

        <div className="space-y-10">
          {/* EXPERIENCE 1 */}
          <TimelineItem
            title="Software Developer (Intern)"
            company="SRIMA Tech, India"
            tech="Salesforce, REST APIs, React, Django, Next.js, Jest, Mocha"
            date="May 2023 – Oct 2023"
            bullets={[
              "Enhanced Salesforce CRM workflows by integrating RESTful APIs, improving system efficiency and data management.",
              "Developed a customer portal using React, delivering a responsive, user-friendly interface.",
              "Implemented AI-powered analytics features using Django, providing actionable insights and automating data-driven decisions.",
              "Optimized frontend performance and responsiveness using Next.js, ensuring seamless user experience across devices.",
              "Built a comprehensive automated testing suite with Jest and Mocha, increasing code reliability and coverage.",
              "Collaborated with cross-functional teams to design scalable, maintainable solutions for enterprise applications.",
            ]}
          />

          {/* EXPERIENCE 2 */}
          <TimelineItem
            title="Student Mentor"
            company="Smart Interviews, India"
            tech="Data Structures & Algorithms, OOP, Problem Solving"
            date="Aug 2022 – Dec 2022"
            bullets={[
              "Mentored college students in problem-solving, data structures, algorithms, and object-oriented programming for technical interviews.",
              "Guided students through debugging, optimization, and testing of coding solutions, improving algorithmic efficiency.",
              "Designed and curated practice problems, coding challenges, and test cases for real-world interview preparation.",
              "Provided analytical insights and structured guidance, helping students develop scalable and reliable solutions.",
              "Delivered one-on-one coaching to improve performance in timed assessments, building confidence and technical acumen.",
              "Collaborated with peers and mentors to refine teaching strategies, ensuring high-quality learning outcomes.",
            ]}
          />

          {/* EDUCATION 1 */}
          <TimelineItem
            title="M.S. in Computer Science — GPA: 3.75"
            company="Florida Atlantic University"
            tech="Data Structures & Algorithms, Machine Learning, DBMS, Web Development, Operating Systems, Deep Learning, Data Science, Neural Networks, Software Engineering"
            date="Jan 2024 – Dec 2025"
            bullets={[]}
          />

          {/* EDUCATION 2 */}
          <TimelineItem
            title="B.Tech in Information Technology — GPA: 3.5"
            company="MLR Institute of Technology, Hyderabad, India"
            tech=""
            date="Aug 2019 – May 2023"
            bullets={[]}
          />
        </div>
      </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ title, company, tech, date, bullets }) => {
  return (
    <div className="relative pl-10 md:pl-14">

      <div className="mt-10">

      {/* 🔥 Creative Marker: Red Pulse + Ripple */}
      <div className="absolute left-1 md:left-3 top-2">
        {/* Core glowing dot */}
        <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(255,0,0,0.9)] animate-pulse relative z-10"></div>

        {/* Ripple ring */}
        <div className="absolute inset-0 w-4 h-4 rounded-full border-2 border-red-500 animate-ping"></div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-5 md:p-6 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
              {title}
              <span className="text-lg">🎉</span>
            </h2>
            <p className="text-gray-300 mt-1">{company}</p>

            {tech && (
              <p className="text-gray-400 text-sm mt-2">
                <span className="font-semibold text-gray-300">Technologies:</span> {tech}
              </p>
            )}
          </div>

          <p className="text-gray-400 text-sm md:text-right mt-1 md:mt-0">
            {date}
          </p>
        </div>

        {bullets.length > 0 && (
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>
      </div>
    </div>
  );
};

export default Professional;