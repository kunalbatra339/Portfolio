import React from 'react'
import {
  ArrowUpRight,
  HeartPulse,
  Leaf,
  ScanSearch,
  Shield,
  Smartphone
} from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: '01',
    type: 'Emergency response platform',
    title: 'ResQForce',
    description:
      'A disaster preparedness and response platform designed for schools and colleges, with real-time alerts, emergency reporting, and a connected Flask plus MongoDB backend.',
    technologies: ['React', 'Vite', 'Flask', 'MongoDB', 'Android'],
    liveUrl: 'https://resqforce.vercel.app',
    secondaryUrl: 'https://drive.google.com/file/d/1vqHPTsHXxmjxUEtmCCmgyK_Idc9ncyEF/view?usp=drive_link',
    secondaryLabel: 'Android build',
    icon: Shield,
    visualClass: 'resqforce'
  },
  {
    id: '02',
    type: 'Wellness product',
    title: 'MindEase',
    description:
      'A mental wellness application built to feel calm and accessible while delivering a seamless full-stack experience through React, Flask, and MongoDB.',
    technologies: ['React', 'Vite', 'Flask', 'MongoDB', 'CSS'],
    liveUrl: 'https://mind-ease-nine.vercel.app/',
    icon: HeartPulse,
    visualClass: 'mindease'
  },
  {
    id: '03',
    type: 'Sustainability concept',
    title: 'Green City Blueprint',
    description:
      'A visual exploration of sustainable urban planning that combines structured content, environmental thinking, and clear presentation.',
    technologies: ['React', 'Vite', 'CSS', 'Data Visualization'],
    liveUrl: 'https://green-city-blueprint.vercel.app/',
    icon: Leaf,
    visualClass: 'greencity'
  },
  {
    id: '04',
    type: 'AI utility',
    title: 'Plant Health Detector',
    description:
      'An AI-driven tool that analyzes plant imagery to predict health and identify potential disease signals using a trained machine learning workflow.',
    technologies: ['React', 'Python', 'AI/ML', 'Computer Vision'],
    liveUrl: 'https://ai-problem-solver-beta.vercel.app/',
    icon: ScanSearch,
    visualClass: 'planthealth'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-kicker">Selected work</span>
          <h2>
            Projects with a stronger <em>point of view</em>.
          </h2>
          <p>
            These are the builds that represent how I think: practical products,
            clearer storytelling, and interfaces that deserve more than a generic card grid.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <div className={`project-visual ${project.visualClass}`}>
                <div className="project-orb one" />
                <div className="project-orb two" />
                <div className="project-icon-badge">
                  <project.icon size={22} strokeWidth={2.1} />
                </div>
                <div className="project-index">{project.id}</div>
                <p>{project.type}</p>
              </div>

              <div className="project-content">
                <div>
                  <div className="project-meta">
                    <span>Featured build</span>
                    <span>{project.technologies.length} technologies</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-footer">
                  <div className="tag-list">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link primary"
                    >
                      Live site
                      <ArrowUpRight size={16} />
                    </a>
                    {project.secondaryUrl && (
                      <a
                        href={project.secondaryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <Smartphone size={16} />
                        {project.secondaryLabel}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
