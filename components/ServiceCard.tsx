'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
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
      className={`group bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-lg transition-all duration-500 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      {icon && (
        <div className="mb-4 text-accent text-3xl">{icon}</div>
      )}
      <h3 className="font-serif text-lg md:text-xl text-foreground mb-3">
        {title}
      </h3>
      <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      <div className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
        Learn more
        <ArrowUpRight size={16} />
      </div>
    </div>
  )
}
