
import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Your University Name",
      duration: "2021 - 2024",
      grade: "CGPA: 8.5/10",
      description: "Comprehensive study of computer science fundamentals, programming languages, database management, and software engineering principles.",
      highlights: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Web Development",
        "Software Engineering"
      ]
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Your School Name",
      duration: "2019 - 2021",
      grade: "Percentage: 85%",
      description: "Science stream with Mathematics, Physics, and Chemistry as core subjects.",
      highlights: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science"
      ]
    }
  ];

  const certifications = [
    "Full Stack Web Development - Online Course",
    "JavaScript ES6+ Certification",
    "React.js Development Certificate",
    "Git & GitHub Mastery",
    "SQL Database Fundamentals"
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
              Academic Background
            </h3>
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200 last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">{item.duration}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.degree}</h4>
                    <p className="text-blue-600 font-medium mb-2">{item.institution}</p>
                    <p className="text-green-600 font-medium mb-3">{item.grade}</p>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <span key={hIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <Award className="w-6 h-6 text-blue-600 mr-3" />
              Certifications & Courses
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-800 font-medium">{cert}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Achievements */}
            <div className="mt-12">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Academic Achievements</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Dean's List for Academic Excellence (2023)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Best Project Award - Final Year Project</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Programming Competition - 2nd Place (2022)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
