import { Play, FileText, File, ExternalLink } from 'lucide-react';

interface ContentCardProps {
  title: string;
  type: 'video' | 'pdf' | 'text';
  driveUrl: string;
}

export function ContentCard({ title, type, driveUrl }: ContentCardProps) {
  const getTypeConfig = () => {
    switch (type) {
      case 'video':
        return {
          icon: Play,
          label: 'Vídeo',
          bgColor: 'bg-[#00C26A]/10',
          iconColor: 'text-[#00C26A]',
        };
      case 'pdf':
        return {
          icon: FileText,
          label: 'PDF',
          bgColor: 'bg-[#1C2635]/10',
          iconColor: 'text-[#1C2635]',
        };
      case 'text':
        return {
          icon: File,
          label: 'Texto',
          bgColor: 'bg-[#6B7280]/10',
          iconColor: 'text-[#6B7280]',
        };
    }
  };

  const config = getTypeConfig();
  const Icon = config.icon;

  const handleAccess = () => {
    window.open(driveUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-[#E5E5E5]">
      {/* Ícone e Tag */}
      <div className="flex items-start justify-between mb-4">
        <div className={`${config.bgColor} ${config.iconColor} p-3 rounded-xl`}>
          <Icon className="w-6 h-6" />
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs ${config.bgColor} ${config.iconColor}`}
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
        >
          {config.label}
        </span>
      </div>

      {/* Título */}
      <h3
        className="text-[#1C2635] mb-4 line-clamp-2 min-h-[3rem]"
        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
      >
        {title}
      </h3>

      {/* Botão */}
      <button
        onClick={handleAccess}
        className="w-full bg-[#00C26A] hover:bg-[#00A859] text-white py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
      >
        <span>Acessar no Drive</span>
        <ExternalLink className="w-4 h-4" />
      </button>
    </div>
  );
}
