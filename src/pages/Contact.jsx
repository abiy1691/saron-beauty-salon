 "use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#023e8a] to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Get in touch with us to book your appointment or ask any questions
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#023e8a] mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023e8a] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023e8a] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023e8a] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023e8a] focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#023e8a] text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#023e8a] mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-[#023e8a] p-3 rounded-full mr-4">
                      <FaPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+251 911 234 567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#023e8a] p-3 rounded-full mr-4">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">info@saronbeauty.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#023e8a] p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Address</h3>
                      <p className="text-gray-600">Bole Road, Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#023e8a] mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-[#023e8a] p-3 rounded-full text-white hover:bg-blue-700 transition-colors">
                    <FaFacebook className="text-xl" />
                  </a>
                  <a href="#" className="bg-[#023e8a] p-3 rounded-full text-white hover:bg-blue-700 transition-colors">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="#" className="bg-[#023e8a] p-3 rounded-full text-white hover:bg-blue-700 transition-colors">
                    <FaTwitter className="text-xl" />
                  </a>
                  <a href="#" className="bg-[#023e8a] p-3 rounded-full text-white hover:bg-blue-700 transition-colors">
                    <FaTiktok className="text-xl" />
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="text-xl font-semibold text-[#023e8a] mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h3 className="text-xl font-semibold text-[#023e8a] mb-4">Location</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-6xl text-gray-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
