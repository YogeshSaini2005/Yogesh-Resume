
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Hi, I'm <span className="text-yellow-400">Your Name</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
          BCA Graduate & Aspiring Software Developer
        </p>
        
        <p className="text-lg mb-12 text-blue-200 max-w-3xl mx-auto leading-relaxed">
          Passionate about creating innovative solutions and building amazing user experiences with modern technologies. 
          Ready to contribute to your team with fresh ideas and enthusiasm.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
        >
          <ArrowDown size={24} />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default Hero;
