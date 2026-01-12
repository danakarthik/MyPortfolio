import React from "react";
import NavIntro from "./NavBar/NavIntro";
import Card from "./Card";

const Main = () => {
  const trending = [
    {
      title: "Education",
      img: "https://tse1.mm.bing.net/th/id/OIP.WPDkChnO_b-v8A4GARSUaQHaEK?pid=Api&P=0&h=220",
      link: "/professional",
      description: "Details about my Education."
    },
    {
      title: "Skills",
      img: "https://www.wikihow.com/images/thumb/4/43/Be-Talented-in-Multiple-Areas-Step-01-Version-2.jpg/v4-460px-Be-Talented-in-Multiple-Areas-Step-01-Version-2.jpg",
      link: "/skills",
      description: "A complete list of my technical and professional skills."
    },
    {
      title: "Experience",
      img: "https://static.vecteezy.com/system/resources/previews/024/340/239/original/competence-skills-or-ability-for-work-responsibility-professional-work-experience-capability-or-qualification-for-job-or-career-development-concept-success-businessman-with-competency-skills-set-vector.jpg",
      link: "/professional",
      description: "My work history, roles, and achievements."
    },
    {
      title: "Certifications",
      img: "https://img.freepik.com/vecteurs-premium/illustration-graphique-vectorielle-du-caractere-dessin-anime-du-certificat_516790-2247.jpg",
      link: "/certificate",
      description: "Professional certifications I have earned."
    },
    {
      title: "Recommendations",
      img: "https://tse4.mm.bing.net/th/id/OIP.UhronhxZGkX8gEv57EgvuAHaHZ?pid=Api&P=0&h=220",
      link: "/recommend",
      description: "Feedback and endorsements from mentors and colleagues."
    },
    {
      title: "Projects",
      img: "https://tse1.mm.bing.net/th/id/OIP.SYrVTvw08Ci-jARjsLvMQAHaEw?pid=Api&P=0&h=220",
      link: "/projects",
      description: "A showcase of my best software development projects."
    }
  ];

  const continueWatching = [
    {
      title: "Music",
      img: "https://news.mit.edu/sites/default/files/images/202403/MIT_Music-Perception-01-PRESS.jpg",
      link: "/music",
      description: "My favorite playlists and music interests."
    },
    {
      title: "Reading",
      img: "https://tse1.mm.bing.net/th/id/OIP.YSBz6diXDBEb68MGcN6yWgHaHg?pid=Api&P=0&h=220",
      link: "/reading",
      description: "Books, articles, and content I enjoy reading."
    },
    {
      title: "Blogs",
      img: "https://tse1.mm.bing.net/th/id/OIP.jBHX4vfPuoi_8GMPac5_5gHaHa?pid=Api&P=0&h=220",
      link: "/blogs",
      description: "Personal blogs and thoughts I’ve written."
    },
    {
      title: "Contact Me",
      img: "https://static.vecteezy.com/system/resources/thumbnails/000/166/557/small_2x/CONTACT_ME.jpg",
      link: "/hire",
      description: "Let’s connect and collaborate."
    }
  ];

  return (
    <div className="h-full w-full text-white">
      <NavIntro />

      <div className="pt-20 overflow-x-auto">
        <div className="overflow-x-auto" id="right">
        <h2 className="text-2xl font-semibold px-7 mt-10 mb-3">
          Trending Now
        </h2>
        <Card items={trending} />
        </div>
        <div className="overflow-x-auto" id="right">
        <h2 className="text-2xl font-semibold px-7 mt-10 mb-3">
          Continue Watching
        </h2>
        <Card items={continueWatching} />
        </div>
      </div>
    </div>
  );
};

export default Main;