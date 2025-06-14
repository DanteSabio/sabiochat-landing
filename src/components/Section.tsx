'use client'

import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
  background?: string
  padding?: string
}

const Section = ({ 
  children, 
  id,
  className = '', 
  background = 'bg-white',
  padding = 'py-16 sm:py-24',
  ...props 
}: SectionProps) => {
  return (
    <section 
      id={id}
      className={`${background} ${padding} ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

export default Section

