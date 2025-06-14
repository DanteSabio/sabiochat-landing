'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Settings, Brain, Zap, Shield, BarChart3 } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Section from '@/components/Section'
import FeatureCard from '@/components/FeatureCard'

const FeaturesSection = () => {
  const { t } = useLanguage()

  const features = [
    {
      icon: MessageSquare,
      title: t('features.communication.title'),
      description: t('features.communication.description'),
      delay: 0.1
    },
    {
      icon: Settings,
      title: t('features.configuration.title'),
      description: t('features.configuration.description'),
      delay: 0.2
    },
    {
      icon: Brain,
      title: t('features.ai.title'),
      description: t('features.ai.description'),
      delay: 0.3
    },
    {
      icon: Zap,
      title: t('features.implementation.title'),
      description: t('features.implementation.description'),
      delay: 0.4
    },
    {
      icon: Shield,
      title: t('features.security.title'),
      description: t('features.security.description'),
      delay: 0.5
    },
    {
      icon: BarChart3,
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      delay: 0.6
    }
  ]

  return (
    <Section id="features" background="bg-gray-50">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-indigo-700 text-sm font-medium mb-6"
        >
          {t('features.badge')}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
        >
          {t('features.title')}{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {t('features.titleHighlight')}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          {t('features.subtitle')}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={feature.delay}
          />
        ))}
      </div>

      {/* Additional info section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-20 text-center"
      >
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            {t('features.subtitle2')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('features.humanBot.title')}</h4>
              <p className="text-gray-600">{t('features.humanBot.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('features.analytics.title')}</h4>
              <p className="text-gray-600">{t('features.analytics.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('features.security.title')}</h4>
              <p className="text-gray-600">{t('features.security.description')}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

export default FeaturesSection
