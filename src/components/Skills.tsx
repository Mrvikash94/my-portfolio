'use client'

import { useState, useEffect, useRef } from 'react'
import { Code, Shield, Database, Users, Cloud, Zap, Smartphone, Globe } from 'lucide-react'

const skillsData = [
  {
    name: 'UI/UX Design',
    image: 'https://ext.same-assets.com/2113166016/279963610.png',
    description: 'Designing user-centered interfaces with focus on aesthetics and usability',
    icon: Shield,
    level: 85
  },
  {
    name: 'AI Automation',
    image: 'https://ext.same-assets.com/2113166016/1252773466.png',
    description: 'Leveraging artificial intelligence to automate processes and enhance UX',
    icon: Zap,
    level: 90
  },
  {
    name: 'Frontend Development',
    image: 'https://ext.same-assets.com/2113166016/1601062213.png',
    description: 'Creating responsive, accessible, and modern web interfaces',
    icon: Globe,
    level: 87
  },
  {
    name: 'App Development',
    image: 'https://ext.same-assets.com/2113166016/201403869.png',
    description: 'Creating intuitive and responsive cross-platform mobile applications',
    icon: Smartphone,
    level: 88
  },
  {
    name: 'Testing and QA',
    image: 'https://ext.same-assets.com/2113166016/3720406312.png',
    description: 'Focused on delivering robust, bug-free software through manual testing, basic automation, and strong analytical practices. Experienced in test case creation, API validation, and defect reporting across various development environments',
    icon: Code,
    level: 95
  },
  {
    name: 'React JS',
    image: 'https://ext.same-assets.com/2113166016/2631355941.png',
    description: 'Crafting dynamic and interactive web applications with modern React',
    icon: Code,
    level: 85
  },
  {
    name: 'Backend Systems',
    image: 'https://ext.same-assets.com/2113166016/1243384585.png',
    description: 'Building robust server-side applications and APIs',
    icon: Database,
    level: 87
  },
  {
    name: 'Database Design',
    image: 'https://ext.same-assets.com/2113166016/3313928024.png',
    description: 'Structuring efficient and scalable data storage solutions',
    icon: Database,
    level: 89
  }
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedBars, setAnimatedBars] = useState<boolean[]>(new Array(skillsData.length).fill(false))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const currentRef = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate bars with staggered delay
          skillsData.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedBars(prev => {
                const newBars = [...prev]
                newBars[index] = true
                return newBars
              })
            }, index * 150)
          })
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

  return (
    <section ref={sectionRef} className="section-padding section-gradient">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm tracking-wide uppercase">Skills</span>
          <h2 className="heading-lg text-white mt-4 mb-6">
            Technical
            <span className="gradient-text"> Expertise</span>
          </h2>
          <p className="text-zinc-400 body-md max-w-2xl mx-auto">
            A comprehensive skill set spanning development, design, and system administration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className={`glass rounded-2xl p-8 card-hover group ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-6">
                  {/* Icon and Image */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl overflow-hidden mb-4">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                      {skill.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-zinc-500">Proficiency</span>
                        <span className="text-xs font-medium text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full transition-all duration-1000 ease-out ${
                            animatedBars[index] ? 'opacity-100' : 'opacity-50'
                          }`}
                          style={{
                            width: animatedBars[index] ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 150}ms`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
