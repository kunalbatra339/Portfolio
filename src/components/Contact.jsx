import React, { useState, useRef } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
  e.preventDefault()
  setStatus('Sending...')

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const userID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  // 🔹 Extract form values manually (for Zapier)
  const formData = new FormData(form.current)

  const zapierPayload = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    timestamp: new Date().toISOString()
  }

  // 🔹 SEND TO ZAPIER (NEW)
  fetch("https://hooks.zapier.com/hooks/catch/25864937/uw2qtun/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(zapierPayload)
  })
  .catch(err => {
    console.error("Zapier error:", err)
  })

  // 🔹 EXISTING EMAILJS (UNCHANGED)
  emailjs.sendForm(serviceID, templateID, form.current, userID)
    .then(() => {
      setStatus("Message sent successfully! I'll get back to you soon.")
      form.current.reset()
    }, (error) => {
      console.error(error)
      setStatus('Failed to send message. Please try again.')
    })

  setTimeout(() => setStatus(''), 5000)
}


  const contactMethods = [
    {
      icon: <Mail className="icon" />,
      title: 'Email',
      value: 'kbatra339@gmail.com',
      href: 'mailto:kbatra339@gmail.com'
    },
    {
      icon: <Phone className="icon" />,
      title: 'Phone',
      value: '+91 9465318556',
      href: 'tel:+919465318556'
    },
    {
      icon: <MapPin className="icon" />,
      title: 'Location',
      value: 'Amritsar, Punjab, India',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my 
              best to get back to you!
            </p>
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a 
                  key={index} 
                  href={method.href} 
                  className="contact-method"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {method.icon}
                  <div>
                    <strong>{method.title}</strong>
                    <p>{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name" 
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email" 
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject" 
                placeholder="What's this about?"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message" 
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              <Send size={16} />
              Send Message
            </button>
            
            {status && (
              <p style={{ 
                marginTop: '1rem', 
                color: status.includes('Failed') ? '#ef4444' : '#10b981',
                textAlign: 'center',
                fontWeight: '500'
              }}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact