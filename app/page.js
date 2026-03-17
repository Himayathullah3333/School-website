'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const schoolName = process.env.NEXT_PUBLIC_SCHOOL_NAME || 'PSM KALAIMAGAL GROUPS';
  const tagline =
    process.env.NEXT_PUBLIC_SCHOOL_TAGLINE || "Building Tomorrow's Leaders Today";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1594478650135-31844a1a9bc8"
            alt="School Building"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8 flex justify-center"
          >
            <img
              src="/images/schoollogobgr.png"
              alt="School Logo"
              className="h-40"
            />
          </motion.div>

          {/* School Name */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-blue-900 mb-4"
          >
            {schoolName}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-700 mb-8"
          >
            {tagline}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            {/* Register Now → Contact */}
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                Register Now
              </Button>
            </Link>

            {/* Learn More → About */}
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Excellence in education, character, and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="w-12 h-12" />,
                title: 'Quality Education',
                description:
                  'Comprehensive curriculum designed for holistic development',
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Expert Faculty',
                description:
                  'Experienced teachers dedicated to student success',
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: 'Excellence Awards',
                description:
                  'Recognized for academic and extracurricular achievements',
              },
              {
                icon: <GraduationCap className="w-12 h-12" />,
                title: 'Career Guidance',
                description:
                  'Preparing students for successful futures',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Start your journey towards excellence today
            </p>

            {/* Enroll Now → Contact */}
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                Enroll Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Campus Life Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Campus Life</h2>
            <p className="text-xl text-gray-600">Explore our vibrant school community</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              "/images/campus1.jpeg",
              "/images/campus2.jpeg",
              "/images/campus3.jpeg"
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={img}
                  alt={`Campus image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/events">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Thirukkural Section */}
      <section className="py-20 bg-gradient-to-b from-blue-950 to-blue-900 relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 40px,
                rgba(255,255,255,0.3) 40px,
                rgba(255,255,255,0.3) 41px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 40px,
                rgba(255,255,255,0.3) 40px,
                rgba(255,255,255,0.3) 41px
              )`
            }}
          />
        </div>

        {/* Top decorative gold border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            {/* Header label */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold tracking-[0.3em] uppercase">
                Thirukkural
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400" />
            </div>

            {/* Card */}
            <div
              className="relative rounded-2xl p-1"
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 40%, #f59e0b 100%)',
              }}
            >
              <div className="rounded-2xl bg-blue-950 px-8 py-10 md:px-14 md:py-12 text-center relative overflow-hidden">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-blue-800/30 rounded-2xl pointer-events-none" />

               

                {/* Kural number badge */}
                <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1 mb-6">
                  <span className="text-yellow-400 text-xs font-bold tracking-widest uppercase">குறள்</span>
                  <span className="text-yellow-300 font-bold text-sm">1</span>
                </div>

                {/* Kural text */}
                <p className="text-2xl md:text-3xl leading-relaxed font-medium text-white mb-2 relative z-10"
                  style={{ fontFamily: '"Noto Serif Tamil", "Latha", serif' }}>
                  அகர முதல எழுத்தெல்லாம் ஆதி
                </p>
                <p className="text-2xl md:text-3xl leading-relaxed font-medium text-white mb-8 relative z-10"
                  style={{ fontFamily: '"Noto Serif Tamil", "Latha", serif' }}>
                  பகவன் முதற்றே உலகு
                </p>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-12 bg-yellow-500/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <div className="h-px w-12 bg-yellow-500/40" />
                </div>

                {/* Translation */}
                <p className="text-blue-200 text-base md:text-lg italic relative z-10">
                  "As the letter 'A' is the first of all letters, so the eternal God is first in the world."
                </p>

                {/* Author credit */}
                <p className="text-yellow-500/70 text-sm mt-4 tracking-wider relative z-10">
                  — திருவள்ளுவர் · Thiruvalluvar
                </p>
              </div>
            </div>

            {/* Bottom label */}
            <p className="text-center text-blue-400/60 text-xs mt-6 tracking-widest uppercase">
              திருக்குறள் · The Sacred Couplets
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}