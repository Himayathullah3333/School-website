import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: process.env.NEXT_PUBLIC_SCHOOL_NAME || 'Excellence Academy',
  description: 'Building Tomorrow\'s Leaders Today - A premier educational institution',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Chatbot />
        <footer className="bg-blue-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SCHOOL_NAME || 'Excellence Academy'}. All rights reserved.
            </p>
            <p className="text-xs mt-2 text-blue-200">
              {process.env.NEXT_PUBLIC_SCHOOL_ADDRESS || '123 Education Street, Knowledge City'}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}