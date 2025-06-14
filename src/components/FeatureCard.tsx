'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-200"
    >
      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg mb-6">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default FeatureCard

