import React from 'react'
import { Brain, Code2, Database, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const categories = [
  {
    icon: Code2,
    title: 'Frontend systems',
    description: 'Interfaces with strong hierarchy, responsive behavior, and clean interaction detail.',
    skills: ['React', 'JavaScript', 'TypeScript', 'Vite', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    icon: Database,
    title: 'Backend foundations',
    description: 'Reliable app logic, APIs, and data handling for products that need substance behind the UI.',
    skills: ['Python', 'Flask', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs']
  },
  {
    icon: Brain,
    title: 'AI and problem solving',
    description: 'Practical experimentation with ML workflows, computer vision, and data-driven features.',
    skills: ['PyTorch', 'Scikit-learn', 'NumPy', 'Computer Vision', 'Data Analysis', 'Pillow']
  },
  {
    icon: Globe,
    title: 'Shipping and tooling',
    description: 'Deployment, version control, and production-minded workflows for real deliverables.',
    skills: ['Git', 'GitHub', 'Vercel', 'Docker', 'Jest', 'Figma', 'Framer Motion']
  }
]

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-kicker">Capabilities</span>
          <h2>
            The stack behind the <em>craft</em>.
          </h2>
          <p>
            Good UI is not just aesthetics. It needs structure, performance, and
            implementation discipline. These are the areas I rely on to build work
            that feels high-end and functions cleanly.
          </p>
        </motion.div>

        <div className="skills-grid">
          {categories.map((category, index) => {
            const Icon = category.icon

            return (
              <motion.article
                key={category.title}
                className="skill-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <div className="skill-card-header">
                  <Icon size={24} />
                  <h3>{category.title}</h3>
                </div>
                <p>{category.description}</p>
                <div className="tag-list">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
