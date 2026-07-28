import { SEOProps } from "../components/SEOHead";

export const SEO_CONFIGS: Record<string, SEOProps> = {
  "/": {
    title: "Indravex Technologies | Enterprise Software Engineering & AI Solutions",
    description: "Indravex Technologies is a premier IT consultancy & software development agency. We engineer custom AI solutions, web & mobile applications, and cloud architectures for global enterprises.",
    keywords: "Indravex Technologies, IT Consultancy, Custom Software Development, AI Automation, Web Development, Mobile App Development, Cloud Migration, Enterprise IT Solutions, Software Agency Pune India",
    canonicalUrl: "https://www.indravex.com/",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.indravex.com/#organization",
        "name": "Indravex Technologies",
        "url": "https://www.indravex.com/",
        "logo": "https://www.indravex.com/IT.png",
        "sameAs": [
          "https://www.linkedin.com/company/indravex",
          "https://twitter.com/indravex",
          "https://github.com/indravex"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-7666506689",
          "contactType": "customer service",
          "email": "indravextechnologies@gmail.com"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "addressCountry": "India",
          "streetAddress": "Pimple Gurav"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://www.indravex.com/#service",
        "name": "Indravex Technologies",
        "image": "https://www.indravex.com/IT.png",
        "telePhone": "+91-7666506689",
        "email": "indravextechnologies@gmail.com",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "MH",
          "addressCountry": "IN"
        },
        "areaServed": ["Global", "India", "United States", "United Kingdom", "Singapore"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "IT & Software Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI & Automation Solutions",
                "description": "Custom LLMs, RAG systems, and AI agent workflows."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Development",
                "description": "Full-stack React, Next.js, and cloud native web applications."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mobile Application Development",
                "description": "Cross-platform iOS & Android mobile apps using React Native and Flutter."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Software Development",
                "description": "Tailor-made microservices, API integrations, and enterprise systems."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Marketing & SEO",
                "description": "Data-driven organic search, AEO, GEO, and growth marketing campaigns."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "IT Staffing & Dedicated Engineering Teams",
                "description": "Flexible staff augmentation with top-tier senior software engineers."
              }
            }
          ]
        }
      }
    ]
  },
  "/services": {
    title: "Engineering Services | AI, Web, Mobile & Cloud | Indravex Technologies",
    description: "Explore Indravex Technologies' core services: AI & Automation, Web Development, Mobile Apps, Custom Engineering, Digital Marketing, and Dedicated IT Staffing.",
    keywords: "AI Development Services, Web Development Company, Mobile App Development, Cloud Migration, IT Staffing, Custom Software Engineering",
    canonicalUrl: "https://www.indravex.com/services",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.indravex.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.indravex.com/services" }
        ]
      }
    ]
  },
  "/about": {
    title: "About Us | Leading IT Consultancy & Software Development | Indravex",
    description: "Learn about Indravex Technologies. We are a team of visionary engineers and consultants dedicated to building high-impact digital products and AI solutions.",
    keywords: "About Indravex, Software Engineering Agency, Tech Consultants India, Enterprise Software Development",
    canonicalUrl: "https://www.indravex.com/about",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.indravex.com/" },
          { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.indravex.com/about" }
        ]
      }
    ]
  },
  "/hospitality": {
    title: "Hospitality & Smart Resort Tech Solutions | Indravex Technologies",
    description: "Transforming hospitality with smart guest portals, IoT-connected resort systems, automated check-ins, and high-performance hotel management software.",
    keywords: "Hospitality Tech, Hotel Management Software, Smart Resort Solutions, Hospitality AI, IoT Hotel Systems",
    canonicalUrl: "https://www.indravex.com/hospitality",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.indravex.com/" },
          { "@type": "ListItem", "position": 2, "name": "Hospitality Solutions", "item": "https://www.indravex.com/hospitality" }
        ]
      }
    ]
  },
  "/faqs": {
    title: "Frequently Asked Questions | Software & AI Services | Indravex",
    description: "Get answers to common questions about working with Indravex Technologies, our tech stack, AI development process, cloud auditing, and engagement models.",
    keywords: "Indravex FAQ, Software Development Process, AI Consulting FAQ, Tech Stack Questions",
    canonicalUrl: "https://www.indravex.com/faqs",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What technologies does Indravex support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Indravex specializes in React, Next.js, Node.js, Python, FastAPI, MongoDB, AWS, Firebase, Docker, and AI/LLM frameworks."
            }
          },
          {
            "@type": "Question",
            "name": "How does AI integration work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We design and deploy custom AI solutions, including LLM integration, RAG systems, agentic workflows, and predictive analytics."
            }
          },
          {
            "@type": "Question",
            "name": "Can you audit cloud architectures?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our certified cloud engineers audit infrastructure on AWS, Azure, and GCP to optimize security, performance, and reduce costs."
            }
          }
        ]
      }
    ]
  },
  "/contact": {
    title: "Contact Us | Request Technical Consultation | Indravex Technologies",
    description: "Get in touch with Indravex Technologies. Contact our engineering team for custom software, AI development, and cloud consulting.",
    keywords: "Contact Indravex, Hire Software Developers, Hire AI Engineers, IT Consultation Pune",
    canonicalUrl: "https://www.indravex.com/contact",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Indravex Technologies",
        "url": "https://www.indravex.com/contact"
      }
    ]
  }
};
