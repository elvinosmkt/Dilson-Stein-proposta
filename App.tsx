
import React, { useState, useEffect } from 'react';
import { PROPOSAL_DATA, ABOUT_WILSON } from './constants';
import { generateObjectionResponse } from './geminiService';
import { ChevronDown, Check, ArrowRight, ExternalLink, MessageCircle } from 'lucide-react';

// --- Utility Components ---

const FadeIn = ({ children, delay = 0 }: { children?: React.ReactNode, delay?: number }) => (
  <div className="animate-fade-in-up" style={{ animationDelay: `${delay}ms` }}>
    {children}
  </div>
);

const Divider = () => (
  <div className="w-full h-[1px] bg-neutral-900 my-16 md:my-24"></div>
);

const App: React.FC = () => {
  const [objection, setObjection] = useState('');
  const [objectionResponse, setObjectionResponse] = useState('');
  const [loadingObjection, setLoadingObjection] = useState(false);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  const handleHandleObjection = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!objection) return;
    setLoadingObjection(true);
    // Updated summary to reflect the correct platform name and new total value (95k)
    const summary = `Proposta Portal Dilson Stein. Valor Total 95k. Fluxo: 25k assinatura, 10k protótipo, 20k web, 20k mobile, 20k final. Escopo: App iOS/Android + Web + Academy.`;
    const resp = await generateObjectionResponse(objection, summary);
    setObjectionResponse(resp || '');
    setLoadingObjection(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* --- Fixed Header --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-neutral-900 py-6">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-serif tracking-widest text-white uppercase">
            Portal Dilson Stein
          </div>
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.25em] font-medium text-neutral-500">
            <button onClick={() => scrollToSection('presentation')} className="hover:text-white transition-colors">Projeto</button>
            <button onClick={() => scrollToSection('scope')} className="hover:text-white transition-colors">Escopo</button>
            <button onClick={() => scrollToSection('timeline')} className="hover:text-white transition-colors">Cronograma</button>
            <button onClick={() => scrollToSection('investment')} className="hover:text-white transition-colors">Investimento</button>
          </div>
        </div>
      </nav>

      {/* --- Cover Section --- */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative pt-20">
        <div className="max-w-4xl">
          <FadeIn delay={100}>
            <p className="text-neutral-500 text-xs uppercase tracking-[0.4em] mb-8 pl-1">
              Proposta Comercial
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-12">
              Gestão & Educação <br />
              <span className="italic text-neutral-600">Integradas.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={500}>
            <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl leading-relaxed mb-16">
              Uma plataforma digital completa (Web + Mobile) para gestão de talentos e monetização através do Dilson Stein Academy.
            </p>
          </FadeIn>
          
          <FadeIn delay={700}>
             <div className="flex flex-col md:flex-row gap-8 md:items-center">
                <button onClick={() => scrollToSection('presentation')} className="group flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors">
                    Ver Detalhes <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
                <a 
                   href="https://dilson-novo.vercel.app/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors border-l border-neutral-800 pl-8"
                >
                    <ExternalLink className="w-4 h-4" />
                    Visualizar Protótipo
                </a>
             </div>
          </FadeIn>
        </div>
        
        {/* Subtle Decorative Line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900"></div>
      </section>

      {/* --- Presentation & Context --- */}
      <section id="presentation" className="py-24 md:py-32 px-6 md:px-12">
        <div className="container mx-auto grid lg:grid-cols-2 gap-20">
           <div>
              <h2 className="text-3xl font-serif mb-8 text-neutral-200">Apresentação do Projeto</h2>
              <p className="text-neutral-400 leading-loose font-light text-lg mb-8 text-justify">
                {PROPOSAL_DATA.presentation}
              </p>
              <div className="border-l border-white pl-6 py-2">
                 <p className="text-white text-sm uppercase tracking-widest mb-2">Cenário Atual</p>
                 <p className="text-neutral-500 text-sm leading-relaxed">{PROPOSAL_DATA.scenario}</p>
              </div>
           </div>
           
           <div className="bg-neutral-900/20 p-10 border border-neutral-900 flex flex-col justify-center">
              <h3 className="font-serif text-2xl mb-8 text-white">Objetivos & Monetização</h3>
              <ul className="space-y-6">
                 {PROPOSAL_DATA.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                       <span className="text-neutral-700 text-xs mt-1.5 group-hover:text-white transition-colors">0{i + 1}</span>
                       <span className="text-neutral-400 font-light group-hover:text-white transition-colors">{obj}</span>
                    </li>
                 ))}
              </ul>
           </div>
        </div>
      </section>

      <Divider />

      {/* --- Wilson Stein Bio --- */}
      <section className="py-12 px-6 md:px-12 bg-neutral-950">
         <div className="container mx-auto max-w-4xl text-center">
            <span className="text-neutral-600 text-[10px] uppercase tracking-[0.3em] block mb-6">{ABOUT_WILSON.role}</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">{ABOUT_WILSON.name}</h2>
            <p className="text-neutral-400 font-light leading-relaxed text-lg italic">
               "{ABOUT_WILSON.description}"
            </p>
         </div>
      </section>

      <Divider />

      {/* --- Scope --- */}
      <section id="scope" className="py-24 px-6 md:px-12">
         <div className="container mx-auto">
            <div className="mb-16">
               <span className="text-neutral-500 text-xs uppercase tracking-[0.3em]">Escopo Técnico</span>
               <h2 className="text-4xl font-serif mt-4">Ecossistema Digital & Academy</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
               {PROPOSAL_DATA.scope.map((item, i) => (
                  <div key={i} className="group">
                     <div className="text-3xl mb-6 text-neutral-700 group-hover:text-white transition-colors duration-500">{item.icon}</div>
                     <h3 className="text-xl font-serif text-white mb-4">{item.title}</h3>
                     <p className="text-neutral-500 text-sm font-light leading-relaxed group-hover:text-neutral-400 transition-colors">
                        {item.description}
                     </p>
                  </div>
               ))}
               
               {/* Benefits Summary Box */}
               <div className="md:col-span-2 lg:col-span-1 bg-white p-8 text-black flex flex-col justify-between">
                  <div>
                     <h3 className="font-serif text-2xl mb-6">Benefícios Reais</h3>
                     <ul className="space-y-3">
                        {PROPOSAL_DATA.benefits.map((b, i) => (
                           <li key={i} className="flex items-center gap-3 text-sm">
                              <Check className="w-4 h-4" /> {b}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="mt-8 pt-6 border-t border-black/10">
                     <p className="text-[10px] uppercase tracking-widest font-bold">Escalabilidade & Receita</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Divider />

      {/* --- Timeline & Investment --- */}
      <section id="timeline" className="py-24 px-6 md:px-12 bg-neutral-900/10">
         <div className="container mx-auto grid lg:grid-cols-2 gap-24">
            
            {/* Timeline */}
            <div>
               <span className="text-neutral-500 text-xs uppercase tracking-[0.3em] block mb-12">Cronograma Estimado</span>
               <div className="space-y-12 border-l border-neutral-800 pl-12 ml-4">
                  {PROPOSAL_DATA.milestones.map((m, i) => (
                     <div key={i} className="relative">
                        <span className="absolute -left-[53px] top-1 w-2 h-2 rounded-full bg-neutral-700"></span>
                        <p className="text-white font-serif text-xl mb-2">{m.phase}</p>
                        <p className="text-neutral-500 text-xs uppercase tracking-widest mb-2">{m.duration}</p>
                        <p className="text-neutral-400 text-sm font-light">{m.description}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* Investment */}
            <div id="investment">
               <span className="text-neutral-500 text-xs uppercase tracking-[0.3em] block mb-12">Investimento Total</span>
               
               <div className="flex items-baseline gap-2 mb-12">
                  {/* Updated Total to 95,000 based on the sum of new payments */}
                  <span className="text-6xl md:text-7xl font-serif text-white">{formatCurrency(95000)}</span>
                  <span className="text-neutral-600 text-lg">BRL</span>
               </div>

               <div className="bg-neutral-900 border border-neutral-800 p-8 space-y-6">
                  <h3 className="text-white text-sm uppercase tracking-widest mb-6 border-b border-neutral-800 pb-4">Fluxo de Pagamento</h3>
                  {PROPOSAL_DATA.payments.map((p, i) => (
                     <div key={i} className="flex justify-between items-end border-b border-neutral-800/50 pb-4 last:border-0 last:pb-0">
                        <div>
                           <p className="text-neutral-300 font-serif text-lg">{p.label}</p>
                           <p className="text-neutral-500 text-[10px] uppercase mt-1 tracking-wide">{p.condition}</p>
                        </div>
                        <p className="text-white font-light whitespace-nowrap">{formatCurrency(p.value)}</p>
                     </div>
                  ))}
               </div>
               
               {/* WhatsApp Action Button */}
               <a 
                  href="https://wa.me/5541995175019?text=Olá, aprovei a proposta do Portal Dilson Stein e gostaria de prosseguir com a assinatura do contrato." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 w-full bg-white text-black py-5 text-xs uppercase tracking-[0.25em] font-medium flex items-center justify-center gap-3 hover:bg-neutral-200 transition-colors"
               >
                  <MessageCircle className="w-5 h-5" />
                  Aceitar Proposta e Iniciar
               </a>

               <p className="text-neutral-600 text-xs mt-6 text-center italic">
                  *Valores referentes a desenvolvimento. Custos de servidores e taxas de lojas não inclusos.
               </p>
            </div>
         </div>
      </section>

      {/* --- AI Interaction --- */}
      <section className="py-24 px-6 md:px-12 border-t border-neutral-900">
         <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-serif text-white mb-6">Dúvidas sobre o Projeto?</h2>
            <div className="relative">
               <input 
                  type="text" 
                  value={objection}
                  onChange={(e) => setObjection(e.target.value)}
                  placeholder="Pergunte à IA sobre monetização, cursos ou prazos..."
                  className="w-full bg-transparent border-b border-neutral-700 py-4 text-white text-center focus:border-white outline-none transition-colors placeholder-neutral-700"
               />
               <button 
                  onClick={handleHandleObjection}
                  disabled={loadingObjection}
                  className="mt-8 text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors disabled:opacity-50"
               >
                  {loadingObjection ? 'Processando...' : 'Consultar Inteligência'}
               </button>
            </div>
            
            {objectionResponse && (
               <div className="mt-12 p-8 bg-neutral-900/30 text-left animate-in fade-in slide-in-from-bottom-4">
                  <p className="text-neutral-300 font-light leading-relaxed">{objectionResponse}</p>
               </div>
            )}
         </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 px-6 md:px-12 border-t border-neutral-900 text-neutral-600 text-[10px] uppercase tracking-widest text-center">
         <p>© 2024 Portal Dilson Stein. Documento Confidencial.</p>
      </footer>

    </div>
  );
};

export default App;
