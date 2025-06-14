'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  onClick?: () => void
  disabled?: boolean
  href?: string // <-- AÑADIDO: para enlaces
  target?: string // <-- AÑADIDO: para enlaces
  rel?: string // <-- AÑADIDO: para enlaces
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false,
  href, // <-- AÑADIDO
  target, // <-- AÑADIDO
  rel, // <-- AÑADIDO
  ...props 
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 focus:ring-indigo-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus:ring-indigo-500',
    outline: 'border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-indigo-500',
    ghost: 'text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:ring-indigo-500'
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-6 py-2.5 text-sm rounded-lg',
    lg: 'px-8 py-3 text-base rounded-lg',
    xl: 'px-10 py-4 text-lg rounded-xl'
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  // Determina qué componente renderizar (a o button)
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      href={href} // Pasa href si es un <a>
      target={target} // Pasa target si es un <a>
      rel={rel} // Pasa rel si es un <a>
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button
