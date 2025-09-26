import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaEye, FaHeart } from 'react-icons/fa';
import { Project } from '../types/Project';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Sample projects data - in a real app, this would come from your API
  const sampleProjects: Project[] = [
    {
      _id: '1',
      title: 'Cozy Bedroom Scene Generation',
      description: 'A creative project showcasing 3D scene generation and rendering techniques for creating cozy bedroom environments.',
      longDescription: 'This project demonstrates advanced 3D modeling and rendering capabilities, creating immersive bedroom environments with realistic lighting and textures.',
      technologies: ['3D Modeling', 'Rendering', 'Animation', 'Blender'],
      category: 'ai-ml',
      images: [],
      videos: [{
        url: '/Cozy_Bedroom_Scene_Generation.mp4',
        title: 'Cozy Bedroom Scene Generation',
        isMain: true
      }],
      links: {
        github: 'https://github.com/ShreyaMandekar',
        live: '#'
      },
      features: ['3D Scene Generation', 'Realistic Rendering', 'Animation'],
      status: 'completed',
      priority: 10,
      isFeatured: true,
      views: 150,
      likes: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: '2',
      title: 'Cosmic Navigator Website',
      description: 'A secure, user-specific note system with MongoDB backend and JWT-based authentication.',
      longDescription: 'Full-stack web application with secure user authentication, real-time note management, and responsive design.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
      category: 'web',
      images: [],
      videos: [],
      links: {
        github: 'https://github.com/ShreyaMandekar',
        live: '#'
      },
      features: ['User Authentication', 'Real-time Updates', 'Responsive Design'],
      status: 'completed',
      priority: 9,
      isFeatured: true,
      views: 120,
      likes: 18,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: '3',
      title: 'Threat Detection using CNN and RNN',
      description: 'CCTV threat detection system using ResNet50 + ConvLSTM, ResNet50 + LSTM, and MobileNetV2 + LSTM.',
      longDescription: 'Advanced computer vision project for real-time threat detection in surveillance footage using deep learning models.',
      technologies: ['Deep Learning', 'Computer Vision', 'Python', 'TensorFlow', 'OpenCV'],
      category: 'ai-ml',
      images: [],
      videos: [],
      links: {
        github: 'https://github.com/ShreyaMandekar',
        live: '#'
      },
      features: ['Real-time Detection', '85.2% Accuracy', '120ms Inference Time'],
      status: 'completed',
      priority: 8,
      isFeatured: true,
      views: 200,
      likes: 35,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: '4',
      title: 'Adobe Hackathon AI-Powered PDF Extractor',
      description: 'PDF structure extractor using PyMuPDF and transformer-based models to detect titles and hierarchical outlines.',
      longDescription: 'AI-powered system for extracting and ranking PDF sections using MiniLM embeddings and FAISS under CPU-only constraints.',
      technologies: ['MiniLM', 'FAISS', 'Transformers', 'PyMuPDF', 'Python'],
      category: 'ai-ml',
      images: [],
      videos: [],
      links: {
        github: 'https://github.com/ShreyaMandekar',
        live: '#'
      },
      features: ['PDF Processing', 'AI Extraction', 'Sub-60s Runtime'],
      status: 'in-progress',
      priority: 7,
      isFeatured: true,
      views: 80,
      likes: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProjects(sampleProjects);
      setLoading(false);
    }, 1000);
  }, []);

  const handleLike = async (projectId: string) => {
    // In a real app, this would make an API call
    setProjects(prev => prev.map(project => 
      project._id === projectId 
        ? { ...project, likes: project.likes + 1 }
        : project
    ));
  };

  if (loading) {
    return (
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="loading">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                {project.videos.length > 0 ? (
                  <video controls>
                    <source src={project.videos[0].url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="placeholder-image">
                    <FaGithub />
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-stats">
                  <span className="stat">
                    <FaEye /> {project.views}
                  </span>
                  <span 
                    className="stat like-stat"
                    onClick={() => handleLike(project._id)}
                  >
                    <FaHeart /> {project.likes}
                  </span>
                </div>
                
                <div className="project-links">
                  {project.links.live && (
                    <a href={project.links.live} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Source Code
                    </a>
                  )}
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