'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Button from '@/components/Button'
import Section from '@/components/Section'

const HeroSection = () => {
  const { t } = useLanguage()

  return (
    <Section background="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        {/* Left Column - Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-indigo-700 text-sm font-medium mt-4 sm:mt-0">
              {t('hero.badge')}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t('hero.title')}{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {t('hero.titleHighlight')}
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              <span className="font-semibold text-indigo-600">{t('hero.subtitle').split('.')[0]}.</span>{' '}
              {t('hero.subtitle').split('.').slice(1).join('.')}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button size="xl" className="group">
              <a href="https://calendly.com/hola-sabiochat/30min?month=2024-11" target="_blank" rel="noopener noreferrer" className="flex items-center">
                {t('hero.tryFree' )}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="secondary" size="xl" className="group">
              <a href="https://www.instagram.com/p/DJCMNmRxFVe/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Play className="mr-2 w-5 h-5" />
                {t('hero.watchDemo')}
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-3 gap-8 pt-8"
          >
            <div className="text-center lg:text-left">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900">{t('hero.stat1')}</div>
              <div className="text-sm text-gray-600 mt-1">{t('hero.stat1Label')}</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900">{t('hero.stat2')}</div>
              <div className="text-sm text-gray-600 mt-1">{t('hero.stat2Label')}</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900">{t('hero.stat3')}</div>
              <div className="text-sm text-gray-600 mt-1">{t('hero.stat3Label')}</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - WhatsApp Mockup */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 p-1 max-w-sm mx-auto"
          >
            {/* WhatsApp Header */}
            <div className="bg-green-500 rounded-t-3xl px-4 py-3 flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">S</span>
              </div>
              <div className="flex-1">
                <div className="text-white font-semibold text-sm">{t('hero.whatsapp.title')}</div>
                <div className="text-green-100 text-xs">{t('hero.whatsapp.online')}</div>
              </div>
              <div className="flex space-x-1">
                <div className="w-6 h-6 text-white">📞</div>
                <div className="w-6 h-6 text-white">📹</div>
                <div className="w-6 h-6 text-white">⋮</div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="bg-gray-50 px-4 py-6 space-y-4 min-h-[400px] rounded-b-3xl">
              {/* Message 1 - User */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex justify-end"
              >
                <div className="bg-green-500 text-white rounded-2xl rounded-br-md px-4 py-2 max-w-[80%] shadow-sm">
                  <div className="text-sm">{t('hero.whatsapp.message1')}</div>
                  <div className="text-xs text-green-100 mt-1 text-right">14:32 ✓✓</div>
                </div>
              </motion.div>

              {/* Message 2 - Sabio */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="flex justify-start"
              >
                <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md px-4 py-2 max-w-[85%] shadow-sm border border-gray-200">
                  <div className="text-sm">{t('hero.whatsapp.message2')}</div>
                  <div className="text-xs text-gray-500 mt-1">14:32</div>
                </div>
              </motion.div>

              {/* Message 3 - User */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2 }}
                className="flex justify-end"
              >
                <div className="bg-green-500 text-white rounded-2xl rounded-br-md px-4 py-2 max-w-[70%] shadow-sm">
                  <div className="text-sm">{t('hero.whatsapp.message3')}</div>
                  <div className="text-xs text-green-100 mt-1 text-right">14:33 ✓✓</div>
                </div>
              </motion.div>

              {/* Message 4 - Sabio */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.5 }}
                className="flex justify-start"
              >
                <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md px-4 py-2 max-w-[85%] shadow-sm border border-gray-200">
                  <div className="text-sm">{t('hero.whatsapp.message4')}</div>
                  <div className="text-xs text-gray-500 mt-1">14:33</div>
                </div>
              </motion.div>

              {/* Typing indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 3 }}
                className="flex justify-start"
              >
                <div className="bg-white rounded-2xl rounded-bl-md px-4 py-2 shadow-sm border border-gray-200">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Input Area */}
            <div className="absolute bottom-2 left-2 right-2 bg-white rounded-full border border-gray-300 px-4 py-2 flex items-center space-x-2">
              <div className="flex-1 text-sm text-gray-500">{t('hero.whatsapp.inputPlaceholder')}</div>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default HeroSection
