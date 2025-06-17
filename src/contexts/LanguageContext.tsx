'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  es: {
    // Header
    'nav.features': 'Funcionalidades',
    'nav.howItWorks': 'Cómo funciona',
    'nav.useCases': 'Casos de uso',
    'nav.pricing': 'Precios',
    'nav.login': 'Iniciar sesión',
    'nav.tryFree': 'Probar gratis',

    // Hero Section
    'hero.badge': 'Tecnología de IA avanzada',
    'hero.title': 'Potencia tu equipo',
    'hero.titleHighlight': 'Con SabioChat',
    'hero.subtitle': 'Creá asistentes con IA para soporte interno o atención al cliente. Entrenalos con tu propia información y conectalos a los canales y sistemas que ya usás.',
    'hero.tryFree': 'Probar gratis',
    'hero.watchDemo': 'Ver demostración',
    'hero.stat1': '85%',
    'hero.stat1Label': 'Menor tiempo de respuesta',
    'hero.stat2': '60%',
    'hero.stat2Label': 'Ahorro en costos',
    'hero.stat3': '20%',
    'hero.stat3Label': 'Más ventas',
    'hero.dashboardTitle': 'SabioChat Dashboard',
    'hero.chatUser': 'Usuario:',
    'hero.chatQuestion': '"¿Tenemos computadoras en stock?"',
    'hero.chatBot': 'SabioChat:',
    'hero.chatAnswer': '"Sí, tenemos 15 laptops Dell disponibles y 8 computadoras de escritorio HP en inventario."',
    'hero.whatsapp.online': 'en línea',
    'hero.whatsapp.title': 'Sabio - Asistente IA',
    'hero.whatsapp.message1': 'Sabio, ¿cuántas ventas tuvimos esta semana?',
    'hero.whatsapp.message2': '¡Hola! Esta semana registraste 47 ventas por $89,340. Un 23% más que la semana pasada 📈',
    'hero.whatsapp.message3': '¿Qué producto se vendió más?',
    'hero.whatsapp.message4': 'El producto estrella fue "Laptop Gaming Pro" con 12 unidades vendidas. ¿Te muestro el reporte completo?',
    'hero.whatsapp.inputPlaceholder': 'Escribe un mensaje...',
    'hero.whatsapp.consultations': 'consultas',
    'hero.whatsapp.today': 'hoy',

    // Features Section
    'features.badge': 'Funcionalidades principales',
    'features.title': 'Crea un asistente IA',
    'features.titleHighlight': 'a medida',
    'features.subtitle': 'para apoyar a tu equipo con tecnología de inteligencia artificial avanzada',
    'features.communication.title': 'Comunicación centralizada',
    'features.communication.description': 'Gestiona la comunicación en los principales canales y responde rápidamente desde cualquier lugar.',
    'features.configuration.title': 'Sin necesidad de codigo',
    'features.configuration.description': 'Creá y administrá tus asistentes sin conocimientos técnicos. Todo desde un panel visual.',
    'features.ai.title': 'IA personalizada',
    'features.ai.description': 'Bots inteligentes que aprenden y se adaptan para ofrecer respuestas veloces y precisas sobre la empresa.',
    'features.implementation.title': 'Integración inmediata',
    'features.implementation.description': 'Integrá SabioChat en minutos con tus herramientas existentes como OneDrive, Whatsapp o Google Drive. Sin complejidad.',
    'features.security.title': 'Seguridad de datos',
    'features.security.description': 'Protegé los datos de tu empresa con control de acceso y trazabilidad completa.',
    'features.analytics.title': 'Análisis en tiempo real',
    'features.analytics.description': 'Monitorea el rendimiento del Bot y equipo con datos detallados sobre las interacciones.',
    
    // Features section - segunda parte
    'features.subtitle2': 'Simple implementación de IA para potenciar a tu equipo',
    'features.humanBot.title': 'Bot + humano',
    'features.humanBot.description': 'Combina respuestas automáticas con intervención humana cuando sea necesario.',


    // How It Works Section
    'howItWorks.badge': 'Proceso simple',
    'howItWorks.title': '¿Cómo funciona',
    'howItWorks.titleHighlight': 'SabioChat?',
    'howItWorks.subtitle': 'En solo 3 pasos simples, tendrás tu asistente de IA funcionando y ayudando a tu equipo',
    'howItWorks.step1.title': 'Sube tus documentos',
    'howItWorks.step1.description': 'Conecta OneDrive, SalesForce u otras fuentes. Sabio analiza múltiples archivos como Word, Excel y PDF.',
    'howItWorks.step2.title': 'Configura tu asistente',
    'howItWorks.step2.description': 'Personaliza las respuestas y define los permisos de acceso. Entrena a Sabio con tu información específica.',
    'howItWorks.step3.title': 'Implementa y disfruta',
    'howItWorks.step3.description': 'Conectalo con WhatsApp, Instagram o tu sitio web y empezá a recibir respuestas inteligentes al instante.',
    'howItWorks.integrations.title': 'Implementación inmediata con tus aplicaciones más utilizadas',
    'howItWorks.integrations.subtitle': 'Sabio se integra perfectamente con las herramientas que ya usas, creando un ecosistema de IA que potencia tu productividad.',

    // Use Cases Section
    'useCases.badge': 'Casos de uso',
    'useCases.title': 'Casos prácticos en',
    'useCases.titleHighlight': 'diferentes industrias',
    'useCases.subtitle': 'Descubrí cómo podés aplicar SabioChat para automatizar tareas y mejorar la eficiencia en cualquier sector',
    'useCases.hr.title': 'Recursos Humanos',
    'useCases.hr.description': 'Automatizá respuestas sobre beneficios, licencias, políticas y capacitaciones. Accedé rápido a documentos clave y liberá tiempo para tareas estratégicas de RRHH.',
    'useCases.support.title': 'Soporte',
    'useCases.support.description': 'Resolvé dudas frecuentes al instante y mejorá la experiencia de usuarios y equipos internos. SabioChat responde con precisión y aprende de cada consulta.',
    'useCases.government.title': 'Gobierno',
    'useCases.government.description': 'Ayudá a tus equipos a acceder más rápido a normativas, expedientes o trámites. Garantizá seguridad de datos y reducí la carga de tareas repetitivas en oficinas públicas.',
    'useCases.sales.title': 'Ventas y Comercio',
    'useCases.sales.description': 'Respondé en segundos sobre productos, stock o envíos. SabioChat se conecta con tu tienda online o CRM para automatizar la atención y acelerar cada venta.',
    'useCases.testimonials.title': 'Lo que dicen quienes lo prueban',
    'useCases.testimonials.subtitle': 'Empresas de todos los tamaños están explorando cómo SabioChat puede optimizar sus procesos internos',


   // Sección de Precios
    'pricing.badge': 'Planes flexibles',
    'pricing.title': 'Planes que se adaptan a',
    'pricing.titleHighlight': 'tu empresa',
    'pricing.subtitle': 'Desde equipos pequeños hasta grandes corporaciones, tenemos el plan perfecto para tu organización',
    'pricing.monthly': 'Mensual',
    'pricing.annual': 'Anual',
    'pricing.popular': 'Más popular',
    'pricing.saveMonths': 'Ahorra 2 meses',

    'pricing.teams.title': 'Teams',
    'pricing.teams.description': 'Para emprendedores y pequeñas empresas.',

    'pricing.standard.title': 'Standard',
    'pricing.standard.description': 'Para empresas en crecimiento o equipos medianos.',

    'pricing.advanced.title': 'Advanced',
    'pricing.advanced.description': 'Para grandes empresas o áreas con alta demanda.',

    'pricing.custom.title': 'Personalizado',
    'pricing.custom.description': 'Para corporaciones con necesidades específicas.',

    'pricing.tryFree': 'Probar gratis',
    'pricing.contactSales': 'Hablar con un asesor',

    'pricing.faq.title': 'Preguntas frecuentes',
    'pricing.faq.subtitle': 'Resolvemos las dudas más comunes sobre SabioChat',
    'pricing.discount': '-2 meses',

    // Características por plan
    'pricing.teams.features.queries': '500 preguntas por mes',
    'pricing.teams.features.users': '10 operadores',
    'pricing.teams.features.docs': 'Aprende hasta 100 docs o 100MB',
    'pricing.teams.features.whatsapp': '2 Bots',
    'pricing.teams.features.history': 'Integración con WhatsApp',

    'pricing.standard.features.queries': '2000 preguntas por mes',
    'pricing.standard.features.users': '50 operadores',
    'pricing.standard.features.docs': 'Aprende hasta 500 docs o 500MB',
    'pricing.standard.features.whatsapp': '10 Bots',
    'pricing.standard.features.history': 'Integración con WhatsApp',

    'pricing.advanced.features.queries': '5000 preguntas por mes',
    'pricing.advanced.features.users': '200 operadores',
    'pricing.advanced.features.docs': 'Aprende hasta 1000 docs o 1GB',
    'pricing.advanced.features.whatsapp': '20 Bots',
    'pricing.advanced.features.history': 'Integración con WhatsApp',

    'pricing.custom.features.integration': 'Integración archivos dinámicos',
    'pricing.custom.features.unlimited': 'Archivos ilimitados',
    'pricing.custom.features.whatsapp': 'Preguntas ilimitadas',
    'pricing.custom.features.reports': 'Informes personalizados',
    'pricing.custom.features.training': 'Integración con APIs',


    'faq.question1': '¿SabioChat tiene prueba gratis?',
    'faq.answer1': 'Sí, podés probarlo gratis por 14 días sin tarjeta. Descubrí cómo puede ayudarte antes de decidir.',

    'faq.question2': '¿En qué canales puedo usar SabioChat?',
    'faq.answer2': 'En WhatsApp, Instagram, tu web, e-commerce o cualquier canal donde atiendas a clientes.',

    'faq.question3': '¿Necesito saber programar?',
    'faq.answer3': 'No. Creás tu asistente sin código desde un panel visual, fácil para cualquier usuario.',

    'faq.question4': '¿Mi información está protegida?',
    'faq.answer4': 'Sí. Usamos cifrado de nivel empresarial y cumplimos con normas de privacidad como GDPR.',

    'faq.question5': '¿Puedo cambiar de plan más adelante?',
    'faq.answer5': 'Sí, podés cambiar o actualizar el plan cuando quieras desde tu cuenta.',

    'faq.question6': '¿Incluye soporte técnico?',
    'faq.answer6': 'Todos los planes incluyen soporte. A más plan, mayor cobertura.',


    // Testimonials
    'testimonials.title': 'Lo que dicen nuestros clientes',
    'testimonials.subtitle': 'Empresas de todos los tamaños confían en SabioChat para optimizar sus procesos internos',

    'testimonials.maria.name': 'María González',
    'testimonials.maria.role': 'Directora de RRHH',
    'testimonials.maria.company': 'TechCorp',
    'testimonials.maria.content': 'SabioChat transformó completamente nuestro departamento de recursos humanos. Ahora podemos acceder a información de empleados y políticas internas en segundos.',

    'testimonials.carlos.name': 'Carlos Rodríguez',
    'testimonials.carlos.role': 'Gerente de Soporte',
    'testimonials.carlos.company': 'ServicePlus',
    'testimonials.carlos.content': 'Reducimos el tiempo de respuesta a consultas en un 70%. Nuestros clientes están más satisfechos y nuestro equipo puede enfocarse en casos más complejos.',

    'testimonials.ana.name': 'Ana Martínez',
    'testimonials.ana.role': 'Coordinadora Digital',
    'testimonials.ana.company': 'GobTech',
    'testimonials.ana.content': 'La implementación fue sorprendentemente sencilla. En una semana teníamos el sistema funcionando y procesando consultas ciudadanas de manera eficiente.',



    // Footer
    'footer.description': '¿Consultas? Preguntale a SabioChat en el widget abajo a la izquierda.',
    'footer.quickLinks': 'Enlaces rápidos',
    'footer.features': 'Funcionalidades',
    'footer.howItWorks': 'Cómo funciona',
    'footer.useCases': 'Casos de uso',
    'footer.pricing': 'Precios',
    'footer.contact': 'Contacto',
    'footer.location': 'Buenos Aires, Argentina',
    'footer.copyright': '© 2025 SabioChat. Todos los derechos reservados.',
    'footer.privacy': 'Política de privacidad',
    'footer.terms': 'Términos de servicio',
    'footer.cookies': 'Cookies',
    

// Configuración de formato
'locale': 'es-AR',
'currencyCode': 'ARS',

// Navegación
'nav.features': 'Funcionalidades',
'nav.howItWorks': 'Cómo funciona',
'nav.useCases': 'Casos de uso',
'nav.pricing': 'Precios',
'nav.roiCalculator': 'Calculadora ROI',
'nav.tryFree': 'Probar gratis',

// ROI Calculator - Títulos principales
'roi.title': 'Calcula tu',
'roi.titleHighlight': 'ROI con SabioChat',
'roi.subtitle': 'Descubre el impacto financiero que SabioChat puede tener en tu empresa',

// ROI Calculator - Navegación de pasos
'roi.step': 'Paso',
'roi.of': 'de',
'roi.complete': 'completado',
'roi.continue': 'Continuar',
'roi.back': 'Atrás',
'roi.improvement': 'mejora',
'roi.perYear': 'por año',

// Paso 1 - Casos de uso
'roi.step1.title': 'Selecciona tus casos de uso',
'roi.step1.subtitle': 'Elige las áreas donde SabioChat puede impactar tu negocio',
'roi.useCase1.title': 'Atención al Cliente',
'roi.useCase1.description': 'Automatiza respuestas y resuelve consultas 24/7',
'roi.useCase2.title': 'Soporte de Ventas',
'roi.useCase2.description': 'Acelera el proceso de ventas con información instantánea',
'roi.useCase3.title': 'Operaciones Internas',
'roi.useCase3.description': 'Optimiza procesos internos y reduce costos operativos',
'roi.useCase4.title': 'Recursos Humanos',
'roi.useCase4.description': 'Automatiza consultas de RRHH y mejora la experiencia del empleado',

// Paso 2 - Datos de la empresa
'roi.step2.title': 'Cuéntanos sobre tu empresa',
'roi.step2.subtitle': 'Ingresa algunos datos básicos para personalizar tu cálculo',
'roi.yourData': 'Ingresa los datos de tu empresa',
'roi.input.employees': 'Número de empleados',
'roi.placeholder.employees': 'Ej: 50',
'roi.input1Label': 'Costos operativos mensuales (ARS)',
'roi.input1Placeholder': 'Ej: 500000',
'roi.input2Label': 'Tiempo promedio de respuesta actual (minutos)',
'roi.input2Placeholder': 'Ej: 15',
'roi.input3Label': 'Horas mensuales buscando información',
'roi.input3Placeholder': 'Ej: 80',
'roi.input4Label': 'Ventas mensuales promedio (ARS)',
'roi.input4Placeholder': 'Ej: 2000000',
'roi.input.supportTickets': 'Tickets de soporte mensuales',
'roi.placeholder.supportTickets': 'Ej: 200',

// Paso 3 - Vista previa del impacto
'roi.step3.title': 'Impacto potencial de SabioChat',
'roi.step3.subtitle': 'Basado en estudios de empresas que implementaron IA empresarial',

// Paso 4 - Resultados
'roi.step4.title': 'Tu potencial de ROI',
'roi.step4.subtitle': 'Estos son los resultados proyectados para tu empresa',
'roi.calculateButton': 'Calcular mi ROI',
'roi.yourPotential': 'Tu potencial con SabioChat',

// Resultados específicos
'roi.result1Title': 'Ahorro en costos operativos',
'roi.result1Description': '60% de reducción mensual',
'roi.result2Title': 'Nuevo tiempo de respuesta',
'roi.result2Description': '85% más rápido',
'roi.result3Title': 'Tiempo ahorrado en búsquedas',
'roi.result3Description': '90% menos tiempo buscando',
'roi.result4Title': 'Incremento en ventas',
'roi.result4Description': '20% de aumento mensual',
'roi.result5Title': 'Aumento de productividad',
'roi.result5Description': 'Mejora en la eficiencia del equipo',
'roi.totalAnnualSavingsTitle': 'Ahorro total anual proyectado',
'roi.totalAnnualSavingsDescription': 'Suma de ahorros y ganancias adicionales',

// Unidades
'roi.minutes': 'minutos',
'roi.hours': 'horas',

// Impacto de IA - Métricas
'roi.impact.title': 'Impacto de integrar IA empresarial como SabioChat',
'roi.impact.metric1': 'Reducción en el tiempo promedio de respuesta a clientes y empleados',
'roi.impact.metric2': 'Ahorro en costos operativos al automatizar consultas repetitivas y tareas manuales',
'roi.impact.metric3': 'Disminución del tiempo de búsqueda de información crítica en documentos internos',
'roi.impact.metric4': 'Aumento en la productividad de los equipos al liberar tiempo operativo',
'roi.impact.metric5': 'Incremento en ventas al mejorar la atención, la velocidad y la personalización en la experiencia del cliente',

// CTA Final
'roi.cta.title': '¿Listo para transformar tu negocio?',
'roi.cta.subtitle': 'Agenda una demo personalizada y descubre cómo SabioChat puede generar estos resultados en tu empresa',
'roi.cta.schedule': 'Agendar demo',
'roi.cta.recalculate': 'Recalcular ROI',

// Disclaimer
'roi.sourceDisclaimer': 'Estas métricas se basan en estudios de empresas que implementaron IA generativa integrada a sus sistemas (McKinsey, IBM, Salesforce, PwC), junto con resultados obtenidos por nuestros clientes.',



  },
  en: {
    // Header
    'nav.features': 'Features',
    'nav.howItWorks': 'How it works',
    'nav.useCases': 'Use cases',
    'nav.pricing': 'Pricing',
    'nav.login': 'Sign in',
    'nav.tryFree': 'Try free',

    // Hero Section
    'hero.badge': 'Advanced AI Technology',
    'hero.title': 'Unlock your team\'s',
    'hero.titleHighlight': 'full potential with AI',
    'hero.subtitle': 'Create AI assistants for internal support or customer service. Train them with your own information and connect them to the channels and systems you already use.',
    'hero.tryFree': 'Try free',
    'hero.watchDemo': 'Watch demo',
    'hero.stat1': '85%',
    'hero.stat1Label': 'Faster response',
    'hero.stat2': '60%',
    'hero.stat2Label': 'Cost savings',
    'hero.stat3': '20%',
    'hero.stat3Label': 'More sales',
    'hero.dashboardTitle': 'SabioChat Dashboard',
    'hero.chatUser': 'User:',
    'hero.chatQuestion': '"Do we have computers in stock?"',
    'hero.chatBot': 'SabioChat:',
    'hero.chatAnswer': '"Yes, we have 15 Dell laptops available and 8 HP desktop computers in inventory."',
    'hero.whatsapp.online': 'online',
    'hero.whatsapp.title': 'Sabio - AI Assistant',
    'hero.whatsapp.message1': 'Sabio, how many sales did we have this week?',
    'hero.whatsapp.message2': 'Hi! This week you registered 47 sales for $89,340. 23% more than last week 📈',
    'hero.whatsapp.message3': 'Which product sold the most?',
    'hero.whatsapp.message4': 'The star product was "Gaming Pro Laptop" with 12 units sold. Should I show you the complete report?',
    'hero.whatsapp.inputPlaceholder': 'Type a message...',
    'hero.whatsapp.consultations': 'consultations',
    'hero.whatsapp.today': 'today',

    // Features Section
    'features.badge': 'Main features',
    'features.title': 'Create a custom',
    'features.titleHighlight': 'AI assistant',
    'features.subtitle': 'to support your team with advanced artificial intelligence technology',
    'features.communication.title': 'Centralized communication',
    'features.communication.description': 'Manage communication across main channels and respond quickly from anywhere.',
    'features.configuration.title': 'No-code setup',
    'features.configuration.description': 'Create and manage your assistants without technical skills. All through an intuitive visual interface.',
    'features.ai.title': 'Personalized AI',
    'features.ai.description': 'Smart bots that learn and adapt to provide fast and accurate responses about the company.',
    'features.implementation.title': 'Immediate integration',
    'features.implementation.description': 'Integrate SabioChat in minutes with your existing tools like OneDrive, Whatsapp or Drive. No complexity.',
    'features.security.title': 'Data security',
    'features.security.description': 'Protect your business data with access control and full traceability.',
    'features.analytics.title': 'Real-time analytics',
    'features.analytics.description': 'Monitor Bot and team performance with detailed data about interactions.',

    // Features section - segunda parte
    'features.subtitle2': 'Simple AI implementation to empower your team',
    'features.humanBot.title': 'Bot + Human',
    'features.humanBot.description': 'Combines AI-powered responses with human support when needed.',



    // How It Works Section
    'howItWorks.badge': 'Simple process',
    'howItWorks.title': 'How does',
    'howItWorks.titleHighlight': 'SabioChat work?',
    'howItWorks.subtitle': 'In just 3 simple steps, you\'ll have your AI assistant running and helping your team',
    'howItWorks.step1.title': 'Upload your documents',
    'howItWorks.step1.description': 'Connect OneDrive, SalesForce or other sources. Sabio analyzes multiple files like Word, Excel and PDF.',
    'howItWorks.step2.title': 'Configure your assistant',
    'howItWorks.step2.description': 'Customize responses and define access permissions. Train Sabio with your specific information.',
    'howItWorks.step3.title': 'Deploy and enjoy',
    'howItWorks.step3.description': 'Connect it with WhatsApp, Instagram or your website and start getting smart responses instantly.',
    'howItWorks.integrations.title': 'Immediate implementation with your most used applications',
    'howItWorks.integrations.subtitle': 'Sabio integrates perfectly with the tools you already use, creating an AI ecosystem that boosts your productivity.',

    // Use Cases Section
    'useCases.badge': 'Use Cases',
    'useCases.title': 'Practical cases in ',
    'useCases.titleHighlight': 'different industries',
    'useCases.subtitle': 'Discover how you can use SabioChat to automate tasks and improve efficiency across different sectors',
    'useCases.hr.title': 'Human Resources',
    'useCases.hr.description': 'Automate answers about benefits, leave policies, training and internal procedures. Quickly access key documents and free up time for strategic HR tasks.',
    'useCases.support.title': 'Support',
    'useCases.support.description': 'Instantly resolve common questions and improve the experience for users and internal teams. SabioChat responds accurately and learns with each interaction.',
    'useCases.government.title': 'Government',
    'useCases.government.description': 'Help teams access regulations, records and procedures faster. Ensure data security and reduce repetitive tasks in public organizations.',
    'useCases.sales.title': 'Sales and Commerce',
    'useCases.sales.description': 'Answer questions about products, stock or shipping in seconds. SabioChat connects with your online store or CRM to automate support and speed up sales.',
    'useCases.testimonials.title': 'What people are saying',
    'useCases.testimonials.subtitle': 'Companies of all sizes are exploring how SabioChat can optimize their internal processes',


    // Pricing Section
    'pricing.badge': 'Flexible plans',
    'pricing.title': 'Plans that adapt to',
    'pricing.titleHighlight': 'your company',
    'pricing.subtitle': 'From small teams to large corporations, we have the perfect plan for your organization',
    'pricing.monthly': 'Monthly',
    'pricing.annual': 'Annual',
    'pricing.popular': 'Most popular',
    'pricing.saveMonths': 'Save 2 months',

    'pricing.teams.title': 'Teams',
    'pricing.teams.description': 'For entrepreneurs and small businesses.',

    'pricing.standard.title': 'Standard',
    'pricing.standard.description': 'For growing companies or mid-sized teams.',

    'pricing.advanced.title': 'Advanced',
    'pricing.advanced.description': 'For large companies or high-demand areas.',

    'pricing.custom.title': 'Custom',
    'pricing.custom.description': 'For corporations with specific requirements.',

    'pricing.tryFree': 'Try free',
    'pricing.contactSales': 'Talk to an advisor',

    'pricing.faq.title': 'Frequently asked questions',
    'pricing.faq.subtitle': 'We answer the most common questions about SabioChat',
    'pricing.discount': '-2 months',

    // Plan-specific features
    'pricing.teams.features.queries': '500 questions per month',
    'pricing.teams.features.users': '10 operators',
    'pricing.teams.features.docs': 'Train with up to 100 docs or 100MB',
    'pricing.teams.features.whatsapp': '2 Bots',
    'pricing.teams.features.history': 'WhatsApp integration',

    'pricing.standard.features.queries': '2000 questions per month',
    'pricing.standard.features.users': '50 operators',
    'pricing.standard.features.docs': 'Train with up to 500 docs or 500MB',
    'pricing.standard.features.whatsapp': '10 Bots',
    'pricing.standard.features.history': 'WhatsApp integration',

    'pricing.advanced.features.queries': '5000 questions per month',
    'pricing.advanced.features.users': '200 operators',
    'pricing.advanced.features.docs': 'Train with up to 1000 docs or 1GB',
    'pricing.advanced.features.whatsapp': '20 Bots',
    'pricing.advanced.features.history': 'WhatsApp integration',

    'pricing.custom.features.integration': 'Dynamic file integration',
    'pricing.custom.features.unlimited': 'Unlimited files',
    'pricing.custom.features.whatsapp': 'Unlimited questions',
    'pricing.custom.features.reports': 'Custom reports',
    'pricing.custom.features.training': 'API integration',

    

    // Descuento y FAQ
    
    'faq.question1': 'Is there a free trial?',
    'faq.answer1': 'Yes! Try SabioChat free for 14 days, no credit card needed — see how it fits your team.',

    'faq.question2': 'What channels does SabioChat work with?',
    'faq.answer2': 'WhatsApp, Instagram, your website, e-commerce — connect it wherever your users are.',

    'faq.question3': 'Do I need to code?',
    'faq.answer3': 'Not at all. Build and manage your assistant visually — no technical skills required.',

    'faq.question4': 'Is my data secure?',
    'faq.answer4': 'Absolutely. We use enterprise-level encryption and comply with regulations like GDPR.',

    'faq.question5': 'Can I switch plans later?',
    'faq.answer5': 'Yes! You can upgrade or change your plan anytime from your dashboard.',

    'faq.question6': 'Is support included?',
    'faq.answer6': 'Yes — all plans include support, with expanded coverage on higher tiers.',

    
    // Testimonials
    'testimonials.title': 'What our clients say',
    'testimonials.subtitle': 'Companies of all sizes trust SabioChat to optimize their internal processes',

    'testimonials.maria.name': 'María González',
    'testimonials.maria.role': 'HR Director',
    'testimonials.maria.company': 'TechCorp',
    'testimonials.maria.content': 'SabioChat completely transformed our human resources department. Now we can access employee information and internal policies in seconds.',

    'testimonials.carlos.name': 'Carlos Rodríguez',
    'testimonials.carlos.role': 'Support Manager',
    'testimonials.carlos.company': 'ServicePlus',
    'testimonials.carlos.content': 'We reduced query response time by 70%. Our customers are more satisfied and our team can focus on more complex cases.',

    'testimonials.ana.name': 'Ana Martínez',
    'testimonials.ana.role': 'Digital Coordinator',
    'testimonials.ana.company': 'GobTech',
    'testimonials.ana.content': 'The implementation was surprisingly simple. In one week we had the system running and processing citizen queries efficiently.',


     // Footer
    'footer.description': 'Questions? Ask SabioChat in the widget at the bottom left.',
    'footer.quickLinks': 'Quick links',
    'footer.features': 'Features',
    'footer.howItWorks': 'How it works',
    'footer.useCases': 'Use cases',
    'footer.pricing': 'Pricing',
    'footer.contact': 'Contact',
    'footer.location': 'Buenos Aires, Argentina',
    'footer.copyright': '© 2025 SabioChat. All rights reserved.',
    'footer.privacy': 'Privacy policy',
    'footer.terms': 'Terms of service',
    'footer.cookies': 'Cookies',

    // ROI Calculator
    'roi.title': 'Calculate your',
    'roi.titleHighlight': 'ROI with SabioChat',
    'roi.subtitle': 'Discover the financial impact SabioChat can have on your company',
    'roi.yourData': 'Enter your company data',
    'roi.input1Label': 'Monthly operational costs (USD)',
    'roi.input1Placeholder': 'Ex: 10000',
    'roi.input2Label': 'Current average response time (minutes)',
    'roi.input2Placeholder': 'Ex: 15',
    'roi.input3Label': 'Monthly hours searching for information',
    'roi.input3Placeholder': 'Ex: 80',
    'roi.input4Label': 'Average monthly sales (USD)',
    'roi.input4Placeholder': 'Ex: 50000',
    'roi.calculateButton': 'Calculate my ROI',
    'roi.yourPotential': 'Your potential with SabioChat',
    'roi.result1Title': 'Operational cost savings',
    'roi.result1Description': '60% monthly reduction',
    'roi.result2Title': 'New response time',
    'roi.result2Description': '85% faster',
    'roi.result3Title': 'Time saved in searches',
    'roi.result3Description': '90% less time searching',
    'roi.result4Title': 'Sales increase',
    'roi.result4Description': '20% monthly increase',
    'roi.totalAnnualSavingsTitle': 'Projected total annual savings',
    'roi.totalAnnualSavingsDescription': 'Sum of savings and additional earnings',
    'roi.sourceDisclaimer': 'These metrics are based on studies of companies that implemented generative AI integrated into their systems (McKinsey, IBM, Salesforce, PwC), along with results obtained by our clients.',
    'roi.minutes': 'minutes',
    'roi.hours': 'hours',

    // AI Impact
    'roi.impact.title': 'Impact of integrating enterprise AI like SabioChat',
    'roi.impact.metric1': '85% Reduction in average response time to customers and employees',
    'roi.impact.metric2': '60% Savings in operational costs by automating repetitive queries and manual tasks',
    'roi.impact.metric3': '90% Decrease in search time for critical information in internal documents',
    'roi.impact.metric4': '35% Increase in team productivity by freeing up operational time',
    'roi.impact.metric5': '20% Increase in sales by improving attention, speed and personalization in customer experience',

    // Currency format
    'locale': 'en-US',
    'currencyCode': 'USD',

    
  }
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

