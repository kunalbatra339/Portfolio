import React from 'react'
import { ExternalLink, Smartphone } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: '🛡️ ResQForce',
      description: 'A disaster preparedness and response platform for schools and colleges in India. Features real-time alerts, emergency reporting, and connects to a Flask backend with MongoDB.',
      technologies: ['React', 'Vite', 'Flask', 'MongoDB', 'Android'],
      gradient: 'var(--gradient-fire)',
      icon: '🛡️',
      liveUrl: 'https://resqforce.vercel.app',
      androidUrl: 'https://drive.google.com/file/d/1vqHPTsHXxmjxUEtmCCmgyK_Idc9ncyEF/view?usp=drive_link'
    },
    {
      id: 2,
      title: '🧠 MindEase',
      description: 'A mental wellness application designed to provide peace and clarity, built with React, Vite, Flask, and MongoDB to deliver a seamless user experience.',
      technologies: ['React', 'Vite', 'Flask', 'MongoDB', 'CSS'],
      gradient: 'var(--gradient-aurora)',
      icon: '🧠',
      liveUrl: 'https://mind-ease-nine.vercel.app/',
    },
    {
      id: 3,
      title: '🌳 Green City Blueprint',
      description: 'A conceptual model for sustainable urban planning, visualizing eco-friendly infrastructure, green spaces, and efficient resource management.',
      technologies: ['React', 'Vite', 'CSS', 'Data Visualization'],
      gradient: 'var(--gradient-forest)',
      icon: '🌳',
      liveUrl: 'https://green-city-blueprint.vercel.app/',
    },
    {
      id: 4,
      title: '🌿 Plant Health Detector',
      description: 'An AI-powered tool that processes plant images using a trained ML model to predict its health and detect potential diseases.',
      technologies: ['React', 'Python', 'AI/ML', 'Computer Vision'],
      gradient: 'var(--gradient-forest)',
      icon: '🌿',
      liveUrl: 'https://ai-problem-solver-beta.vercel.app/',
    },
    {
      id: 5,
      title: '📋 Todo List',
      description: 'A clean and efficient to-do list application to manage daily tasks, built with React and Vite for a fast user experience.',
      technologies: ['React', 'Vite', 'JavaScript', 'CSS'],
      gradient: 'var(--gradient-sunset)',
      icon: '📋',
      liveUrl: 'https://todo-list-ed45.vercel.app/',
    },
    {
      id: 6,
      title: '🪐 Solar System Simulation', // Changed
      description: 'A 3D solar system model built from a personal love for astronomy, showcasing the orbits and movements of the planets.', // Changed
      technologies: ['HTML', 'CSS', 'JavaScript'], // Changed
      gradient: 'var(--gradient-cosmic)', // Changed
      icon: '🪐', // Changed
      liveUrl: 'https://solar-system-model-delta.vercel.app/', // Changed
    }
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Masterpieces</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div 
                className="project-image"
                style={{ background: project.gradient }}
              >
                <div style={{ fontSize: '3rem', position: 'relative', zIndex: 2 }}>
                  {project.icon}
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  
                  {project.androidUrl && (
                    <a href={project.androidUrl} target="_blank" rel="noopener noreferrer">
                      <Smartphone size={16} />
                      Android App
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects