'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Eye,
  Target,
  Rocket,
  Globe,
  BookOpen,
  Users,
  Quote
} from 'lucide-react';

export default function VisionPage() {
  const schoolName =
    process.env.NEXT_PUBLIC_SCHOOL_NAME || 'Excellence Academy';

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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Vision & Mission
          </h1>
          <p className="text-xl text-blue-100">
            Shaping the future through education
          </p>
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
                  <Image
                    src="/images/founder.jpeg"
                    alt="Founder"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="text-center">
                  <p className="text-white text-2xl font-bold">P. Ramu</p>
                  <p className="text-blue-200 text-sm">B.Com</p>
                  <p className="text-yellow-300 text-xs uppercase">
                    Founder & Chairman
                  </p>
                </div>
              </div>

              <div className="md:w-3/5 p-10 flex flex-col justify-center">
                <Quote className="w-10 h-10 text-blue-200 mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  A Message from Our Founder
                </h3>

                <p className="text-gray-600 mb-4">
                  With a dream to transform lives through quality education, I founded {schoolName}.
                </p>

                <p className="text-gray-600 mb-6">
                  Education is about building character, values, and curiosity.
                </p>

                <div className="border-t pt-6">
                  <p className="font-bold text-blue-900">
                    P. Ramu, B.Com
                  </p>
                  <p className="text-gray-500 text-sm">
                    Founder & Chairman, {schoolName}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20">
        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 p-6 rounded-full mb-6">
              <Eye className="w-16 h-16 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Vision</h2>
            <p className="text-xl text-gray-700">
              To be a globally recognized institution nurturing leaders and lifelong learners.
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-yellow-100 p-6 rounded-full mb-6">
              <Target className="w-16 h-16 text-yellow-600" />
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700">
              To provide holistic education combining academic excellence and character development.
            </p>
          </div>

        </div>
      </section>

      {/* STRATEGIC GOALS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">

          <h2 className="text-4xl text-center font-bold text-blue-900 mb-12">
            Strategic Goals
          </h2>

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
                <h3 className="text-xl font-semibold text-blue-900">
                  {goal.title}
                </h3>
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

    </div>
  );
}
