import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Calendar, Sparkles, LoaderIcon } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject || "No Subject",
      message: formData.message
    };

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Email sending error:", error);
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Remove error when user types
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'ajinvarughese91@gmail.com',
      link: 'mailto:ajinvarughese91@gmail.com',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91 8089949054',
      link: 'tel:+918089949054',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Pathanamthitta, Kerala, India',
      link: 'https://maps.app.goo.gl/WurcBAPbPyhA51iTA',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/ajinvarughese',
      color: 'hover:text-white',
      bg: 'hover:bg-gray-800'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ajinvarughese',
      color: 'hover:text-blue-400',
      bg: 'hover:bg-blue-900/20'
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: 'Twitter',
      url: 'https://x.com/ajin_varughese',
      color: 'hover:text-cyan-400',
      bg: 'hover:bg-cyan-900/20'
    }
  ];

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'E-commerce Platform',
    'SaaS Product',
    'API Development',
    'UI/UX Design',
    'Other'
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full px-6 py-3 mb-8">
            <MessageCircle className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Let's Connect</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ready To Create
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Something Amazing?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Let's turn your vision into reality. Whether you have a groundbreaking idea
            or need to elevate your existing project, I'm here to make it happen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center space-x-3">
                <Sparkles className="w-8 h-8 text-cyan-400" />
                <span>Let's Build Together</span>
              </h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                I'm passionate about collaborating with visionaries, entrepreneurs, and teams
                who want to push boundaries and create extraordinary digital experiences.
              </p>
              <div className="grid gap-4">
                <div className="flex items-center space-x-3 text-cyan-400">
                  <Calendar className="w-5 h-5" />
                  <span>Usually responds within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3 text-purple-400">
                  <MessageCircle className="w-5 h-5" />
                  <span>Feel free to ask helps in coding</span>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105">
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                  <div className="relative z-10 flex items-center space-x-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${info.color} bg-opacity-10 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">{info.title}</h4>
                      <a href={info.link} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-lg">
                        {info.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold text-xl mb-6">Follow My Journey</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer"
                    className={`group relative p-4 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-xl border border-gray-800 text-gray-400 ${social.color} ${social.bg} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">{social.icon}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-800">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-3xl"></div>
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-3 text-lg">Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                    className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-cyan-400 text-white placeholder-gray-500"
                    placeholder="Your name" />
                  {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-3 text-lg">Email *</label>
                  <input type="text" id="email" name="email" value={formData.email} onChange={handleChange}
                    className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-cyan-400 text-white placeholder-gray-500"
                    placeholder="your.email@example.com" />
                  {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-semibold mb-3 text-lg">Project Type</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange}
                  className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-cyan-400 text-white">
                  <option value="">Select project type</option>
                  {projectTypes.map((type, index) => (
                    <option key={index} value={type} className="bg-black">{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-3 text-lg">Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                  rows={6} className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-cyan-400 text-white placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project..."></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
              </div>

              <button type="submit" disabled={isSubmitting}
              style={{"opacity": isSubmitting ? 0.5 : 1}}
                className="flex  w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">

                {
                  !isSubmitting ? (
                    <>
                      <Send />
                      <div className="align-center w-full">
                        Send
                      </div>
                    </>
                  )
                  : (
                    <>
                      <LoaderIcon />
                      <div className="align-center w-full">
                        Sending...
                      </div>
                    </>
                  )
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
