import React from 'react'
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import myPhoto from '../assets/images/myPhoto.jpg'

const Hero = () => {
  const handleScroll = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="hero-eyebrow">
              <Sparkles size={16} />
              Portfolio crafted for impact
            </div>

            <h1>
              Building <em>world-class</em> digital products that feel sharp,
              human, and impossible to ignore.
            </h1>

            <p>
              I am Kunal Batra, a full-stack developer focused on premium frontend
              execution, reliable backend systems, and product experiences that
              look polished from the first scroll to the final interaction.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Selected Work
                <ArrowUpRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Let&apos;s Build Something
              </a>
              <button type="button" onClick={handleScroll} className="btn btn-secondary">
                <ArrowDown size={18} />
                Explore the Story
              </button>
            </div>

            <div className="hero-meta">
              <div className="hero-stat">
                <strong>6+</strong>
                <span>Deployed portfolio and product projects</span>
              </div>
              <div className="hero-stat">
                <strong>Full stack</strong>
                <span>React, Python, APIs, data workflows</span>
              </div>
              <div className="hero-stat">
                <strong>India</strong>
                <span>Available for ambitious remote collaborations</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-panel"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="portrait-frame">
              <img src={myPhoto} alt="Kunal Batra portrait" />
            </div>

            <div className="hero-card-row">
              <div className="hero-card strategy">
                <span className="hero-card-label">UI direction</span>
                <h3>Clean hierarchy. Cinematic contrast. Product-grade polish.</h3>
                <p>
                  I design interfaces that balance aesthetic confidence with
                  clarity, speed, and strong conversion intent.
                </p>
              </div>

              <div className="hero-card availability">
                <span className="hero-card-label">Now booking</span>
                <h3>Freelance projects and internships</h3>
                <p>Open to product work, portfolio builds, and intelligent web apps.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
