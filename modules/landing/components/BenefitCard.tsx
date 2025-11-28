import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <div className="w-14 h-14 rounded-xl bg-[#00C26A]/10 flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-[#00C26A]" />
      </div>
      <h3 className="mb-3">{title}</h3>
      <p className="text-[#6B7280]">{description}</p>
    </div>
  );
}
