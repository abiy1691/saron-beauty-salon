 "use client"

import { useState } from "react"
import { motion } from "framer-motion"

const Eyelashes = () => {
  const [expandedService, setExpandedService] = useState(null)

  const eyelashServices = [
    {
      name: "Classic Eyelash Extensions",
      image: "/placeholder.svg?height=300&width=400",
      price: "800 ETB",
      duration: "90 minutes",
      description: "Natural-looking individual lash extensions for everyday elegance.",
      fullDescription:
        "Our classic eyelash extensions involve applying one extension to each natural lash for a natural, enhanced look. Perfect for those wanting longer, fuller lashes without the dramatic effect. Lasts 4-6 weeks with proper care and includes aftercare instructions. Ideal for everyday wear and those new to lash extensions.",
    },
    {
      name: "Volume Eyelash Extensions",
      image: "/placeholder.svg?height=300&width=400",
      price: "1200 ETB",
      duration: "2 hours",
      description: "Dramatic, full lashes using multiple extensions per natural lash.",
      fullDescription:
        "Volume lash extensions create a fuller, more dramatic look by applying 2-6 ultra-fine extensions to each natural lash. This technique creates incredible volume and density while remaining lightweight. Perfect for special occasions or those wanting a glamorous everyday look. Lasts 4-6 weeks with proper maintenance.",
    },
    {
      name: "Hybrid Eyelash Extensions",
      image: "/placeholder.svg?height=300&width=400",
      price: "1000 ETB",
      duration: "105 minutes",
      description: "Perfect blend of classic and volume techniques for textured fullness.",
      fullDescription:
        "Hybrid lashes combine classic and volume techniques to create a textured, full look that's not too natural or too dramatic. This technique uses both single lashes and volume fans strategically placed for dimension and fullness. Perfect for those wanting more than classic but less than full volume.",
    },
    {
      name: "Lash Lift & Tint",
      image: "/placeholder.svg?height=300&width=400",
      price: "400 ETB",
      duration: "60 minutes",
      description: "Enhance your natural lashes with lifting and tinting treatment.",
      fullDescription:
        "Lash lift and tint enhances your natural lashes by lifting them from the root and adding color. The lift creates the appearance of longer, more curled lashes, while tinting darkens them for definition. Results last 6-8 weeks and require no daily maintenance. Perfect for those wanting natural enhancement without extensions.",
    },
    {
      name: "Lash Fill (Classic)",
      image: "/placeholder.svg?height=300&width=400",
      price: "500 ETB",
      duration: "60 minutes",
      description: "Maintenance service to refresh and fill in classic lash extensions.",
      fullDescription:
        "Regular fill appointments maintain your classic lash extensions by replacing lashes that have naturally shed and adding new ones where needed. Recommended every 2-3 weeks to keep lashes looking full and fresh. Includes cleaning, removal of outgrown lashes, and application of new extensions.",
    },
    {
      name: "Lash Fill (Volume)",
      image: "/placeholder.svg?height=300&width=400",
      price: "700 ETB",
      duration: "75 minutes",
      description: "Maintenance service for volume lash extensions.",
      fullDescription:
        "Volume lash fill appointments maintain the fullness and drama of your volume extensions. Includes thorough cleaning, removal of outgrown extensions, and application of new volume fans. Recommended every 2-3 weeks for optimal appearance. More time-intensive than classic fills due to the detailed volume technique.",
    },
    {
      name: "Lash Removal",
      image: "/placeholder.svg?height=300&width=400",
      price: "200 ETB",
      duration: "30 minutes",
      description: "Safe, professional removal of eyelash extensions.",
      fullDescription:
        "Professional lash extension removal using safe, gentle techniques and products. Never attempt to remove extensions yourself as this can damage your natural lashes. Our removal process dissolves the adhesive safely while protecting your natural lashes. Includes conditioning treatment for lash health.",
    },
    {
      name: "Lash Consultation",
      image: "/placeholder.svg?height=300&width=400",
      price: "Free",
      duration: "15 minutes",
      description: "Complimentary consultation to determine the best lash service for you.",
      fullDescription:
        "Our complimentary lash consultation helps determine the best lash service for your eye shape, lifestyle, and desired look. Includes assessment of natural lashes, discussion of options, patch testing if needed, and customized recommendations. Perfect for first-time clients or those considering a change in lash style.",
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
            Eyelash Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Enhance your natural beauty with our professional eyelash services
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eyelashServices.map((service, index) => (
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

export default Eyelashes
