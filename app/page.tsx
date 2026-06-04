'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { GalleryCarousel } from '@/components/GalleryCarousel'
import { TestimonialCarousel } from '@/components/TestimonialCarousel'
import { ServiceCard } from '@/components/ServiceCard'
import { SectionLabel } from '@/components/SectionLabel'

const testimonials = [
  {
    text: 'Yobejon is truly an artist! She is always very busy so I have to be sure to make my next appointment quickly! Always smiling! I am a purple girl and I never know what to put on my nails — I leave it all up to Yobejon. She comes up with a design and starts her magic by creating beautiful nails!',
    author: 'Lisa Curtis',
    role: 'Client',
  },
  {
    text: 'Yobejon is the best nail tech I have found. She takes the time to perfect my nails. Her nail art is out of this world — she makes your nails little pieces of art. And her pedicures are wonderful too!',
    author: 'Lisa Postell',
    role: 'Client',
  },
  {
    text: 'I love this place and the fact that all the attention is placed on me. I don’t feel rushed. Yobejon is very friendly and takes her time to make sure you are well pampered before you leave the salon. An amazing place to relax and get a mani and pedi.',
    author: 'M. BenjiOgaga',
    role: 'Client',
  },
]

const galleryImages = [
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEsSL2h4n4CvWU8RfOM_FAemC8-AqD1BhsQNqt3D9uRcRLZgc2m55iSCXZZzeFB9rZmSAI9mVRDSYz8HrPTefncvtREf_jivmCDtextKRrOCIraWRhwHhQ1rBs_682D7Fal0es=s680-w680-h510', alt: 'Yobejon nail design', label: 'Bling Set' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAH6NcV3WJyffTa3n8waqDcXGKnT90ttzPsl3BprOU_LTwAQ9iUCEwnRtvgEMRm6HGVnKNfgCXot7G1CSHVN4YIL_1ZGtlnD_Ci50_8U2kV9iub-vvXAeLkGeyMlwncpf2ICi6Mvkpj7t98=s680-w680-h510', alt: 'Yobejon nail design', label: 'Classic Art' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHrMncM2ywYxtUWF3DDt3Vl9DfhAmvl4SOzdI0KdXaMqjbRdrp7-1N6WxBRgpGwoRdRZk2pJqgfR__bBY-GsFAE94XXC5qRj8503ARE4NppNBiMXYpp7KaRHdsgFRaUPDUPWvAkgytkm8yB=s680-w680-h510', alt: 'Yobejon nail design', label: 'Butterfly' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFItICvOcz1cLq6P1MWogqGt5JdKjf5ojFwIK4srdRPBDj0mDF9F7q3cZ-0FH51p0S9cyovc-tgCiC6VcuLXk8RlKwMb0YYe-gFjliCsStLw6q_MFR6qO3-RJnqUNDMWEx5ZAI=s680-w680-h510', alt: 'Yobejon nail design', label: 'Bespoke' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFZS5Zg41XKW_GGJFRAZNd3ZGkWk7_niWaCMfwYp9pCCcmN4qblkZAoP9EO93L3yFCKT5etyMlnjqypydR39bdY6bhVYdy4Il3EbZgv8Os3nTBXExyaJEvVvy69KoH-K_0Xh-L2MRqU-yH9=s680-w680-h510', alt: 'Yobejon nail design', label: 'Hand-Painted' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFeqx7mFEHiUXAZiPodqxHzv4-NM1YqHKWTBDC-ZviDZk0utrLcYnJK41djgdTwoCSTmG5WyfZA2RM8E5yXmzHyJgtfr3LImkbSmDlSjhFV0q0WRcad4CKJX0hR2dyLHMFK_xQ-jMamTLFc=s680-w680-h510', alt: 'Yobejon nail design', label: 'Signature' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHN6bM6aoTS44qQ1z8VTkyx0EM3f6K1FQSV4-A4PvKJgeqd5k3H95v_CZa-qEBt9AfKn3MzPjs4Ma23yzuwRtghlDA6dhQ2pwkSAjbQuXDRCidAAp50boGbV37ltGNx9aO5N6PJZSfHNRg_=s680-w680-h510', alt: 'Yobejon nail design', label: 'Yobejon Original' },
]

const services = [
  { name: 'Classic Nails', duration: '90 min', price: '$45.00' },
  { name: 'Gel Manicure', duration: '45 min', price: '$35.00' },
  { name: 'Gel Pedicure', duration: '55 min', price: '$45.00' },
  { name: 'Pedicure (Express)', duration: '35 min', price: '$25.00' },
  { name: 'Gentleman\'s Pedicure', duration: '45 min', price: '$45.00' },
  { name: 'Product Removal', duration: '45 min', price: '$25.00' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const bookingUrl = 'https://booksy.com/en-us/108222_yobejon-the-beauty-experience_nail-salon_15980_clearwater'

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-background/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className={`font-serif text-2xl font-semibold transition-colors ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Yobejon
            </button>

            {/* Desktop Menu */}
            <div className={`hidden md:flex items-center gap-8 ${scrolled ? 'text-muted-foreground' : 'text-white/85'}`}>
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm hover:opacity-70 transition-opacity"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-sm hover:opacity-70 transition-opacity"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm hover:opacity-70 transition-opacity"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-sm hover:opacity-70 transition-opacity"
              >
                Reviews
              </button>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2 rounded-sm transition-colors text-sm font-medium uppercase tracking-widest ${
                  scrolled
                    ? 'bg-foreground text-background hover:bg-foreground/90'
                    : 'bg-white text-foreground hover:bg-white/90'
                }`}
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                scrolled || mobileMenuOpen ? 'text-foreground' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-6 space-y-4 border-t border-border pt-4">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Reviews
              </button>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors text-center text-sm font-medium"
              >
                Book Now
              </a>
            </div>
          )}
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1679137041392-965f43a804de?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Elegant nail care"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Warm tint + legibility overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/35 to-foreground/60"></div>

          {/* Film grain texture */}
          <div className="pointer-events-none absolute inset-0 grain-overlay"></div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto px-6 py-32 text-center">
            <div className="flex justify-center">
              <span className="font-script text-3xl md:text-4xl text-white/90 leading-none">
                Welcome to
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-white mt-4 tracking-wide">
              Yobejon Beauty
            </h1>
            <p className="font-script text-2xl md:text-3xl text-white/85 mt-3">
              where self care meets art
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-xl mx-auto mt-8">
              A personal salon experience in a cozy, clean, relaxing atmosphere — because you deserve undivided attention. It&apos;s not just nails, it&apos;s about you: your confidence, your self-care, your time to shine.
            </p>
            <div className="mt-10">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-background text-foreground rounded-sm hover:bg-background/90 transition-all hover:shadow-xl text-sm font-medium uppercase tracking-widest"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Scroll cue */}
          <button
            onClick={() => scrollToSection('services')}
            aria-label="Scroll to services"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white transition-colors animate-bounce"
          >
            <ChevronDown size={28} />
          </button>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <SectionLabel label="Our Services" />
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 text-balance">
                Premium Nail & Beauty Treatments
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <ServiceCard
                title="Manicure"
                description="Our manicure treatments stimulate nail growth and soften dry, dull skin — keeping your nails healthy and beautiful."
              />
              <ServiceCard
                title="Pedicure"
                description="Pedicure services provide full restoration for your nails with extra polishing. Treat your feet to a rejuvenating, hydrating experience."
              />
              <ServiceCard
                title="Nail Art"
                description="Let Yolande create a stunning and sustainable nail design just for you — your nails become little pieces of art."
              />
              <ServiceCard
                title="Spa Treatment"
                description="Treat yourself to a great manicure or pedicure, for men or women. Elevate your nail game with expert gel enhancement application."
              />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 md:py-32 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <SectionLabel label="Our Work" />
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 text-balance">
                Gallery of Designs
              </h2>
            </div>

            <GalleryCarousel images={galleryImages} />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              {/* Overlapping tilted polaroids — desktop */}
              <div className="relative hidden md:block h-[520px]">
                {/* Blush backdrop accent */}
                <div className="absolute top-10 left-6 w-56 h-56 bg-secondary/40 -z-10"></div>

                {/* Top polaroid */}
                <figure className="absolute top-0 left-0 w-[72%] rotate-[-5deg] bg-card p-2.5 shadow-[0_18px_45px_rgba(43,43,43,0.20)]">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://www.yobejonbeauty.com/images/overview-1-470x282.jpg"
                      alt="Inside Yobejon Beauty salon"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover [filter:brightness(0.9)_saturate(1.05)]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-foreground/10 mix-blend-multiply"></div>
                    <div className="pointer-events-none absolute inset-0 grain-overlay"></div>
                  </div>
                </figure>

                {/* Bottom polaroid, overlapping */}
                <figure className="absolute bottom-0 right-0 w-[68%] rotate-[4deg] bg-card p-2.5 shadow-[0_18px_45px_rgba(43,43,43,0.22)]">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://www.yobejonbeauty.com/images/overview-2-470x282.jpg"
                      alt="Yobejon Beauty salon detail"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover [filter:brightness(0.9)_saturate(1.05)]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-foreground/10 mix-blend-multiply"></div>
                    <div className="pointer-events-none absolute inset-0 grain-overlay"></div>
                  </div>
                </figure>
              </div>

              {/* Both framed photos — mobile, stacked */}
              <div className="md:hidden space-y-6">
                <figure className="bg-card p-2.5 shadow-[0_12px_35px_rgba(43,43,43,0.18)] rotate-[-2deg] max-w-sm mx-auto">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://www.yobejonbeauty.com/images/overview-1-470x282.jpg"
                      alt="Inside Yobejon Beauty salon"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover [filter:brightness(0.9)_saturate(1.05)]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-foreground/10 mix-blend-multiply"></div>
                    <div className="pointer-events-none absolute inset-0 grain-overlay"></div>
                  </div>
                </figure>
                <figure className="bg-card p-2.5 shadow-[0_12px_35px_rgba(43,43,43,0.18)] rotate-[2deg] max-w-sm mx-auto">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://www.yobejonbeauty.com/images/overview-2-470x282.jpg"
                      alt="Yobejon Beauty salon detail"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover [filter:brightness(0.9)_saturate(1.05)]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-foreground/10 mix-blend-multiply"></div>
                    <div className="pointer-events-none absolute inset-0 grain-overlay"></div>
                  </div>
                </figure>
              </div>

              <div className="space-y-6">
                <div>
                  <SectionLabel label="About Yobejon" />
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                  Your Local Nail & Beauty Destination
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Yobejon Beauty has been offering an extensive range of nail services and skin treatments since 2017. We&apos;re a Black-owned and operated, professional, sanitary, cozy and fun nail salon in Clearwater — by appointment.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether it&apos;s bold nail art, a relaxing pedicure, or a flawless gel set, we make sure you leave loving the way you look. No crowds, no rush — just customized, personal care.
                </p>
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <span className="text-foreground text-xl mt-1">✓</span>
                    <span className="text-foreground">Black-owned & operated since 2017</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-foreground text-xl mt-1">✓</span>
                    <span className="text-foreground">By appointment — no crowds, customized personal care</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-foreground text-xl mt-1">✓</span>
                    <span className="text-foreground">Excellent variety of nail designs, high-quality products</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-foreground text-xl mt-1">✓</span>
                    <span className="text-foreground">One-on-one personalized beauty experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Meet the Owner */}
            <div className="border-t border-border pt-16">
              <div className="text-center mb-8">
                <h3 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
                  Meet Yolande DeGale
                </h3>
              </div>
              <div className="max-w-3xl mx-auto space-y-5">
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  Yolande opened Yobejon Nail Salon in 2017. She loves what she does, and she&apos;s good at it.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  We want to be there for you! We know your week can be busy, so you are invited to book your manicure, pedicure, nail designs and more with Yobejon nail salon.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  Yobejon nail salon prides itself with top-of-the-line manicures, pedicures, and nail designs from an experienced professional. Following safe and clean regulations, we keep you relaxed, refreshed, and 100% satisfied with our one-on-one personalized beauty experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 md:py-32 bg-secondary/10">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <SectionLabel label="Pricing" />
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 text-balance">
                Our Menu
              </h2>
            </div>

            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="divide-y divide-border">
                {services.map((service, index) => (
                  <div key={index} className="p-6 flex items-center justify-between hover:bg-secondary/5 transition-colors">
                    <div>
                      <h3 className="text-lg font-medium text-foreground">{service.name}</h3>
                    </div>
                    <div className="text-right flex items-center gap-8">
                      <span className="text-muted-foreground text-sm">{service.duration}</span>
                      <span className="font-semibold text-foreground text-lg">{service.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-card rounded-lg border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Classic Nails</span> — short/medium length, fullset/fill includes manicure, cut down, and repairs. Requested designs add cost. Appointment required.
              </p>
            </div>

            <div className="text-center mt-12">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all hover:shadow-lg font-medium"
              >
                Book Now
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-32 bg-secondary/10">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <SectionLabel label="Client Testimonials" />
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 text-balance">
                What Our Clients Say
              </h2>
            </div>

            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-secondary text-foreground">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
              It&apos;s Not Just Nails, It&apos;s About You
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Book your appointment today and experience the undivided attention, artistry, and care that make Yobejon different. Your confidence, your self-care, your time to shine.
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all hover:shadow-lg font-medium"
            >
              Book Your Appointment
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <SectionLabel label="Get In Touch" />
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 text-balance">
                Visit Us Today
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Map */}
              <div className="relative rounded-lg overflow-hidden shadow-lg h-96 md:h-full min-h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.9505372814833!2d-82.7517407242378!3d27.968547076033897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f1cccc485acf%3A0x8552b45086052ce6!2sYobejon...the%20beauty%20experience!5e1!3m2!1sen!2sus!4v1761242023681!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-2">Address</h3>
                  <p className="text-lg text-foreground">Yobejon...the beauty experience</p>
                  <p className="text-muted-foreground">2140 Drew Street Suite G, Clearwater, FL 33765</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-2">Phone</h3>
                  <a href="tel:7277549645" className="text-lg text-foreground hover:text-foreground/70 transition-colors">
                    (727) 754-9645
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-2">Email</h3>
                  <a href="mailto:Yobejon@yahoo.com" className="text-lg text-foreground hover:text-foreground/70 transition-colors">
                    Yobejon@yahoo.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-2">Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Saturday: 9:00 AM – 5:00 PM</p>
                    <p>Sunday: Closed</p>
                    <p>Monday: 12:30 – 9:30 PM</p>
                    <p>Tuesday: Closed</p>
                    <p>Wednesday: 8:30 AM – 9:30 PM</p>
                    <p>Thursday: 9:00 AM – 9:30 PM</p>
                    <p>Friday: 9:00 AM – 9:30 PM</p>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all hover:shadow-lg font-medium"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-white py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-serif text-lg mb-4">Yobejon Beauty</h3>
                <p className="text-sm text-gray-300">
                  Premier nail salon and beauty destination.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase">Navigation</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="hover:text-white transition-colors"
                    >
                      Services
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('gallery')}
                      className="hover:text-white transition-colors"
                    >
                      Gallery
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('about')}
                      className="hover:text-white transition-colors"
                    >
                      About
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>2140 Drew Street Suite G, Clearwater, FL 33765</li>
                  <li>Phone: (727) 754-9645</li>
                  <li>Email: Yobejon@yahoo.com</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase">Follow Us</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <a href="https://www.instagram.com/yobejon/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100048287659650" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-300 space-y-1">
              <p>&copy; 2026 Yobejon...the beauty experience. All rights reserved.</p>
              <p>
                Designed by{' '}
                <a
                  href="https://forgestudio.one"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors underline-offset-2 hover:underline"
                >
                  Forge Studio
                </a>
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
