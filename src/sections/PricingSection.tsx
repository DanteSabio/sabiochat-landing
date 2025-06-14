'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Section from '@/components/Section'
import PricingCard from '@/components/PricingCard'

const PricingSection = () => {
  const { t } = useLanguage()
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  const getPlans = (cycle: 'monthly' | 'annual') => {
    const isAnnual = cycle === 'annual'
    
    return [
      {
        title: t('pricing.teams.title'),
        price: isAnnual ? '$1,500' : '$150',
        period: isAnnual ? `/${t('pricing.annual').toLowerCase()}` : `/${t('pricing.monthly').toLowerCase()}`,
        originalPrice: isAnnual ? '$1,800' : null,
        description: t('pricing.teams.description'),
        features: [
          t('pricing.teams.features.queries'),
          t('pricing.teams.features.users'),
          t('pricing.teams.features.docs'),
          t('pricing.teams.features.whatsapp'),
          t('pricing.teams.features.history')
        ],
        buttonText: t('pricing.tryFree'),
        delay: 0.1
      },
      {
        title: t('pricing.standard.title'),
        price: isAnnual ? '$5,000' : '$500',
        period: isAnnual ? `/${t('pricing.annual').toLowerCase()}` : `/${t('pricing.monthly').toLowerCase()}`,
        originalPrice: isAnnual ? '$6,000' : null,
        description: t('pricing.standard.description'),
        features: [
          t('pricing.standard.features.queries'),
          t('pricing.standard.features.users'),
          t('pricing.standard.features.docs'),
          t('pricing.standard.features.whatsapp'),
          t('pricing.standard.features.history')
        ],
        isPopular: true,
        buttonText: t('pricing.tryFree'),
        delay: 0.2
      },
      {
        title: t('pricing.advanced.title'),
        price: isAnnual ? '$8,000' : '$800',
        period: isAnnual ? `/${t('pricing.annual').toLowerCase()}` : `/${t('pricing.monthly').toLowerCase()}`,
        originalPrice: isAnnual ? '$9,600' : null,
        description: t('pricing.advanced.description'),
        features: [
          t('pricing.advanced.features.queries'),
          t('pricing.advanced.features.users'),
          t('pricing.advanced.features.docs'),
          t('pricing.advanced.features.whatsapp'),
          t('pricing.advanced.features.history')
        ],
        buttonText: t('pricing.tryFree'),
        delay: 0.3
      },
      {
        title: t('pricing.custom.title'),
        price: t('pricing.custom.title'),
        period: '',
        description: t('pricing.custom.description'),
        features: [
          t('pricing.custom.features.integration'),
          t('pricing.custom.features.unlimited'),
          t('pricing.custom.features.whatsapp'),
          t('pricing.custom.features.reports'),
          t('pricing.custom.features.training')
        ],
        buttonText: t('pricing.contactSales'),
        delay: 0.4
      }
    ]
  }

  const plans = getPlans(billingCycle)

  return (
    <Section id="pricing" background="bg-white">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 bg-yellow-100 border border-yellow-200 rounded-full text-yellow-700 text-sm font-medium mb-6"
        >
          {t('pricing.badge')}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
        >
          {t('pricing.title')}{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {t('pricing.titleHighlight')}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
        >
          {t('pricing.subtitle')}
        </motion.p>

        {/* Billing cycle toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center bg-gray-100 rounded-lg p-1 mb-8"
        >
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              billingCycle === 'monthly'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {t('pricing.monthly')}
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
              billingCycle === 'annual'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {t('pricing.annual')}
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              {t('pricing.discount')}
            </span>
          </button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <PricingCard
            key={`${plan.title}-${billingCycle}`}
            title={plan.title}
            price={plan.price}
            period={plan.period}
            originalPrice={plan.originalPrice}
            description={plan.description}
            features={plan.features}
            isPopular={plan.isPopular}
            buttonText={plan.buttonText}
            delay={plan.delay}
          />
        ))}
      </div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20"
      >
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {t('pricing.faq.title')}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('pricing.faq.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('faq.question1')}</h4>
                <p className="text-gray-600 text-sm">{t('faq.answer1')}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('faq.question2')}</h4>
                <p className="text-gray-600 text-sm">{t('faq.answer2')}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('faq.question3')}</h4>
                <p className="text-gray-600 text-sm">{t('faq.answer3')}</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('faq.question4')}</h4>
                <p className="text-gray-600 text-sm">{t('faq.answer4')}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('faq.question5')}</h4>
                <p className="text-gray-600 text-sm">{t('faq.answer5')}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('faq.question6')}</h4>
                <p className="text-gray-600 text-sm">{t('faq.answer6')}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

export default PricingSection
