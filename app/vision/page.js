'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Eye, Target, Rocket, Globe, BookOpen, Users } from 'lucide-react';

export default function VisionPage() {
  const schoolName = process.env.NEXT_PUBLIC_SCHOOL_NAME || 'Excellence Academy';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1594478650135-31844a1a9bc8"
            alt="Vision"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Vision & Mission</h1>
            <p className="text-xl text-blue-100">Shaping the future through education</p>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Vision</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To be a globally recognized institution that nurtures creative thinkers, compassionate leaders, 
              and lifelong learners who will shape a better tomorrow. We envision a world where every student 
              from {schoolName} becomes a catalyst for positive change in their communities and beyond.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block bg-yellow-100 p-6 rounded-full mb-6">
              <Target className="w-16 h-16 text-yellow-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To provide a holistic education that combines academic excellence with character development, 
              critical thinking, and practical skills. We are committed to creating an inclusive, inspiring 
              environment where every student discovers their potential and develops the confidence to pursue 
              their dreams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Strategic Goals</h2>
            <p className="text-xl text-gray-600">Our roadmap to excellence</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-12 h-12" />,
                title: "Academic Excellence",
                description: "Maintain the highest standards of teaching and learning through innovative curriculum and world-class faculty.",
                color: "blue"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Character Development",
                description: "Foster values of integrity, empathy, and social responsibility in every student.",
                color: "green"
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                title: "Innovation & Technology",
                description: "Integrate cutting-edge technology and modern teaching methods to prepare students for the future.",
                color: "purple"
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Global Perspective",
                description: "Develop globally aware citizens who understand and appreciate diverse cultures and viewpoints.",
                color: "indigo"
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Holistic Development",
                description: "Balance academics with sports, arts, and extracurricular activities for well-rounded growth.",
                color: "red"
              },
              {
                icon: <Eye className="w-12 h-12" />,
                title: "Community Engagement",
                description: "Build strong partnerships with parents, alumni, and the community to enhance learning experiences.",
                color: "yellow"
              }
            ].map((goal, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`text-${goal.color}-600 mb-4`}>{goal.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Rocket className="w-20 h-20 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Looking Ahead</h2>
            <p className="text-xl leading-relaxed text-blue-100 mb-8">
              As we move forward, we remain committed to adapting and evolving with the changing educational 
              landscape. Our focus on innovation, quality, and student success will continue to guide us as we 
              prepare the next generation of leaders, thinkers, and change-makers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
                Join Our Journey
              </button>
              <button className="bg-white/10 hover:bg-white/20 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}