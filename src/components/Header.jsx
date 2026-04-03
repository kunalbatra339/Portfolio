import React, { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useScrollspy } from '../hooks/useScrollspy'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useScrollspy(['home', 'about', 'skills', 'projects', 'contact'])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  const handleNavClick = (href) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="header-shell">
          <a
            className="brand"
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home')
            }}
          >
            <span className="brand-mark">KB</span>
            <span className="brand-copy">
              <strong>Kunal Batra</strong>
              <span>Design-minded developer</span>
            </span>
          </a>

          <div className="nav-links">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.href.substring(1) ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="header-actions">
            <a
              href="#contact"
              className="nav-cta"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact')
              }}
            >
              Start a Project
              <ArrowUpRight size={16} />
            </a>

            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="mobile-nav">
            <ul>
              {navItems.map(item => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact')
                  }}
                >
                  Start a Project
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
