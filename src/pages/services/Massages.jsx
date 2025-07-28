 "use client"

import { useState } from "react"
import { motion } from "framer-motion"

const Massages = () => {
  const [expandedService, setExpandedService] = useState(null)

  const massageServices = [
    {
      name: "Swedish Massage",
      image: "/placeholder.svg?height=300&width=400",
      price: "800 ETB",
      duration: "60 minutes",
      description:
        "A classic full-body massage that uses long, flowing strokes to promote relaxation and ease muscle tension. Perfect for stress relief and overall wellness.",
      fullDescription:
        "Our Swedish massage is the perfect introduction to massage therapy. Using a combination of long gliding strokes, kneading, and circular movements, this treatment helps to relax the entire body. It increases the level of oxygen in the blood, decreases muscle toxins, improves circulation and flexibility while easing tension. This massage is ideal for first-time massage clients and those looking for general relaxation and stress relief.",
    },
    {
      name: "Deep Tissue Massage",
      image: "/placeholder.svg?height=300&width=400",
      price: "1000 ETB",
      duration: "75 minutes",
      description: "Targets deeper layers of muscle and connective tissue to relieve chronic pain and muscle tension.",
      fullDescription:
        "Deep tissue massage focuses on realigning deeper layers of muscles and connective tissue. It is especially helpful for chronically tense and contracted areas such as stiff necks, low back tightness, and sore shoulders. Some of the same strokes are used as classic massage therapy, but the movement is slower and the pressure is deeper and concentrated on areas of tension and pain.",
    },
    {
      name: "Hot Stone Massage",
      image: "/placeholder.svg?height=300&width=400",
      price: "1200 ETB",
      duration: "90 minutes",
      description: "Heated stones are placed on specific points of the body to warm and loosen tight muscles.",
      fullDescription:
        "Hot stone massage is a specialty massage where the therapist uses smooth, heated stones as an extension of their own hands, or by placing them on the body. The heat can be both deeply relaxing and help warm up tight muscles so the therapist can work more deeply, more quickly. The stones are usually made of basalt, a type of rock that is rich in iron, so they retain heat.",
    },
    {
      name: "Aromatherapy Massage",
      image: "/placeholder.svg?height=300&width=400",
      price: "900 ETB",
      duration: "60 minutes",
      description: "Combines massage with essential oils to enhance relaxation and therapeutic benefits.",
      fullDescription:
        "Aromatherapy massage combines the therapeutic benefits of massage with the healing properties of essential oils. Different oils are chosen based on your specific needs - lavender for relaxation, eucalyptus for invigoration, or peppermint for energy. The oils are absorbed through the skin and inhaled, providing both physical and emotional benefits.",
    },
    {
      name: "Prenatal Massage",
      image: "/placeholder.svg?height=300&width=400",
      price: "850 ETB",
      duration: "60 minutes",
      description: "Specially designed massage for expecting mothers to relieve pregnancy-related discomfort.",
      fullDescription:
        "Prenatal massage is specifically designed for the needs of pregnant women and their changing bodies. It can help reduce anxiety, decrease symptoms of depression, relieve muscle aches and joint pains, and improve labor outcomes and newborn health. Our certified prenatal massage therapists use specialized techniques and positioning to ensure both mother and baby are safe and comfortable.",
    },
    {
      name: "Couples Massage",
      image: "/placeholder.svg?height=300&width=400",
      price: "1500 ETB",
      duration: "60 minutes",
      description: "Enjoy a relaxing massage experience together in our couples treatment room.",
      fullDescription:
        "Our couples massage allows you and your partner to enjoy a relaxing massage experience together in our specially designed couples treatment room. Choose from any of our massage styles and enjoy this intimate, bonding experience. Perfect for anniversaries, special occasions, or just quality time together.",
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
            Massage Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Relax and rejuvenate with our professional massage treatments
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {massageServices.map((service, index) => (
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

export default Massages
