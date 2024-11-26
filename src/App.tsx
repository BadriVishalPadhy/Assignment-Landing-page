import { NavBar } from './components/NavBar'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/features-section'
import { FaqSection } from './components/faq-section'
import { ComparisonSection } from './components/comparison-section'
import { Footer } from "@/components/footer"
function App() {
  return (
    <main className="min-h-screen bg-[#071624] font-fira text-white">
      <NavBar />
      <HeroSection />
      <ComparisonSection/>
      <FeaturesSection/>
      <FaqSection/>
      <Footer/>
    </main>
  )
}

export default App

