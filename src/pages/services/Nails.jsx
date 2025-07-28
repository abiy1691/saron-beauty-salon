 "use client"

import { useState } from "react"
import { motion } from "framer-motion"

const Nails = () => {
  const [expandedService, setExpandedService] = useState(null)

  const nailServices = [
    {
      name: "Classic Manicure",
      image: "/placeholder.svg?height=300&width=400",
      price: "300 ETB",
      duration: "45 minutes",
      description: "Complete nail care including shaping, cuticle care, and polish application.",
      fullDescription:
        "Our classic manicure includes nail shaping, cuticle care, hand massage, and your choice of polish color. We start by removing old polish, then shape your nails to your preferred length and style. Cuticles are gently pushed back and trimmed if needed. A relaxing hand massage with moisturizing lotion follows, and we finish with base coat, two coats of your chosen color, and a protective top coat for long-lasting results.",
    },
    {
      name: "Gel Manicure",
      image: "/placeholder.svg?height=300&width=400",
      price: "450 ETB",
      duration: "60 minutes",
      description: "Long-lasting gel polish manicure that stays chip-free for weeks.",
      fullDescription:
        "Our gel manicure provides a durable, high-gloss finish that lasts up to 3 weeks without chipping. The process includes nail preparation, cuticle care, application of gel base coat, two coats of gel color, and a gel top coat. Each layer is cured under UV light for a perfect, long-lasting finish. Perfect for those with active lifestyles or special events.",
    },
    {
      name: "French Manicure",
      image: "/placeholder.svg?height=300&width=400",
      price: "400 ETB",
      duration: "50 minutes",
      description: "Classic elegant look with natural pink base and white tips.",
      fullDescription:
        "The timeless French manicure features a natural or pale pink base with crisp white tips. This classic look is perfect for any occasion and complements any outfit. Our skilled technicians create perfectly straight, even white tips that enhance the natural beauty of your nails. Includes all the benefits of our classic manicure with the sophisticated French finish.",
    },
    {
      name: "Nail Art Design",
      image: "/placeholder.svg?height=300&width=400",
      price: "500-800 ETB",
      duration: "75-90 minutes",
      description: "Creative nail art designs customized to your style and preferences.",
      fullDescription:
        "Express your personality with our custom nail art designs. From simple patterns and geometric shapes to intricate hand-painted artwork, our talented nail artists can create unique designs tailored to your style. Pricing varies based on complexity and detail level. Popular options include floral designs, abstract patterns, seasonal themes, and special occasion artwork.",
    },
    {
      name: "Classic Pedicure",
      image: "/placeholder.svg?height=300&width=400",
      price: "350 ETB",
      duration: "60 minutes",
      description: "Complete foot care treatment including exfoliation and massage.",
      fullDescription:
        "Our classic pedicure is a relaxing treatment that includes soaking your feet in warm, soapy water, nail trimming and shaping, cuticle care, callus removal, exfoliation with a pumice stone or foot file, a soothing foot and leg massage, and polish application. This treatment leaves your feet feeling soft, smooth, and beautifully groomed.",
    },
    {
      name: "Spa Pedicure",
      image: "/placeholder.svg?height=300&width=400",
      price: "500 ETB",
      duration: "75 minutes",
      description: "Luxurious pedicure with extended massage and premium treatments.",
      fullDescription:
        "Our spa pedicure is the ultimate foot pampering experience. It includes everything in our classic pedicure plus extended soaking time, sugar scrub exfoliation, a hydrating foot mask, hot towel treatment, and an extended massage using premium lotions and oils. This indulgent treatment will leave your feet feeling incredibly soft, refreshed, and rejuvenated.",
    },
    {
      name: "Gel Pedicure",
      image: "/placeholder.svg?height=300&width=400",
      price: "550 ETB",
      duration: "75 minutes",
      description: "Long-lasting gel polish pedicure for beautiful, chip-free toes.",
      fullDescription:
        "Combine the relaxation of our classic pedicure with the durability of gel polish. This treatment includes all aspects of foot care - soaking, exfoliation, massage, and grooming - finished with long-lasting gel polish that maintains its shine and color for weeks. Perfect for vacation, special events, or anyone who wants beautiful, low-maintenance toes.",
    },
    {
      name: "Paraffin Treatment",
      image: "/placeholder.svg?height=300&width=400",
      price: "200 ETB",
      duration: "20 minutes",
      description: "Moisturizing paraffin wax treatment for hands or feet.",
      fullDescription:
        "Our paraffin treatment is a deeply moisturizing add-on service that can be combined with any manicure or pedicure. Warm paraffin wax is applied to hands or feet, then wrapped in plastic and heated mitts or booties. The heat opens pores and allows deep moisturization, leaving skin incredibly soft and smooth. Especially beneficial for dry, cracked, or rough skin.",
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
            Nail Care Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Professional manicure and pedicure services for beautiful, healthy nails
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nailServices.map((service, index) => (
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

export default Nails
