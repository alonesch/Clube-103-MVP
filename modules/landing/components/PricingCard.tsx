import { Check, Sparkles } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  badge?: string;
  savings?: string;
}

export function PricingCard({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  highlighted = false,
  ctaText,
  badge,
  savings
}: PricingCardProps) {
  return (
    <div 
      className={`relative rounded-2xl p-8 transition-all duration-300 ${
        highlighted 
          ? 'bg-white border-2 border-[#00C26A] shadow-2xl shadow-[#00C26A]/20 scale-105' 
          : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-[#00C26A] to-[#00A355] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>{badge}</span>
          </div>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className={highlighted ? 'text-[#00C26A]' : ''}>{title}</h3>
        <p className="text-[#6B7280] mt-2">{description}</p>
      </div>
      
      <div className="text-center mb-6">
        <div className="flex items-end justify-center gap-2">
          <span className="text-[#1C2635]">{price}</span>
        </div>
        <p className="text-[#6B7280] mt-1">{period}</p>
        {savings && (
          <div className="mt-2 inline-block px-3 py-1 bg-[#00C26A]/10 rounded-full">
            <span className="text-[#00C26A]">{savings}</span>
          </div>
        )}
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
              highlighted ? 'bg-[#00C26A]' : 'bg-gray-200'
            }`}>
              <Check className={`w-3 h-3 ${highlighted ? 'text-white' : 'text-gray-600'}`} />
            </div>
            <span className="text-[#3A3F47]">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button 
        className={`w-full py-4 rounded-lg transition-all transform hover:scale-105 ${
          highlighted
            ? 'bg-[#00C26A] text-white hover:bg-[#00A355] shadow-lg shadow-[#00C26A]/30'
            : 'bg-[#1C2635] text-white hover:bg-[#2a3544]'
        }`}
      >
        {ctaText}
      </button>
    </div>
  );
}
