import { motion } from 'framer-motion'
import '../app.css' // Importing the external CSS file

const projects = [
  {
    title: 'Collaborative Code Editor',
    desc: 'A real-time collaborative code editor built with React, Node.js, and Socket.io that lets used code and collaborate together.',
    link: '#',
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
    link: '#',
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
