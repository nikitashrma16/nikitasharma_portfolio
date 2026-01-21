import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-text"
          >
            <p className="about-paragraph">
              I’m a Full-Stack Software Engineer with 4+ years of experience building{' '}
              scalable, cloud-native applications and delivering high-impact features{' '}
              across healthcare and financial services. I design and implement robust backend systems{' '}
              with Java and Python, and intuitive frontend experiences with{' '}
              React.
            </p>

            <p className="about-paragraph">
              With strong expertise in AWS, microservices, and{' '}
              CI/CD automation, I’ve driven cloud migrations, optimized deployments to cut downtime by{' '}
              60%, and built platforms that reliably serve users in 140+ countries.{' '}
              I’m passionate about automation and engineering excellence, and have{' '}
              reduced manual operational work by up to 90% using API-driven and{' '}
              event-driven architectures.
              </p>

            <p className="about-paragraph">
              I thrive in collaborative teams, write clean, maintainable code, and
              consistently deliver reliable solutions that scale. I’m actively seeking opportunities
              where I can contribute to building high-performance systems, adopt best{' '}
              cloud practices, and grow in full-stack and cloud engineering{' '}
              roles.
            </p>
            <div className="about-stats">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="stat-card"
              >
                <div className="stat-number">4+</div>
                <div className="stat-label">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="stat-card"
              >
                <div className="stat-number">140+</div>
                <div className="stat-label">Countries Supported</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="stat-card"
              >
                <div className="stat-number">15+</div>
                <div className="stat-label">APIs Designed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="stat-card"
              >
                <div className="stat-number">95%+</div>
                <div className="stat-label">Test Coverage</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
