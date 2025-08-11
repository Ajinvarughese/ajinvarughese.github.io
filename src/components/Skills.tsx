import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Palette, Globe, Smartphone, Cloud } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // ensures it only runs once
        }
      },
      { threshold: window.innerWidth < 768 ? 0.05 : 0.3 } // lower threshold for mobile
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  const skillCategories = [
    {
      title: 'Frontend Mastery',
      icon: <Code className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'React', level: 98, color: 'bg-gradient-to-r from-cyan-500 to-blue-500' },
        { name: 'TypeScript', level: 90, color: 'bg-gradient-to-r from-blue-500 to-purple-500' },
        { name: 'Tailwind CSS', level: 85, color: 'bg-gradient-to-r from-cyan-400 to-teal-500' },
        { name: 'JavaScript', level: 95, color: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
        { name: 'HTML', level: 100, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
        { name: 'CSS', level: 100, color: 'bg-gradient-to-r from-blue-400 to-indigo-500' },
      ]
    },
    {
      title: 'Backend Power',
      icon: <Database className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Springboot', level: 92, color: 'bg-gradient-to-r from-green-500 to-teal-500' },
        { name: 'Python', level: 88, color: 'bg-gradient-to-r from-yellow-500 to-orange-500' },
        { name: 'PHP', level: 99, color: 'bg-gradient-to-r from-pink-500 to-rose-500' },
        { name: 'PostgreSQL', level: 95, color: 'bg-gradient-to-r from-blue-500 to-indigo-500' },
        { name: 'MySQL', level: 95, color: 'bg-gradient-to-r from-red-500 to-orange-500' },
        { name: 'MongoDB', level: 82, color: 'bg-gradient-to-r from-green-600 to-green-500' },
      ]
    },
    {
      title: 'Design & UX',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Figma', level: 80, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
        { name: 'UI/UX Design', level: 80, color: 'bg-gradient-to-r from-indigo-500 to-purple-500' },
        { name: 'Prototyping', level: 98, color: 'bg-gradient-to-r from-cyan-500 to-blue-500' },
        { name: 'Design Systems', level: 98, color: 'bg-gradient-to-r from-teal-500 to-cyan-500' },
      ]
    },
    {
      title: 'DevOps, Cloud & Others',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', level: 82, color: 'bg-gradient-to-r from-orange-500 to-yellow-500' },
        { name: 'Docker', level: 85, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
        { name: 'Jira', level: 80, color: 'bg-gradient-to-r from-green-500 to-teal-500' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full px-6 py-3 mb-8">
            <Code className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-medium">Skills & Expertise</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-white via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mastering The
            <span className="block bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Digital Craft
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            A comprehensive arsenal of cutting-edge technologies and methodologies
            to bring your wildest digital dreams to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} bg-opacity-10 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-semibold text-lg">{skill.name}</span>
                        <span className="text-gray-400 font-medium">{skill.level}%</span>
                      </div>
                      
                      <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating skill badges */}
        <div className="mt-20 flex flex-wrap justify-center gap-4">
          {['Springboot', 'Python', 'AI/ML Engineering', 'React', 'TypeScript', 'RestFul API', 'AWS'].map((tech, index) => (
            <div
              key={index}
              className="group relative px-6 py-3 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl rounded-full border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;