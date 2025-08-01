'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import IQRium from '@/components/IQRium'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import ScrollProgress from '@/components/ScrollProgress'
import LoadingAnimation from '@/components/LoadingAnimation'
import CustomCursor from '@/components/CustomCursor'
import PageTransition from '@/components/PageTransition'
import { Linkedin, Instagram } from 'lucide-react';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingAnimation />
  }

  return (
    <PageTransition>
      <main className="relative min-h-screen">
        <CustomCursor />
        <ScrollProgress />
        <Navigation />

        <div className="relative">
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="timeline">
            <Education />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="iqrium">
            <IQRium />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>
    </PageTransition>
  )
}

