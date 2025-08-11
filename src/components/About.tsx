import React from 'react';
import { Code, BrainCircuit, Zap, Users, Rocket, Brain, Heart, Star, Sparkles, Download } from 'lucide-react';
import cvPdf from './res/AJINVARUGHESE.pdf';
const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Architecture',
      description: 'Building scalable, maintainable systems with modern best practices',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: 'Creative Thinking',
      description: 'Breaking boundaries with fresh ideas that inspire innovation and shape unique solutions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance First',
      description: 'Optimizing every millisecond for lightning-fast user experiences',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Synergy',
      description: 'Collaborating effectively to turn ambitious visions into reality',
      color: 'from-green-500 to-teal-500'
    }
  ];
  const date = new Date();
  const months = (date.getFullYear() - 2020)*12;
  const stats = [
    { number: '8+', label: 'Projects Completed', icon: <Rocket className="w-6 h-6" /> },
    { number: months+"+", label: 'Months of Coding Experience', icon: <Brain className="w-6 h-6" /> },
    { number: '10+', label: 'Languages and Tools', icon: <Heart className="w-6 h-6" /> },
    { number: '24/7', label: 'Passion Driven', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">About Me</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Turning Ideas Into
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate creator who lives at the intersection of innovation and technology,
            constantly pushing the boundaries of what's possible in the digital realm.
          </p>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="text-cyan-400 mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                With over {Math.round(months/12)} years of experience crafting digital experiences, I specialize in
                building applications that don't just work—they inspire. My journey began with
                a simple curiosity about how things work, and it has evolved into
                a relentless pursuit of technical perfection.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe technology should be invisible, intuitive, and transformative. Whether
                I'm architecting complex backend systems or complex problem solving that feel like
                magic, I approach every challenge with creativity, precision, and an obsession
                for detail.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not immersed in code, you'll find me exploring emerging technologies,
                contributing to open-source projects, or mentoring the next generation of
                digital creators.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-4">
                {['AI/ML Engineering', 'Java Springboot', 'Python', 'RestFul API', 'React', 'TypeScript', 'DBMS'].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex mt-8'>
                <a
                  onClick={() => {window.open(cvPdf, '_blank');}}
                  className="cursor-pointer group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Download My Resume</span>
                    <Download className="w-5 h-5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
            
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${highlight.color} bg-opacity-10 text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {highlight.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;