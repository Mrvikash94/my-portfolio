'use client'

import { useState, useEffect, useRef } from 'react'
import { ExternalLink, Brain, Users, BookOpen, BarChart3, Shield, Zap } from 'lucide-react'

export default function ServiceWala() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const currentRef = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const features = [
    {
      icon: Brain,
      title: 'City-Based Filtering & Matching',
      items: [
        'When posting or browsing service requests, users are matched based on their selected city.',
        'This ensures that customers are shown only local and available service providers, improving relevance and response time.',
        'It also allows the platform to scale regionally by targeting specific cities.'
      ]
    },
    {
      icon: Users,
      title: 'Role-Based User System (Customer & Service Provider)',
      items: [
        'ServiceWala offers a dual-role platform with separate signup/login flows and dashboards for Customers and Service Providers.',
        'Customers can post service requests, track booking status, and manage their profiles.',
        'Service Providers can browse job requests, accept bookings, and manage their services.This separation ensures personalized user journeys and clear workflows.'
      ]
    },
    {
      icon: BookOpen,
      title: 'Service Request & Booking Flow',
      items: [
        'Customers can easily post service requests by selecting the type of work, entering location details, choosing a time slot, and describing the issue.',
        'The system handles the end-to-end job lifecycle, from request creation to confirmation and completion.',
        'The system handles the end-to-end job lifecycle, from request creation to confirmation and completion'
      ]
    },
    {
      icon: BarChart3,
      title: 'Interactive Dashboards',
      items: [
        'Both user types have access to custom dashboards:',
        'Customers can view booking history, upcoming appointments, and profile details.','Service Providers can view new requests, respond to bookings, and update their availability.These dashboards enhance user engagement and improve task management.'
      ]
    },
    {
      icon: Shield,
      title: 'OTP-Based Authentication (Mobile Login)',
      items: [
        'Instead of using traditional email-password systems, ServiceWala implements secure mobile number + OTP authentication.',
        'This ensures a frictionless and user-friendly experience, especially in local markets where users may not be tech-savvy. It also adds a layer of security by verifying users',
        'mobile numbers before allowing access.'
        
      ]
    }
  ]

  const applications = [
    {
      title: '🛠 Local Job Marketplace for Skilled Workers',
      description: 'It serves as a job board for local service providers to receive consistent job opportunities, build their reputation, and manage bookings and customer interactions professionally.'
    },
    {
      title: '🏠 Appliance Repair & Maintenance',
      description: 'ServiceWala can be used to connect customers with technicians for repairing appliances like refrigerators, washing machines, and water purifiers, especially useful in urban and semi-urban areas.'
    },
    {
      title: '🔧 On-Demand Home Services',
      description: 'Customers can quickly find and book electricians, plumbers, AC technicians, and carpenters in their area. The platform helps reduce the time spent searching for reliable workers and provides verified listings.'
    },
    {
      title: '🧹 Housekeeping & Cleaning Services',
      description: 'Users can request home cleaning, pest control, or maid services through the platform. This simplifies access to trustworthy domestic helpers for one-time or recurring jobs.'
    }
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-zinc-900 to-zinc-800">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="text-purple-400 font-semibold text-sm tracking-wide uppercase">Featured Project</span>
          <h2 className="heading-lg text-white mt-4 mb-6">
            ServiceWala
          </h2>
          <p className="text-zinc-400 body-md max-w-3xl mx-auto">
            modern, local service management platform that connects customers with trusted service providers
          </p>
        </div>

        {/* Hero Section */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center mb-20 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative glass-stronger rounded-3xl p-8">
                <img
                  src="/servicewala-logo.png" alt="ServiceWala Logo" className="w-full h-auto max-h-80 object-contain mx-auto" 
                 // alt="Servicewala"
                 // className="w-full h-auto max-h-80 object-contain mx-auto"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="heading-md text-white">
              Your one-stop platform to find trusted local service providers, anytime, anywhere!
            </h3>
            <p className="text-zinc-300 body-md leading-relaxed">
              ServiceWala is a modern full-stack web application that connects customers with local service providers like electricians and plumbers. Built using Next.js, Node.js, and MongoDB, it features OTP-based login, role-based dashboards, and city-wise job matching. The platform streamlines service booking, improves visibility for workers, and simplifies task management for users, offering a scalable solution to manage local services digitally.
            </p>
            {/* <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full font-semibold text-white magnetic hover:scale-105 transition-all duration-300 glow-hover focus-ring"
            >
              <span>Visit ServiceWala</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a> */}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h3 className={`heading-md text-white text-center mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
            Powerful <span className="gradient-text">Features</span>
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className={`glass rounded-2xl p-8 card-hover group ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {feature.title}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-zinc-400 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* Applications */}
        <div className="mb-20">
          <h3 className={`heading-md text-white text-center mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
            Real-World <span className="gradient-text">Applications</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div
                key={app.title}
                className={`glass rounded-2xl p-8 card-hover group ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${1000 + index * 100}ms` }}
              >
                <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {app.title}
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why I build ServiceWala */}
        <div className={`glass-stronger rounded-3xl p-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '1200ms' }}>
          <h3 className="heading-md text-white mb-8 text-center">
            Why I Created <span className="gradient-text">ServiceWala</span>
          </h3>
          <div className="space-y-6 text-zinc-300 body-md leading-relaxed max-w-4xl mx-auto">
            <p>
              The idea for ServiceWala came from observing a real-world challenge faced by many people in daily life — the difficulty of finding reliable and verified local service providers such as electricians, plumbers, carpenters, and other technicians, especially in tier-2 and tier-3 cities. Most people rely on word-of-mouth recommendations or unverified contacts, which often leads to delays, poor service, or lack of accountability.
            </p>
            <p>
              I wanted to create a solution that would bridge this gap by building a digital platform where customers can easily find and book nearby service professionals based on their city and service needs, and where local workers can get more visibility and job opportunities. The idea was to empower both customers and workers with a transparent, easy-to-use system.
            </p>
            <p>
              ServiceWala is designed as a full-stack web application with features like OTP-based authentication, job posting, service scheduling, and role-based dashboards. It focuses on simplicity, accessibility, and real usability. This project not only demonstrates my technical ability to build scalable web applications but also reflects my interest in solving everyday problems using technology.
            </p>
            <p>
              By developing this platform, I aimed to showcase how tech can make a meaningful impact on local communities while also strengthening my skills in frontend, backend, API integration, and database design.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
