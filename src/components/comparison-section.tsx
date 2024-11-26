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
    <section className="py-24 bg-[url('/image2.png')]">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-12">
          Why <span className="text-yellow-500">MoonEX</span> ?
        </h2>
        
        <div className="relative overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-4">Comparison</th>
                <th className="text-center py-4">
                  <div className="flex items-center justify-center ">
                  <img src="/moon-icon.png" alt="MoonEX Logo" className="w-8 h-8" />
                    <div/>
                  <img className="w-40 h-12 pt-3" src="/moonex.png" alt="" />
                  </div>
                </th>
                <th className="text-center py-4">
                  <div className="flex items-center  justify-center gap-2 text-pink-500">
                    <img className='h-10' src="/unis.png" alt="" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((point, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="py-4">{point}</td>
                  <td className="text-center py-4">
                    <Check className="inline-block text-green-500" />
                  </td>
                  <td className="text-center py-4">
                    <X className="inline-block text-red-500" />
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

