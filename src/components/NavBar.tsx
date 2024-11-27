import { FC, useState } from 'react'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'

export const NavBar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? 'unset' : 'hidden'
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 font-title font-extrabold">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <img src="/moon-icon.png" alt="MoonEX Logo" className="w-20 h-20" />
            <img className="w-44 h-11 pt-3" src="/moonex.png" alt="" />
          </div>

          <div className="hidden md:flex items-center space-x-20 text-lg font-semibold">
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">About Us</a>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">Roadmap</a>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">FAQs</a>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">Contact Us</a>
          </div>

          <div className="hidden md:block">
          <Button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-200 text-black hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-500 transition-all duration-300 px-6 py-6 font-extrabold">
              Connect Wallet
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-[#0A0B1F] shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col h-full justify-between p-4">
          <div className="space-y-4 mt-8">
            <a href="#" className="block text-white hover:text-yellow-500 transition-colors">Home</a>
            <a href="#" className="block text-white hover:text-yellow-500 transition-colors">About Us</a>
            <a href="#" className="block text-white hover:text-yellow-500 transition-colors">Roadmap</a>
            <a href="#" className="block text-white hover:text-yellow-500 transition-colors">FAQs</a>
            <a href="#" className="block text-white hover:text-yellow-500 transition-colors">Contact Us</a>
          </div>
          <div className="mb-8">
            <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400 transition-colors">
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  )
}

