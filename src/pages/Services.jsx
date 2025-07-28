"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Services = () => {
  const services = [
    {
      name: "Massages",
      description: "Relaxing and therapeutic massage treatments",
      image: "/placeholder.svg?height=300&width=400",
      link: "/services/massages",
    },
    {
      name: "Nail Care",
      description: "Professional manicure, pedicure, and nail art",
      image: "/placeholder.svg?height=300&width=400",
      link: "/services/nails",
    },
    {
      name: "Facial Treatments",
      description: "Rejuvenating facial treatments for all skin types",
      image: "/placeholder.svg?height=300&width=400",
      link: "/services/facial",
    },
    {
      name: "Barber Services",
      description: "Professional haircuts and grooming for men",
      image: "/placeholder.svg?height=300&width=400",
      link: "/services/barber",
    },
    {
      name: "Hair Styling",
      description: "Creative hair styling and coloring services",
      image: "/placeholder.svg?height=300&width=400",
      link: "/services/hair-styling",
    },
    {
      name: "Eyelashes",
      description: "Eyelash extensions and enhancement treatments",
      image: "/placeholder.svg?height=300&width=400",
      link: "/services/eyelashes",
    },
    {
      name: "Eyebrows",
      description: "Eyebrow shaping, threading, and microblading",
      image: "/placeholder.svg?height=300&width=400",
      link: "/services/eyebrows",
    },
    {
      name: "Waxing",
      description: "Professional waxing services for smooth skin",
      image: "/placeholder.svg?height=300&width=400",
      link: "/services/waxing",
    },
  ]

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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Discover our comprehensive range of beauty and wellness services
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              >
                <Link to={service.link}>
                  <div className="relative">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#023e8a] mb-3">{service.name}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
