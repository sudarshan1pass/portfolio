import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices and modern patterns.'
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Creating stunning user interfaces that provide excellent user experience.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building fast, optimized applications with attention to performance metrics.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate React.js developer with expertise in modern web technologies. 
            I love creating beautiful, functional applications that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As a dedicated frontend developer, I specialize in React.js ecosystem and modern web development. 
              My passion lies in creating seamless user experiences through clean code and thoughtful design.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I have hands-on experience with React.js, Material UI, Tailwind CSS, Redux, and the entire 
              modern JavaScript ecosystem. I'm always eager to learn new technologies and stay updated 
              with the latest industry trends.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-emerald-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-emerald-500 p-3 rounded-lg">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;