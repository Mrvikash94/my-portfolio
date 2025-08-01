'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`
          }}
        />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-violet-400 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center container-padding max-w-6xl mx-auto">
        <div className="space-y-8 animate-fadeInUp">
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="heading-xl gradient-text text-balance">
              Hi, I'm Vikash
            </h1>
            <div className="relative">
              <p className="heading-sm text-zinc-300 text-balance">
                Software Engineer
                <span className="inline-block w-0.5 h-8 bg-purple-500 ml-1 animate-pulse" />
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="body-lg text-zinc-400 max-w-3xl mx-auto text-balance leading-relaxed">
            Building secure software solutions and managing IT infrastructure with expertise
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <button
              onClick={() => scrollTo('#projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full font-semibold text-white magnetic hover:scale-105 transition-all duration-300 glow-hover focus-ring"
            >
              <span className="flex items-center space-x-2">
                <span>View My Work</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => scrollTo('#contact')}
              className="group px-8 py-4 glass-stronger rounded-full font-semibold text-white magnetic hover:scale-105 transition-all duration-300 hover:bg-white/10 focus-ring"
            >
              <span className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 pt-8">
            <a
              href="https://github.com/mrvikash94"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 magnetic hover:scale-110 glow-hover focus-ring"
            >
              <Github className="w-5 h-5 text-zinc-400 hover:text-white transition-colors" />
            </a>
            <a
              href="mailto:mrvikash64@gmail.com"
              className="p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 magnetic hover:scale-110 glow-hover focus-ring"
            >
              <Mail className="w-5 h-5 text-zinc-400 hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/https://www.linkedin.com/in/vikash-kumar-kushwaha-7736b8265/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 magnetic hover:scale-110 glow-hover focus-ring"
            >
              <Linkedin className="w-5 h-5 text-zinc-400 hover:text-white transition-colors" />
            </a>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-zinc-500 font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 text-zinc-500" />
        </div>
      </div>
    </section>
  )
}
