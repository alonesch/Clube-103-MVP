"use client";

import {
  Target,
  Clock,
  BookOpen,
  TrendingUp,
  Zap,
  Users,
  Play,
  Shield,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { BenefitCard } from '@/modules/landing/components/BenefitCard';
import { TestimonialCard } from '@/modules/landing/components/TestimonialCard';
import { PricingCard } from '@/modules/landing/components/PricingCard';
import Link from 'next/link';
import { PageTransition } from '../providers/PageTransition';

export default function LandingPage() {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('planos');
    plansSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-final');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageTransition>
    <div className="min-h-screen bg-[#F8F5F2]">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C26A] to-[#00A355] flex items-center justify-center">
                <span className="text-white font-semibold">103%</span>
              </div>
              <span className="text-[#1C2635] font-medium">Clube 103%</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Link
              href="/login"
              className="text-[#6B7280] hover:text-[#1C2635] transition-colors hidden sm:block">
              Já tenho conta
            </Link>
              <Link
                href="/login"
                className="px-6 py-2.5 rounded-lg bg-[#1C2635] text-white hover:bg-[#2a3544] transition-colors">
                Entrar
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#00C26A]/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#00C26A] animate-pulse"></div>
                <span className="text-[#00C26A]">Oferta exclusiva • Plano anual</span>
              </div>

              <h1 className="mb-6">
                Transforme sua mentalidade, produtividade e resultados — com apenas R$19/mês
              </h1>

              <p className="mb-8 text-[#6B7280]">
                Desenvolva os 3 pilares essenciais para o sucesso: mindset forte, produtividade elevada e inteligência financeira. Tudo isso em uma plataforma simples e direta.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  onClick={scrollToCTA}
                  className="px-8 py-4 rounded-lg bg-[#00C26A] text-white hover:bg-[#00A355] transition-all shadow-lg shadow-[#00C26A]/20 flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  Entrar por R$19/mês
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollToPlans}
                  className="px-8 py-4 rounded-lg bg-white text-[#1C2635] hover:bg-gray-50 transition-colors border border-gray-200 flex items-center justify-center gap-2"
                >
                  Conhecer os planos
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

              <a
                href="#"
                className="text-[#6B7280] hover:text-[#1C2635] transition-colors inline-block"
              >
                Já tenho conta →
              </a>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C26A] to-[#00A355] flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3>Seu Dashboard</h3>
                      <p className="text-[#6B7280]">Acesso completo</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-[#00C26A]/10">
                    <span className="text-[#00C26A]">103%</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-[#00C26A]/5 to-transparent rounded-xl p-4 border border-[#00C26A]/10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Play className="w-5 h-5 text-[#00C26A]" />
                        <span className="text-[#1C2635]">Mentalidade Vencedora</span>
                      </div>
                      <span className="text-[#6B7280]">70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#00C26A] h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-[#F8F5F2] rounded-xl p-4 text-center">
                      <p className="text-[#00C26A] mb-1">24</p>
                      <p className="text-[#6B7280]">Aulas</p>
                    </div>
                    <div className="bg-[#F8F5F2] rounded-xl p-4 text-center">
                      <p className="text-[#00C26A] mb-1">15</p>
                      <p className="text-[#6B7280]">PDFs</p>
                    </div>
                    <div className="bg-[#F8F5F2] rounded-xl p-4 text-center">
                      <p className="text-[#00C26A] mb-1">8</p>
                      <p className="text-[#6B7280]">Textos</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-[#6B7280]">Próxima aula</span>
                      <span className="text-[#1C2635]">Produtividade 2.0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#00C26A]/10 rounded-2xl blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#1C2635]/5 rounded-2xl blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">O que torna o Clube 103% diferente?</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Uma experiência de aprendizado focada em resultados práticos e mensuráveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon={Zap}
              title="Aprendizado direto ao ponto"
              description="Sem enrolação. Conteúdo objetivo focado no que realmente gera resultados."
            />
            <BenefitCard
              icon={BookOpen}
              title="Conteúdos práticos e aplicáveis"
              description="Vídeos, PDFs e textos que você pode colocar em prática imediatamente."
            />
            <BenefitCard
              icon={Clock}
              title="Acesse no seu ritmo"
              description="Estude quando e onde quiser. Sem pressão, no seu próprio tempo."
            />
            <BenefitCard
              icon={TrendingUp}
              title="Mentalidade + Produtividade"
              description="Desenvolva a base mental e as habilidades para alcançar seus objetivos."
            />
            <BenefitCard
              icon={Target}
              title="Inteligência financeira"
              description="Aprenda a gerenciar melhor seu dinheiro e construir patrimônio."
            />
            <BenefitCard
              icon={Users}
              title="Comunidade de crescimento"
              description="Faça parte de um grupo focado em evolução constante."
            />
          </div>
        </div>
      </section>

      {/* Planos e Preços Section */}
      <section id="planos" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F5F2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Escolha o plano ideal para você</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Comece sua transformação hoje. Todos os planos incluem acesso completo ao conteúdo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="Mensal"
              price="R$ 29"
              period="por mês"
              description="Acesso por 30 dias"
              features={[
                'Todas as aulas em vídeo',
                'Materiais em PDF',
                'Textos de orientação',
                'Dashboard completo',
                'Suporte por email',
              ]}
              ctaText="Começar agora"
            />

            <PricingCard
              title="Trimestral"
              price="R$ 69"
              period="por 90 dias"
              description="Melhor custo-benefício inicial"
              features={[
                'Todas as aulas em vídeo',
                'Materiais em PDF',
                'Textos de orientação',
                'Dashboard completo',
                'Suporte por email',
                'Economia de R$ 18',
              ]}
              ctaText="Escolher trimestral"
              savings="Economize 20%"
            />

            <PricingCard
              title="Anual"
              price="12x R$ 19"
              period="ou R$ 228 à vista"
              description="Plano mais completo e econômico"
              features={[
                'Todas as aulas em vídeo',
                'Materiais em PDF',
                'Textos de orientação',
                'Dashboard completo',
                'Suporte prioritário',
                'Conteúdos exclusivos',
                'Atualizações garantidas',
                'Economia de R$ 120',
              ]}
              highlighted={true}
              ctaText="Quero o plano anual"
              badge="Mais escolhido"
              savings="Economize 34%"
            />
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 text-[#6B7280]">
              <Shield className="w-5 h-5 text-[#00C26A]" />
              <span>Garantia de 7 dias • Cancele quando quiser</span>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Resultados que falam por si</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Veja o que nossos membros têm a dizer sobre suas transformações
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Ana Silva"
              role="Empreendedora Digital"
              content="Em 3 meses no Clube 103%, consegui reorganizar completamente minha rotina e dobrei minha produtividade. O investimento se pagou na primeira semana!"
              imageUrl="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2NDE4NDkyNXww&ixlib=rb-4.1.0&q=80&w=1080"
            />
            <TestimonialCard
              name="Carlos Mendes"
              role="Gerente de Vendas"
              content="O conteúdo sobre mentalidade mudou minha forma de encarar desafios. Hoje me sinto muito mais confiante e preparado para crescer na carreira."
              imageUrl="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NDI4MjgzOXww&ixlib=rb-4.1.0&q=80&w=1080"
            />
            <TestimonialCard
              name="Mariana Costa"
              role="Freelancer"
              content="Aprendi a organizar minhas finanças e criar uma reserva. Pela primeira vez em anos, me sinto no controle do meu dinheiro. Vale cada centavo!"
              imageUrl="https://images.unsplash.com/photo-1584022464805-0e83f7186106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwcGVyc29uJTIwY29uZmlkZW50fGVufDF8fHx8MTc2NDI4MzIyOHww&ixlib=rb-4.1.0&q=80&w=1080"
            />
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section id="cta-final" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1C2635] via-[#0D1A24] to-[#1C2635] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTAgMTZjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="mb-6 text-white !text-white font-bold">
            Pronto para alcançar seus 103%?
          </h2>
                
          <p className="text-white/80 mb-10 max-w-2xl mx-auto">
            Junte-se a centenas de pessoas que já estão transformando sua mentalidade,
            produtividade e finanças. Por apenas R$19/mês no plano anual.
          </p>

          <button className="px-10 py-5 rounded-lg bg-[#00C26A] text-white hover:bg-[#00A355] transition-all shadow-2xl shadow-[#00C26A]/30 flex items-center gap-3 mx-auto transform hover:scale-105 mb-6">
            <span>Entrar no Clube 103% — Plano Anual</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-white/60">
            Acesso imediato após confirmação do pagamento
          </p>

          <div className="mt-8 flex items-center justify-center gap-6 text-white/60">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#00C26A]" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/30"></div>
            <span>Cancele quando quiser</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C26A] to-[#00A355] flex items-center justify-center">
                <span className="text-white">103%</span>
              </div>
              <span className="text-[#1C2635]">Clube 103%</span>
            </div>

            <div className="flex gap-8">
              <a href="#" className="text-[#6B7280] hover:text-[#1C2635] transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-[#6B7280] hover:text-[#1C2635] transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-[#6B7280]">
            <p>© 2025 Clube 103%. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
    </PageTransition>
  );
}
