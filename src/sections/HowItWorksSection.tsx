'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Upload, Settings, Zap } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Section from '@/components/Section'

const HowItWorksSection = () => {
  const { t } = useLanguage()

  const steps = [
    {
      number: '01',
      icon: Upload,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      icon: Settings,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      color: 'from-indigo-500 to-purple-500'
    },
    {
      number: '03',
      icon: Zap,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <Section id="how-it-works" background="bg-white">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 bg-purple-100 border border-purple-200 rounded-full text-purple-700 text-sm font-medium mb-6"
        >
          {t('howItWorks.badge')}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
        >
          {t('howItWorks.title')}{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {t('howItWorks.titleHighlight')}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          {t('howItWorks.subtitle')}
        </motion.p>
      </div>

      <div className="relative">
        {/* Connection lines for desktop */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 transform -translate-y-1/2 z-0"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              {/* Step number */}
              <div className="relative mb-8">
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {step.number}
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-white to-gray-100 opacity-20 animate-ping"></div>
              </div>

              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-gray-700" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-8">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Integration showcase */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-20"
      >
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 border border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {t('howItWorks.integrations.title')}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('howItWorks.integrations.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.496"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">WhatsApp</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Instagram</span>
            </motion.div>

            {/* OneDrive - LOGO CORREGIDO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.5 15.5h13c1.38 0 2.5-1.12 2.5-2.5 0-1.18-.82-2.18-1.92-2.43C18.71 8.99 17.23 8 15.5 8c-.827 0-1.58.275-2.19.736C12.82 7.14 11.5 6 9.5 6 7.57 6 6 7.57 6 9.5c0 .17.013.338.037.5C4.84 10.34 4 11.58 4 13c0 1.38 1.12 2.5 2.5 2.5z"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">OneDrive</span>
            </motion.div>

            {/* Salesforce - LOGO CORREGIDO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
              </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Salesforce</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

export default HowItWorksSection
