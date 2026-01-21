import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCode, FaServer, FaDatabase, FaCloud, FaTools, FaBrain } from 'react-icons/fa'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode />,
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Bash', 'HTML5', 'CSS3'],
      color: '#2563eb'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <FaServer />,
      skills: ['Spring Boot', 'Spring Batch', 'Hibernate', 'Django', 'Flask', 'React.js', 'REST APIs', 'Microservices'],
      color: '#7c3aed'
    },
    {
      title: 'Databases',
      icon: <FaDatabase />,
      skills: ['Oracle', 'MySQL', 'Redis', 'PostgreSQL', 'MongoDB', 'Elasticsearch', 'DynamoDB', 'Cassandra', 'MSSQL', 'PL/SQL'],
      color: '#06b6d4'
    },
    {
      title: 'Cloud & DevOps',
      icon: <FaCloud />,
      skills: ['AWS (EC2, S3, Lambda, ECS, CloudWatch)', 'CI/CD', 'Microsoft Azure', 'Jenkins', 'Docker', 'Kubernetes'],
      color: '#10b981'
    },
    {
      title: 'Tools & Technologies',
      icon: <FaTools />,
      skills: ['Tomcat', 'Jira', 'Bitbucket', 'Swagger', 'Postman', 'Agile', 'LoanIQ', 'Autosys', 'TeamCity', 'Git', 'Splunk', 'Maven', 'Gradle', 'WebLogic'],
      color: '#f59e0b'
    },
    {
      title: 'AI & Machine Learning',
      icon: <FaBrain />,
      skills: ['OpenAI API', 'LLM-based workflows', 'Embeddings', 'Semantic Search', 'RAG-based Architectures'],
      color: '#ec4899'
    }
  ]

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">A comprehensive toolkit for building enterprise solutions</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="skill-category"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="skill-category-header" style={{ borderTopColor: category.color }}>
                <div className="skill-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    className="skill-tag"
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
