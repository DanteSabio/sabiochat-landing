import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SabioChat',
  description: 'IA diseñada para potenciar tu negocio.',
  icons: {
    icon: '/sabio-logo.ico',
    apple: '/sabio-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script 
          defer 
          src='https://app.sabiochat.com/sabiochat/scripts/va/sabioVirtualAssistantWidget.js' 
          id='sc_sabio_assvirtual' 
          data-crc='NDkwNDc2M2IyM2QyNTFmZmFkYmI1MThhNTRmNmFkOWJhYThlMjMyYzc0OWI0Y2ExZmVmMmY4ZDE5ODM0MjNlY2h0dHBzOi8vc2FiaW9jaGF0LmNvbS9eYXNzdF9IR2hGMHNwWklweHp6SHNFaTM2TThWMlpeYzA2MzFkOTEtNDJkMC00ZmRjLWJlYWMtYzk1NGVkNTVjNzcy'
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --sabiochat-color1: #2392d7; 
              --sabiochat-title-text: Asistente Sabio; 
              --sabiochat-logoImg: https://widget-chat-bot.s3.us-east-2.amazonaws.com/Sabio+LOGO+ciscular+(2).png; 
            }
          `
        }} />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}

