import { FC } from 'react'
import { Github, Twitter, DiscIcon as Discord } from 'lucide-react'

export const Footer: FC = () => {
  return (
    <footer className="py-8 md:py-12 ">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/placeholder.svg" alt="MoonEX Logo" className="w-8 h-8" />
            <span className="text-xl font-bold">MoonEX</span>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <a href="#" className="text-sm hover:text-primary transition-colors">About Us</a>
            <a href="#" className="text-sm hover:text-primary transition-colors">Roadmap</a>
            <a href="#" className="text-sm hover:text-primary transition-colors">FAQs</a>
            <a href="#" className="text-sm hover:text-primary transition-colors">Contact Us</a>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-yellow-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              <Discord className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

