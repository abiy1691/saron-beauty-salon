 "use client"

import { useState } from "react"
import { motion } from "framer-motion"

const Barber = () => {
  const [expandedService, setExpandedService] = useState(null)

  const barberServices = [
    {
      name: "Classic Haircut",
      image: "/placeholder.svg?height=300&width=400",
      price: "200 ETB",
      duration: "30 minutes",
      description: "Traditional men's haircut with scissors and clippers.",
      fullDescription:
        "Our classic haircut service includes consultation, shampooing, precision cutting with professional scissors and clippers, styling, and finishing touches. Our experienced barbers work with you to achieve the perfect cut that suits your face shape, lifestyle, and personal style preferences.",
    },
    {
      name: "Beard Trim & Shape",
      image: "/placeholder.svg?height=300&width=400",
      price: "150 ETB",
      duration: "20 minutes",
      description: "Professional beard trimming and shaping service.",
      fullDescription:
        "Keep your beard looking sharp with our professional trimming and shaping service. Includes beard wash, precise trimming to your desired length and style, edge cleanup, mustache trimming, and finishing with beard oil or balm. Our barbers are skilled in all beard styles from corporate to creative.",
    },
    {
      name: "Hot Towel Shave",
      image: "/placeholder.svg?height=300&width=400",
      price: "250 ETB",
      duration: "45 minutes",
      description: "Traditional straight razor shave with hot towel treatment.",
      fullDescription:
        "Experience the luxury of a traditional hot towel shave. This service includes pre-shave oil application, hot towel treatment to soften hair and open pores, rich lather application, precise straight razor shaving, post-shave balm, and cold towel to close pores. A truly relaxing and indulgent grooming experience.",
    },
    {
      name: "Haircut & Beard Combo",
      image: "/placeholder.svg?height=300&width=400",
      price: "300 ETB",
      duration: "50 minutes",
      description: "Complete grooming package with haircut and beard service.",
      fullDescription:
        "Our most popular service combines a precision haircut with professional beard trimming and shaping. Includes shampoo, haircut, beard wash, trimming, styling, and finishing products. Perfect for maintaining a complete, polished look with significant time and cost savings.",
    },
    {
      name: "Fade Cut",
      image: "/placeholder.svg?height=300&width=400",
      price: "250 ETB",
      duration: "40 minutes",
      description: "Modern fade haircut with precise blending techniques.",
      fullDescription:
        "Our fade cuts feature precise clipper work with seamless blending from short to long hair. Available in low, mid, or high fade styles. Includes consultation, shampooing, expert clipper and scissor work, detailed blending, and styling. Perfect for achieving that sharp, contemporary look.",
    },
    {
      name: "Hair Wash & Style",
      image: "/placeholder.svg?height=300&width=400",
      price: "100 ETB",
      duration: "20 minutes",
      description: "Professional hair washing and styling service.",
      fullDescription:
        "Refresh your look with our professional hair washing and styling service. Includes thorough shampooing with scalp massage, conditioning treatment, blow-drying, and styling with professional products. Perfect for special occasions or when you want to look your best without a full haircut.",
    },
    {
      name: "Mustache Trim",
      image: "/placeholder.svg?height=300&width=400",
      price: "80 ETB",
      duration: "15 minutes",
      description: "Precision mustache trimming and shaping.",
      fullDescription:
        "Keep your mustache looking neat and well-groomed with our precision trimming service. Includes cleaning, trimming to desired length and style, edge definition, and finishing with mustache wax if desired. Our barbers are experienced with all mustache styles from classic to contemporary.",
    },
    {
      name: "Scalp Treatment",
      image: "/placeholder.svg?height=300&width=400",
      price: "180 ETB",
      duration: "30 minutes",
      description: "Therapeutic scalp massage and treatment.",
      fullDescription:
        "Promote healthy hair growth and relaxation with our scalp treatment service. Includes deep cleansing shampoo, therapeutic scalp massage with essential oils, moisturizing treatment, and styling. This service helps improve circulation, reduce stress, and maintain scalp health.",
    },
  ]

  const toggleDescription = (index) => {
    setExpandedService(expandedService === index ? null : index)
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
            Barber Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Professional grooming services for the modern gentleman
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {barberServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#023e8a] mb-2">{service.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-green-600">{service.price}</span>
                    <span className="text-gray-600">{service.duration}</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {expandedService === index ? service.fullDescription : service.description}
                  </p>
                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-[#023e8a] hover:text-blue-600 font-semibold mb-4"
                  >
                    {expandedService === index ? "Read Less" : "Read More"}
                  </button>
                  <button className="w-full bg-[#023e8a] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Barber
