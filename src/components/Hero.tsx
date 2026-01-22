import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-greeting"
          >
            Hello, I'm
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-name"
          >
            Nikita Sharma
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-title"
          >
            <span className="title-highlight">Full-Stack Software Engineer</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-description"
          >
            4+ years of experience building and scaling enterprise web applications 
            in healthcare and financial services. Expert in Java microservices, React, 
            and cloud-native deployments on AWS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="hero-contact"
          >
            <motion.a
              href="https://linkedin.com/in/nikita-sharma-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:nikita.shrma.cs@gmail.com"
              className="contact-icon"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="hero-location"
          >
            📍 Chicago, Illinois
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-visual"
        >
          <div className="hero-photo-container">
            <motion.img
              src={`${import.meta.env.BASE_URL}Nikita.jpg`}
              alt="Nikita Sharma"
              className="hero-photo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onError={(e) => {
                // Fallback if image doesn't load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="photo-decoration"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="scroll-indicator"
        onClick={() => scrollToSection('about')}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiArrowDown />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
