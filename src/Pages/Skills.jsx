import React from "react";

const Skills = () => {
  return (
    <div className="bg-gray-950 min-h-screen text-white px-10 py-16 space-y-24">

      <SkillCategory
        title="Programming Languages"
        skills={[
          { name: "Java", desc: "Object-Oriented Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
          { name: "Python", desc: "General Purpose Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
          { name: "C", desc: "Procedural Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
          { name: "C++", desc: "High Performance OOP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
          { name: "JavaScript", desc: "Web Scripting Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "SQL", desc: "Database Query Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        ]}
      />

      <SkillCategory
        title="Frameworks & Libraries"
        skills={[
          { name: "Django", desc: "Python Web Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
          { name: "NumPy", desc: "Numerical Computing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
          { name: "Pandas", desc: "Data Analysis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
          { name: "Bootstrap", desc: "UI Component Library", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
          { name: "Java Collections", desc: "Java Utility Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
          { name: "TensorFlow", desc: "Deep Learning Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
          { name: "Matplotlib", desc: "Data Visualization", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
          { name: "Spring", desc: "Java Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
          { name: "Spring Boot", desc: "Java Microservices", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        ]}
      />

      <SkillCategory
        title="Databases"
        skills={[
          { name: "MySQL", desc: "Relational Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          { name: "Oracle", desc: "Enterprise Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
          { name: "MongoDB", desc: "NoSQL Document DB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        ]}
      />

      <SkillCategory
        title="Frontend Development"
        skills={[
          { name: "Next.js", desc: "React Fullstack Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
          { name: "React.js", desc: "Frontend Library", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "HTML", desc: "Markup Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
          { name: "CSS", desc: "Styling Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
          { name: "Bootstrap", desc: "UI Components", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
          { name: "XML", desc: "Data Markup", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg" },
          { name: "Tailwind CSS", desc: "Utility CSS Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        ]}
      />

      <SkillCategory
        title="AI / Machine Learning"
        skills={[
          { name: "TensorFlow", desc: "Deep Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
          { name: "PyTorch", desc: "ML Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
          { name: "Scikit-learn", desc: "ML Algorithms", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
          { name: "OpenCV", desc: "Computer Vision", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
          { name: "NLP", desc: "Language Processing", icon: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png" },
          { name: "LLMs", desc: "Large Language Models", icon: "https://cdn-icons-png.flaticon.com/512/4712/4712100.png" },
          { name: "Regression", desc: "Predictive Modeling", icon: "https://cdn-icons-png.flaticon.com/512/993/993928.png" },
          { name: "Classification", desc: "ML Techniques", icon: "https://cdn-icons-png.flaticon.com/512/993/993928.png" },
          { name: "Deep Learning", desc: "Neural Networks", icon: "https://cdn-icons-png.flaticon.com/512/4712/4712100.png" },
        ]}
      />

      <SkillCategory
        title="Tools & Platforms"
        skills={[
          { name: "Git", desc: "Version Control", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
          { name: "GitHub", desc: "Code Hosting", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
          { name: "Visual Studio Code", desc: "Code Editor", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
          { name: "Linux", desc: "Operating System", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
          { name: "Windows", desc: "Operating System", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
          { name: "Microsoft Office", desc: "Productivity Tools", icon: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
          { name: "Jupyter", desc: "Notebook Environment", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
          { name: "Google Colab", desc: "Cloud ML Platform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
          { name: "Eclipse", desc: "Java IDE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" },
          { name: "Spring Tool Suite", desc: "Spring IDE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
          { name: "IntelliJ", desc: "Java IDE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
          { name: "Maven", desc: "Build Tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
          { name: "Postman", desc: "API Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        ]}
      />

      <SkillCategory
        title="Core Competencies"
        skills={[
          { name: "OOP", desc: "Object-Oriented Design", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" },
          { name: "Software Development", desc: "End-to-End Engineering", icon: "https://cdn-icons-png.flaticon.com/512/906/906334.png" },
          { name: "Cloud Computing", desc: "Distributed Systems", icon: "https://cdn-icons-png.flaticon.com/512/4144/4144723.png" },
          { name: "DSA", desc: "Problem Solving", icon: "https://cdn-icons-png.flaticon.com/512/3209/3209265.png" },
          { name: "REST APIs", desc: "Backend Services", icon: "https://cdn-icons-png.flaticon.com/512/1038/1038100.png" },
          { name: "Scalable Systems", desc: "High Performance", icon: "https://cdn-icons-png.flaticon.com/512/3209/3209265.png" },
          { name: "Automated Testing", desc: "Quality Assurance", icon: "https://cdn-icons-png.flaticon.com/512/906/906334.png" },
          { name: "Telemetry", desc: "System Monitoring", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" },
          { name: "Metrics", desc: "Performance Insights", icon: "https://cdn-icons-png.flaticon.com/512/4144/4144723.png" },
          { name: "Test Automation", desc: "QA Engineering", icon: "https://cdn-icons-png.flaticon.com/512/906/906334.png" },
          { name: "Problem-Solving", desc: "Analytical Thinking", icon: "https://cdn-icons-png.flaticon.com/512/3209/3209265.png" },
          { name: "Agile", desc: "Team Collaboration", icon: "https://cdn-icons-png.flaticon.com/512/906/906334.png" },
        ]}
      />

    </div>
  );
};

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="text-center">
      <div className="mt-10">
      <h2 className="text-4xl font-bold text-red-500 mb-10">{title}</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 w-64 p-6 rounded-lg shadow-lg border border-gray-800 hover:border-red-500 transition-all duration-300"
          >
            <div
              className="animate-fall opacity-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-gray-400 text-sm mt-2">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes fall {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fall {
            animation: fall 0.6s ease forwards;
          }
        `}
      </style>
      </div>
    </div>
  );
};

export default Skills;