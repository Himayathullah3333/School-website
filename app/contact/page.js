'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (can connect to API later)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const schoolEmail = process.env.NEXT_PUBLIC_SCHOOL_EMAIL || 'info@excellenceacademy.edu';
  const schoolPhone = process.env.NEXT_PUBLIC_SCHOOL_PHONE || '+1 (555) 123-4567';
  const schoolAddress = process.env.NEXT_PUBLIC_SCHOOL_ADDRESS || '123 Education Street, Knowledge City, ST 12345';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1606636660801-c61b8e97a1dc"
            alt="Contact Us"
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100">We'd love to hear from you</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Get In Touch</h2>
              <p className="text-gray-700 text-lg mb-8">
                Have questions about admissions, programs, or campus life? Our team is here to help!
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-6 h-6" />,
                    title: 'Email',
                    content: schoolEmail,
                    link: `mailto:${schoolEmail}`
                  },
                  {
                    icon: <Phone className="w-6 h-6" />,
                    title: 'Phone',
                    content: schoolPhone,
                    link: `tel:${schoolPhone.replace(/\s+/g, '')}`
                  },
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    title: 'Address',
                    content: schoolAddress,
                    link: null
                  },
                  {
                    icon: <Clock className="w-6 h-6" />,
                    title: 'Office Hours',
                    content: 'Monday - Friday: 8:00 AM - 4:00 PM',
                    link: null
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="bg-blue-600 text-white p-3 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} className="text-gray-700 hover:text-blue-600 transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-700">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Send us a Message</h3>
              
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
                    <p className="font-semibold">Thank you for contacting us!</p>
                    <p className="text-sm mt-2">We'll get back to you soon.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                      rows={5}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-6 text-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-100 rounded-2xl overflow-hidden shadow-lg"
            style={{ height: '400px' }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <p className="text-blue-900 font-semibold text-lg">Map Integration</p>
                <p className="text-blue-700 text-sm mt-2">Add Google Maps embed here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}