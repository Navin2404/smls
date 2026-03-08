import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}