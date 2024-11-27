import { FC } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { Plus } from 'lucide-react'

const faqs = [
  {
    question: "How do I get a Referral Code?",
    answer: "To get a Referral Code, log into your account and navigate to the 'Referrals' section. There, you'll find your unique code that you can share with others.",
  },
  {
    question: "Do I get rewarded in tokens or ETH when I refer buyers?",
    answer: "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
  },
  {
    question: "How do I get a Referral Code?",
    answer: "You can get a Referral Code by signing up for an account on our platform. Once registered, visit your profile settings to find your unique Referral Code.",
  },
]

export const FaqSection: FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A1F1C] to-[#0A0B1F] relative overflow-hidden">
      <div className="absolute inset-0">
       
        <svg width="0" height="0">
          <defs>
            <pattern id="grid-pattern" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
            </pattern>
          </defs>
        </svg>
      </div>
      
      <div className="container px-4 max-w-4xl mx-auto relative z-10">
        <div className="bg-[#061724]/80 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10 shadow-2xl">
          <h2 className="text-4xl md:text-3xl font-machina  font-bold mb-12 text-yellow-500 flex items-center justify-center">
            FAQs
           
          </h2>
          
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-none bg-[#0A0B1F]/50 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/5 transition-colors">
                    <span className="text-lg font-normal">{faq.question}</span>
                    
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-400">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1F] via-transparent to-transparent pointer-events-none" />
    </section>
  )
}

