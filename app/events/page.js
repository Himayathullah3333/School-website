'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';
import { supabase } from '@/lib/supabase';

// Images grouped per event card
const EVENT_IMAGES = {
  worldrec: [
    '/worldrec/wr1.jpeg',
    '/worldrec/wr2.jpeg',
  ],
  sportsday: [
    '/sportsday/sp1.jpeg',
    '/sportsday/sp2.jpeg',
    '/sportsday/sp3.jpeg',
    '/sportsday/sp4.jpeg',
  ],
  annualday: [
    '/annualday/an1.jpeg',
    '/annualday/an2.jpeg',
    '/annualday/an3.jpeg',
    '/annualday/an4.jpeg',
  ],
};

function SlideshowImage(props) {
  const { images } = props;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-64 overflow-hidden">
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      ))}
      {/* dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function EventsPage() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('event_date', { ascending: false });

      if (error) console.error(error);
      else setGallery(data);
    } catch (error) {
      console.error('Failed to fetch events:', error);
    } finally {
      setLoading(false);
    }
  };

  // Map each supabase event to its local image set by index (first 3 events)
  const imageKeys = ['worldrec', 'sportsday', 'annualday'];

  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center">
        <div className="absolute inset-0 opacity-20">
          <Image src='/images/campus2.jpeg' alt="School Events" fill className="object-cover" />
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

      {/* EVENTS GRID */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600">Loading events...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallery.slice(0, 3).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Auto-cycling slideshow image */}
                  <SlideshowImage images={EVENT_IMAGES[imageKeys[index]]} />

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(item.event_date).toLocaleDateString('en-US', {
                          year: 'numeric', month: 'long', day: 'numeric'
                        })}
                      </div>
                      {item.location && (
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {item.location}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
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
                  <span className="text-yellow-300 font-bold text-sm">69</span>
                </div>

                <p className="text-2xl md:text-3xl leading-relaxed font-medium text-white mb-2 relative z-10" style={{ fontFamily: '"Noto Serif Tamil", "Latha", serif' }}>
                  ஈன்ற பொழுதின் பெரிதுவக்கும் தன்மகனைச்
                </p>
                <p className="text-2xl md:text-3xl leading-relaxed font-medium text-white mb-8 relative z-10" style={{ fontFamily: '"Noto Serif Tamil", "Latha", serif' }}>
                  சான்றோன் எனக்கேட்ட தாய்
                </p>

                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-12 bg-yellow-500/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <div className="h-px w-12 bg-yellow-500/40" />
                </div>

                <p className="text-blue-200 text-base md:text-lg italic relative z-10">
                  "A mother rejoices more at hearing her son called a man of virtue than at the joy of his birth."
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