export const projectsData = [
  {
    slug: 'portfolio-site',
    title: 'My Portfolio Website',
    description: 'A personal portfolio built with Next.js and Tailwind CSS.', // ✅ Added
    image: '/images/portfolio.png',
    detailsSections: [
      {
        sectionTitle: 'Key Features',
        functionality: [
          'Fully responsive layout',
          'Built using Next.js and Tailwind CSS',
          'Dynamic routing for each project',
        ],
        link: 'https://example.com/certificate.pdf',
      },
    ],
  },
  {
    slug: 'chatbot-project',
    title: 'AI Chatbot Assistant',
    description: 'A chatbot powered by AI to assist with customer queries in real time.', // ✅ Added
    image: '/images/chatbot.png',
    detailsSections: [
      {
        sectionTitle: 'Functionality',
        functionality: [
          'Natural Language Processing',
          'Real-time response generation',
          'Connected to backend API for FAQs',
        ],
        link: 'https://example.com/chatbot-certificate.pdf',
      },
    ],
  },
]
