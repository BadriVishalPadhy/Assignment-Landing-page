import { FC } from 'react'
import { Button } from './ui/button'
import { Sphere } from './Sphere'
import { Orbits } from './Orbits'

export const HeroSection: FC = () => {
  return (
    <section  className="relative min-h-screen pt-52 overflow-hidden  font-fira bg-[url('/public/background.png')]">
      <Orbits />
      
      {/* Main sphere */}
      <div className="absolute bottom-2 right-0 w-72 h-72 md:w-96 md:h-96">
        <Sphere className="w-full h-full" />
      </div>

      <div className="container relative z-20 mx-
auto px-10 pt-50">
        <div className="">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6">
            Trusted Multi-Chain
            <div className="flex items-center gap-4">
              <span className="text-yellow-500">DEX</span>
              <span className="text-white">Platform</span>
            </div>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-yellow-500 text-black hover:bg-yellow-400 transition-colors px-8">
              Connect Wallet
            </Button>
            <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 transition-colors px-8">
              Trade Crypto
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

