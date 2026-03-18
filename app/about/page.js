'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Target, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  const schoolName = process.env.NEXT_PUBLIC_SCHOOL_NAME || 'Excellence Academy';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src='/images/about.jpeg'
            alt="School Building"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-blue-100">Discover our story and commitment to excellence</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Founded with a vision to provide world-class education, {schoolName} has been at the forefront 
                of educational excellence for over three decades. Our commitment to nurturing young minds and 
                developing future leaders has made us one of the most respected institutions in the region.
              </p>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                We believe in holistic development that goes beyond textbooks. Our comprehensive curriculum 
                combines academic rigor with character building, creativity, and critical thinking skills.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With state-of-the-art facilities, experienced faculty, and a nurturing environment, we create 
                opportunities for every student to discover their potential and achieve their dreams.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src='/images/campus3.jpeg'
                alt="Students celebrating"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12" />,
                title: "Excellence",
                description: "We strive for the highest standards in everything we do, from academics to extracurricular activities."
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Integrity",
                description: "We foster honesty, respect, and ethical behavior in all our interactions and decisions."
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Community",
                description: "We build strong relationships and work together to create a supportive learning environment."
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Innovation",
                description: "We embrace creativity and forward-thinking approaches to prepare students for the future."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Students" },
              { number: "50+", label: "Teachers" },
              { number: "30+", label: "Years" },
              { number: "95%", label: "Success Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
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

        {/* Top & bottom gold lines */}
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
                  <span className="text-yellow-300 font-bold text-sm">594</span>
                </div>

                {/* Kural text */}
                <p
                  className="text-2xl md:text-3xl leading-relaxed font-medium text-white mb-2 relative z-10"
                  style={{ fontFamily: '"Noto Serif Tamil", "Latha", serif' }}
                >
                  ஆக்கம் அதர்வினாய்ச் செல்லும் அசைவிலா
                </p>
                <p
                  className="text-2xl md:text-3xl leading-relaxed font-medium text-white mb-8 relative z-10"
                  style={{ fontFamily: '"Noto Serif Tamil", "Latha", serif' }}
                >
                  ஊக்க முடையா னுழை
                </p>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-12 bg-yellow-500/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <div className="h-px w-12 bg-yellow-500/40" />
                </div>

                {/* Translation */}
                <p className="text-blue-200 text-base md:text-lg italic relative z-10">
                  "Prosperity will follow the path of the man who is endowed with unwavering perseverance."
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