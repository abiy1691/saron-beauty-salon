 "use client"

import { useState } from "react"
import { motion } from "framer-motion"

const Waxing = () => {
  const [expandedService, setExpandedService] = useState(null)

  const waxingServices = [
    {
      name: "Full Leg Waxing",
      image: "/placeholder.svg?height=300&width=400",
      price: "600 ETB",
      duration: "60 minutes",
      description: "Complete hair removal from toes to bikini line for smooth, hair-free legs.",
      fullDescription:
        "Our full leg waxing service removes hair from your toes all the way up to the bikini line, leaving your legs completely smooth and hair-free. We use high-quality wax that's gentle on skin while effectively removing hair from the root. Results last 4-6 weeks. Includes pre-wax preparation and post-wax soothing treatment.",
    },
    {
      name: "Half Leg Waxing",
      image: "/placeholder.svg?height=300&width=400",
      price: "350 ETB",
      duration: "30 minutes",
      description: "Hair removal from knees down to toes for smooth lower legs.",
      fullDescription:
        "Half leg waxing focuses on the lower legs from the knees down to the toes, including the feet if desired. Perfect for those who prefer to maintain upper leg hair or as a maintenance service between full leg waxing appointments. Uses gentle, effective wax for long-lasting smoothness lasting 4-6 weeks.",
    },
    {
      name: "Bikini Waxing",
      image: "/placeholder.svg?height=300&width=400",
      price: "400 ETB",
      duration: "30 minutes",
      description: "Hair removal from bikini area for a clean, comfortable feel.",
      fullDescription:
        "Bikini waxing removes hair from the bikini line area that would be visible when wearing a bikini or underwear. This service focuses on the sides and top of the bikini area while leaving the rest natural. Perfect for beach season or everyday comfort. Performed by experienced professionals in a private, comfortable setting.",
    },
    {
      name: "Brazilian Waxing",
      image: "/placeholder.svg?height=300&width=400",
      price: "700 ETB",
      duration: "45 minutes",
      description: "Complete hair removal from the entire intimate area.",
      fullDescription:
        "Brazilian waxing removes all hair from the intimate area, front to back, leaving you completely smooth. This comprehensive service is performed by experienced, professional estheticians in a private, hygienic environment. Results last 4-6 weeks. Includes pre-wax preparation and post-wax care to minimize discomfort and irritation.",
    },
    {
      name: "Underarm Waxing",
      image: "/placeholder.svg?height=300&width=400",
      price: "200 ETB",
      duration: "15 minutes",
      description: "Quick and effective underarm hair removal.",
      fullDescription:
        "Underarm waxing provides quick, effective hair removal from both underarms. This service is faster and longer-lasting than shaving, with results lasting 4-6 weeks. We use gentle wax suitable for sensitive underarm skin and include post-wax treatment to prevent irritation and ingrown hairs.",
    },
    {
      name: "Arm Waxing",
      image: "/placeholder.svg?height=300&width=400",
      price: "300 ETB",
      duration: "30 minutes",
      description: "Hair removal from full arms for smooth, hair-free skin.",
      fullDescription:
        "Full arm waxing removes hair from your shoulders down to your fingertips, including hands if desired. Perfect for those with darker or thicker arm hair, or anyone wanting smooth arms for special occasions or everyday confidence. Results last 4-6 weeks and hair grows back finer over time with regular waxing.",
    },
    {
      name: "Facial Waxing",
      image: "/placeholder.svg?height=300&width=400",
      price: "150 ETB",
      duration: "20 minutes",
      description: "Gentle hair removal from upper lip, chin, and other facial areas.",
      fullDescription:
        "Facial waxing removes unwanted hair from areas like the upper lip, chin, cheeks, or between the eyebrows. We use specially formulated wax that's gentle on delicate facial skin while effectively removing hair. This service provides longer-lasting results than tweezing or shaving, with hair staying away for 4-6 weeks.",
    },
    {
      name: "Back Waxing",
      image: "/placeholder.svg?height=300&width=400",
      price: "500 ETB",
      duration: "45 minutes",
      description: "Complete back hair removal for smooth, confident skin.",
      fullDescription:
        "Back waxing removes hair from the entire back area, from shoulders to lower back. This service is popular with both men and women who want smooth, hair-free backs for confidence in swimwear or fitted clothing. Performed by experienced professionals using effective techniques for complete hair removal with minimal discomfort.",
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
            Waxing Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Professional hair removal services for smooth, long-lasting results
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {waxingServices.map((service, index) => (
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

export default Waxing
