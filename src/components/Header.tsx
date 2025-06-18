'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <a href="/" className="flex items-center space-x-3">
                <Image
                  src="/sabio-logo.png"
                  alt="SabioChat Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  SabioChat
                </span>
              </a>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#features" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              {t('nav.features')}
            </a>
            <a href="/#how-it-works" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              {t('nav.howItWorks')}
            </a>
            <a href="/#use-cases" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              {t('nav.useCases')}
            </a>
            <a href="/#pricing" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              {t('nav.pricing')}
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              <Globe className="w-4 h-4 mr-1" />
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => window.open('https://calendly.com/hola-sabiochat/30min?month=2024-11', '_blank', 'noopener,noreferrer')}
              className="text-gray-700 hover:text-indigo-600 px-4 py-2 text-sm font-medium transition-colors"
            >
              {t('nav.login')}
            </button>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              <a href="https://calendly.com/hola-sabiochat/30min?month=2024-11" target="_blank" rel="noopener noreferrer">
                {t('nav.tryFree')}
              </a>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 py-4"
          >
            <div className="flex flex-col space-y-4">
              <a href="/#features" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                {t('nav.features')}
              </a>
              <a href="/#how-it-works" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                {t('nav.howItWorks')}
              </a>
              <a href="/#use-cases" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                {t('nav.useCases')}
              </a>
              <a href="/#pricing" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                {t('nav.pricing')}
              </a>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                >
                  <Globe className="w-4 h-4 mr-1" />
                  {language.toUpperCase()}
                </button>
                <div className="flex space-x-2">
                  <button
                    onClick={() => window.open('https://calendly.com/hola-sabiochat/30min?month=2024-11', '_blank', 'noopener,noreferrer')}
                    className="text-gray-700 hover:text-indigo-600 px-4 py-2 text-sm font-medium"
                  >
                    {t('nav.login')}
                  </button>
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    <a href="https://calendly.com/hola-sabiochat/30min?month=2024-11" target="_blank" rel="noopener noreferrer">
                      {t('nav.tryFree')}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header

