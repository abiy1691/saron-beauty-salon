 "use client"
import { motion } from "framer-motion"

const Gallery = () => {
  const galleryImages = [
    { src: "/placeholder.svg?height=400&width=400", alt: "Hair Styling Work" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Nail Art Design" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Facial Treatment Result" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Eyebrow Shaping" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Eyelash Extensions" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Massage Therapy" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Hair Coloring" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Bridal Makeup" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Elegant Manicure" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Salon Interior" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Hair Treatment" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Professional Team" },
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
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Explore our beautiful work and see the transformations we create
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
