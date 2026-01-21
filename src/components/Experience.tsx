import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      company: 'Cognizant Technology Solutions',
      client: 'Client: Novartis',
      role: 'Software Engineer',
      location: 'Chicago, IL',
      period: 'Aug 2022 – Jul 2024',
      summary: 'Led development of Java Spring Boot microservices and REST APIs for a globally deployed healthcare platform serving 140+ countries. Successfully executed cloud migration initiatives using AWS ECS, Docker, and Kubernetes, achieving 60% reduction in deployment downtime and 75% performance improvement. Designed 15+ API-driven services and Kafka-based event consumers, eliminating up to 90% of manual workflows while maintaining 95%+ test coverage through comprehensive CI/CD automation.'
    },
    {
      company: 'Accenture',
      client: 'Client: Citibank',
      role: 'Software Engineer – Enterprise Banking Platforms',
      location: 'Bengaluru, India',
      period: 'Dec 2021 – Aug 2022',
      summary: 'Developed and maintained Java Spring Boot microservices integrating Loan IQ with 12+ banking systems, enabling secure and reliable loan data exchange. Enhanced application availability through containerization with Docker and Kubernetes, and contributed to automated CI/CD pipelines. Successfully supported high-throughput transaction workflows and multiple production releases in a regulated financial services environment, taking ownership of backend enhancements and production issue resolution.'
    },
    {
      company: 'Accenture',
      client: '',
      role: 'Application Development Analyst',
      location: 'Bengaluru, India',
      period: 'Dec 2019 – Nov 2021',
      summary: 'Supported backend development and system integration for enterprise banking applications using Java, Spring, and MySQL. Designed and tested RESTful services with Spring, MySQL, and MongoDB integrations, improving application reliability and reducing processing latency. Contributed to comprehensive testing strategies, achieving 95%+ unit test coverage and ensuring production-ready deliverables through effective defect resolution and deployment support.'
    }
  ]

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Building enterprise solutions that make a difference</p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="timeline-item"
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <div className="experience-company">
                      <FaBuilding className="icon" />
                      <span>{exp.company}</span>
                      {exp.client && <span className="client-name"> • {exp.client}</span>}
                    </div>
                  </div>
                  <div className="experience-meta">
                    <div className="meta-item">
                      <FaCalendarAlt className="icon" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-item">
                      <FaMapMarkerAlt className="icon" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="experience-summary"
                >
                  {exp.summary}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
