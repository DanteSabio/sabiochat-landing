'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Header from '@/components/Header'
import Button from '@/components/Button'
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  ShoppingCart, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Target,
  Zap
} from 'lucide-react'

const RoiCalculatorPage = () => {
  const { t } = useLanguage()

  // State para el paso actual
  const [currentStep, setCurrentStep] = useState(1)
  
  // State para casos de uso seleccionados
  const [selectedUseCases, setSelectedUseCases] = useState<string[]>([])
  
  // State para los inputs
  const [companyData, setCompanyData] = useState({
    employees: '',
    monthlyOperationalCost: '',
    avgResponseTime: '',
    monthlyInfoSearchHours: '',
    monthlySales: '',
    supportTickets: ''
  })

  // State para los resultados
  const [results, setResults] = useState<{
    costSavings: number,
    newResponseTime: number,
    infoSearchTimeSaved: number,
    salesIncrease: number,
    totalAnnualSavings: number,
    productivityGain: number,
    roi: number
  } | null>(null)

  // Casos de uso disponibles
  const useCases = [
    {
      id: 'customer-service',
      title: t('roi.useCase1.title'),
      description: t('roi.useCase1.description'),
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      impact: '85%'
    },
    {
      id: 'sales-support',
      title: t('roi.useCase2.title'),
      description: t('roi.useCase2.description'),
      icon: ShoppingCart,
      color: 'from-green-500 to-emerald-500',
      impact: '20%'
    },
    {
      id: 'internal-operations',
      title: t('roi.useCase3.title'),
      description: t('roi.useCase3.description'),
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      impact: '60%'
    },
    {
      id: 'hr-support',
      title: t('roi.useCase4.title'),
      description: t('roi.useCase4.description'),
      icon: Target,
      color: 'from-orange-500 to-red-500',
      impact: '35%'
    }
  ]

  const toggleUseCase = (useCaseId: string) => {
    setSelectedUseCases(prev => 
      prev.includes(useCaseId) 
        ? prev.filter(id => id !== useCaseId)
        : [...prev, useCaseId]
    )
  }

  const calculateRoi = () => {
    const employees = parseInt(companyData.employees) || 0
    const opCost = parseFloat(companyData.monthlyOperationalCost) || 0
    const respTime = parseFloat(companyData.avgResponseTime) || 0
    const infoHours = parseFloat(companyData.monthlyInfoSearchHours) || 0
    const sales = parseFloat(companyData.monthlySales) || 0

    // Cálculos basados en los casos de uso seleccionados
    let multiplier = selectedUseCases.length > 0 ? selectedUseCases.length * 0.25 : 1

    const costSavings = opCost * 0.60 * multiplier
    const newResponseTime = respTime * (1 - 0.85)
    const infoSearchTimeSaved = infoHours * 0.90
    const salesIncrease = sales * 0.20 * multiplier
    const productivityGain = employees * 0.35 * multiplier

    const totalMonthlySavings = costSavings + salesIncrease
    const totalAnnualSavings = totalMonthlySavings * 12

    const roi = ((totalAnnualSavings / (employees * opCost || 1)) * 100)

    setResults({
      costSavings,
      newResponseTime,
      infoSearchTimeSaved,
      salesIncrease,
      totalAnnualSavings,
      productivityGain,
      roi
    })
    setCurrentStep(4)
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(t('locale'), { 
      style: 'currency', 
      currency: t('currencyCode'),
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  const impactMetrics = [
    { icon: Clock, percentage: '85%', description: t('roi.impact.metric1'), color: 'from-blue-500 to-cyan-500' },
    { icon: DollarSign, percentage: '60%', description: t('roi.impact.metric2'), color: 'from-green-500 to-emerald-500' },
    { icon: TrendingUp, percentage: '90%', description: t('roi.impact.metric3'), color: 'from-purple-500 to-pink-500' },
    { icon: Users, percentage: '35%', description: t('roi.impact.metric4'), color: 'from-indigo-500 to-purple-500' },
    { icon: ShoppingCart, percentage: '20%', description: t('roi.impact.metric5'), color: 'from-orange-500 to-red-500' }
  ]

     return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="mt-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4"
            >
              {t('roi.title')}{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {t('roi.titleHighlight')}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            >
              {t('roi.subtitle')}
            </motion.p>
            
            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-md mx-auto mb-8"
            >
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span>{t('roi.step')} {currentStep} {t('roi.of')} 4</span>
                <span>{Math.round((currentStep / 4) * 100)}% {t('roi.complete')}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                ></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Step 1: Use Cases Selection */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('roi.step1.title')}</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{t('roi.step1.subtitle')}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {useCases.map((useCase) => (
                  <motion.div
                    key={useCase.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleUseCase(useCase.id)}
                    className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedUseCases.includes(useCase.id)
                        ? 'border-indigo-500 bg-indigo-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-md'
                    }`}
                  >
                    {selectedUseCases.includes(useCase.id) && (
                      <div className="absolute top-4 right-4">
                        <CheckCircle className="w-6 h-6 text-indigo-600" />
                      </div>
                    )}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${useCase.color} flex items-center justify-center mb-4`}>
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{useCase.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-indigo-600">{useCase.impact}</span>
                      <span className="text-sm text-gray-500">{t('roi.improvement')}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Button 
                onClick={() => setCurrentStep(2)} 
                size="lg"
                disabled={selectedUseCases.length === 0}
                className="min-w-[200px]"
              >
                {t('roi.continue')} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          )}

          {/* Step 2: Company Data */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('roi.step2.title')}</h2>
                <p className="text-lg text-gray-600">{t('roi.step2.subtitle')}</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('roi.input.employees')}
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={companyData.employees}
                      onChange={(e) => setCompanyData({...companyData, employees: e.target.value})}
                      placeholder={t('roi.placeholder.employees')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('roi.input1Label')}
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={companyData.monthlyOperationalCost}
                      onChange={(e) => setCompanyData({...companyData, monthlyOperationalCost: e.target.value})}
                      placeholder={t('roi.input1Placeholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('roi.input2Label')}
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={companyData.avgResponseTime}
                      onChange={(e) => setCompanyData({...companyData, avgResponseTime: e.target.value})}
                      placeholder={t('roi.input2Placeholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('roi.input3Label')}
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={companyData.monthlyInfoSearchHours}
                      onChange={(e) => setCompanyData({...companyData, monthlyInfoSearchHours: e.target.value})}
                      placeholder={t('roi.input3Placeholder')}
                    />
                  </div>
             <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('roi.input4Label')}
                    </label>
               <input
                 type="number"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={companyData.monthlySales}
                      onChange={(e) => setCompanyData({...companyData, monthlySales: e.target.value})}
                      placeholder={t('roi.input4Placeholder')}
               />
             </div>
             <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('roi.input.supportTickets')}
                    </label>
               <input
                 type="number"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={companyData.supportTickets}
                      onChange={(e) => setCompanyData({...companyData, supportTickets: e.target.value})}
                      placeholder={t('roi.placeholder.supportTickets')}
               />
             </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <Button 
                    variant="outline" 
                    onClick={() => setCurrentStep(1)}
                    className="min-w-[120px]"
                  >
                    {t('roi.back')}
                  </Button>
                  <Button 
                    onClick={() => setCurrentStep(3)}
                    className="min-w-[200px]"
                  >
                    {t('roi.continue')} <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Impact Preview */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('roi.step3.title')}</h2>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">{t('roi.step3.subtitle')}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {impactMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center mb-4 mx-auto`}>
                      <metric.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{metric.percentage}</div>
                    <p className="text-gray-600 text-sm">{metric.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex justify-between max-w-md mx-auto">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep(2)}
                  className="min-w-[120px]"
                >
                  {t('roi.back')}
                </Button>
                <Button 
                  onClick={calculateRoi}
                  className="min-w-[200px]"
                >
                  <BarChart3 className="mr-2 w-5 h-5" />
                  {t('roi.calculateButton')}
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Results */}
          {currentStep === 4 && results && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('roi.step4.title')}</h2>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">{t('roi.step4.subtitle')}</p>
              
              {/* Main ROI Card */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 mb-8 shadow-2xl">
                <div className="flex items-center justify-center mb-4">
                  <Zap className="w-12 h-12 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">{t('roi.totalAnnualSavingsTitle')}</h3>
                    <p className="text-indigo-200">{t('roi.totalAnnualSavingsDescription')}</p>
                  </div>
                </div>
                <div className="text-6xl font-extrabold mb-2">{formatCurrency(results.totalAnnualSavings)}</div>
                <p className="text-xl text-indigo-200">{t('roi.perYear')}</p>
              </div>
              
              {/* Detailed Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                  <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('roi.result1Title')}</h3>
                  <p className="text-3xl font-bold text-green-600 mb-2">{formatCurrency(results.costSavings)}</p>
                  <p className="text-sm text-gray-600">{t('roi.result1Description')}</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                  <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('roi.result2Title')}</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-2">{results.newResponseTime.toFixed(1)} {t('roi.minutes')}</p>
                  <p className="text-sm text-gray-600">{t('roi.result2Description')}</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                  <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('roi.result3Title')}</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-2">{results.infoSearchTimeSaved.toFixed(1)} {t('roi.hours')}</p>
                  <p className="text-sm text-gray-600">{t('roi.result3Description')}</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                  <ShoppingCart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('roi.result4Title')}</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-2">{formatCurrency(results.salesIncrease)}</p>
                  <p className="text-sm text-gray-600">{t('roi.result4Description')}</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                  <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('roi.result5Title')}</h3>
                  <p className="text-3xl font-bold text-indigo-600 mb-2">{results.productivityGain.toFixed(0)}%</p>
                  <p className="text-sm text-gray-600">{t('roi.result5Description')}</p>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="bg-gray-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('roi.cta.title')}</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{t('roi.cta.subtitle')}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    href="https://calendly.com/hola-sabiochat/30min?month=2024-11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-[200px]"
                  >
                    {t('roi.cta.schedule' )}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => {
                      setCurrentStep(1)
                      setSelectedUseCases([])
                      setCompanyData({
                        employees: '',
                        monthlyOperationalCost: '',
                        avgResponseTime: '',
                        monthlyInfoSearchHours: '',
                        monthlySales: '',
                        supportTickets: ''
                      })
                      setResults(null)
                    }}
                    className="min-w-[200px]"
                  >
                    {t('roi.cta.recalculate')}
                  </Button>
                </div>
             </div>
            </motion.div>
           )}
         </div>
      </div>

      {/* Source Disclaimer */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">{t('roi.sourceDisclaimer')}</p>
        </div>
      </div>
    </div>
  )
}

export default RoiCalculatorPage
