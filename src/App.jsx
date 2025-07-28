import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"

// Service pages
import Massages from "./pages/services/Massages"
import Nails from "./pages/services/Nails"
import Facial from "./pages/services/Facial"
import Barber from "./pages/services/Barber"
import HairStyling from "./pages/services/HairStyling"
import Eyelashes from "./pages/services/Eyelashes"
import Eyebrows from "./pages/services/Eyebrows"
import Waxing from "./pages/services/Waxing"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/massages" element={<Massages />} />
          <Route path="/services/nails" element={<Nails />} />
          <Route path="/services/facial" element={<Facial />} />
          <Route path="/services/barber" element={<Barber />} />
          <Route path="/services/hair-styling" element={<HairStyling />} />
          <Route path="/services/eyelashes" element={<Eyelashes />} />
          <Route path="/services/eyebrows" element={<Eyebrows />} />
          <Route path="/services/waxing" element={<Waxing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
