import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const stats = [
    { number: "95.76%", label: "Work Experience" },
    { number: "4+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              I'm a passionate developer with a love for creating innovative solutions 
              and beautiful user experiences. With expertise in modern web technologies, 
              I enjoy turning complex problems into simple, elegant designs.
            </p>
            <p>
              Currently working as a Software Development Team Lead at Connect-Ed, 
              I've developed responsive educational platforms using React, TypeScript, 
              and Node.js. I'm also passionate about AI/ML projects, having worked on 
              threat detection systems and drowsiness detection models.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or participating in hackathons 
              like Adobe's "Connecting the Dots" where I was selected in the top 1.3%.
            </p>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;