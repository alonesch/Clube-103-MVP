import { ImageWithFallback } from '@/modules/landing/components/utils/ImageWithFallback';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export function TestimonialCard({ name, role, content, imageUrl }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#00C26A] text-[#00C26A]" />
        ))}
      </div>
      <p className="text-[#3A3F47] mb-6">{content}</p>
      <div className="flex items-center gap-4">
        <ImageWithFallback
          src={imageUrl}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-[#1C2635]">{name}</p>
          <p className="text-[#6B7280]">{role}</p>
        </div>
      </div>
    </div>
  );
}
