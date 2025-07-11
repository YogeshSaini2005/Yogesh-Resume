import React from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI Chat Bot",
      description: "AI contextual Chatbot using the tensorflow and tflearn library. It Primarly focused for an CyberSecurity based Industry.Used the concepts of Natural Language Processing and Neural Network to build it.",
      image: "../assets/AI-Chat-Bot.jpeg",
      technologies: ["Python", "Tensorflow", "Tflearn"],
      githubUrl: "https://github.com/YogeshSaini2005/AI-Chatbot",
      featured: true
    },
    {
      title: "Digital Resume",
      description: "Developed a responsive and interactive portfolio website to showcase personal projects, skills, education, and contact details.",
      image: "../assets/Digital-Resume.jpeg",
      technologies: ["React", "Shadcn", "TailWindCSS"],
      githubUrl: "https://github.com/YogeshSaini2005/Yogesh-Resume",
      featured: true
    }
    // {
    //   title: "Weather Dashboard",
    //   description: "A responsive weather application that provides current weather conditions and forecasts using external API integration.",
    //   image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
    //   technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false
    // },
    // {
    //   title: "Personal Finance Tracker",
    //   description: "A web application to track personal expenses and income with data visualization and budget planning features.",
    //   image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
    //   technologies: ["React", "Chart.js", "Local Storage", "CSS3"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my development skills through practical projects and applications
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {/* <a
                      href={project.liveUrl}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a> */}
                    <a
                      href={project.githubUrl}
                      className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          {/* <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <Code2 className="w-6 h-6 text-blue-600 mr-3" />
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.filter(project => !project.featured).map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a href={project.liveUrl} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Live Demo
                    </a>
                    <a href={project.githubUrl} className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                      View Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/YogeshSaini2005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
