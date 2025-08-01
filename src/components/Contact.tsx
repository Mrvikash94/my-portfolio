'use client'
import { useState, useEffect, useRef } from 'react'
import { Mail, Github, Twitter, Instagram, Linkedin, Download } from 'lucide-react'

export default function Contact() {
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

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <div className={`space-y-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          {/* Heading */}
          <div className="space-y-4">
            <span className="text-purple-400 font-semibold text-sm tracking-wide uppercase">Get In Touch</span>
            <h2 className="heading-lg text-white">
              Contact <span className="gradient-text">Me</span>
            </h2>
            <p className="text-zinc-400 body-md max-w-2xl mx-auto">
              Ready to collaborate on your next project or discuss opportunities? Let's connect.
            </p>
          </div>

          {/* Email Box */}
          <div
            className={`glass-stronger rounded-2xl p-8 card-hover ${
              isVisible ? 'animate-fadeInUp' : 'opacity-0'
            }`}
            style={{ animationDelay: '200ms' }}
          >
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <a
                    href="mailto:mrvikash381@gmail.com"
                    className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    mrvikash381@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div
            className={`flex items-center justify-center space-x-6 ${
              isVisible ? 'animate-fadeInUp' : 'opacity-0'
            }`}
            style={{ animationDelay: '400ms' }}
          >
            <a
              href="https://github.com/mrvikash94"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-full hover:bg-white/10 transition-all duration-300 magnetic hover:scale-110 glow-hover focus-ring"
            >
              <Github className="w-6 h-6 text-zinc-400 hover:text-white transition-colors" />
            </a>

            <a
              href="https://twitter.com/atulkus21548248"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-full hover:bg-white/10 transition-all duration-300 magnetic hover:scale-110 glow-hover focus-ring"
            >
              <Twitter className="w-6 h-6 text-zinc-400 hover:text-white transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/vikash-kumar-kushwaha-7736b8265/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-full hover:bg-white/10 transition-all duration-300 magnetic hover:scale-110 glow-hover focus-ring"
            >
              <Linkedin className="w-6 h-6 text-zinc-400 hover:text-white transition-colors" />
            </a>

            <a
              href="https://instagram.com/unfav.__atul"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-full hover:bg-white/10 transition-all duration-300 magnetic hover:scale-110 glow-hover focus-ring"
            >
              <Instagram className="w-6 h-6 text-zinc-400 hover:text-white transition-colors" />
            </a>
          </div>

          {/* Resume Download Section */}
          <div
            className={`mt-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
            style={{ animationDelay: '600ms' }}
          >
            <h2 className="heading-lg mb-4 text-white">Download My Resume</h2>
            <p className="body-md mb-6 text-zinc-400">
              Interested in working with me? Grab a copy of my resume below.
            </p>

            <a
              href="/resume.pdf"
              download
              className="btn-primary inline-flex items-center gap-2 justify-center"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
