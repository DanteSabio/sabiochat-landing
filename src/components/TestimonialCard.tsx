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
      className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200 h-full flex flex-col"
    >
      <div className="flex items-start mb-6">
        {/* Avatar con tamaño fijo */}
        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
          {avatar || name.charAt(0)}
        </div>
        
        {/* Información del usuario con overflow controlado */}
        <div className="ml-4 min-w-0 flex-1">
          <h4 className="font-semibold text-gray-900 text-base leading-tight mb-1">{name}</h4>
          <p className="text-gray-600 text-sm leading-tight">
            <span className="block">{role}</span>
            <span className="block font-medium text-gray-700">{company}</span>
          </p>
        </div>
      </div>
      
      {/* Contenido del testimonio */}
      <div className="flex-1">
        <p className="text-gray-700 leading-relaxed italic">"{content}"</p>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
