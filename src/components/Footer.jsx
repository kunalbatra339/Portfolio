import React from 'react'
import { Github, Linkedin, Heart, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">

            {/* GitHub */}
            <a
              href="https://github.com/kunalbatra339"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kunal-batra-3a3a00347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/_kunal_batra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>

          </div>
        </div>

        <p>
          © {currentYear} Kunal Batra. Made with{" "}
          <Heart
            size={16}
            style={{
              display: "inline",
              color: "#ef4444",
              marginLeft: "0.25rem",
              marginRight: "0.25rem",
            }}
          />
          {" "}using React & Vite
        </p>
      </div>
    </footer>
  )
}

export default Footer