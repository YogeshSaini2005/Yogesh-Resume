
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "TypeScript", level: 75 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 75 },
        { name: "Python", level: 80 },
        { name: "SQL", level: 85 },
        { name: "MongoDB", level: 70 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Linux", level: 70 },
        { name: "Docker", level: 65 },
        { name: "AWS Basics", level: 60 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">{category.title}</h3>
              {/* <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                  
                ))}
              </div> */}
             <div className="flex flex-wrap justify-center gap-4">
              {category.skills.map((skill, index) => (
                <span key={index} className="px-6 py-3 bg-blue-100 text-blue-800 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  {skill.name}
                </span>
              ))}
          </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Responsive Design", "RESTful APIs", "Agile Methodology", "Unit Testing", "Version Control", "Problem Solving", "Team Collaboration", "Technical Documentation"].map((skill, index) => (
              <span key={index} className="px-6 py-3 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
