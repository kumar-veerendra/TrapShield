import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className='py-24 px-6'>
      <div className='max-w-5xl mx-auto text-center'>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-5xl md:text-7xl font-bold leading-tight'
        >
          AI Powered
          <span className='text-primary'> Phishing Detection</span>
        </motion.h1>

        <p className='mt-8 text-lg text-slate-400 max-w-2xl mx-auto'>
          Analyze suspicious URLs, SMS messages, and emails using machine learning and cybersecurity intelligence.
        </p>

      </div>
    </section>
  )
}

export default HeroSection