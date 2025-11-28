import { ContentCard } from './ContentCard';

const mockContents = [
  {
    id: 1,
    title: 'Aula 1 - Introdução ao Clube 103%',
    type: 'video' as const,
    driveUrl: '#',
  },
  {
    id: 2,
    title: 'Material Complementar - Guia Prático',
    type: 'pdf' as const,
    driveUrl: '#',
  },
  {
    id: 3,
    title: 'Aula 2 - Fundamentos da Metodologia',
    type: 'video' as const,
    driveUrl: '#',
  },
  {
    id: 4,
    title: 'Exercícios de Fixação - Módulo 1',
    type: 'text' as const,
    driveUrl: '#',
  },
  {
    id: 5,
    title: 'Aula 3 - Estratégias Avançadas',
    type: 'video' as const,
    driveUrl: '#',
  },
  {
    id: 6,
    title: 'E-book - Manual Completo',
    type: 'pdf' as const,
    driveUrl: '#',
  },
  {
    id: 7,
    title: 'Aula 4 - Casos de Sucesso',
    type: 'video' as const,
    driveUrl: '#',
  },
  {
    id: 8,
    title: 'Checklist - Passo a Passo',
    type: 'text' as const,
    driveUrl: '#',
  },
];

export function ContentGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {mockContents.map((content) => (
        <ContentCard
          key={content.id}
          title={content.title}
          type={content.type}
          driveUrl={content.driveUrl}
        />
      ))}
    </div>
  );
}
