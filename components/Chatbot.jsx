'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const quickQuestions = [
  { id: 1, question: 'What are the school timings?', answer: 'Our school timings are Monday to Friday, 8:00 AM to 3:00 PM. We also offer extended care from 7:00 AM to 6:00 PM.' },
  { id: 2, question: 'How do I apply for admission?', answer: 'You can apply for admission through our online portal. Click the "Register Now" button on our homepage to start the application process. Our admissions team will guide you through each step.' },
  { id: 3, question: 'What is the fee structure?', answer: 'Our fee structure varies by grade level. Please contact our admissions office at ' + (process.env.NEXT_PUBLIC_SCHOOL_EMAIL || 'info@excellenceacademy.edu') + ' or call ' + (process.env.NEXT_PUBLIC_SCHOOL_PHONE || '+1 (555) 123-4567') + ' for detailed information.' },
  { id: 4, question: 'What extracurricular activities do you offer?', answer: 'We offer a wide range of activities including sports (basketball, soccer, swimming), arts (music, drama, painting), technology clubs (robotics, coding), and various academic clubs.' },
  { id: 5, question: 'What is the student-teacher ratio?', answer: 'We maintain a low student-teacher ratio of 15:1 to ensure personalized attention and quality education for every student.' },
  { id: 6, question: 'Do you provide transportation?', answer: 'Yes, we provide safe and reliable bus transportation covering major areas of the city. Routes and schedules can be obtained from the school office.' },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (question) => {
    const userMessage = { type: 'user', text: question.question };
    const botMessage = { type: 'bot', text: question.answer };
    
    setMessages([...messages, userMessage, botMessage]);
    setSelectedQuestion(question.id);

    // Reset selection after a short delay
    setTimeout(() => setSelectedQuestion(null), 1000);
  };

  const handleReset = () => {
    setMessages([]);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl z-50 transition-colors"
            aria-label="Open chatbot"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200"
            style={{ height: '600px', maxHeight: 'calc(100vh - 3rem)' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">School Assistant</h3>
                  <p className="text-xs text-blue-100">Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Close chatbot"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4 bg-gray-50">
              {messages.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <MessageCircle className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="font-medium">Welcome! How can I help you today?</p>
                  <p className="text-sm mt-1">Select a question below to get started.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${
                        msg.type === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                          msg.type === 'user'
                            ? 'bg-blue-600 text-white rounded-br-none'
                            : 'bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-200'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </ScrollArea>

            {/* Quick Questions */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <p className="text-xs font-semibold text-gray-600 mb-3">Quick Questions:</p>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {quickQuestions.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleQuestionClick(q)}
                    className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors border ${
                      selectedQuestion === q.id
                        ? 'bg-blue-100 border-blue-300 text-blue-700'
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {q.question}
                  </button>
                ))}
              </div>
              {messages.length > 0 && (
                <button
                  onClick={handleReset}
                  className="w-full mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Start New Conversation
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}