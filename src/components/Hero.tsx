import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const titles = ['Full Stack Developer', 'AI/ML Engineering', 'Creative Technologist', 'Digital Innovator'];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 245, 255, 0.15), transparent 40%)`
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-500/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-purple-500/20 rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 border border-pink-500/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-2/3 right-1/3 w-20 h-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rotate-45 animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Animated greeting */}
          <div className="space-y-1 pt-12 mt-12">
            <div className="flex items-center justify-center space-x-2 animate-fade-in-up">
              <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
              <span className="text-lg text-cyan-400 font-medium tracking-wider uppercase">
                Welcome to my portfolio
              </span>
              <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
            </div>

            {/* Main title with insane animations */}
            <div className="relative">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 animate-fade-in-up animation-delay-200">
                <span className="block bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                  Ajin
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x animation-delay-300">
                  Varughese
                </span>
              </h1>
              
              {/* Glowing effect behind text */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10 animate-pulse"></div>
            </div>

            {/* Rotating titles */}
            <div className="h-16 flex items-center justify-center animate-fade-in-up animation-delay-400">
              <span className="text-2xl sm:text-3xl text-gray-300 font-light">
                {titles[currentTitle]}
              </span>
            </div>
          </div>

          {/* Description with typewriter effect */}
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
            Crafting digital experiences that push the boundaries of what's possible.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-medium">
              Where innovation meets imagination.
            </span>
          </p>

          {/* CTA Buttons with insane hover effects */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up animation-delay-800">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Let's Create Magic</span>
                <Sparkles className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#projects"
              className="group relative px-8 py-4 border-2 border-transparent bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 transform hover:scale-105"
            >
              <span className="absolute inset-0 bg-black m-0.5 rounded-full"></span>
              <span className="relative z-10 flex items-center space-x-2">
                <span>Explore My Work</span>
                <Download className="w-5 h-5" />
              </span>
            </a>
          </div>

          {/* Social links with magnetic effect */}
          <div className="flex justify-center space-x-8 animate-fade-in-up animation-delay-1000">
            {[
              { icon: Github, href: 'https://github.com/ajinvarughese', color: 'hover:text-white' },
              { icon: Linkedin, href: 'https://linkedin.com/in/ajinvarughese', color: 'hover:text-blue-400' },
              { icon: Mail, href: 'mailto:ajinvarughese91@gmail.com', color: 'hover:text-cyan-400' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                <social.icon size={28} className="relative z-10" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;