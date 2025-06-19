'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Button from './Button'

interface PricingCardProps {
  title: string
  price: string
  period: string
  originalPrice?: string | null
  description: string
  features: string[]
  isPopular?: boolean
  buttonText: string
  delay?: number
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  originalPrice,
  description,
  features,
  isPopular = false,
  buttonText,
  delay = 0
}) => {
  const { t } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
        isPopular 
          ? 'border-indigo-500 ring-4 ring-indigo-100' 
          : 'border-gray-200 hover:border-indigo-300'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            {t('pricing.popular')}
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="flex items-baseline justify-center mb-2">
          {originalPrice && (
            <span className="text-lg text-gray-400 line-through mr-2">{originalPrice}</span>
          )}
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          {/* Solo añadir USD si no es el plan personalizado */}
          {price !== t('pricing.custom.title') && (
            <span className="text-sm text-gray-500 ml-1 font-medium">USD</span>
          )}
        </div>
        
        {/* Mostrar período solo si existe */}
        {period && (
          <div className="text-gray-600 text-sm">{period}</div>
        )}
        
        {originalPrice && (
          <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mt-2">
            {t('pricing.saveMonths')}
          </div>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        variant={isPopular ? 'primary' : 'outline'} 
        size="lg" 
        className="w-full"
      >
        {buttonText === 'Probar gratis' || buttonText === 'Try free' ? (
          <a href="https://calendly.com/hola-sabiochat/30min?month=2024-11" target="_blank" rel="noopener noreferrer" className="w-full">
            {buttonText}
          </a>
          ) : (
          buttonText
        )}
      </Button>
    </motion.div>
  )
}

export default PricingCard
