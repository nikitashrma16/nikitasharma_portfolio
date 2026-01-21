import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Illinois Institute of Technology',
      location: 'Chicago, IL',
      period: 'August 2024 – May 2026'
    },
    {
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      institution: 'Maulana Abul Kalam Azad University of Technology',
      location: 'Kolkata, India',
      period: 'August 2015 – July 2019'
    }
  ]

  const certifications = [
    'AWS Certified Developer – Associate',
    'OCI Generative AI Professional',
    'OCI DevOps Professional'
  ]

  return (
    <section id="education" className="education" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Education & Certifications</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="education-content">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="education-card"
            >
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-details">
                <h3 className="education-degree">{edu.degree}</h3>
                <div className="education-institution">
                  {edu.institution}
                </div>
                <div className="education-meta">
                  <div className="meta-item">
                    <FaMapMarkerAlt className="icon" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="meta-item">
                    <FaCalendarAlt className="icon" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="certifications-section"
          >
            <h3 className="certifications-title">Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="certification-badge"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
