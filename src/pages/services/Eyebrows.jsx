 "use client"

import { useState } from "react"
import { motion } from "framer-motion"

const Eyebrows = () => {
  const [expandedService, setExpandedService] = useState(null)

  const eyebrowServices = [
    {
      name: "Eyebrow Threading",
      image: "/placeholder.svg?height=300&width=400",
      price: "150 ETB",
      duration: "20 minutes",
      description: "Precise eyebrow shaping using traditional threading technique.",
      fullDescription:
        "Threading is an ancient hair removal technique that uses twisted cotton thread to remove unwanted hair with precision. Perfect for creating clean, defined eyebrow shapes. This method is gentle on sensitive skin and allows for very precise hair removal, making it ideal for detailed eyebrow shaping and maintenance. Our skilled technicians can create any eyebrow shape you desire, from natural to dramatic arches.",
    },
    {
      name: "Eyebrow Waxing",
      image: "/placeholder.svg?height=300&width=400",
      price: "120 ETB",
      duration: "15 minutes",
      description: "Quick and effective eyebrow shaping using professional wax.",
      fullDescription:
        "Professional eyebrow waxing provides quick, effective hair removal and shaping. Using high-quality, gentle wax specifically designed for facial hair, we remove unwanted hair and create your desired eyebrow shape. This method is faster than threading and provides longer-lasting results. The service includes pre-wax skin preparation, precise wax application, and soothing post-wax treatment to minimize irritation and redness.",
    },
    {
      name: "Eyebrow Tinting",
      image: "/placeholder.svg?height=300&width=400",
      price: "200 ETB",
      duration: "30 minutes",
      description: "Semi-permanent coloring to enhance and define eyebrows.",
      fullDescription:
        "Eyebrow tinting adds rich color and definition to your brows using professional semi-permanent dye. Perfect for those with light, sparse, or gray eyebrows, or anyone wanting more defined brows without daily makeup application. The color lasts 4-6 weeks and gradually fades naturally. We offer various shades to perfectly match your hair color and skin tone, from subtle enhancement to dramatic definition.",
    },
    {
      name: "Eyebrow Lamination",
      image: "/placeholder.svg?height=300&width=400",
      price: "400 ETB",
      duration: "45 minutes",
      description: "Creates fuller, fluffier brows by setting hairs in an upward direction.",
      fullDescription:
        "Eyebrow lamination is a revolutionary treatment that sets your brow hairs in a desired direction, creating the appearance of fuller, fluffier, more youthful-looking brows. The process involves applying a gentle lifting solution to soften the hair, brushing the hairs upward and outward, and sealing them in place with a nourishing treatment. Results last 6-8 weeks and create the trendy, feathered brow look that's perfect for all face shapes.",
    },
    {
      name: "Henna Brows",
      image: "/placeholder.svg?height=300&width=400",
      price: "300 ETB",
      duration: "45 minutes",
      description: "Natural henna tinting for fuller-looking, defined eyebrows.",
      fullDescription:
        "Henna brows use 100% natural henna dye to tint both the eyebrow hairs and the skin underneath, creating the appearance of fuller, more defined brows. This natural alternative to traditional chemical tinting is perfect for sensitive skin and provides longer-lasting results. The henna lasts up to 6 weeks on the hair and provides skin staining for 1-2 weeks, making it ideal for those with sparse brows or gaps they want to fill.",
    },
    {
      name: "Microblading Consultation",
      image: "/placeholder.svg?height=300&width=400",
      price: "Free",
      duration: "30 minutes",
      description: "Complimentary consultation for semi-permanent eyebrow tattooing.",
      fullDescription:
        "Our comprehensive microblading consultation includes a thorough assessment of your natural brows, detailed discussion of your desired shape and color, complete explanation of the microblading process and healing timeline, patch testing for allergies, and customized recommendations based on your face shape and lifestyle. We'll design the perfect brow shape for your face using professional mapping techniques and discuss all aftercare requirements. This consultation is essential for anyone considering semi-permanent brow enhancement.",
    },
    {
      name: "Brow Mapping & Design",
      image: "/placeholder.svg?height=300&width=400",
      price: "100 ETB",
      duration: "20 minutes",
      description: "Professional brow mapping to determine your perfect eyebrow shape.",
      fullDescription:
        "Brow mapping is a precise technique used to determine the most flattering eyebrow shape for your unique facial features. Using professional tools and mathematical proportions, we measure your face to map out exactly where your brows should start, where the highest point of the arch should be, and where they should end. This scientific approach ensures symmetrical, balanced brows that enhance your natural beauty. This service can be combined with any shaping service or done as a standalone consultation for future reference.",
    },
    {
      name: "Eyebrow Maintenance Package",
      image: "/placeholder.svg?height=300&width=400",
      price: "500 ETB",
      duration: "60 minutes",
      description: "Complete eyebrow service including shaping, tinting, and aftercare.",
      fullDescription:
        "Our comprehensive eyebrow maintenance package is the ultimate brow service, including professional shaping (your choice of threading or waxing), custom tinting to enhance color and definition, precise trimming of overly long hairs, brow mapping for perfect symmetry, and application of nourishing brow serum to promote healthy growth. This complete service ensures your brows look perfectly groomed and maintained for weeks. It's excellent value for complete brow care and perfect for special occasions or regular maintenance.",
    },
    {
      name: "Eyebrow Trimming",
      image: "/placeholder.svg?height=300&width=400",
      price: "80 ETB",
      duration: "10 minutes",
      description: "Professional trimming of long, unruly eyebrow hairs.",
      fullDescription:
        "Eyebrow trimming focuses on cutting overly long eyebrow hairs to create a neat, polished appearance. Using professional scissors and a fine-tooth comb, we carefully trim hairs to the appropriate length while maintaining the natural shape and fullness of your brows. This service is perfect as a quick touch-up between full shaping appointments or for those who only need length adjustment rather than complete reshaping.",
    },
    {
      name: "Eyebrow Growth Treatment",
      image: "/placeholder.svg?height=300&width=400",
      price: "250 ETB",
      duration: "30 minutes",
      description: "Specialized treatment to promote healthy eyebrow hair growth.",
      fullDescription:
        "Our eyebrow growth treatment is designed to stimulate and nourish hair follicles to promote thicker, healthier eyebrow growth. The treatment includes gentle exfoliation to remove dead skin cells, application of growth-promoting serums rich in peptides and vitamins, and a relaxing massage to improve circulation. This service is perfect for those with over-plucked brows, naturally sparse hair, or anyone wanting to achieve fuller, more luxurious eyebrows naturally. Regular treatments show best results over 6-8 weeks.",
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
            Eyebrow Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Perfect your brows with our professional eyebrow shaping and enhancement services
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eyebrowServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#023e8a] mb-2">{service.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-green-600">{service.price}</span>
                    <span className="text-gray-600 bg-gray-100 px-2 py-1 rounded-full text-sm">{service.duration}</span>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {expandedService === index ? service.fullDescription : service.description}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleDescription(index)}
                      className="text-[#023e8a] hover:text-blue-600 font-semibold text-sm transition-colors duration-200"
                    >
                      {expandedService === index ? "Read Less" : "Read More"}
                    </button>
                  </div>
                  <button
                    className="w-full mt-4 bg-[#023e8a] text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                    onClick={() => window.open("tel:+251911234567", "_self")}
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#023e8a] mb-6">Why Choose Our Eyebrow Services?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our experienced eyebrow specialists use the latest techniques and highest quality products to give you
              perfectly shaped, beautiful brows that enhance your natural features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-[#023e8a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#023e8a] mb-3">Expert Technicians</h3>
              <p className="text-gray-600">
                Our certified eyebrow specialists have years of experience and stay updated with the latest trends and
                techniques.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-[#023e8a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#023e8a] mb-3">Premium Products</h3>
              <p className="text-gray-600">
                We use only high-quality, professional-grade products that are gentle on your skin and provide
                long-lasting results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-[#023e8a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#023e8a] mb-3">Personalized Service</h3>
              <p className="text-gray-600">
                Every service is customized to your unique face shape, skin tone, and personal preferences for the most
                flattering results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Aftercare Tips Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#023e8a] mb-6">Eyebrow Aftercare Tips</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Follow these simple tips to maintain your beautiful brows and extend the life of your treatment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Avoid Water",
                description: "Keep brows dry for 24 hours after tinting or lamination treatments.",
                icon: "💧",
              },
              {
                title: "No Touching",
                description: "Avoid touching or rubbing the treated area to prevent irritation.",
                icon: "✋",
              },
              {
                title: "Use Gentle Products",
                description: "Use mild, fragrance-free cleansers around the eyebrow area.",
                icon: "🧴",
              },
              {
                title: "Regular Maintenance",
                description: "Schedule touch-ups every 4-6 weeks to maintain perfect shape.",
                icon: "📅",
              },
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-lg font-semibold text-[#023e8a] mb-3">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Eyebrows
