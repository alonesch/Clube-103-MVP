import { Check } from 'lucide-react';

interface OfferItemProps {
  text: string;
}

export function OfferItem({ text }: OfferItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-6 h-6 rounded-full bg-[#00C26A] flex items-center justify-center flex-shrink-0 mt-1">
        <Check className="w-4 h-4 text-white" />
      </div>
      <p className="text-[#3A3F47]">{text}</p>
    </div>
  );
}
