 "use client"
import { motion } from "framer-motion"

const About = () => {
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
            About Saron Beauty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Discover our story, our passion, and our commitment to making you beautiful
          </motion.p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#023e8a] mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2015, Saron Beauty Salon has been a cornerstone of beauty and wellness in Addis Ababa. What
                started as a small dream has grown into one of the most trusted beauty destinations in the city.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our founder, Sarah Alemayehu, envisioned a place where every client could feel pampered, valued, and
                beautiful. With this vision, we've built a team of skilled professionals who share the same passion for
                excellence.
              </p>
              <p className="text-lg text-gray-700">
                Today, we continue to evolve and adapt to the latest beauty trends while maintaining our core values of
                quality, professionalism, and customer satisfaction.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Our Story"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-[#023e8a] mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To provide exceptional beauty services that enhance our clients' natural beauty and boost their
                confidence, while creating a welcoming and relaxing environment where everyone feels valued and
                beautiful.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-[#023e8a] mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To be the leading beauty salon in Ethiopia, known for our innovative services, exceptional customer
                care, and commitment to helping every client discover their unique beauty and express it with
                confidence.
              </p>
            </motion.div>
          </div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#023e8a] mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our talented team of beauty professionals is dedicated to providing you with the highest quality services
              and an unforgettable experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Alemayehu",
                role: "Founder & Master Stylist",
                image: "/placeholder.svg?height=300&width=300",
              },
              { name: "Meron Tadesse", role: "Senior Esthetician", image: "/placeholder.svg?height=300&width=300" },
              { name: "Hanan Mohammed", role: "Nail Specialist", image: "/placeholder.svg?height=300&width=300" },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-[#023e8a] mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
