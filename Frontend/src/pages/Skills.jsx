import React from "react";

const skills = [
  { name: "React", color: "bg-blue-500" },
  { name: "Node.js", color: "bg-green-600" },
  { name: "MongoDB", color: "bg-green-800" },
  { name: "MySQL", color: "bg-blue-700" },
  { name: "GitHub", color: "bg-gray-900" },
  { name: "VS Code", color: "bg-indigo-600" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`px-4 py-2 rounded-full text-white font-semibold ${skill.color}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;