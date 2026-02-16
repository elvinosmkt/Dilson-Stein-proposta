
import { ProposalContent } from './types';

export const PROPOSAL_DATA: ProposalContent = {
  title: "Portal Dilson Stein",
  client: "Dilson Stein New Models",
  proposer: "Wilson Stein",
  presentation: "Esta proposta apresenta uma solução híbrida e estratégica: uma plataforma completa de gestão de talentos (Web + Mobile) integrada a um poderoso módulo educacional (Academy). O objetivo é centralizar a operação da agência enquanto se abre uma nova frente de receita através da monetização de conteúdo e assinaturas de cursos, transformando a capacitação de modelos em um ativo escalável.",
  scenario: "Atualmente, a agência possui uma base valiosa de talentos que buscam constante aprimoramento. A operação fragmentada dificulta a gestão, e a ausência de um canal oficial de ensino desperdiça o potencial de faturamento recorrente. A solução proposta resolve a desorganização operacional e captura valor financeiro através da educação digital.",
  objectives: [
    "Centralizar 100% da gestão de talentos e portfólios.",
    "Implementar o 'Dilson Stein Academy' (Cursos e Assinaturas).",
    "Gerar receita recorrente e escalável via App (Monetização).",
    "Profissionalizar a comunicação e agenda de eventos.",
    "Oferecer valor real ao talento através de conteúdo exclusivo."
  ],
  scope: [
    {
      title: "Academy & Assinaturas",
      description: "Módulo educacional completo com paywall. Venda de cursos, workshops e conteúdos exclusivos por assinatura.",
      icon: "🎓"
    },
    {
      title: "App Mobile (Super App)",
      description: "App nativo (iOS/Android) unificando: Cursos, Agenda, Portfólio e Comunicação oficial.",
      icon: "📱"
    },
    {
      title: "Plataforma Web de Gestão",
      description: "Painel administrativo para controle de alunos, aprovação de perfis, financeiro e gestão de aulas.",
      icon: "💻"
    },
    {
      title: "Gestão de Portfólio",
      description: "Sistema de upload e moderação de fotos/vídeos (Polaroids e Composites) com padrão de qualidade.",
      icon: "📸"
    },
    {
      title: "Eventos & Castings",
      description: "Calendário interativo com convocações, check-in digital e histórico de participação.",
      icon: "📅"
    },
    {
      title: "Comunicação Oficial",
      description: "Notificações push segmentadas para alunos e talentos, garantindo 100% de entrega das mensagens.",
      icon: "🔔"
    }
  ],
  benefits: [
    "Nova fonte de receita (Assinaturas e Cursos).",
    "Organização total da base de dados e ativos.",
    "Capacitação padronizada dos talentos.",
    "Eficiência operacional e tecnológica."
  ],
  milestones: [
    {
      phase: "Prototipagem (Teste)",
      duration: "15 Dias",
      description: "Entrega do protótipo da plataforma completa em ambiente de teste."
    },
    {
      phase: "Versão Web (Real)",
      duration: "30 a 45 Dias",
      description: "Entrega da aplicação 100% funcional em ambiente real (Web)."
    },
    {
      phase: "Aplicativo Mobile",
      duration: "50 a 80 Dias",
      description: "Entrega do aplicativo 100% funcional (iOS e Android)."
    }
  ],
  payments: [
    { label: "Assinatura do Contrato", value: 25000, condition: "Start Imediato" },
    { label: "Entrega Protótipo", value: 10000, condition: "15 Dias (Ambiente de Teste)" },
    { label: "Entrega Web", value: 20000, condition: "30 a 45 Dias (Ambiente Real)" },
    { label: "Entrega App Mobile", value: 20000, condition: "50 a 80 Dias (Funcional)" },
    { label: "Finalização", value: 20000, condition: "30 dias após entrega da plataforma" }
  ]
};

export const ABOUT_WILSON = {
  title: "Visão Estratégica",
  name: "Wilson Stein",
  role: "Idealizador do Projeto",
  description: "Wilson Stein é o idealizador da iniciativa e responsável pela visão estratégica da plataforma. Com atuação voltada ao desenvolvimento e descoberta de talentos, sua proposta une a necessidade de organização operacional com a oportunidade de negócio da educação digital, criando um ecossistema sustentável e lucrativo."
};
