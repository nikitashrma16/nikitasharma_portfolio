import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const contactInfo = [
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'nikita-sharma-dev',
      link: 'https://linkedin.com/in/nikita-sharma-dev',
      color: '#0A66C2'
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'nikita.shrma.cs@gmail.com',
      link: 'mailto:nikita.shrma.cs@gmail.com',
      color: '#EA4335'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Chicago, Illinois',
      link: null,
      color: '#FBBC05'
    }
  ]

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Let's Connect</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            I'm always open to discussing new opportunities, innovative projects, or just having a conversation about technology.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="contact-card"
          >
            <h3 className="contact-card-title">Get In Touch</h3>
            <p className="contact-card-description">
              Whether you're looking for a full-stack engineer, want to collaborate on a project, 
              or just want to say hello, I'd love to hear from you!
            </p>

            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link || undefined}
                  target={info.link ? '_blank' : undefined}
                  rel={info.link ? 'noopener noreferrer' : undefined}
                  className="contact-info-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={!info.link ? { cursor: 'default', pointerEvents: 'none' } : {}}
                >
                  <div className="contact-icon-wrapper" style={{ backgroundColor: `${info.color}15`, color: info.color }}>
                    {info.icon}
                  </div>
                  <div className="contact-info-text">
                    <div className="contact-info-label">{info.label}</div>
                    <div className="contact-info-value">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="contact-footer"
        >
          <p>Built with React, TypeScript, and Framer Motion</p>
          <p className="copyright">© 2026 Nikita Sharma. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
