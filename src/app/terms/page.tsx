'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Mail, MapPin, Scale, Shield, Users, FileText, AlertTriangle } from 'lucide-react'

const TermsPage = () => {
  const { t } = useLanguage()

  const sections = [
    { id: 'acceptance', title: t('terms.section1.title'), icon: Scale },
    { id: 'definitions', title: t('terms.section2.title'), icon: FileText },
    { id: 'service', title: t('terms.section3.title'), icon: Users },
    { id: 'registration', title: t('terms.section4.title'), icon: Mail },
    { id: 'obligations', title: t('terms.section5.title'), icon: Shield },
    { id: 'payment', title: t('terms.section6.title'), icon: Calendar },
    { id: 'limitations', title: t('terms.section7.title'), icon: AlertTriangle },
    { id: 'intellectual', title: t('terms.section8.title'), icon: Scale },
    { id: 'privacy', title: t('terms.section9.title'), icon: Shield },
    { id: 'liability', title: t('terms.section10.title'), icon: AlertTriangle },
    { id: 'monitoring', title: t('terms.section11.title'), icon: Users },
    { id: 'suspension', title: t('terms.section12.title'), icon: Scale },
    { id: 'confidentiality', title: t('terms.section13.title'), icon: Shield },
    { id: 'prohibited', title: t('terms.section14.title'), icon: AlertTriangle },
    { id: 'exclusivity', title: t('terms.section15.title'), icon: FileText },
    { id: 'independence', title: t('terms.section16.title'), icon: Users },
    { id: 'jurisdiction', title: t('terms.section17.title'), icon: Scale },
    { id: 'contact', title: t('terms.section18.title'), icon: Mail }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 mt-8">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4"
          >
            {t('terms.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          >
            {t('terms.subtitle')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-gray-500"
          >
            {t('terms.lastUpdated')}: 27 de mayo de 2025
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6 max-h-[80vh] overflow-y-auto">
              <motion.h3
                className="text-lg font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {t('terms.tableOfContents')}
              </motion.h3>
              <motion.nav
                className="space-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center text-sm text-gray-600 hover:text-indigo-600 transition-colors py-1"
                  >
                    <span className="text-xs text-gray-400 mr-2">{index + 1}.</span>
                    {section.title}
                  </a>
                ))}
              </motion.nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-12">
              
              {/* Section 1: Acceptance */}
              <motion.section
                id="acceptance"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Scale className="w-6 h-6 mr-3 text-indigo-600" />
                  1. {t('terms.section1.title')}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section1.p1')}</p>
                  <p className="text-gray-700 leading-relaxed mb-4 font-semibold text-red-600">{t('terms.section1.p2')}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section1.p3')}</p>
                  <p className="text-gray-700 leading-relaxed">{t('terms.section1.p4')}</p>
                </div>
              </motion.section>

              {/* Section 2: Definitions */}
              <motion.section
                id="definitions"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-indigo-600" />
                  2. {t('terms.section2.title')}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section2.intro')}</p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{t('terms.section2.sabiochat.title')}</h4>
                      <p className="text-gray-700">{t('terms.section2.sabiochat.content')}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{t('terms.section2.client.title')}</h4>
                      <p className="text-gray-700">{t('terms.section2.client.content')}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{t('terms.section2.users.title')}</h4>
                      <p className="text-gray-700">{t('terms.section2.users.content')}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{t('terms.section2.platform.title')}</h4>
                      <p className="text-gray-700">{t('terms.section2.platform.content')}</p>
                    </div>
                  </div>
                </div>
              </motion.section>

             {/* Section 3: Service Description */}
                <motion.section
                id="service"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
                >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Users className="w-6 h-6 mr-3 text-indigo-600" />
                    3. {t('terms.section3.title' )}
                </h2>
                <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section3.p1')}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section3.p2')}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                    {t('terms.section3.p3')}{' '}
                    <a 
                        href={t('terms.section3.openaiLink')} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 underline font-medium"
                    >
                        {t('terms.section3.linkText')}
                    </a>
                    </p>
                    <p className="text-gray-700 leading-relaxed">{t('terms.section3.p4')}</p>
                </div>
                </motion.section>


              {/* Section 4: Registration */}
              <motion.section
                id="registration"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-indigo-600" />
                  4. {t('terms.section4.title')}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section4.p1')}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section4.p2')}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section4.p3')}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section4.p4')}</p>
                  <p className="text-gray-700 leading-relaxed">{t('terms.section4.p5')}</p>
                </div>
              </motion.section>

              {/* Section 5: User Obligations */}
              <motion.section
                id="obligations"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-indigo-600" />
                  5. {t('terms.section5.title')}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section5.intro')}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>{t('terms.section5.item1')}</li>
                    <li>{t('terms.section5.item2')}</li>
                    <li>{t('terms.section5.item3')}</li>
                    <li>{t('terms.section5.item4')}</li>
                    <li>{t('terms.section5.item5')}</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">{t('terms.section5.conclusion')}</p>
                </div>
              </motion.section>

              {/* Section 6: Payment */}
              <motion.section
                id="payment"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-indigo-600" />
                  6. {t('terms.section6.title')}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section6.p1')}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section6.p2')}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section6.p3')}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section6.p4')}</p>
                  <p className="text-gray-700 leading-relaxed">{t('terms.section6.p5')}</p>
                </div>
              </motion.section>

              {/* Section 7: Limitations */}
              <motion.section
                id="limitations"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-indigo-600" />
                  7. {t('terms.section7.title')}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section7.p1')}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section7.p2')}</p>
                  <p className="text-gray-700 leading-relaxed">{t('terms.section7.p3')}</p>
                </div>
              </motion.section>

              {/* Section 8: Intellectual Property */}
              <motion.section
                id="intellectual"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Scale className="w-6 h-6 mr-3 text-indigo-600" />
                  8. {t('terms.section8.title')}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section8.p1')}</p>
                  <p className="text-gray-700 leading-relaxed">{t('terms.section8.p2')}</p>
                </div>
              </motion.section>

              {/* Section 9: Privacy */}
              <motion.section
                id="privacy"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-indigo-600" />
                  9. {t('terms.section9.title')}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section9.p1')}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section9.p2')}</p>
                  <p className="text-gray-700 leading-relaxed">{t('terms.section9.p3')}</p>
                </div>
              </motion.section>

              {/* Section 10: Liability Exclusion */}
              <motion.section
                id="liability"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-indigo-600" />
                  10. {t('terms.section10.title')}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section10.p1')}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section10.p2')}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section10.p3')}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section10.p4')}</p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                    <p className="text-yellow-800 font-medium">{t('terms.section10.warning')}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{t('terms.section10.p5')}</p>
                </div>
              </motion.section>

              {/* Section 11: Monitoring */}
              <motion.section
                id="monitoring"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-indigo-600" />
                  11. {t('terms.section11.title')}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed">{t('terms.section11.content')}</p>
                </div>
              </motion.section>

              {/* Section 12: Suspension */}
              <motion.section
                id="suspension"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Scale className="w-6 h-6 mr-3 text-indigo-600" />
                  12. {t('terms.section12.title')}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section12.p1')}</p>
                  <p className="text-gray-700 leading-relaxed">{t('terms.section12.p2')}</p>
                </div>
              </motion.section>

              {/* Section 13: Confidentiality */}
              <motion.section
                id="confidentiality"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-indigo-600" />
                  13. {t('terms.section13.title')}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section13.p1')}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section13.p2')}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section13.p3')}</p>
                  <p className="text-gray-700 leading-relaxed">{t('terms.section13.p4')}</p>
                </div>
              </motion.section>

              {/* Section 14: Prohibited Use */}
              <motion.section
                id="prohibited"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-indigo-600" />
                  14. {t('terms.section14.title')}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed">{t('terms.section14.content')}</p>
                </div>
              </motion.section>

              {/* Section 15: Non-Exclusivity */}
              <motion.section
                id="exclusivity"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-indigo-600" />
                  15. {t('terms.section15.title')}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed">{t('terms.section15.content')}</p>
                </div>
              </motion.section>

              {/* Section 16: Independence */}
              <motion.section
                id="independence"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-indigo-600" />
                  16. {t('terms.section16.title')}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed">{t('terms.section16.content')}</p>
                </div>
              </motion.section>

              {/* Section 17: Jurisdiction */}
              <motion.section
                id="jurisdiction"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Scale className="w-6 h-6 mr-3 text-indigo-600" />
                  17. {t('terms.section17.title')}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed">{t('terms.section17.content')}</p>
                </div>
              </motion.section>

              {/* Section 18: Contact */}
              <motion.section
                id="contact"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-indigo-600" />
                  18. {t('terms.section18.title')}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">{t('terms.section18.content')}</p>
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                    <p className="text-indigo-800">
                      <strong>{t('terms.contact.email')}:</strong> hola@sabiochat.com
                    </p>
                  </div>
                </div>
              </motion.section>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TermsPage
