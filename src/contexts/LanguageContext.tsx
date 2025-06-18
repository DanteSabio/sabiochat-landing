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

    'faq.question3': '¿Se puede integrar SabioChat con nuestros sistemas?',
    'faq.answer3': 'Sí, SabioChat se conecta a tus sistemas internos como CRM, ERP o bases de datos para dar respuestas precisas y siempre actualizadas.',

    'faq.question4': '¿SabioChat usa mi información para entrenar la IA?',
    'faq.answer4': 'No. Tus datos no se usan para entrenar modelos. Se mantienen privados y seguros.',

    'faq.question5': '¿Puedo cambiar de plan más adelante?',
    'faq.answer5': 'Sí, podés cambiar o actualizar el plan cuando quieras desde tu cuenta.',

    'faq.question6': '¿Incluye soporte técnico?',
    'faq.answer6': 'Todos los planes incluyen soporte. A más plan, mayor cobertura.',


    // Testimonials
    'testimonials.title': 'Lo que dicen nuestros clientes',
    'testimonials.subtitle': 'Empresas de todos los tamaños confían en SabioChat para optimizar sus procesos internos',

    'testimonials.sergiocorizzo.name': 'Sergio Corizzo',
    'testimonials.sergiocorizzo.role': 'Gerente de Servicios',
    'testimonials.sergiocorizzo.company': 'Quick Informática / Quick Tech Global',
    'testimonials.sergiocorizzo.content': 'Usamos SabioChat en varias áreas: chat web, integración con Salesforce, inducción en RRHH, soporte técnico y compras para acceder rápido al inventario. Mejoramos mucho la eficiencia y su implementación fue muy sencilla.',

    'testimonials.sergiomastrangelo.name': 'Sergio Mastrangelo',
    'testimonials.sergiomastrangelo.role': 'Director de Marketing',
    'testimonials.sergiomastrangelo.company': 'Microglobal',
    'testimonials.sergiomastrangelo.content': 'Conectamos SabioChat a nuestra API y ahora nuestro equipo accede al stock y la información de productos en tiempo real, todo desde un solo lugar. Agilizó decisiones y mejoró la atención.',

    'testimonials.enriquesolchman.name': 'Enrique Solchman',
    'testimonials.enriquesolchman.role': 'Director de Informática',
    'testimonials.enriquesolchman.company': 'Superior Tribunal de Justicia de Tierra del Fuego',
    'testimonials.enriquesolchman.content': '.',



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
    'footer.terms': 'Términos y condiciones',
    'footer.cookies': 'Cookies',
    

    // Configuración de formato
    'locale': 'es-AR',
    'currencyCode': 'ARS',

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

    // Terms and Conditions - Configuración
    'terms.title': 'Términos y Condiciones',
    'terms.subtitle': 'Términos que regulan el uso de la plataforma SabioChat',
    'terms.lastUpdated': 'Última actualización',
    'terms.tableOfContents': 'Índice de contenidos',

    // Section titles
    'terms.section1.title': 'Aceptación de los Términos',
    'terms.section2.title': 'Definiciones',
    'terms.section3.title': 'Descripción del Servicio',
    'terms.section4.title': 'Condiciones de Uso y Registro',
    'terms.section5.title': 'Obligaciones del Usuario',
    'terms.section6.title': 'Contratación y Forma de Pago',
    'terms.section7.title': 'Limitaciones y Disponibilidad del Servicio',
    'terms.section8.title': 'Propiedad Intelectual',
    'terms.section9.title': 'Privacidad y Tratamiento de Datos',
    'terms.section10.title': 'Exclusión de Responsabilidad',
    'terms.section11.title': 'Funcionamiento y Supervisión',
    'terms.section12.title': 'Suspensión o Cancelación del Servicio',
    'terms.section13.title': 'Privacidad y Confidencialidad',
    'terms.section14.title': 'Uso Prohibido',
    'terms.section15.title': 'No Exclusividad',
    'terms.section16.title': 'Independencia de las Partes',
    'terms.section17.title': 'Ley Aplicable y Jurisdicción',
    'terms.section18.title': 'Contacto',

    // Section 1 - Aceptación de los Términos
    'terms.section1.p1': 'El presente documento establece los términos y condiciones (en adelante, los "Términos") que regulan el acceso y uso del servicio digital denominado SabioChat (en adelante, el "Servicio" o la "Plataforma").',
    'terms.section1.p2': 'POR FAVOR LEA DETENIDAMENTE LOS TÉRMINOS Y CONDICIONES.',
    'terms.section1.p3': 'Al registrarse, acceder o utilizar la Plataforma, el Usuario declara ser mayor de 18 años, haber leído, comprendido y aceptado en forma expresa e inequívoca los presentes Términos. Si no está de acuerdo con alguno de ellos, deberá abstenerse de utilizar el Servicio.',
    'terms.section1.p4': 'El Prestador se reserva el derecho de modificar en cualquier momento los presentes Términos, siendo responsabilidad del Usuario consultar periódicamente su contenido. Las modificaciones entrarán en vigor desde su publicación en la Plataforma, salvo que se indique expresamente lo contrario.',

    // Section 2 - Definiciones
    'terms.section2.intro': 'A los fines de este documento, se entenderá por:',
    'terms.section2.sabiochat.title': 'SABIOCHAT o EL PRESTADOR:',
    'terms.section2.sabiochat.content': 'la plataforma de asistentes virtuales personalizados desarrollada y operada por SABIOCHAT soportada por OpenAI que permite a los clientes crear, entrenar y gestionar asistentes automatizados para interactuar con sus propios usuarios o clientes.',
    'terms.section2.client.title': 'EL CLIENTE:',
    'terms.section2.client.content': 'toda persona humana o jurídica que contrata los servicios de SABIOCHAT para acceder a la plataforma y configurarla según sus necesidades.',
    'terms.section2.users.title': 'USUARIOS:',
    'terms.section2.users.content': 'incluye a los clientes, usuarios o terceros que interactúan con los asistentes virtuales desarrollados y operados por EL CLIENTE en la plataforma SABIOCHAT.',
    'terms.section2.platform.title': 'PLATAFORMA:',
    'terms.section2.platform.content': 'el entorno digital proporcionado por SABIOCHAT accesible mediante internet, que incluye el panel de control, las funciones de entrenamiento, edición, integración y despliegue de los asistentes virtuales.',

    // Section 3 - Descripción del Servicio
    'terms.section3.p1': 'SabioChat es una plataforma digital que permite la creación, personalización y utilización de asistentes virtuales (chatbots) por parte de usuarios registrados, con el objeto de brindar atención, soporte o información automatizada a terceros, en distintos contextos comerciales o de servicios.',
    'terms.section3.p2': 'El Servicio integra tecnología de inteligencia artificial provista por terceros (OpenAI), cuya disponibilidad, funcionamiento y resultados pueden depender de factores externos ajenos al control del Prestador.',
    'terms.section3.p3': 'Al utilizar los Servicios de SabioChat Ud. está aceptando los términos y condiciones de OpenAI. Por favor lea los mismos con detenimiento.',
    'terms.section3.p4': 'SABIOCHAT no presta servicios de atención al cliente, ni podrá interpretarse en el sentido que reemplaza asesoramiento legal, médico, técnico ni de ningún otro tipo mediante los asistentes virtuales.',
    'terms.section3.openaiLink': 'https://openai.com/es-ES/policies/terms-of-use/',
    'terms.section3.linkText': 'Términos y condiciones de OpenAI',

    // Section 4 - Condiciones de Uso y Registro
    'terms.section4.p1': 'Para utilizar el Servicio, el Usuario deberá ser mayor de edad y contar con plena capacidad legal para contratar y asimismo registrarse creando la cuenta e ingresando los datos que le serán requeridos.',
    'terms.section4.p2': 'El registro implica la creación de una cuenta personal mediante la cual el Usuario podrá acceder a las funcionalidades del sistema.',
    'terms.section4.p3': 'El Usuario se obliga a brindar información veraz, completa y actualizada al momento del registro, y a mantenerla en tal estado mientras dure la relación.',
    'terms.section4.p4': 'El acceso a la cuenta es personal e intransferible. El Usuario será el único responsable de toda acción realizada desde su cuenta, debiendo mantener la confidencialidad de sus credenciales y contraseña.',
    'terms.section4.p5': 'En caso de detectar un uso no autorizado o cualquier otra violación de seguridad, el Usuario deberá notificarlo de inmediato al Prestador.',

    // Section 5 - Obligaciones del Usuario
    'terms.section5.intro': 'El Usuario se obliga a utilizar la Plataforma conforme a la normativa vigente, la moral, el orden público y los presentes Términos. En particular, se compromete a:',
    'terms.section5.item1': 'No utilizar el Servicio con fines ilícitos, engañosos, difamatorios, ofensivos o que violen derechos de terceros.',
    'terms.section5.item2': 'Abstenerse de utilizar los asistentes virtuales para proporcionar asesoramiento médico, legal, financiero o de cualquier otra índole profesional que requiera habilitación, sin contar con las autorizaciones correspondientes.',
    'terms.section5.item3': 'No emplear el Servicio para difundir contenidos que infrinjan derechos de propiedad intelectual, privacidad, imagen o confidencialidad.',
    'terms.section5.item4': 'No intentar descompilar, desensamblar, modificar, reproducir, adaptar, traducir, arrendar, vender o crear obras derivadas del software que sustenta la Plataforma.',
    'terms.section5.item5': 'Asumir la plena responsabilidad por los contenidos, respuestas o resultados generados por sus asistentes virtuales, eximiendo al Prestador de cualquier tipo de responsabilidad derivada de su utilización.',
    'terms.section5.conclusion': 'La presente enumeración es enunciativa pero no taxativa debiendo abstenerse el Usuario de cualquier conducta que resulte violatoria de las normas vigentes.',

    // Section 6 - Contratación y Forma de Pago
    'terms.section6.p1': 'EL CLIENTE podrá contratar el servicio a través de la aplicación o mediante acuerdo particular.',
    'terms.section6.p2': 'El precio, condiciones de pago, límites de uso y características del plan contratado serán los especificados en la propuesta comercial, orden de compra o contratación electrónica.',
    'terms.section6.p3': 'El pago podrá efectuarse por los medios habilitados en la plataforma.',
    'terms.section6.p4': 'En caso de mora en los pagos, SABIOCHAT podrá suspender total o parcialmente el acceso a la plataforma y a los asistentes desplegados, tanto por parte de EL CLIENTE como por parte de sus USUARIOS FINALES, hasta la regularización del saldo adeudado.',
    'terms.section6.p5': 'La suspensión será notificada mediante correo electrónico a la dirección registrada por EL CLIENTE.',

    // Section 7 - Limitaciones y Disponibilidad del Servicio
    'terms.section7.p1': 'En ningún caso y bajo ningún concepto podrá interpretarse que el Prestador garantice un servicio sin errores y/o interrupciones y/o fallos de disponibilidad.',
    'terms.section7.p2': 'Por el contrario los usuarios reconocen y aceptan expresamente que la Plataforma puede experimentar errores y/o interrupciones y/o fallos de disponibilidad debido a tareas de mantenimiento, actualizaciones o causas ajenas al control del Prestador, incluyendo aquellas derivadas de servicios provistos por terceros como OpenAI.',
    'terms.section7.p3': 'Asimismo, el Prestador no garantiza que los resultados, respuestas o contenidos generados por los asistentes virtuales sean verídicos, precisos, completos ni apropiados para fines específicos, ni que satisfagan necesidades particulares del Usuario o de sus clientes los que deberán ser revisados y supervisados por los Usuarios.',

    // Section 8 - Propiedad Intelectual
    'terms.section8.p1': 'Todo el contenido disponible en la Plataforma, incluyendo textos, diseños, logos, interfaces, estructuras de navegación, código fuente y bases de datos, es propiedad del Prestador o se encuentra debidamente licenciado, y se encuentra protegido por las leyes de propiedad intelectual aplicables.',
    'terms.section8.p2': 'El Usuario conserva los derechos sobre los contenidos originales que incorpore a sus asistentes virtuales (por ejemplo, textos personalizados o configuraciones), pero otorga al Prestador una licencia gratuita, no exclusiva y revocable para utilizarlos únicamente con el fin de operar el Servicio.',

    // Section 9 - Privacidad y Tratamiento de Datos
    'terms.section9.p1': 'El tratamiento de los datos personales de los Usuarios se realiza conforme a la Política de Privacidad de SabioChat, que forma parte integral de estos Términos.',
    'terms.section9.p2': 'El Usuario se compromete a utilizar el Servicio en cumplimiento de la normativa vigente en materia de protección de datos personales, en especial si incorpora información de terceros en sus interacciones.',
    'terms.section9.p3': 'Será responsabilidad exclusiva del Usuario obtener los consentimientos necesarios para el tratamiento de datos personales por medio de los asistentes virtuales, cuando corresponda.',

    // Section 10 - Exclusión de Responsabilidad
    'terms.section10.p1': 'SABIOCHAT no garantiza que el servicio sea ininterrumpido o libre de errores, aunque adoptará las medidas razonables para asegurar su estabilidad.',
    'terms.section10.p2': 'SABIOCHAT no será responsable por los daños y perjuicios directos o indirectos que pudieran derivarse del uso de la plataforma, ni por las decisiones que EL CLIENTE o los USUARIOS FINALES adopten en base a las respuestas de los asistentes virtuales.',
    'terms.section10.p3': 'SABIOCHAT se limita a brindar una infraestructura tecnológica que procesa datos mediante modelos de inteligencia artificial.',
    'terms.section10.p4': 'EL CLIENTE es el único responsable por la veracidad, legalidad y licitud de los contenidos que incorpora, entrena o transmite mediante sus asistentes virtuales.',
    'terms.section10.warning': 'El Servicio se presta "tal como está" y "según disponibilidad", sin garantías de ningún tipo, expresas o implícitas.',
    'terms.section10.p5': 'Las limitaciones a la responsabilidad de SABIOCHAT establecidas en el presente y en otros apartados de estos Términos y Condiciones alcanzan a los directores, gerentes, administradores, representantes, funcionarios, empleados y asesores de SABIOCHAT.',

    // Section 11 - Funcionamiento y Supervisión
    'terms.section11.content': 'SABIOCHAT pone a disposición de EL CLIENTE herramientas de administración, monitoreo y edición de sus asistentes. De allí que las interacciones, conversaciones y contenidos procesados en la plataforma podrán estar supervisados de acuerdo con la necesidad del CLIENTE.',

    // Section 12 - Suspensión o Cancelación del Servicio
    'terms.section12.p1': 'El Prestador podrá, a su sola discreción y sin necesidad de preaviso, suspender o cancelar la cuenta del Usuario que incurra en violaciones a los presentes Términos, cause perjuicios a la Plataforma o incurra en actividades que afecten derechos de terceros o infrinjan la ley.',
    'terms.section12.p2': 'Asimismo, el Prestador se reserva el derecho de discontinuar total o parcialmente el Servicio en cualquier momento, debiendo notificar al Usuario con razonable antelación.',

    // Section 13 - Privacidad y Confidencialidad
    'terms.section13.p1': 'Se deja expresamente aclarado que SABIOCHAT no almacena de forma permanente los contenidos que EL CLIENTE y/o los USUARIOS FINALES carguen, ingresen o transmitan mediante la plataforma.',
    'terms.section13.p2': 'La información se procesa de forma temporal para generar respuestas automatizadas, pero la misma no queda registrada ni es accesible para su recuperación posterior.',
    'terms.section13.p3': 'Por lo tanto, SABIOCHAT no podrá proporcionar copias ni respaldos de lo ingresado por EL CLIENTE siendo responsabilidad exclusiva de EL CLIENTE conservar sus contenidos fuera de la plataforma.',
    'terms.section13.p4': 'Sin perjuicio de lo expuesto, se deja constancia que al utilizar nuestro servicio, usted nos da consentimiento a recolectar y utilizar su información conforme a lo establecido en nuestra Política de Privacidad.',

    // Section 14 - Uso Prohibido
    'terms.section14.content': 'EL CLIENTE se obliga a no utilizar la plataforma para actividades ilegales, difamatorias, discriminatorias, ofensivas o que violen derechos de terceros. Cualquier uso inadecuado podrá implicar la suspensión o cancelación del servicio, sin derecho a reembolso.',

    // Section 15 - No Exclusividad
    'terms.section15.content': 'El presente contrato celebrado, no implica ningún tipo de exclusividad para ninguna de las partes.',

    // Section 16 - Independencia de las Partes
    'terms.section16.content': 'La utilización del Servicio no implica la existencia de ningún tipo de relación laboral, societaria, de agencia, mandato o franquicia entre el Prestador y el Usuario. Cada parte actúa en forma independiente y asume sus propios riesgos y responsabilidades.',

    // Section 17 - Ley Aplicable y Jurisdicción
    'terms.section17.content': 'Los presentes Términos se regirán e interpretarán conforme a las leyes de la República Argentina. Para cualquier controversia derivada de su interpretación, validez, ejecución o cumplimiento, las partes se someten a la jurisdicción de los tribunales ordinarios con asiento en la Ciudad Autónoma de Buenos Aires, renunciando a cualquier otro fuero o jurisdicción que pudiera corresponderles.',

    // Section 18 - Contacto
    'terms.section18.content': 'Para cualquier consulta relacionada con estos Términos y Condiciones, el Usuario podrá contactarse con el Prestador a través de los siguientes medios:',
    'terms.contact.email': 'Correo electrónico',


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

    'faq.question3': 'Can SabioChat integrate with our systems?',
    'faq.answer3': 'Yes, SabioChat connects to your internal systems like CRM, ERP, or databases to provide accurate and always up-to-date answers.',

    'faq.question4': 'Does SabioChat use my information to train the AI?',
    'faq.answer4': 'No. Your data is not used to train any models. It remains private and secure.',

    'faq.question5': 'Can I switch plans later?',
    'faq.answer5': 'Yes! You can upgrade or change your plan anytime from your dashboard.',

    'faq.question6': 'Is support included?',
    'faq.answer6': 'Yes — all plans include support, with expanded coverage on higher tiers.',

    
    // Testimonials
    'testimonials.title': 'What our clients say',
    'testimonials.subtitle': 'Companies of all sizes trust SabioChat to optimize their internal processes',

    'testimonials.sergiocorizzo.name': 'Sergio Corizzo',
    'testimonials.sergiocorizzo.role': 'Service Manager',
    'testimonials.sergiocorizzo.company': 'Quick Informática / Quick Tech Global',
    'testimonials.sergiocorizzo.content': 'We use SabioChat in several areas: web chat, Salesforce integration, HR onboarding, technical support, and procurement to quickly access inventory. It significantly improved our efficiency and was very easy to implement.',

    'testimonials.sergiomastrangelo.name': 'Sergio Mastrangelo',
    'testimonials.sergiomastrangelo.role': 'Marketing Director',
    'testimonials.sergiomastrangelo.company': 'Microglobal',
    'testimonials.sergiomastrangelo.content': 'We connected SabioChat to our API and now our team accesses real-time stock and product information, all in one place. It sped up decision-making and improved support.',

    'testimonials.enriquesolchman.name': 'Enrique Solchman',
    'testimonials.enriquesolchman.role': 'IT Director',
    'testimonials.enriquesolchman.company': 'Superior Tribunal de Justicia de Tierra del Fuego',
    'testimonials.enriquesolchman.content': '.',


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

    // Terms and Conditions - Configuration
    'terms.title': 'Terms and Conditions',
    'terms.subtitle': 'Terms governing the use of the SabioChat platform',
    'terms.lastUpdated': 'Last updated',
    'terms.tableOfContents': 'Table of Contents',

    // Section titles
    'terms.section1.title': 'Acceptance of Terms',
    'terms.section2.title': 'Definitions',
    'terms.section3.title': 'Service Description',
    'terms.section4.title': 'Usage Conditions and Registration',
    'terms.section5.title': 'User Obligations',
    'terms.section6.title': 'Contracting and Payment Method',
    'terms.section7.title': 'Service Limitations and Availability',
    'terms.section8.title': 'Intellectual Property',
    'terms.section9.title': 'Privacy and Data Processing',
    'terms.section10.title': 'Liability Exclusion',
    'terms.section11.title': 'Operation and Supervision',
    'terms.section12.title': 'Service Suspension or Cancellation',
    'terms.section13.title': 'Privacy and Confidentiality',
    'terms.section14.title': 'Prohibited Use',
    'terms.section15.title': 'Non-Exclusivity',
    'terms.section16.title': 'Independence of Parties',
    'terms.section17.title': 'Applicable Law and Jurisdiction',
    'terms.section18.title': 'Contact',

    // Section 1 - Acceptance of Terms
    'terms.section1.p1': 'This document establishes the terms and conditions (hereinafter, the "Terms") that govern access to and use of the digital service called SabioChat (hereinafter, the "Service" or the "Platform").',
    'terms.section1.p2': 'PLEASE READ THE TERMS AND CONDITIONS CAREFULLY.',
    'terms.section1.p3': 'By registering, accessing or using the Platform, the User declares to be over 18 years of age, to have read, understood and expressly and unequivocally accepted these Terms. If you do not agree with any of them, you must refrain from using the Service.',
    'terms.section1.p4': 'The Provider reserves the right to modify these Terms at any time, and it is the User\'s responsibility to periodically consult their content. Modifications will take effect from their publication on the Platform, unless expressly stated otherwise.',

    // Section 2 - Definitions
    'terms.section2.intro': 'For the purposes of this document, the following shall be understood as:',
    'terms.section2.sabiochat.title': 'SABIOCHAT or THE PROVIDER:',
    'terms.section2.sabiochat.content': 'the personalized virtual assistants platform developed and operated by SABIOCHAT supported by OpenAI that allows clients to create, train and manage automated assistants to interact with their own users or customers.',
    'terms.section2.client.title': 'THE CLIENT:',
    'terms.section2.client.content': 'any natural or legal person who contracts SABIOCHAT services to access the platform and configure it according to their needs.',
    'terms.section2.users.title': 'USERS:',
    'terms.section2.users.content': 'includes clients, users or third parties who interact with virtual assistants developed and operated by THE CLIENT on the SABIOCHAT platform.',
    'terms.section2.platform.title': 'PLATFORM:',
    'terms.section2.platform.content': 'the digital environment provided by SABIOCHAT accessible via internet, which includes the control panel, training, editing, integration and deployment functions of virtual assistants.',

    // Section 3 - Service Description
    'terms.section3.p1': 'SabioChat is a digital platform that allows the creation, customization and use of virtual assistants (chatbots) by registered users, with the purpose of providing automated attention, support or information to third parties, in different commercial or service contexts.',
    'terms.section3.p2': 'The Service integrates artificial intelligence technology provided by third parties (OpenAI), whose availability, operation and results may depend on external factors beyond the Provider\'s control.',
    'terms.section3.p3': 'By using SabioChat Services you are accepting OpenAI\'s terms and conditions. Please read them carefully.',
    'terms.section3.openaiLink': 'https://openai.com/policies/terms-of-use/',
    'terms.section3.linkText': 'OpenAI Terms and Conditions',
    'terms.section3.p4': 'SABIOCHAT does not provide customer service, nor can it be interpreted as replacing legal, medical, technical or any other type of advice through virtual assistants.',

    // Section 4 - Usage Conditions and Registration
    'terms.section4.p1': 'To use the Service, the User must be of legal age and have full legal capacity to contract and also register by creating an account and entering the data that will be required.',
    'terms.section4.p2': 'Registration involves creating a personal account through which the User can access the system functionalities.',
    'terms.section4.p3': 'The User undertakes to provide truthful, complete and updated information at the time of registration, and to maintain it in such state while the relationship lasts.',
    'terms.section4.p4': 'Access to the account is personal and non-transferable. The User will be solely responsible for all actions performed from their account, and must maintain the confidentiality of their credentials and password.',
    'terms.section4.p5': 'In case of detecting unauthorized use or any other security violation, the User must notify the Provider immediately.',

    // Section 5 - User Obligations
    'terms.section5.intro': 'The User undertakes to use the Platform in accordance with current regulations, morality, public order and these Terms. In particular, they commit to:',
    'terms.section5.item1': 'Not use the Service for illicit, deceptive, defamatory, offensive purposes or that violate third party rights.',
    'terms.section5.item2': 'Refrain from using virtual assistants to provide medical, legal, financial or any other professional advice that requires authorization, without having the corresponding authorizations.',
    'terms.section5.item3': 'Not use the Service to disseminate content that infringes intellectual property, privacy, image or confidentiality rights.',
    'terms.section5.item4': 'Not attempt to decompile, disassemble, modify, reproduce, adapt, translate, lease, sell or create derivative works of the software that supports the Platform.',
    'terms.section5.item5': 'Assume full responsibility for the content, responses or results generated by their virtual assistants, exempting the Provider from any type of responsibility derived from their use.',
    'terms.section5.conclusion': 'This enumeration is enunciative but not exhaustive, and the User must refrain from any conduct that violates current regulations.',

    // Section 6 - Contracting and Payment Method
    'terms.section6.p1': 'THE CLIENT may contract the service through the application or through particular agreement.',
    'terms.section6.p2': 'The price, payment conditions, usage limits and characteristics of the contracted plan will be those specified in the commercial proposal, purchase order or electronic contracting.',
    'terms.section6.p3': 'Payment may be made through the means enabled on the platform.',
    'terms.section6.p4': 'In case of payment delays, SABIOCHAT may suspend totally or partially access to the platform and deployed assistants, both by THE CLIENT and by their END USERS, until regularization of the outstanding balance.',
    'terms.section6.p5': 'Suspension will be notified by email to the address registered by THE CLIENT.',

    // Section 7 - Service Limitations and Availability
    'terms.section7.p1': 'Under no circumstances and under no concept may it be interpreted that the Provider guarantees a service without errors and/or interruptions and/or availability failures.',
    'terms.section7.p2': 'On the contrary, users expressly recognize and accept that the Platform may experience errors and/or interruptions and/or availability failures due to maintenance tasks, updates or causes beyond the Provider\'s control, including those derived from services provided by third parties such as OpenAI.',
    'terms.section7.p3': 'Likewise, the Provider does not guarantee that the results, responses or content generated by virtual assistants are truthful, accurate, complete or appropriate for specific purposes, nor that they satisfy particular needs of the User or their clients, which must be reviewed and supervised by Users.',

    // Section 8 - Intellectual Property
    'terms.section8.p1': 'All content available on the Platform, including texts, designs, logos, interfaces, navigation structures, source code and databases, is owned by the Provider or is duly licensed, and is protected by applicable intellectual property laws.',
    'terms.section8.p2': 'The User retains rights over original content they incorporate into their virtual assistants (for example, custom texts or configurations), but grants the Provider a free, non-exclusive and revocable license to use them solely for the purpose of operating the Service.',

    // Section 9 - Privacy and Data Processing
    'terms.section9.p1': 'The processing of Users\' personal data is carried out in accordance with SabioChat\'s Privacy Policy, which forms an integral part of these Terms.',
    'terms.section9.p2': 'The User undertakes to use the Service in compliance with current regulations on personal data protection, especially if they incorporate third-party information in their interactions.',
    'terms.section9.p3': 'It will be the User\'s exclusive responsibility to obtain the necessary consents for the processing of personal data through virtual assistants, when applicable.',

    // Section 10 - Liability Exclusion
    'terms.section10.p1': 'SABIOCHAT does not guarantee that the service will be uninterrupted or error-free, although it will adopt reasonable measures to ensure its stability.',
    'terms.section10.p2': 'SABIOCHAT will not be responsible for direct or indirect damages that may arise from the use of the platform, nor for decisions that THE CLIENT or END USERS adopt based on virtual assistant responses.',
    'terms.section10.p3': 'SABIOCHAT is limited to providing a technological infrastructure that processes data through artificial intelligence models.',
    'terms.section10.p4': 'THE CLIENT is solely responsible for the veracity, legality and lawfulness of the content they incorporate, train or transmit through their virtual assistants.',
    'terms.section10.warning': 'The Service is provided "as is" and "as available", without warranties of any kind, express or implied.',
    'terms.section10.p5': 'The limitations to SABIOCHAT\'s liability established herein and in other sections of these Terms and Conditions extend to SABIOCHAT\'s directors, managers, administrators, representatives, officers, employees and advisors.',

    // Section 11 - Operation and Supervision
    'terms.section11.content': 'SABIOCHAT makes available to THE CLIENT administration, monitoring and editing tools for their assistants. Therefore, interactions, conversations and content processed on the platform may be supervised according to THE CLIENT\'s needs.',

    // Section 12 - Service Suspension or Cancellation
    'terms.section12.p1': 'The Provider may, at its sole discretion and without prior notice, suspend or cancel the account of the User who incurs violations of these Terms, causes damage to the Platform or engages in activities that affect third party rights or violate the law.',
    'terms.section12.p2': 'Likewise, the Provider reserves the right to discontinue the Service totally or partially at any time, and must notify the User with reasonable advance notice.',

    // Section 13 - Privacy and Confidentiality
    'terms.section13.p1': 'It is expressly clarified that SABIOCHAT does not permanently store content that THE CLIENT and/or END USERS upload, enter or transmit through the platform.',
    'terms.section13.p2': 'Information is processed temporarily to generate automated responses, but it is not recorded nor accessible for later retrieval.',
    'terms.section13.p3': 'Therefore, SABIOCHAT cannot provide copies or backups of what is entered by THE CLIENT, it being THE CLIENT\'s exclusive responsibility to preserve their content outside the platform.',
    'terms.section13.p4': 'Notwithstanding the above, it is stated that by using our service, you give us consent to collect and use your information in accordance with what is established in our Privacy Policy.',

    // Section 14 - Prohibited Use
    'terms.section14.content': 'THE CLIENT undertakes not to use the platform for illegal, defamatory, discriminatory, offensive activities or that violate third party rights. Any inappropriate use may result in suspension or cancellation of the service, without right to refund.',

    // Section 15 - Non-Exclusivity
    'terms.section15.content': 'This contract does not imply any type of exclusivity for any of the parties.',

    // Section 16 - Independence of Parties
    'terms.section16.content': 'The use of the Service does not imply the existence of any type of employment, corporate, agency, mandate or franchise relationship between the Provider and the User. Each party acts independently and assumes their own risks and responsibilities.',

    // Section 17 - Applicable Law and Jurisdiction
    'terms.section17.content': 'These Terms will be governed and interpreted in accordance with the laws of the Argentine Republic. For any controversy arising from their interpretation, validity, execution or compliance, the parties submit to the jurisdiction of ordinary courts based in the Autonomous City of Buenos Aires, waiving any other jurisdiction that may correspond to them.',

    // Section 18 - Contact
    'terms.section18.content': 'For any inquiry related to these Terms and Conditions, the User may contact the Provider through the following means:',
    'terms.contact.email': 'Email',

    
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

