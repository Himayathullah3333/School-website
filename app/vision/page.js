'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Eye, Target, Rocket, Globe, BookOpen, Users, Quote } from 'lucide-react';

export default function VisionPage() {
  const schoolName = process.env.NEXT_PUBLIC_SCHOOL_NAME || 'Excellence Academy';

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1594478650135-31844a1a9bc8"
            alt="Vision"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Vision & Mission</h1>
          <p className="text-xl text-blue-100">Shaping the future through education</p>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
              Our Founder
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              The Visionary Behind {schoolName}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-gradient-to-b from-blue-700 to-blue-900 flex flex-col items-center justify-center p-10 gap-6">
                <div className="relative w-52 h-52 rounded-full border-4 border-white/40 overflow-hidden">
                  <Image src="/images/founder.jpeg" alt="Founder" fill className="object-cover" />
                </div>
                <div className="text-center">
                  <p className="text-white text-2xl font-bold">P. Ramu, <span className="text-blue-200 text-base font-semibold">B.Com</span></p>
                  <p className="text-yellow-300 text-xs uppercase">Founder & Chairman</p>
                </div>
              </div>

              <div className="md:w-3/5 p-10 flex flex-col justify-center">
                <Quote className="w-10 h-10 text-blue-200 mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-4">A Message from Our Founder</h3>
                <p className="text-gray-600 mb-4">
                  With a dream to transform lives through quality education, I founded {schoolName}.
                </p>
                <p className="text-gray-600 mb-6">
                  Education is about building character, values, and curiosity.
                </p>
                <div className="border-t pt-6">
                  <p className="font-bold text-blue-900">P. Ramu, B.Com</p>
                  <p className="text-gray-500 text-sm">Founder & Chairman, {schoolName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20">
        <div className="container mx-auto px-4">

          {/* Our Philosophy */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-block bg-blue-100 p-6 rounded-full mb-6">
              <Eye className="w-16 h-16 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-3">Our Philosophy</h2>
            <p className="text-2xl text-blue-600 italic font-medium">
              "Learning Everyday, Loving Every Minute"
            </p>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block bg-yellow-100 p-6 rounded-full mb-6">
              <Target className="w-16 h-16 text-yellow-600" />
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We will strive to create a safe, secure and happy environment where children are able
              to achieve their full potential in all aspects of their learning. We will achieve this
              by creating a learning environment which is stimulating, challenging and inclusive.
            </p>
          </motion.div>

        </div>
      </section>

      {/* STRATEGIC GOALS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center font-bold text-blue-900 mb-12">Strategic Goals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <BookOpen />, title: "Academic Excellence" },
              { icon: <Users />, title: "Character Development" },
              { icon: <Rocket />, title: "Innovation & Technology" },
              { icon: <Globe />, title: "Global Perspective" },
              { icon: <Target />, title: "Holistic Development" },
              { icon: <Eye />, title: "Community Engagement" }
            ].map((goal, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-blue-600 mb-4">{goal.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900">{goal.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE OUTLOOK */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <Rocket className="w-20 h-20 mx-auto mb-6" />
        <h2 className="text-4xl font-bold mb-6">Looking Ahead</h2>
        <p className="text-xl max-w-4xl mx-auto text-blue-100">
          We remain committed to innovation and student success as we prepare future leaders.
        </p>
      </section>

      {/* Thirukkural Section */}
      <section className="py-20 bg-gradient-to-b from-blue-950 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px),
            repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px)`
          }} />
        </div>
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
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold tracking-[0.3em] uppercase">Thirukkural</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400" />
            </div>

            <div className="relative rounded-2xl p-1" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 40%, #f59e0b 100%)' }}>
              <div className="rounded-2xl bg-blue-950 px-8 py-10 md:px-14 md:py-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-blue-800/30 rounded-2xl pointer-events-none" />
                <div className="text-yellow-400/20 text-9xl font-bold absolute -top-4 -left-2 select-none leading-none" aria-hidden></div>

                <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1 mb-6">
                  <span className="text-yellow-400 text-xs font-bold tracking-widest uppercase">குறள்</span>
                  <span className="text-yellow-300 font-bold text-sm">595</span>
                </div>

                <p className="text-2xl md:text-3xl leading-relaxed font-medium text-white mb-2 relative z-10" style={{ fontFamily: '"Noto Serif Tamil", "Latha", serif' }}>
                  வெள்ளத் தனைய மலர்நீட்டம் மாந்தர்தம்
                </p>
                <p className="text-2xl md:text-3xl leading-relaxed font-medium text-white mb-8 relative z-10" style={{ fontFamily: '"Noto Serif Tamil", "Latha", serif' }}>
                  உள்ளத் தனைய துயர்வு
                </p>

                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-12 bg-yellow-500/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <div className="h-px w-12 bg-yellow-500/40" />
                </div>

                <p className="text-blue-200 text-base md:text-lg italic relative z-10">
                  "The height of a flower is limited by the depth of the water; the greatness of a person is limited only by the greatness of their mind."
                </p>
                <p className="text-yellow-500/70 text-sm mt-4 tracking-wider relative z-10">
                  — திருவள்ளுவர் · Thiruvalluvar
                </p>
              </div>
            </div>

            <p className="text-center text-blue-400/60 text-xs mt-6 tracking-widest uppercase">
              திருக்குறள் · The Sacred Couplets
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}