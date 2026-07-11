import React from 'react'
import { ExternalLink, Smartphone, Github } from 'lucide-react'

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: '🎓 Digital Dean',
      description:
        'An AI-powered study assistant that memorizes your syllabus, grades handwritten homework from photos, and generates custom exams to help you prepare smarter. Built to feel like having a strict, helpful professor in your pocket.',
      technologies: ['React', 'Flask', 'Supabase', 'Google Gemini', 'AI'],
      gradient: 'var(--gradient-cosmic)',
      icon: '🎓',
      liveUrl: 'https://digital-dean.vercel.app/',
      githubUrl: 'https://github.com/kunalbatra339/digital-dean',
    },
    {
      id: 2,
      title: '🛡️ Sentinel',
      description:
        'A fully offline Android application that detects AI-generated deepfakes from images and videos using on-device computer vision and machine learning. Built with TensorFlow Lite, OpenCV, CameraX, Kotlin, and Android NDK to deliver privacy-preserving real-time authenticity analysis without requiring an internet connection.',
      technologies: [
        'Kotlin',
        'Jetpack Compose',
        'TensorFlow Lite',
        'OpenCV',
        'Android NDK',
        'JNI',
        'CameraX',
        'AI/ML',
      ],
      gradient: 'var(--gradient-fire)',
      icon: '🛡️',
      androidUrl:
        'https://drive.google.com/file/d/1x3ZQ2llz6AzR2XAtf-FSMMUJcyP6lxqM/view?usp=drivesdk',
      githubUrl: 'https://github.com/kunalbatra339/Sentinel',
    },
    {
      id: 3,
      title: '🛡️ ResQForce',
      description:
        'A disaster preparedness and response platform for schools and colleges in India. Features real-time alerts, emergency reporting, and connects to a Flask backend with MongoDB.',
      technologies: ['React', 'Vite', 'Flask', 'MongoDB', 'Android'],
      gradient: 'var(--gradient-fire)',
      icon: '🛡️',
      liveUrl: 'https://resqforce.vercel.app',
      androidUrl:
        'https://drive.google.com/file/d/1vqHPTsHXxmjxUEtmCCmgyK_Idc9ncyEF/view?usp=drive_link',
      githubUrl: 'https://github.com/kunalbatra339/ResQForcepro',
    },
    {
      id: 4,
      title: '🧠 MindEase',
      description:
        'A mental wellness application designed to provide peace and clarity, built with React, Vite, Flask, and MongoDB to deliver a seamless user experience.',
      technologies: ['React', 'Vite', 'Flask', 'MongoDB', 'CSS'],
      gradient: 'var(--gradient-aurora)',
      icon: '🧠',
      liveUrl: 'https://mind-ease-nine.vercel.app/',
      githubUrl: 'https://github.com/kunalbatra339/MindEase',
    },
    {
      id: 5,
      title: '🌿 Plant Health Detector',
      description:
        'An AI-powered tool that processes plant images using a trained ML model to predict its health and detect potential diseases.',
      technologies: ['React', 'Python', 'AI/ML', 'Computer Vision'],
      gradient: 'var(--gradient-forest)',
      icon: '🌿',
      liveUrl: 'https://ai-problem-solver-beta.vercel.app/',
      githubUrl: 'https://github.com/kunalbatra339/AI-problem-solver',
    },
  ]

  const otherProjects = [
    {
      id: 6,
      title: '🌳 Green City Blueprint',
      description:
        'A conceptual model for sustainable urban planning, visualizing eco-friendly infrastructure, green spaces, and efficient resource management.',
      technologies: ['React', 'Vite', 'CSS', 'Data Visualization'],
      gradient: 'var(--gradient-forest)',
      icon: '🌳',
      liveUrl: 'https://green-city-blueprint.vercel.app/',
      githubUrl: 'https://github.com/kunalbatra339/Green-City-Blueprint',
    },
    {
      id: 7,
      title: '📋 Todo List',
      description:
        'A clean and efficient to-do list application to manage daily tasks, built with React and Vite for a fast user experience.',
      technologies: ['React', 'Vite', 'JavaScript', 'CSS'],
      gradient: 'var(--gradient-sunset)',
      icon: '📋',
      liveUrl: 'https://todo-list-ed45.vercel.app/',
      githubUrl: 'https://github.com/kunalbatra339/todo-list',
    },
    {
      id: 8,
      title: '🪐 Solar System Simulation',
      description:
        'A 3D solar system model built from a personal love for astronomy, showcasing the orbits and movements of the planets.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'var(--gradient-cosmic)',
      icon: '🪐',
      liveUrl: 'https://solar-system-model-delta.vercel.app/',
      githubUrl: 'https://github.com/kunalbatra339/Solar-System-model',
    },
  ]

  const renderProjects = (projects) =>
    projects.map((project) => (
      <div key={project.id} className="project-card">
        <div
          className="project-image"
          style={{ background: project.gradient }}
        >
          <div
            style={{
              fontSize: '3rem',
              position: 'relative',
              zIndex: 2,
            }}
          >
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
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                GitHub
              </a>
            )}

            {project.androidUrl && (
              <a
                href={project.androidUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Smartphone size={16} />
                Android App
              </a>
            )}
          </div>
        </div>
      </div>
    ))

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured AI Projects</h2>

        <div className="projects-grid">
          {renderProjects(featuredProjects)}
        </div>

        <h2
          className="section-title"
          style={{ marginTop: '5rem' }}
        >
          Frontend & Creative Projects
        </h2>

        <div className="projects-grid">
          {renderProjects(otherProjects)}
        </div>
      </div>
    </section>
  )
}

export default Projects