import React, { useRef, useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const ZAPIER_HOOK_URL = 'https://hooks.zapier.com/hooks/catch/25864937/uw2lj4l/'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'kbatra339@gmail.com',
    href: 'mailto:kbatra339@gmail.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 9465318556',
    href: 'tel:+919465318556'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Amritsar, Punjab, India',
    href: '#contact'
  }
]

const Contact = () => {
  const form = useRef(null)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.current || isSubmitting) {
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: 'Sending your message...' })

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    const hasEmailJsConfig = Boolean(serviceID && templateID && publicKey)

    const formData = new FormData(form.current)
    const zapierData = new FormData()
    zapierData.append('name', formData.get('name'))
    zapierData.append('email', formData.get('email'))
    zapierData.append('subject', formData.get('subject'))
    zapierData.append('message', formData.get('message'))
    zapierData.append('timestamp', new Date().toISOString())

    const sendResults = await Promise.allSettled([
      fetch(ZAPIER_HOOK_URL, {
        method: 'POST',
        body: zapierData
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`Zapier request failed with status ${response.status}`)
        }
        return response
      }),
      hasEmailJsConfig
        ? emailjs.sendForm(serviceID, templateID, form.current, { publicKey })
        : Promise.reject(new Error('EmailJS configuration is missing'))
    ])

    const delivered = sendResults.some((result) => result.status === 'fulfilled')

    if (delivered) {
      if (!hasEmailJsConfig) {
        console.warn('EmailJS configuration missing. Message was delivered through Zapier only.')
      }

      setStatus({
        type: 'success',
        message: "Message sent successfully. I'll get back to you soon."
      })
      form.current.reset()
    } else {
      sendResults.forEach((result) => {
        if (result.status === 'rejected') {
          console.error(result.reason)
        }
      })

      setStatus({
        type: 'error',
        message: 'Message failed to send. Please try again.'
      })
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-kicker">Contact</span>
          <h2>
            Let&apos;s make the next build feel <em>serious</em>.
          </h2>
          <p>
            If you want a portfolio, product interface, or intelligent web
            application that looks refined and communicates clearly, send the brief.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Project inquiries</h3>
            <p>
              I am interested in visually strong websites, portfolio redesigns,
              internship opportunities, and product builds where UX quality is treated
              as a real requirement.
            </p>

            <div className="contact-stack">
              {contactMethods.map((method) => {
                const Icon = method.icon

                return (
                  <a key={method.title} href={method.href} className="contact-card">
                    <Icon size={20} />
                    <div>
                      <strong>{method.title}</strong>
                      <span>{method.value}</span>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="availability-card">
              <strong>Current focus</strong>
              <span>UI-heavy React builds, portfolio upgrades, and product-oriented frontend work.</span>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-shell"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            <h3>Start the conversation</h3>
            <p>Share the idea, the timeline, and what level of polish you want.</p>

            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" required />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Project, role, or collaboration" required />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me what you want to build and the outcome you care about."
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                <Send size={16} />
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>

              {status.message && (
                <p className={`status-message ${status.type}`}>
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
