import React from 'react'
import { Github, Instagram, Linkedin } from 'lucide-react'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kunal-batra-3a3a00347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: Linkedin
  },
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: Github
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/_kunal_batra',
    icon: Instagram
  }
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-shell">
          <div className="footer-brand">
            <h3>
              Kunal Batra <em>portfolio</em>
            </h3>
            <p>
              Full-stack developer building modern interfaces with stronger visual
              presence and clearer product thinking.
            </p>
          </div>

          <div className="footer-side">
            <div className="social-links">
              {socialLinks.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="social-link"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
            <p className="footer-note">{currentYear} Kunal Batra. Built with React and Vite.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
