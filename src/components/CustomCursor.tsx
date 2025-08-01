'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(target.tagName.toLowerCase() === 'button' ||
                   target.tagName.toLowerCase() === 'a' ||
                   target.classList.contains('magnetic') ||
                   !!target.closest('.magnetic') ||
                   window.getComputedStyle(target).cursor === 'pointer')
    }

    const hideCursor = () => setIsHidden(true)
    const showCursor = () => setIsHidden(false)

    document.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseenter', showCursor)
    document.addEventListener('mouseleave', hideCursor)

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mouseenter', showCursor)
      document.removeEventListener('mouseleave', hideCursor)
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full transition-all duration-200 ease-out ${
            isPointer ? 'scale-150 bg-purple-400' : 'scale-100'
          }`}
          style={{
            transform: 'translate(-50%, -50%)',
            mixBlendMode: 'difference'
          }}
        />
        <div
          className={`absolute top-0 left-0 w-8 h-8 border border-white/30 rounded-full transition-all duration-300 ease-out ${
            isPointer ? 'scale-200 border-purple-400/50' : 'scale-100'
          }`}
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </>
  )
}
