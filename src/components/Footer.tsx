'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Copy, Check, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'

const Footer = () => {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('hola@sabiochat.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+54 11 7831-1067')
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                SabioChat
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.instagram.com/sabiochat.ai/" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/company/sabiochat/" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://www.tiktok.com/@sabiochat.ai" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.features')}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.howItWorks')}
                </a>
              </li>
              <li>
                <a href="#use-cases" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.useCases')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.pricing')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-indigo-400" />
                <a 
                  href="mailto:hola@sabiochat.com" 
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  hola@sabiochat.com
                </a>
                <button
                  onClick={handleCopy}
                  className="ml-2 p-1 text-gray-400 hover:text-indigo-400 transition-colors"
                  title="Copiar correo electrónico"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-indigo-400" />
                <a 
                  href="https://wa.me/5491178311067" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  +54 11 7831-1067
                </a>
                <div className="flex ml-2">
                  <a
                    href="https://wa.me/+5491178311067"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-gray-400 hover:text-indigo-400 transition-colors"
                    title="Enviar WhatsApp"
                  >
                    <MessageCircle size={14} />
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1 text-gray-400 hover:text-indigo-400 transition-colors"
                    title="Copiar número"
                  >
                    {copiedPhone ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-indigo-400" />
                <span className="text-gray-300">{t('footer.location')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            {t('footer.copyright')}
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t('footer.cookies')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
