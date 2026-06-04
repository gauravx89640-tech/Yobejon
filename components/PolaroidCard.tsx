'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface PolaroidCardProps {
  src: string
  alt: string
  label: string
  rotation?: number
}

export function PolaroidCard({ src, alt, label, rotation = 0 }: PolaroidCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<div>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ rotate: `${rotation}deg` }}
    >
      <div className="bg-white p-3 shadow-lg">
        <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-gray-100">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="mt-2 text-center text-xs text-gray-600 font-light">
          {label}
        </div>
      </div>
    </div>
  )
}
