import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      className='h-screen flex flex-col items-center justify-center text-center text-light bg-dark'
      id='about'
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='text-6xl font-bold'
      >
        Hi, I'm <span className='text-primary'>Abhishek Sharma</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className='text-xl mt-3 text-gray-400'
      >
        Full-Stack Developer | React | Node.js
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className='mt-6 px-6 py-2 bg-primary text-dark rounded-lg shadow-lg'
      >
        View Projects
      </motion.button>
    </section>
  )
}

export default Hero
