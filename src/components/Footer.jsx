import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa6"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const Footer = () => {
  const services = [
    { name: "Massages", link: "/services/massages" },
    { name: "Nail Care", link: "/services/nails" },
    { name: "Facial Treatments", link: "/services/facial" },
    { name: "Barber Services", link: "/services/barber" },
    { name: "Hair Styling", link: "/services/hair-styling" },
    { name: "Eyelashes", link: "/services/eyelashes" },
    { name: "Eyebrows", link: "/services/eyebrows" },
    { name: "Waxing", link: "/services/waxing" },
  ]

  const openingHours = [
    { day: "Monday", hours: "9:00 AM - 8:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 8:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 8:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 8:00 PM" },
    { day: "Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 6:00 PM" },
  ]

  return (
    <footer className="bg-[#fdf0d5] text-[#a2d2ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
                         <h3 className="text-2xl font-extralight text-[#a2d2ff] mb-6"
                style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5), 1px 1px 2px rgba(255,255,255,0.2)" }}>Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                                   <FaPhone className="text-[#a2d2ff] mr-4" />
                <span>+251 911 234 567</span>
              </div>
              <div className="flex items-center">
                                   <FaEnvelope className="text-[#a2d2ff] mr-4" />
                <span>info@saronbeauty.com</span>
              </div>
              <div className="flex items-start">
                                   <FaMapMarkerAlt className="text-[#a2d2ff] mr-4 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  22, Tigat Building, Floor 3, House No 12, Addis Ababa, Ethiopia
                </span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
                         <h3 className="text-2xl font-extralight text-[#a2d2ff] mb-6"
                style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5), 1px 1px 2px rgba(255,255,255,0.2)" }}>Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                                     <Link 
                     to={service.link}
                     className="text-gray-700 hover:text-[#a2d2ff] transition-colors duration-300"
                   >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
                         <h3 className="text-2xl font-extralight text-[#a2d2ff] mb-6"
                style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5), 1px 1px 2px rgba(255,255,255,0.2)" }}>Opening Hours</h3>
            <div className="space-y-3">
              {openingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center">
                                     <span className="text-gray-700">{schedule.day}</span>
                   <span className="text-[#a2d2ff] font-medium">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
                         <h3 className="text-2xl font-extralight text-[#a2d2ff] mb-6"
                style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5), 1px 1px 2px rgba(255,255,255,0.2)" }}>Follow Us</h3>
            <div className="flex space-x-4">
                                 <motion.a 
                     href="#" 
                     whileHover={{ scale: 1.2, rotate: 5 }}
                     className="text-3xl text-[#a2d2ff] hover:text-[#8ac4ff] transition-colors duration-300"
                   >
                     <FaFacebook />
                   </motion.a>
                                 <motion.a 
                     href="#" 
                     whileHover={{ scale: 1.2, rotate: 5 }}
                     className="text-3xl text-[#a2d2ff] hover:text-[#8ac4ff] transition-colors duration-300"
                   >
                     <FaInstagram />
                   </motion.a>
                                 <motion.a 
                     href="#" 
                     whileHover={{ scale: 1.2, rotate: 5 }}
                     className="text-3xl text-[#a2d2ff] hover:text-[#8ac4ff] transition-colors duration-300"
                   >
                     <FaTelegram />
                   </motion.a>
                                 <motion.a 
                     href="#" 
                     whileHover={{ scale: 1.2, rotate: 5 }}
                     className="text-3xl text-[#a2d2ff] hover:text-[#8ac4ff] transition-colors duration-300"
                   >
                     <FaTiktok />
                   </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
                     <h3 className="text-3xl font-extralight text-[#a2d2ff] text-center mb-8"
              style={{ textShadow: "3px 3px 8px rgba(0,0,0,0.4), 1px 1px 3px rgba(255,255,255,0.2)" }}>Find Us</h3>
                      <div className="h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#a2d2ff]">
            <MapContainer
              center={[9.145, 38.7636]}
              zoom={15}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[9.145, 38.7636]}>
                <Popup>
                  <div className="text-center">
                                             <h3 className="font-extralight text-[#a2d2ff]"
                            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}>Saron Beauty Salon</h3>
                    <p className="text-sm">22, Tigat Building, Floor 3, House No 12</p>
                    <p className="text-sm">Addis Ababa, Ethiopia</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
                     className="mt-16 pt-8 border-t border-[#a2d2ff]/30 text-center"
        >
                     <p className="text-[#a2d2ff] font-light"
              style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.3)" }}>
             © 2024 Saron Beauty Salon. All rights reserved.
           </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
