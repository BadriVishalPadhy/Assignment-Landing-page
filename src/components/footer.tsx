import { FC } from 'react'
import { Github, Twitter, DiscIcon as Discord } from 'lucide-react'

export const Footer: FC = () => {
  return (
    <footer className="py-8 md:py-12 ">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center ">
            <img src="/moon-icon.png" alt="MoonEX Logo" className="w-20 h-20" />
            <img className="w-44 h-11 pt-3" src="/moonex.png" alt="" />
          </div>
          
          <div className="flex flex-wrap text-lg justify-center items-center gap-4 md:gap-24">
            <a href="#" className=" hover:text-primary transition-colors">About Us</a>
            <a href="#" className=" hover:text-primary transition-colors">Roadmap</a>
            <a href="#" className=" hover:text-primary transition-colors">FAQs</a>
            <a href="#" className=" hover:text-primary transition-colors">Contact Us</a>
          </div>
          
          <div className="flex items-center gap-6">
            
            <a href="#" className="hover:text-yellow-500 transition-colors">
              <Twitter className="w-7 h-7" />
            </a>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              <Discord className="w-7 h-7" />
            </a>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              <Github className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

