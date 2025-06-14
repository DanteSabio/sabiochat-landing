'use client'

import { motion } from 'framer-motion'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  delay?: number
}

const TestimonialCard = ({ name, role, company, content, avatar, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
          {avatar || name.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{role} en {company}</p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed italic">"{content}"</p>
    </motion.div>
  )
}

export default TestimonialCard

