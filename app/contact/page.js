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
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Email send failed:', error);
      alert('Failed to send message. Try again.');
    }

    setLoading(false);
  };

  const schoolEmail =
    process.env.NEXT_PUBLIC_SCHOOL_EMAIL || 'info@excellenceacademy.edu';
  const schoolPhone =
    process.env.NEXT_PUBLIC_SCHOOL_PHONE || '+1 (555) 123-4567';
  const schoolAddress =
    process.env.NEXT_PUBLIC_SCHOOL_ADDRESS ||
    '123 Education Street, Knowledge City, ST 12345';

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
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">

          {/* INFO */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-8">
              Get In Touch
            </h2>

            {[{
              icon:<Mail className="w-6 h-6"/>,
              title:'Email',
              content:schoolEmail
            },{
              icon:<Phone className="w-6 h-6"/>,
              title:'Phone',
              content:schoolPhone
            },{
              icon:<MapPin className="w-6 h-6"/>,
              title:'Address',
              content:schoolAddress
            },{
              icon:<Clock className="w-6 h-6"/>,
              title:'Office Hours',
              content:'Mon - Fri : 8AM - 4PM'
            }].map((item,i)=>(
              <div key={i} className="flex gap-4 p-4">
                <div className="bg-blue-600 text-white p-3 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-blue-900">{item.title}</p>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FORM */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Send Message
            </h3>

            {submitted ? (
              <p className="text-green-600 font-semibold text-center">
                Message sent successfully!
              </p>
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

    </div>
  );
}
