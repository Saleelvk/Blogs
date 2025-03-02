import { ArrowRight, Clock, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import Email from '../Components/Email'

function Contact() {
  return (
    <div className="bg-gray-50 ">
      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black  mb-4">Contact Us</h1>
            <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Information */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-semibold  text-black mb-6">Get in Touch</h2>
              <p className="text-black mb-8 leading-relaxed">
                We'd love to hear from you! Whether you have a story to share, 
                want to collaborate, or just want to say hello, drop us a message.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <MapPin className="text-white" size={20} />, title: "Our Location", info: "123 Story Street, San Francisco, CA 94107" },
                  { icon: <Mail className="text-white" size={20} />, title: "Email Us", info: "hello@wanderlustblog.com" },
                  { icon: <Phone className="text-white" size={20} />, title: "Call Us", info: "+1 (555) 123-4567" },
                  { icon: <Clock className="text-white" size={20} />, title: "Office Hours", info: "Monday - Friday: 9am - 5pm PST" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-indigo-500 p-3 rounded-full flex items-center justify-center w-12 h-12 shadow-md">
                      {item.icon}
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-medium text-black">{item.title}</h3>
                      <p className="text-black">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>
              
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2" htmlFor="message">
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    rows="5"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="px-6 py-3 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors w-full flex items-center justify-center shadow-md"
                >
                  <span>Send Message</span>
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Email/>
    </div>
  )
}

export default Contact