 "use client"

import { useState } from "react"
import { motion } from "framer-motion"

const HairStyling = () => {
  const [expandedService, setExpandedService] = useState(null)

  const hairServices = [
    {
      name: "Hair Cut & Style",
      image: "/placeholder.svg?height=300&width=400",
      price: "400 ETB",
      duration: "60 minutes",
      description: "Professional haircut with styling for all hair types.",
      fullDescription:
        "Our signature haircut and styling service includes consultation, shampooing, precision cutting tailored to your face shape and lifestyle, blow-drying, and styling with professional products. Our experienced stylists work with all hair types and textures to create the perfect look for you.",
    },
    {
      name: "Hair Coloring",
      image: "/placeholder.svg?height=300&width=400",
      price: "800-1500 ETB",
      duration: "2-3 hours",
      description: "Professional hair coloring services from subtle highlights to bold transformations.",
      fullDescription:
        "Transform your look with our professional hair coloring services. We offer everything from subtle highlights and lowlights to complete color changes and fashion colors. Includes color consultation, strand testing, professional application, and styling. Our colorists use high-quality products to ensure vibrant, long-lasting results while maintaining hair health.",
    },
    {
      name: "Highlights & Lowlights",
      image: "/placeholder.svg?height=300&width=400",
      price: "1000-1800 ETB",
      duration: "2.5-3.5 hours",
      description: "Add dimension and depth to your hair with professional highlighting techniques.",
      fullDescription:
        "Create beautiful dimension in your hair with our highlighting and lowlighting services. Using foil or balayage techniques, we strategically place lighter and darker tones to enhance your natural color and add depth. Includes consultation, color application, toning if needed, and styling. Perfect for adding subtle or dramatic dimension to your look.",
    },
    {
      name: "Balayage",
      image: "/placeholder.svg?height=300&width=400",
      price: "1200-2000 ETB",
      duration: "3-4 hours",
      description: "Hand-painted highlighting technique for natural-looking color.",
      fullDescription:
        "Achieve natural-looking, sun-kissed highlights with our balayage technique. This hand-painted method creates soft, graduated color that grows out beautifully. Includes consultation, custom color mixing, hand-painting application, toning, and styling. Perfect for those wanting low-maintenance color with maximum impact.",
    },
    {
      name: "Hair Treatment",
      image: "/placeholder.svg?height=300&width=400",
      price: "500 ETB",
      duration: "45 minutes",
      description: "Deep conditioning and repair treatments for damaged hair.",
      fullDescription:
        "Restore your hair's health and shine with our intensive treatment services. Includes hair analysis, deep cleansing shampoo, customized treatment mask, scalp massage, and protective styling products. Treatments address various concerns including dryness, damage, frizz, and lack of shine. Regular treatments help maintain healthy, beautiful hair.",
    },
    {
      name: "Keratin Treatment",
      image: "/placeholder.svg?height=300&width=400",
      price: "1500 ETB",
      duration: "2-3 hours",
      description: "Smoothing treatment to reduce frizz and add shine.",
      fullDescription:
        "Transform frizzy, unmanageable hair into smooth, shiny locks with our keratin treatment. This semi-permanent treatment reduces frizz, cuts drying time, and adds incredible shine. Includes deep cleansing, keratin application, blow-drying, and flat ironing. Results last 3-4 months with proper care. Perfect for those wanting smoother, more manageable hair.",
    },
    {
      name: "Blowout & Style",
      image: "/placeholder.svg?height=300&width=400",
      price: "300 ETB",
      duration: "45 minutes",
      description: "Professional blowout for smooth, voluminous hair.",
      fullDescription:
        "Get salon-perfect hair with our professional blowout service. Includes shampooing, conditioning, heat protectant application, and expert blow-drying with round brush techniques for volume and smoothness. Finished with styling products for long-lasting results. Perfect for special occasions or when you want to look your best.",
    },
    {
      name: "Updo & Special Occasion",
      image: "/placeholder.svg?height=300&width=400",
      price: "600-1000 ETB",
      duration: "60-90 minutes",
      description: "Elegant updos and special occasion hairstyles.",
      fullDescription:
        "Look stunning for your special event with our updo and special occasion styling services. From elegant chignons to romantic braided styles, we create beautiful looks for weddings, proms, parties, and other special events. Includes consultation, hair preparation, styling, and finishing with long-lasting products. Trial runs available for weddings.",
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
            Hair Styling Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Transform your look with our professional hair styling services
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hairServices.map((service, index) => (
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

export default HairStyling
