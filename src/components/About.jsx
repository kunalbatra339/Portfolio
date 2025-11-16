import React from 'react'
// 1. Import your photo from the assets folder
import myPhoto from '../assets/images/image.png'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            
            {/* 2. Replace the placeholder text with an <img> tag */}
            <div className="about-image-placeholder">
              <img 
                src={myPhoto} 
                alt="Kunal Batra" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  objectPosition: 'top', // <-- This is the added line
                  imageRendering: 'pixelated'
                }} 
              />
            </div>

          </div>
          <div className="about-text">
            <p>
              I'm a passionate <span className="highlight">Full-Stack Developer</span> with 
              expertise in modern web technologies. I love creating innovative solutions 
              that solve real-world problems and deliver exceptional user experiences.
            </p>
            <p>
              My journey in technology started with curiosity and has evolved into a 
              passion for building scalable, intelligent applications. I'm 
              particularly interested in <span className="highlight">backend web development</span> and 
              <span className="highlight">AI/ML roles</span>, focusing on how data and server-side 
              logic can create robust, real-world solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or enjoying outdoor adventures. I believe in 
              continuous learning and staying up-to-date with the latest industry trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About