'use client'

import { motion } from 'framer-motion'
import { Users, Headphones, Building, ShoppingCart } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Section from '@/components/Section'
import TestimonialCard from '@/components/TestimonialCard'

const UseCasesSection = () => {
  const { t } = useLanguage()

  const useCases = [
    {
      icon: Users,
      title: t('useCases.hr.title'),
      description: t('useCases.hr.description'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Headphones,
      title: t('useCases.support.title'),
      description: t('useCases.support.description'),
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Building,
      title: t('useCases.government.title'),
      description: t('useCases.government.description'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: ShoppingCart,
      title: t('useCases.sales.title'),
      description: t('useCases.sales.description'),
      color: 'from-pink-500 to-red-500'
    }
  ]

  const testimonials = [
    {
      name: t('testimonials.sergiocorizzo.name'),
      role: t('testimonials.sergiocorizzo.role'),
      company: t('testimonials.sergiocorizzo.company'),
      content: t('testimonials.sergiocorizzo.content'),
      delay: 0.1
    },
    {
      name: t('testimonials.sergiomastrangelo.name'),
      role: t('testimonials.sergiomastrangelo.role'),
      company: t('testimonials.sergiomastrangelo.company'),
      content: t('testimonials.sergiomastrangelo.content'),
      delay: 0.2
    },
    {
      name: t('testimonials.enriquesolchman.name'),
      role: t('testimonials.enriquesolchman.role'),
      company: t('testimonials.enriquesolchman.company'),
      content: t('testimonials.enriquesolchman.content'),
      delay: 0.3
    }
  ]

  return (
    <Section id="use-cases" background="bg-gray-50">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full text-green-700 text-sm font-medium mb-6"
        >
          {t('useCases.badge')}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
        >
          {t('useCases.title')}{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {t('useCases.titleHighlight')}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          {t('useCases.subtitle')}
        </motion.p>
      </div>

      {/* Use Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {useCases.map((useCase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200"
          >
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${useCase.color} flex items-center justify-center mb-6`}>
              <useCase.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
            <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="text-center mb-12">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
        >
          {t('testimonials.title')}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          {t('testimonials.subtitle')}
        </motion.p>
      </div>

      {/* Grid de testimonios con altura uniforme */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            company={testimonial.company}
            content={testimonial.content}
            delay={testimonial.delay}
          />
        ))}
      </div>
    </Section>
  )
}

export default UseCasesSection
