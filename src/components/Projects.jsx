import { motion } from 'framer-motion'
import '../App.css' // Importing the external CSS file

const projects = [
  {
  title: 'Marketplace Microservices Platform',
  desc: 'A scalable marketplace application built using Spring Boot microservices architecture, featuring product, order, inventory, and notification services with secure authentication, fault tolerance, and distributed tracing.',
  link: 'https://github.com/Abhisheksharmaatri/Marketplace-Microservices',
  technology: [
    'Java',
    'Spring Boot',
    'Spring Cloud',
    'API Gateway',
    'Service Discovery (Eureka)',
    'Kafka',
    'Keycloak',
    'Zipkin',
    'Resilience4j',
    'Circuit Breaker',
    'Distributed Tracing',
    'Docker',
    'MySQL',
    'PostgreSQL'
  ],
  features: [
    'Microservices-based architecture with independent services',
    'Product, Order, Inventory, and Notification services',
    'Centralized API Gateway for request routing',
    'Service discovery using Eureka Server',
    'Asynchronous communication using Kafka',
    'Secure authentication and authorization with Keycloak',
    'Fault tolerance and resilience using Resilience4j circuit breakers',
    'Distributed tracing and monitoring with Zipkin',
    'Scalable and loosely coupled system design'
  ],
  contributors: ['Abhishek Sharma'],
  acknowledgments:
    'Thanks to the Spring ecosystem and open-source community for providing powerful tools for building resilient microservices.'
},
  {
    title: 'Collaborative Code Editor',
    desc: 'A real-time collaborative code editor built with React, Node.js, and Socket.io that lets used code and collaborate together.',
    link: 'https://collaborative-code-editor-three.vercel.app',
    technology: [
      'React',
      'React Router',
      'Socket.io',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'Redis',
      'JWT',
      'bcryptjs',
      'VM',
      'Mocha',
      'Chai',
      'Supertest'
    ],
    features: [
      'Real-time code collaboration with WebSockets',
      'User authentication with JWT',
      'Code version history and rollback',
      'Syntax highlighting',
      'User presence tracking'
    ],
    contributors: ['Abhishek Sharma'],
    acknowledgments:
      'Special thanks to the open-source community for providing essential libraries and tools.'
  },
  {
    title: 'Full Stack User Management App',
    desc: 'A full-stack web application enabling users to view, filter, search, and manage a list of users with team creation functionality.',
    link: 'https://github.com/Abhisheksharmaatri/Team-Management-Web-Application',
    technology: [
      'React',
      'React Router',
      'Redux',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'Socket.io',
      'JWT',
      'bcryptjs',
      'Express-validator',
      'Body-Parser'
    ],
    features: [
      'User listing with pagination (10 users per page)',
      'Dynamic search functionality with real-time updates',
      'Filtering users based on domain, gender, and availability',
      'Team creation with unique domain and availability constraints',
      'Detailed team information display'
    ],
    contributors: ['Abhishek Sharma'],
    acknowledgments:
      'Special thanks to the open-source community for providing essential libraries and tools.'
  }
]

const Projects = () => {
  return (
    <section className='project-section' id='projects'>
      <h2 className='project-heading'>My Projects</h2>
      <div className='project-grid'>
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className='project-card'
          >
            <h3 className='project-title'>{proj.title}</h3>
            <p className='project-description'>{proj.desc}</p>
            <h4 className='project-card-section'>Technology Used</h4>
            <ul className='project-technology-list'>
              {proj.technology.map((tech, index) => (
                <li key={index} className='project-technology-list-item'>
                  {tech}
                </li>
              ))}
            </ul>
            <h4 className='project-card-section'>Features</h4>
            <ul className='project-features-list'>
              {proj.features.map(feature => (
                <li className='project-features-list-item'>{feature}</li>
              ))}
            </ul>
            <a href={proj.link} className='project-link'>
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
