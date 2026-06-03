"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import BookEventModal from '@/components/BookEventModal';

export default function HeroSection() {
  return (
    <>
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="https://cdn.venuelook.com/uploads/space_29832/1645096223_595x400.png"
            alt="Aachman Banquet Hall Lucknow"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-primary mb-2"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="fill-current w-5 h-5" />
            ))}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-tight"
          >
            Aachman Banquet & Restaurant
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl"
          >
            Creating Memorable Celebrations in Lucknow. From grand weddings to intimate gatherings, experience luxury like never before.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <BookEventModal />
            <Link href="tel:+919999999999">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black text-lg px-8 py-6 rounded-none transition-all group w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Call Now
              </Button>
            </Link>
            <Link href="/menu">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-white text-lg px-8 py-6 rounded-none transition-all group w-full sm:w-auto">
                View Menu
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Section Header */}
      <section className="w-full pt-24 bg-background text-foreground px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-serif mb-6 text-primary">Welcome to Aachman</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Vikas Nagar, Lucknow, Aachman is the premier destination for unforgettable events. With our state-of-the-art facilities, world-class catering, and impeccable service, we transform your dreams into reality.
          </p>
        </motion.div>
      </section>
    </>
  );
}
