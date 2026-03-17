'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Email send failed:', error);
      alert('Failed to send message. Try again.');
    }

    setLoading(false);
  };

  const schoolEmail = process.env.NEXT_PUBLIC_SCHOOL_EMAIL || 'info@excellenceacademy.edu';
  const schoolPhone = process.env.NEXT_PUBLIC_SCHOOL_PHONE || '+1 (555) 123-4567';
  const schoolAddress = process.env.NEXT_PUBLIC_SCHOOL_ADDRESS || '123 Education Street, Knowledge City, ST 12345';

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1606636660801-c61b8e97a1dc"
            alt="Contact"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">We'd love to hear from you</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">

          {/* INFO */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Get In Touch</h2>

            {[{
              icon: <Mail className="w-6 h-6" />,
              title: 'Email',
              content: schoolEmail
            }, {
              icon: <Phone className="w-6 h-6" />,
              title: 'Phone',
              content: schoolPhone
            }, {
              icon: <MapPin className="w-6 h-6" />,
              title: 'Address',
              content: schoolAddress
            }, {
              icon: <Clock className="w-6 h-6" />,
              title: 'Office Hours',
              content: 'Mon - Fri : 8AM - 4PM'
            }].map((item, i) => (
              <div key={i} className="flex gap-4 p-4">
                <div className="bg-blue-600 text-white p-3 rounded-lg">{item.icon}</div>
                <div>
                  <p className="font-semibold text-blue-900">{item.title}</p>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FORM */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Send Message</h3>

            {submitted ? (
              <p className="text-green-600 font-semibold text-center">Message sent successfully!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
                <Textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Message" required />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0156433689485!2d80.0548491!3d13.0346757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528bd807175b49%3A0xa709560c8a31ad4e!2sKalaimagal%20Nursery%20and%20Primary%20School!5e0!3m2!1sen!2sin!4v1771302581797!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
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
                  <span className="text-yellow-300 font-bold text-sm">616</span>
                </div>

                <p className="text-2xl md:text-3xl leading-relaxed font-medium text-white mb-2 relative z-10" style={{ fontFamily: '"Noto Serif Tamil", "Latha", serif' }}>
                  முயற்சி திருவினை ஆக்கும் முயற்றின்மை
                </p>
                <p className="text-2xl md:text-3xl leading-relaxed font-medium text-white mb-8 relative z-10" style={{ fontFamily: '"Noto Serif Tamil", "Latha", serif' }}>
                  இன்மை புகுத்தி விடும்
                </p>

                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-12 bg-yellow-500/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <div className="h-px w-12 bg-yellow-500/40" />
                </div>

                <p className="text-blue-200 text-base md:text-lg italic relative z-10">
                  "Perseverance creates prosperity; its absence invites poverty."
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