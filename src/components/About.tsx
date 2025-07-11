
import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable and efficient code following best practices"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Problem Solver",
      description: "Analytical thinking and creative solutions to complex challenges"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Team Player",
      description: "Collaborative approach with excellent communication skills"
    },
    {
      icon: <Coffee className="w-8 h-8 text-amber-600" />,
      title: "Quick Learner",
      description: "Passionate about learning new technologies and frameworks"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Fresh Graduate Ready to Make an Impact
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As a recent BCA graduate, I bring a strong foundation in computer science fundamentals 
              combined with hands-on experience in modern web development technologies. My academic 
              journey has equipped me with problem-solving skills and a deep understanding of 
              software development principles.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm passionate about creating user-friendly applications and always eager to learn 
              new technologies. My goal is to contribute to innovative projects while growing as 
              a professional developer in a collaborative environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Problem Solving
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Team Collaboration
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Continuous Learning
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
