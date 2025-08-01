'use client'

import { useEffect, useState } from 'react'

export function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold }
    )

    const currentElement = document.getElementById('scroll-trigger')
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => observer.disconnect()
  }, [threshold])

  return isVisible
}

export function useParallax() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return offsetY
}
