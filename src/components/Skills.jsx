import React from 'react'
import { Code, Database, Globe, Brain } from 'lucide-react' // Changed Palette to Brain

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="icon" />,
      title: 'Frontend Development',
      skills: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      icon: <Database className="icon" />,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Flask', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'] // Added Flask
    },
    {
      icon: <Brain className="icon" />, // New Icon
      title: 'AI/ML & Data Science', // New Title
      skills: ['PyTorch', 'Torchvision', 'Scikit-learn', 'NumPy', 'Matplotlib', 'Pillow (PIL)', 'Computer Vision', 'Data Analysis'] // New Skills
    },
    {
      icon: <Globe className="icon" />,
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Webpack', 'Vite', 'Jest', 'Cypress']
    }
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>
                {category.icon}
                {category.title}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills