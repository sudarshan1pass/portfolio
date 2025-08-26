import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Palette, ShoppingCart, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce application built with React.js, Redux for state management, and Material UI for the interface. Features include product catalog, shopping cart, user authentication, and payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Redux', 'Material UI', 'Node.js'],
      source:"https://github.com/sudarshan1pass/WTF-Fitness.git",
      icon: ShoppingCart,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'web site',
      description: 'A comprehensive social media management dashboard with real-time analytics, post scheduling, and user engagement metrics. Built with React.js and modern styling approaches.',
      image: 'project.png',
      technologies: ['React.js', 'Material UI','TypeScript','Framer Motion', 'Vite'],
      icon: Users,
      gradient: 'from-emerald-500 to-cyan-600',
       source:"https://github.com/sudarshan1pass/web-site.git",
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing modern web development practices. Features smooth animations, interactive elements, and optimized performance using Vite and React.js.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      icon: Code,
      gradient: 'from-orange-500 to-red-600',
       source:"https://github.com/sudarshan1pass/portfolio.git",
    },
    {
      title: 'Design System Library',
      description: 'A comprehensive design system and component library built with React.js and Material UI. Includes reusable components, design tokens, and extensive documentation.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Material UI', 'Storybook', 'TypeScript'],
      icon: Palette,
      gradient: 'from-pink-500 to-violet-600',
       source:"",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating amazing web experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className="absolute top-4 left-4">
                  <div className={`bg-gradient-to-r ${project.gradient} p-3 rounded-lg shadow-lg`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  {/* <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a> */} 
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.source ?project.source:'#'} 
                    className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
