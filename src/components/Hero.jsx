import React from 'react'
import { ArrowDown, Sparkles } from 'lucide-react'

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
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <Sparkles style={{ 
                display: 'inline', 
                marginRight: '1rem', 
                color: '#fdcb6e',
                fontSize: '0.8em',
                verticalAlign: 'middle'
              }} />
              Hi, I'm <span className="highlight">Kunal Batra</span>
            </h1>
            <p className="tagline">
              ✨ Creating <strong>extraordinary digital experiences</strong> that blend cutting-edge technology 
              with stunning visual design. Transforming ideas into captivating realities.
            </p>
          </div>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">
              🚀 Explore My Universe
            </a>
            <a href="#contact" className="btn btn-outline">
              💫 Let's Connect
            </a>
          </div>
          <div className="scroll-indicator">
            <button 
              onClick={handleScroll}
              className="btn btn-outline"
              style={{ 
                background: 'transparent', 
                border: 'none', 
                color: 'white',
                fontSize: '0.9rem',
                padding: '0.8rem 1.5rem'
              }}
            >
              <ArrowDown size={20} />
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
