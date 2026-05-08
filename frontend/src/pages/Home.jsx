import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/hero/HeroSection'

import AnalyzerTabs from '../components/analyzer/AnalyzerTabs'
import UrlAnalyzer from '../components/analyzer/UrlAnalyzer'
import SmsAnalyzer from '../components/analyzer/SmsAnalyzer'
import EmailAnalyzer from '../components/analyzer/EmailAnalyzer'

import Loader from '../components/common/Loader'
import ResultCard from '../components/result/ResultCard'

const Home = () => {
  const [activeTab, setActiveTab] = useState('URL')
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleAnalyze = async () => {
    if (!input.trim()) return

    setLoading(true)
    setResult(null)

    try {
      // Later replace with real backend API calls

      setTimeout(() => {
        setResult({
          score: 82,
          status: 'HIGH RISK',

          indicators: [
            'Suspicious domain',
            'Urgency keywords detected',
            'Shortened URL used',
            'Possible credential harvesting',
          ],

          explanation:
            'This content appears suspicious because it contains phishing-related patterns commonly used in social engineering attacks. The system detected urgency-based language, suspicious domain behavior, and deceptive indicators.',

          recommendations: [
            'Do not enter credentials',
            'Avoid clicking unknown links',
            'Verify sender authenticity',
          ],
        })

        setLoading(false)
      }, 2500)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const renderAnalyzer = () => {
    switch (activeTab) {
      case 'URL':
        return (
          <UrlAnalyzer
            value={input}
            setValue={setInput}
            handleAnalyze={handleAnalyze}
          />
        )

      case 'SMS':
        return (
          <SmsAnalyzer
            value={input}
            setValue={setInput}
            handleAnalyze={handleAnalyze}
          />
        )

      case 'EMAIL':
        return (
          <EmailAnalyzer
            value={input}
            setValue={setInput}
            handleAnalyze={handleAnalyze}
          />
        )

      default:
        return null
    }
  }

  return (
    <div className='min-h-screen overflow-x-hidden'>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Analyzer Section */}
      <section
        id='analyze'
        className='relative px-6 pb-24'
      >
        <div className='max-w-6xl mx-auto'>

          {/* Section Heading */}
          <div className='text-center mb-14'>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-4xl md:text-5xl font-bold'
            >
              Threat Analysis Workspace
            </motion.h2>

            <p className='mt-5 text-slate-400 max-w-2xl mx-auto leading-7'>
              Analyze suspicious URLs, SMS messages, and emails
              using AI-powered phishing detection.
            </p>

          </div>

          {/* Tabs */}
          <AnalyzerTabs
            active={activeTab}
            setActive={setActiveTab}
          />

          {/* Analyzer Area */}
          <AnimatePresence mode='wait'>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderAnalyzer()}
            </motion.div>

          </AnimatePresence>

          {/* Loading */}
          {loading && <Loader />}

          {/* Results */}
          <AnimatePresence>

            {result && !loading && (

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >

                <ResultCard result={result} />

              </motion.div>

            )}

          </AnimatePresence>

        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-white/10 py-8 px-6'>

        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>

          <div>
            <h3 className='font-semibold text-lg'>
              TrapShield
            </h3>

            <p className='text-slate-400 text-sm'>
              AI Powered Cybersecurity Detection Platform
            </p>
          </div>

          <p className='text-slate-500 text-sm'>
            © 2026 TrapShield. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  )
}

export default Home