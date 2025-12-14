import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    { name: "HTML / CSS", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js / Express", icon: <FaNodeJs className="text-green-500" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
    { name: "MongoDB / MySQL", icon: <FaDatabase className="text-emerald-400" /> },
    { name: "Git / GitHub", icon: <FaGitAlt className="text-red-500" /> },
  ];

  return (
    <section className="skill pt-20 py-20" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          Skills
        </h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
          I specialize in building full stack web applications with a focus on clean, responsive design and efficient backend functionality. I develop within a robust Linux environment (Arch) and utilize a toolkit including HTML, CSS, JavaScript, React, PHP, Node.js, Express, and databases like MongoDB and MySQL. I’m comfortable with version control using Git/GitHub, deploying apps on Netlify and Vercel, and working in collaborative environments.
        </p>

        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2500}
          className="skill-slider"
        >
          {skills.map((skill, index) => (
            <div key={index} className="item text-center px-6">
              <div className="bg-[#112240] hover:bg-[#00bfa6] hover:text-[#0a192f] transition-all duration-300 rounded-xl p-8 shadow-md text-white">
                <div className="text-7xl mb-3 flex justify-center">
                   {React.cloneElement(skill.icon, { size: 80 })}
                </div>
                <h5 className="font-medium text-lg">{skill.name}</h5>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
