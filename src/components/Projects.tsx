import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBrain, FaDatabase } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: 'EduLearn Platform',
      description: 'AI-powered e-learning platform with LLM-driven personalization and conversational features',
      technologies: ['Python', 'React', 'MongoDB', 'OpenAI (LLM)'],
      features: [
        'Scalable backend data pipelines',
        'Flask microservices architecture',
        'Analytics and subscription workflows',
        'LLM-driven personalization',
        'Conversational AI features'
      ],
      icon: <FaBrain />,
      gradient: 'gradient-1'
    },
    {
      title: 'Smart Home Platform',
      description: 'Smart home platform with hybrid database architecture and high-volume device activity processing',
      technologies: ['Python', 'React', 'MongoDB', 'OpenAI GPT-4o-mini', 'Elasticsearch', 'Docker', 'MySQL'],
      features: [
        'Hybrid MySQL-MongoDB backend',
        'JSON-based data pipelines',
        'High-volume device activity processing',
        'Analytics and recommendations',
        'Search workflows with Elasticsearch',
        'Dockerized services'
      ],
      icon: <FaDatabase />,
      gradient: 'gradient-2'
    }
  ]

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Innovative solutions showcasing technical expertise</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="project-card"
              whileHover={{ y: -10 }}
            >
              <div className={`project-icon ${project.gradient}`}>
                {project.icon}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>

              <ul className="project-features">
                {project.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
