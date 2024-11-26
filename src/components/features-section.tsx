import { DollarSign, Shield, Ban, Layers } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: DollarSign,
    title: "Cheapest TXs",
    description: "Exchange massive digital contracts at the cheapest possible fee in the market",
  },
  {
    icon: Shield,
    title: "CerTik",
    description: "We are Audited by CerTik CerTik is the leading security-focused ranking platform",
  },
  {
    icon: Ban,
    title: "No Contract Sells",
    description: "No contract sells to hurt the marketing wallet",
  },
  {
    icon: Layers,
    title: "CrossOne Support",
    description: "Exchange massive digital contracts at the cheapest possible fee in the market",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 ">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-12">
          Our <span className="text-yellow-500">Features</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <feature.icon className="w-10 h-10 text-yellow-500 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

