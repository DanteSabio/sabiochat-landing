'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: string
}

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'p-6',
  ...props 
}: CardProps) => {
  const baseClasses = `bg-white rounded-xl border border-gray-200 shadow-sm ${padding} ${className}`
  
  const hoverClasses = hover ? 'hover:shadow-lg hover:border-gray-300 transition-all duration-200' : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5 } : {}}
      className={`${baseClasses} ${hoverClasses}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card

