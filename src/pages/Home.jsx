"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"
import { FaStar, FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa6"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Import images
import heroBg from "../assets/pexels-n-voitkevich-5128262.jpg"
import aboutUs from "../assets/pexels-n-voitkevich-5128262.jpg"
import massageImg from "../assets/Massages.jpg"
import nailsImg from "../assets/Nail.jpg"
import facialImg from "../assets/Facial.jpg"
import barberImg from "../assets/Barber.jpg"
import hairImg from "../assets/Hair.jpg"
import eyelashesImg from "../assets/Eyelashes.jpg"
import eyebrowsImg from "../assets/Eyebrows.jpg"
import waxingImg from "../assets/Waxing.jpg"
import testimonial1 from "../assets/testimonial1.jpg"
import testimonial2 from "../assets/testimonial2.jpg"

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [counters, setCounters] = useState({
    customers: 0,
    years: 0,
    team: 0,
  })

  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200])

  const services = [
    { name: "Massages", image: massageImg, link: "/services/massages" },
    { name: "Nail Care", image: nailsImg, link: "/services/nails" },
    { name: "Facial Treatments", image: facialImg, link: "/services/facial" },
    { name: "Barber Services", image: barberImg, link: "/services/barber" },
    { name: "Hair Styling", image: hairImg, link: "/services/hair-styling" },
    { name: "Eyelashes", image: eyelashesImg, link: "/services/eyelashes" },
    { name: "Eyebrows", image: eyebrowsImg, link: "/services/eyebrows" },
    { name: "Waxing", image: waxingImg, link: "/services/waxing" },
  ]

  const testimonials = [
    { 
      name: "Almaz Tadesse", 
      rating: 5, 
      comment: "Amazing service! The staff is so professional and friendly. I love how they make me feel beautiful.",
      image: testimonial1
    },
    { 
      name: "Hanan Mohammed", 
      rating: 5, 
      comment: "Best beauty salon in Addis Ababa. Highly recommended! The quality is outstanding.",
      image: testimonial2
    },
    { 
      name: "Sara Bekele", 
      rating: 4, 
      comment: "Great experience, will definitely come back again. The atmosphere is so relaxing.",
      image: testimonial1
    },
    { 
      name: "Meron Assefa", 
      rating: 5, 
      comment: "Love the atmosphere and quality of service. They really know how to pamper their clients.",
      image: testimonial2
    },
    { 
      name: "Bethel Tadesse", 
      rating: 5, 
      comment: "Exceptional service! The team is skilled and the results are always amazing.",
      image: testimonial1
    },
    { 
      name: "Yohannes Alemu", 
      rating: 5, 
      comment: "Professional barber services. Clean cuts and great attention to detail.",
      image: testimonial2
    },
    { 
      name: "Rahel Getachew", 
      rating: 4, 
      comment: "Beautiful nail art and excellent service. Highly recommend for special occasions.",
      image: testimonial1
    },
    { 
      name: "Dawit Kebede", 
      rating: 5, 
      comment: "Best facial treatment I've ever had. My skin feels rejuvenated and fresh.",
      image: testimonial2
    },
    { 
      name: "Martha Haile", 
      rating: 5, 
      comment: "Amazing hair styling! They transformed my look completely. Love it!",
      image: testimonial1
    },
    { 
      name: "Solomon Tekle", 
      rating: 4, 
      comment: "Great massage therapy. Very relaxing and professional service.",
      image: testimonial2
    },
  ]

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetCounts = { customers: 5000, years: 15, team: 25 }
          const duration = 2000
          const steps = 60
          const stepDuration = duration / steps

          let currentStep = 0
          const counter = setInterval(() => {
            currentStep++
            const progress = currentStep / steps

            setCounters({
              customers: Math.floor(targetCounts.customers * progress),
              years: Math.floor(targetCounts.years * progress),
              team: Math.floor(targetCounts.team * progress),
            })

            if (currentStep >= steps) {
              clearInterval(counter)
              setCounters(targetCounts)
            }
          }, stepDuration)
        }
      })
    })

    const analyticsSection = document.querySelector('.analytics-section')
    if (analyticsSection) {
      observer.observe(analyticsSection)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields")
      return
    }

    if (!formData.email.includes('@')) {
      toast.error("Please enter a valid email address")
      return
    }

    // Success message
    toast.success("Email submitted successfully!")
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="pt-16">
      <ToastContainer position="top-center" />
      
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen relative flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/hero-bg.jpg')`,
          y: backgroundY
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-extralight mb-8 text-[#3a86ff] leading-tight"
            style={{ textShadow: "3px 3px 8px rgba(0,0,0,0.7), 1px 1px 3px rgba(255,255,255,0.3)" }}
          >
            Welcome to Saron Beauty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="text-2xl md:text-3xl lg:text-4xl mb-12 max-w-4xl mx-auto text-white font-light leading-relaxed"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8), 1px 1px 2px rgba(255,255,255,0.3)" }}
          >
            Experience the ultimate in beauty and wellness at our premier salon. We offer exceptional services to make
            you look and feel your absolute best.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extralight text-center text-[#3a86ff] mb-20"
            style={{ textShadow: "3px 3px 8px rgba(0,0,0,0.4), 1px 1px 3px rgba(255,255,255,0.2)" }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(102, 155, 188, 0.3)"
                }}
                className="relative group cursor-pointer"
              >
                <Link to={service.link}>
                  <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-transparent group-hover:border-[#3a86ff] transition-all duration-500">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition-all duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                                            <h3 className="text-[#3a86ff] text-2xl font-extralight text-center group-hover:text-white transition-colors duration-500"
                         style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8), 1px 1px 2px rgba(255,255,255,0.3)" }}>
                        {service.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-extralight text-[#3a86ff] mb-8"
                style={{ textShadow: "3px 3px 8px rgba(0,0,0,0.4), 1px 1px 3px rgba(255,255,255,0.2)" }}
              >
                About Saron Beauty
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-black mb-8 leading-relaxed font-light"
                style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.3)" }}
              >
                At Saron Beauty Salon, we believe that beauty is not just about looking good, but feeling confident and
                radiant from within. Our team of skilled professionals is dedicated to providing you with exceptional
                beauty services in a relaxing and luxurious environment.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-black leading-relaxed font-light"
                style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.3)" }}
              >
                With years of experience and a passion for beauty, we offer a comprehensive range of services designed
                to enhance your natural beauty and boost your confidence. From hair styling to skincare, we're here to
                help you look and feel your best.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <img
                src={aboutUs}
                alt="About Us"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 bg-gradient-to-r from-[#3a86ff] to-[#2a76ff] analytics-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4">{counters.customers}+</div>
              <div className="text-xl font-semibold">Happy Customers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4">{counters.years}+</div>
              <div className="text-xl font-semibold">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4">{counters.team}+</div>
              <div className="text-xl font-semibold">Team Members</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extralight text-center text-[#3a86ff] mb-20"
            style={{ textShadow: "3px 3px 8px rgba(0,0,0,0.4), 1px 1px 3px rgba(255,255,255,0.2)" }}
          >
            What Our Customers Say
          </motion.h2>
          
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-[#669bbc]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-[#669bbc]">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-2xl mx-1" />
                  ))}
                </div>
                <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].comment}"
                </p>
                                 <p className="font-extralight text-2xl text-[#3a86ff]"
                    style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.6), 1px 1px 2px rgba(255,255,255,0.3)" }}>
                  - {testimonials[currentTestimonial].name}
                </p>
              </div>
            </motion.div>
            
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-[#669bbc] text-white p-3 rounded-full hover:bg-[#4a7c9a] transition-colors"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-[#669bbc] text-white p-3 rounded-full hover:bg-[#4a7c9a] transition-colors"
            >
              <FaChevronRight />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                               onClick={() => setCurrentTestimonial(index)}
               className={`w-3 h-3 rounded-full transition-colors ${
                 index === currentTestimonial ? 'bg-[#3a86ff]' : 'bg-gray-300'
               }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extralight text-center text-[#3a86ff] mb-20"
            style={{ textShadow: "3px 3px 8px rgba(0,0,0,0.4), 1px 1px 3px rgba(255,255,255,0.2)" }}
          >
            Contact Us
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-black mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-[#3a86ff] focus:border-[#3a86ff] transition-all duration-300 text-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-black mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-[#3a86ff] focus:border-[#3a86ff] transition-all duration-300 text-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-semibold text-black mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-[#3a86ff] focus:border-[#3a86ff] transition-all duration-300 text-lg resize-none"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#3a86ff] text-white py-4 px-8 rounded-xl text-xl font-black hover:bg-[#2a76ff] transition-colors duration-300 shadow-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                                  <h3 className="text-3xl font-extralight text-[#3a86ff] mb-8"
                     style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5), 1px 1px 2px rgba(255,255,255,0.2)" }}>Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                                         <FaPhone className="text-[#3a86ff] mr-6 text-2xl" />
                    <span className="text-xl text-black">+251 911 234 567</span>
                  </div>
                  <div className="flex items-center">
                                         <FaEnvelope className="text-[#3a86ff] mr-6 text-2xl" />
                    <span className="text-xl text-black">info@saronbeauty.com</span>
                  </div>
                  <div className="flex items-center">
                                         <FaMapMarkerAlt className="text-[#3a86ff] mr-6 text-2xl" />
                    <span className="text-xl text-black">22 Tigat Building, Addis Ababa, Ethiopia</span>
                  </div>
                </div>
              </div>

              <div>
                                  <h3 className="text-3xl font-extralight text-[#3a86ff] mb-8"
                     style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5), 1px 1px 2px rgba(255,255,255,0.2)" }}>Follow Us</h3>
                <div className="flex space-x-6">
                                     <motion.a 
                     href="#" 
                     whileHover={{ scale: 1.2, rotate: 5 }}
                     className="text-4xl text-[#3a86ff] hover:text-[#2a76ff] transition-colors duration-300"
                   >
                     <FaFacebook />
                   </motion.a>
                                     <motion.a 
                     href="#" 
                     whileHover={{ scale: 1.2, rotate: 5 }}
                     className="text-4xl text-[#3a86ff] hover:text-[#2a76ff] transition-colors duration-300"
                   >
                     <FaInstagram />
                   </motion.a>
                                     <motion.a 
                     href="#" 
                     whileHover={{ scale: 1.2, rotate: 5 }}
                     className="text-4xl text-[#3a86ff] hover:text-[#2a76ff] transition-colors duration-300"
                   >
                     <FaTelegram />
                   </motion.a>
                                     <motion.a 
                     href="#" 
                     whileHover={{ scale: 1.2, rotate: 5 }}
                     className="text-4xl text-[#3a86ff] hover:text-[#2a76ff] transition-colors duration-300"
                   >
                     <FaTiktok />
                   </motion.a>
                </div>
              </div>

              {/* Map */}
              <div>
                                  <h3 className="text-3xl font-extralight text-[#3a86ff] mb-8"
                     style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5), 1px 1px 2px rgba(255,255,255,0.2)" }}>Location</h3>
                                  <div className="h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#3a86ff]">
                  <MapContainer
                    center={[9.145, 38.7636]}
                    zoom={15}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[9.145, 38.7636]}>
                      <Popup>
                        <div className="text-center">
                          <h3 className="font-extralight text-[#3a86ff]"
                            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}>Saron Beauty Salon</h3>
                          <p>22 Tigat Building, Addis Ababa, Ethiopia</p>
                        </div>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
