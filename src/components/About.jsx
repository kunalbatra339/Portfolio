import React from 'react'
import { motion } from 'framer-motion'

const highlights = [
  {
    title: 'Product thinking',
    description: 'I care about narrative, information hierarchy, and how users move through a screen.'
  },
  {
    title: 'Engineering depth',
    description: 'I build the interface and the system behind it, from React views to backend logic and APIs.'
  },
  {
    title: 'Visual discipline',
    description: 'Strong typography, contrast, spacing, and motion are part of the product, not decoration.'
  },
  {
    title: 'AI readiness',
    description: 'I am actively building with Python, ML workflows, and intelligent tooling where it adds value.'
  }
]

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-kicker">About</span>
          <h2>
            A developer shaping <em>polished experiences</em> with clear intent.
          </h2>
          <p>
            My work sits at the intersection of frontend craft, backend reliability,
            and ambitious product presentation. The goal is simple: make things feel
            modern, credible, and worth remembering.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="about-intro-card">
              <span className="about-intro-label">Profile</span>
              <h3>Based in Amritsar, Punjab</h3>
              <p>
                Focused on full-stack development, AI-backed projects, and
                visually refined portfolio-grade interfaces.
              </p>
            </div>

            <div className="about-metric-grid">
              <div className="about-metric-card">
                <strong>Frontend</strong>
                <span>Interfaces with stronger hierarchy, sharper motion, and cleaner conversion flow.</span>
              </div>
              <div className="about-metric-card">
                <strong>Backend</strong>
                <span>Reliable APIs, Python services, and practical full-stack execution.</span>
              </div>
              <div className="about-metric-card">
                <strong>AI work</strong>
                <span>Intelligent tooling and data-backed features where they improve the product.</span>
              </div>
              <div className="about-metric-card">
                <strong>Collaboration</strong>
                <span>Open to internships, freelance builds, and product-focused remote work.</span>
              </div>
            </div>
          </motion.div>

          <div className="about-copy">
            <motion.div
              className="about-story"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              <p>
                I approach development with a product lens. That means I pay
                attention to the parts most portfolios usually skip: rhythm,
                composition, readability, and the feeling of momentum between
                sections.
              </p>
              <p>
                On the technical side, I work across React, Vite, Python, Flask,
                data-backed features, and deployment workflows. On the design side,
                I aim for interfaces that feel premium without becoming cluttered.
              </p>
              <p>
                I am especially interested in work where branding, UX quality, and
                engineering all need to land at a high level together.
              </p>
            </motion.div>

            <motion.div
              className="about-highlights"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <div className="highlight-grid">
                {highlights.map((item) => (
                  <div key={item.title} className="highlight-card">
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
