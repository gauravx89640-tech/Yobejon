'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryCarouselProps {
  images: { src: string; alt: string; label?: string }[]
}

export function GalleryCarousel({ images }: GalleryCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-card]') as HTMLElement | null
    const amount = card ? card.offsetWidth + 32 : track.clientWidth * 0.8
    track.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth py-4 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img, i) => (
          <figure
            key={i}
            data-card
            className="snap-start shrink-0 w-[74%] sm:w-[42%] lg:w-[30%] bg-card p-3 pb-2 shadow-[0_10px_35px_rgba(43,43,43,0.13)]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {img.label && (
              <figcaption className="text-center py-4">
                <span className="font-script text-2xl text-foreground/80 leading-none">
                  {img.label}
                </span>
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => scrollByCard(-1)}
        aria-label="Previous"
        className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm text-foreground p-3 rounded-full shadow-lg hover:bg-background transition-colors"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => scrollByCard(1)}
        aria-label="Next"
        className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm text-foreground p-3 rounded-full shadow-lg hover:bg-background transition-colors"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  )
}
