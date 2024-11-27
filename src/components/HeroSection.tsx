import { FC } from 'react'
import { Button } from './ui/button'
import { Sphere } from './Sphere'
import { Orbits } from './Orbits'

export const HeroSection: FC = () => {
  return (
    <section className="relative min-h-screen pt-20 md:pt-80 overflow-hidden font-machina bg-[url('/public/background.png')] flex flex-col justify-center items-center md:block">
      <Orbits />
      
      {/* Main sphere - hidden on mobile */}
      <div className="absolute top-64 right-0 w-72 h-72 lg:w-96 lg:h-96 hidden md:block">
        <Sphere className="w-full h-full" />
      </div>

      <div className="container relative z-20 mx-auto px-10 pt-50 flex flex-col items-center md:items-start">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-machina font-bold mb-6">
            Trusted Multi-Chain
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-yellow-500">DEX</span>
              <span className="text-white">Platform</span>
            </div>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <Button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-200 text-black hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-500 transition-all duration-300 px-6 py-6">
              Connect Wallet
            </Button>
            <Button variant="outline" className=" border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 transition-colors px-6 py-6 ">
              Trade Crypto
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

