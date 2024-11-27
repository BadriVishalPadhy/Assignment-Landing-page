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
    <section className="py-16 md:py-24 from-[#0A1F1C] to-[#0A0B1F] relative overflow-hidden bg-[url('/image2.png')]">
      <div className="container px-4">
        <h2 className="text-5xl font-bold mb-12">
          Why <span className="text-yellow-500">MoonEX</span> ?
        </h2>
        
        <div className="relative overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left text-xl md:text-3xl font-fira py-4 text-yellow-500 w-1/3">Comparison</th>
                <th className="text-center py-4 w-1/3 relative">
                  <div className="flex items-center justify-center">
                    <img src="/moon-icon.png" alt="MoonEX Logo" className="w-11 h-11 hidden md:block" />
                    <img className="w-80 h-20 pt-5" src="/moonex.png" alt="" />
                  </div>
                  <VerticalLine className="absolute right-0 top-0 h-full" />
                </th>
                <th className="text-center py-4 w-1/3 relative">
                  <div className="flex items-center justify-center gap-2 text-pink-500">
                    <img className='h-12' src="/unis.png" alt="" />
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

