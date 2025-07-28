 "use client"

import { useState } from "react"
import { motion } from "framer-motion"

const Facial = () => {
  const [expandedService, setExpandedService] = useState(null)

  const facialServices = [
    {
      name: "Classic European Facial",
      image: "/placeholder.svg?height=300&width=400",
      price: "600 ETB",
      duration: "60 minutes",
      description: "Deep cleansing facial with extraction, mask, and moisturizing treatment.",
      fullDescription:
        "Our signature European facial includes thorough skin analysis, double cleansing, gentle exfoliation, steam treatment, professional extractions, customized mask application, and finishing with appropriate serums and moisturizer. This comprehensive treatment addresses various skin concerns and leaves your skin refreshed, clean, and glowing.",
    },
    {
      name: "Anti-Aging Facial",
      image: "/placeholder.svg?height=300&width=400",
      price: "800 ETB",
      duration: "75 minutes",
      description: "Advanced treatment targeting fine lines, wrinkles, and signs of aging.",
      fullDescription:
        "Our anti-aging facial combines advanced techniques and premium products to target signs of aging. Includes collagen-boosting treatments, peptide serums, facial massage to improve circulation, and specialized masks to firm and tighten the skin. Regular treatments help reduce fine lines, improve skin texture, and restore youthful radiance.",
    },
    {
      name: "Hydrating Facial",
      image: "/placeholder.svg?height=300&width=400",
      price: "650 ETB",
      duration: "60 minutes",
      description: "Intensive moisturizing treatment for dry and dehydrated skin.",
      fullDescription:
        "Perfect for dry, dehydrated, or dull skin, this facial focuses on restoring moisture balance. Features hyaluronic acid treatments, hydrating masks, gentle exfoliation, and intensive moisturizing techniques. The treatment includes a relaxing facial massage and finishes with protective serums and rich moisturizers to lock in hydration.",
    },
    {
      name: "Acne Treatment Facial",
      image: "/placeholder.svg?height=300&width=400",
      price: "700 ETB",
      duration: "75 minutes",
      description: "Specialized treatment for acne-prone and problematic skin.",
      fullDescription:
        "Designed specifically for acne-prone skin, this facial includes deep pore cleansing, salicylic acid treatment, professional extractions, antibacterial mask, and oil-control products. Our estheticians use gentle yet effective techniques to clear existing breakouts and prevent future ones while maintaining skin health and balance.",
    },
    {
      name: "Brightening Facial",
      image: "/placeholder.svg?height=300&width=400",
      price: "750 ETB",
      duration: "70 minutes",
      description: "Vitamin C treatment to brighten and even out skin tone.",
      fullDescription:
        "This illuminating facial uses vitamin C and other brightening ingredients to address hyperpigmentation, dark spots, and uneven skin tone. Includes gentle exfoliation, vitamin C serum application, brightening mask, and protective antioxidants. Regular treatments help achieve a more radiant, even complexion.",
    },
    {
      name: "Sensitive Skin Facial",
      image: "/placeholder.svg?height=300&width=400",
      price: "650 ETB",
      duration: "60 minutes",
      description: "Gentle treatment designed for sensitive and reactive skin types.",
      fullDescription:
        "Specially formulated for sensitive skin, this gentle facial uses hypoallergenic products and soothing techniques. Includes mild cleansing, calming treatments, anti-inflammatory mask, and protective moisturizers. The treatment focuses on reducing redness, irritation, and strengthening the skin barrier without causing sensitivity.",
    },
    {
      name: "Express Facial",
      image: "/placeholder.svg?height=300&width=400",
      price: "400 ETB",
      duration: "30 minutes",
      description: "Quick refreshing facial perfect for busy schedules.",
      fullDescription:
        "Our express facial is perfect for those with limited time who still want professional skincare. Includes cleansing, light exfoliation, mask application, and moisturizing. While shorter than our full facials, this treatment still provides noticeable results and leaves your skin feeling refreshed and revitalized.",
    },
    {
      name: "Men's Facial",
      image: "/placeholder.svg?height=300&width=400",
      price: "550 ETB",
      duration: "60 minutes",
      description: "Customized facial treatment designed specifically for men's skin.",
      fullDescription:
        "Tailored to address men's unique skincare needs, this facial focuses on deep cleansing, treating razor burn, reducing oiliness, and improving skin texture. Includes thorough cleansing, exfoliation, extractions if needed, soothing treatments for irritation, and appropriate moisturizing. Perfect for maintaining healthy, clear skin.",
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
            Facial Treatments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Professional skincare treatments for healthy, glowing skin
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facialServices.map((service, index) => (
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

export default Facial
