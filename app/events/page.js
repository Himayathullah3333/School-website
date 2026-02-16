'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';

// Sample gallery data (will be replaced with database data)
const sampleGallery = [
  {
    id: '1',
    title: 'Sports Day 2024',
    description: 'Annual sports day celebration with various athletic competitions',
    imageUrl: 'https://images.unsplash.com/photo-1703711096750-6e0d08d25626?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwzfHxzY2hvb2wlMjBldmVudHN8ZW58MHx8fHwxNzcxMjIyNjExfDA&ixlib=rb-4.1.0&q=85',
    date: '2024-03-15',
    location: 'School Grounds'
  },
  {
    id: '2',
    title: 'Annual Day Celebration',
    description: 'Students celebrating achievements and showcasing talents',
    imageUrl: 'https://images.unsplash.com/photo-1677676462285-537565c77f0a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBldmVudHN8ZW58MHx8fHwxNzcxMjIyNjExfDA&ixlib=rb-4.1.0&q=85',
    date: '2024-02-20',
    location: 'Auditorium'
  },
  {
    id: '3',
    title: 'Cultural Festival',
    description: 'Students expressing love and unity through cultural activities',
    imageUrl: 'https://images.unsplash.com/photo-1759675934052-1d82517c76c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHw0fHxzdHVkZW50cyUyMGFjdGl2aXRpZXN8ZW58MHx8fHwxNzcxMjIyNjE1fDA&ixlib=rb-4.1.0&q=85',
    date: '2024-01-10',
    location: 'School Hall'
  },
  {
    id: '4',
    title: 'Art & Craft Workshop',
    description: 'Interactive art session with students and teachers',
    imageUrl: 'https://images.unsplash.com/photo-1770096679844-57ca92c2b64b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwzfHxzdHVkZW50cyUyMGFjdGl2aXRpZXN8ZW58MHx8fHwxNzcxMjIyNjE1fDA&ixlib=rb-4.1.0&q=85',
    date: '2024-01-05',
    location: 'Art Room'
  },
  {
    id: '5',
    title: 'Football Championship',
    description: 'Inter-school football tournament on our sports grounds',
    imageUrl: 'https://images.unsplash.com/photo-1696319179104-d85903b82048?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwyfHxzdHVkZW50cyUyMGFjdGl2aXRpZXN8ZW58MHx8fHwxNzcxMjIyNjE1fDA&ixlib=rb-4.1.0&q=85',
    date: '2023-12-15',
    location: 'Football Field'
  },
  {
    id: '6',
    title: 'School Excursion',
    description: 'Educational field trip and outdoor learning experience',
    imageUrl: 'https://images.unsplash.com/photo-1520631380-e7732afe3929?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwyfHxzY2hvb2wlMjBldmVudHN8ZW58MHx8fHwxNzcxMjIyNjExfDA&ixlib=rb-4.1.0&q=85',
    date: '2023-11-20',
    location: 'Various Locations'
  }
];

export default function EventsPage() {
  const [gallery, setGallery] = useState(sampleGallery);
  const [loading, setLoading] = useState(false);

  // Uncomment when database is ready
  // useEffect(() => {
  //   fetchGallery();
  // }, []);

  // const fetchGallery = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch('/api/gallery');
  //     const data = await response.json();
  //     if (data.success) {
  //       setGallery(data.gallery);
  //     }
  //   } catch (error) {
  //     console.error('Failed to fetch gallery:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634"
            alt="School Events"
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Events Gallery</h1>
            <p className="text-xl text-blue-100">Capturing moments of joy, learning, and achievement</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600">Loading gallery...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(item.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Want to Be Part of Our Story?</h2>
            <p className="text-xl mb-6 text-blue-100">Join us and create your own memorable moments</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
              Apply for Admission
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}