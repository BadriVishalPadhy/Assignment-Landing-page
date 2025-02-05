import { Check, X } from 'lucide-react'

const comparisonData = [
  "Point no one",
  "Point no two this",
  "Point no two this",
  "Point no two that",
  "Point no two this",
]

export function ComparisonSection() {
  return (
    <section className=" flex items-center justify-center py-16 md:py-24 from-[#0A1F1C] to-[#0A0B1F] relative overflow-hidden bg-[url('/image2.png')]">
      <div className="container px-4">
        <h2 className="text-5xl font-machina  font-bold mb-12">
          Why <span className="text-yellow-500">MoonEX</span> ?
        </h2>
        
        <div className="relative overflow-x-auto bg-[#061724]/80 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10 shadow-2xl">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left font-machina text-xl md:text-3xl  py-4 text-yellow-500 w-1/3">Comparison</th>
                <th className="text-center py-4 w-1/3 relative">
                  <div className="flex items-center  justify-center">
                    <span className='bg-gradient-to-bl from-yellow-100 to-yellow-500 bg-clip-text text-transparent leading-normal  md:hidden text-xl md:text-3xl '>Moonex</span>
                    <img src="/moon-icon.png" alt="MoonEX Logo" className="w-11 h-11 hidden md:block" />
                    <img className="w-60 md:w-80 h-20 pt-4 hidden md:block" src="/moonex.png" alt="" />
                  </div>
                  <VerticalLine className="absolute right-0 top-0 h-full" />
                </th>
                <th className="text-center py-4 w-1/3 relative">
                  <div className="flex items-center justify-center gap-2 text-pink-500 ">
                  <span className=' text-base md:hidden'>UNISWAP</span>
                    <img className='h-12 hidden md:block' src="/unis.png" alt="" />
                  </div>
                  <VerticalLine className="absolute left-0 top-0 h-full" />
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((point, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="py-4 w-1/3">{point}</td>
                  <td className="text-center py-4 w-1/3 relative">
                    <Check className="inline-block text-green-500" />
                    <VerticalLine className="absolute right-0 top-0 h-full" />
                  </td>
                  <td className="text-center py-4 w-1/3 relative">
                    <X className="inline-block text-red-500" />
                    <VerticalLine className="absolute left-0 top-0 h-full" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function VerticalLine({ className }: { className?: string }) {
  return (
    <svg 
      width="1" 
      height="527" 
      viewBox="0 0 1 527" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="1" height="527" fill="#D9D9D9" fillOpacity="0.4"/>
    </svg>
  )
}

