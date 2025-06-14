'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/sections/HeroSection'
import FeaturesSection from '@/sections/FeaturesSection'
import HowItWorksSection from '@/sections/HowItWorksSection'
import UseCasesSection from '@/sections/UseCasesSection'
import PricingSection from '@/sections/PricingSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <UseCasesSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}

