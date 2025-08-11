import React, { useState } from 'react';
import { ExternalLink, Github, Star, Zap, Eye, Heart } from 'lucide-react';
import SF from './res/SF.png';
import EC from './res/EC.png';
import mq from './res/mq.jpg';
import wm from './res/wm.jpg';
import el from './res/el.jpg';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Loan Assesment System',
      description: 'Sustainable Financing project explores innovative approaches to integrate environmental, social, and governance (ESG) factors into financial decision-making.',
      image: SF,
      technologies: ['Springboot', 'React', 'MySQL', 'JavaScript', 'TypeScript', 'RestFul API', 'Git', 'Figma'],
      github: 'https://github.com/ajinvarughese/detroit',
      live: '',
      featured: true,
      stats: { }
    },
    {
      title: 'E-Commerce Platform',
      description: 'A fully functioning E-Commerce platform. That can be used as a marketplace selling products and managing products. Developed using PHP and MySQL.',
      image: EC,
      technologies: ['PHP', 'MySQL', 'AWS', 'Payment Integration', 'Git'],
      github: 'https://github.com/ajinvarughese/xfasso',
      live: 'https://xfasso.zya.me',
      featured: true,
      stats: {  }
    },
    {
      title: 'Medical Insurance Claim Platform',
      description: 'Medical Insurance Claim project streamlines and automates the process of filing, verifying, and approving insurance claims. By integrating Java, React, and Google Cloud, it ensures faster claim settlements, reduces fraud through intelligent verification.',
      image: mq,
      technologies: ['Springboot', 'React', 'MySQL', 'JavaScript', 'TypeScript', 'RestFul API', 'Git', 'Figma'],
      github: 'https://github.com/ajinvarughese/mediquest-backend',
      live: '',
      featured: false,
      stats: {  }
    },
    {
      title: 'Waste Management System',
      description: 'Waste Management System optimizes waste collection through smart scheduling and real-time tracking. Built with Java, React, and Google Cloud, it enables households and businesses to schedule pickups efficiently, minimizes operational costs, and promotes environmental sustainability by ensuring timely and responsible waste disposal.',
      image: wm,
      technologies: ['Springboot', 'React', 'MySQL', 'JavaScript', 'TypeScript', 'RestFul API', 'Git', 'Figma'],
      github: 'https://github.com/ajinvarughese/neural-chat',
      live: 'https://neural-chat-demo.example.com',
      featured: false,
      stats: { }
    },
    {
      title: 'E-Learning Platform',
      description: 'E-Learning web app built with ReactJS and Java Spring Boot, offering interactive courses, personalized learning paths, real-time collaboration, and progress tracking. Designed for all devices, it provides a secure and scalable environment for students, professionals, and lifelong learners to achieve their educational goals.',
      image: el,
      technologies: ['Springboot', 'React', 'MySQL', 'JavaScript', 'RestFul API', 'Git'],
      github: 'https://github.com/ajinvarughese/holographic-portfolio',
      live: 'https://holographic-demo.example.com',
      featured: false,
      stats: {  }
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-full px-6 py-3 mb-8">
            <Zap className="w-5 h-5 text-pink-400" />
            <span className="text-pink-400 font-medium">Featured Work</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-white via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Digital
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Masterpieces
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            A curated collection of groundbreaking projects that push the boundaries
            of technology and redefine user experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Featured badge */}
                <div className="absolute top-6 right-6">
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full px-4 py-2">
                    <Star className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-bold">FEATURED</span>
                  </div>
                </div>

                {/* Stats overlay */}
                <div className="absolute bottom-4 left-6 flex space-x-4">
                  <div className="flex items-center space-x-1 text-white/80">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">{project.stats.views}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-white/80">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{project.stats.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-white/80">
                    <Star className="w-4 h-4" />
                    <span className="text-sm">{project.stats.stars}</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-full text-cyan-400 text-sm font-medium hover:border-cyan-500/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-full text-white transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="w-5 h-5 group-hover/link:text-cyan-400 transition-colors duration-300" />
                    <span>Code</span>
                  </a>
                  
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 rounded-full text-white transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-3 left-4 flex space-x-3">
                  <div className="flex items-center space-x-1 text-white/70">
                    <Eye className="w-3 h-3" />
                    <span className="text-xs">{project.stats.views}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-white/70">
                    <Heart className="w-3 h-3" />
                    <span className="text-xs">{project.stats.likes}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-cyan-400 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-gray-400 text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;