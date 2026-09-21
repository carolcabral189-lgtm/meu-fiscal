export const APP = {
  name: "Meu Fiscal",
  storageKey: "meu-fiscal-app-v1",
  phases: [
    { id: "iniciante", label: "Iniciante", minDays: Infinity, maxDays: Infinity },
    { id: "base", label: "Base", minDays: 181, maxDays: 730 },
    { id: "pos-edital", label: "Pós-edital", minDays: 61, maxDays: 180 },
    { id: "reta-final", label: "Reta final", minDays: 0, maxDays: 60 }
  ],
  areas: [
    { id:"plano", name:"Meu Plano", icon:"cat-plano.webp", desc:"Organize seus estudos", file:"./conteudo/plano.js" },
    { id:"questoes", name:"Questões", icon:"cat-questoes.webp", desc:"Pratique e encontre seus erros", file:"./conteudo/questoes.js" },
    { id:"revisao", name:"Revisão", icon:"cat-revisao.webp", desc:"Volte ao que importa", file:"./conteudo/revisao.js" },
    { id:"desempenho", name:"Desempenho", icon:"cat-desempenho.webp", desc:"Acompanhe sua evolução", file:"./conteudo/desempenho.js" },
    { id:"simulados", name:"Simulados", icon:"cat-simulados.webp", desc:"Teste sua preparação", file:"./conteudo/simulados.js" },
    { id:"radar", name:"Radar Fiscal", icon:"cat-perfil.webp", desc:"Acompanhe novidades", file:"./conteudo/radar.js" }
  ],
  nav: [
    { id:"hoje", label:"Hoje", icon:"cat-simulados.webp" },
    { id:"explorar", label:"Explorar", icon:"cat-questoes.webp" },
    { id:"semana", label:"Semana", icon:"cat-plano.webp" },
    { id:"perfil", label:"Perfil", icon:"cat-perfil.webp" },
    { id:"biblioteca", label:"Biblioteca", icon:"cat-revisao.webp" }
  ],
  // Troque currentCollectionId todo mês. A coleção atual só é chamada de novidade
  // quando seus materiais realmente estão cadastrados no catálogo abaixo.
  currentCollectionId: "colecao-2026-09",
  collections: [
    {
      id: "colecao-2026-09",
      mes: "2026-09",
      titulo: "Setembro: constância sem exagero",
      descricao: "Materiais para organizar a semana, revisar melhor e acompanhar o que realmente foi feito.",
      novidade: true,
      faixas: ["iniciante","base","pos-edital","reta-final"],
      materiais: ["imp-1","imp-2","imp-3","imp-4","imp-5"]
    },
    {
      id: "colecao-2026-08",
      mes: "2026-08",
      titulo: "Agosto: organização da preparação",
      descricao: "Coleção anterior para continuar usando enquanto sua assinatura estiver ativa.",
      novidade: false,
      faixas: ["base","pos-edital","reta-final"],
      materiais: ["imp-1","imp-2","imp-3"]
    }
  ],
  weeklyContent: {
    base: [
      {title:"Estudar uma matéria prioritária",desc:"Escolha uma matéria que precisa de avanço."},
      {title:"Revisar um conteúdo anterior",desc:"Volte a algo estudado nos últimos dias."},
      {title:"Resolver 20 questões",desc:"Registre os erros para usar no próximo plano."},
      {title:"Fazer um mini-simulado",desc:"Teste sua aplicação do conteúdo."},
      {title:"Planejar a próxima semana",desc:"Ajuste o volume ao tempo que você realmente terá."},
      {title:"Revisar seus erros recentes",desc:"Escolha um erro e explique por que ele aconteceu."}
    ],
    "pos-edital": [
      {title:"Revisar um assunto do edital",desc:"Priorize o conteúdo que ainda está instável."},
      {title:"Resolver 30 questões",desc:"Separe por matéria e corrija depois."},
      {title:"Atualizar seu caderno de erros",desc:"Registre só o que merece voltar na revisão."},
      {title:"Fazer um bloco cronometrado",desc:"Treine ritmo sem transformar isso em cobrança."},
      {title:"Revisar antes de esquecer",desc:"Volte aos pontos estudados nesta semana."},
      {title:"Planejar os próximos 7 dias",desc:"Distribua o estudo dentro do tempo real disponível."}
    ],
    "reta-final": [
      {title:"Revisar seu assunto mais fraco",desc:"Use seus últimos erros como ponto de partida."},
      {title:"Resolver 30 questões",desc:"Priorize qualidade da correção, não só quantidade."},
      {title:"Fazer um mini-simulado",desc:"Registre acertos, erros e chutes."},
      {title:"Corrigir os erros",desc:"Identifique quais assuntos apareceram mais."},
      {title:"Revisar pontos de alta incidência",desc:"Escolha tópicos que precisam de uma última volta."},
      {title:"Planejar a próxima semana",desc:"Mantenha o plano compatível com seu tempo real."}
    ],
    iniciante: [
      {title:"Montar sua primeira rotina",desc:"Defina dias e horários que realmente cabem na semana."},
      {title:"Estudar um assunto básico",desc:"Escolha um conteúdo de entrada e avance sem pressa."},
      {title:"Resolver 10 questões",desc:"Use a correção para descobrir onde começar a revisão."},
      {title:"Fazer uma revisão curta",desc:"Volte ao que estudou para testar a lembrança."},
      {title:"Organizar seu material",desc:"Deixe o próximo estudo fácil de começar."},
      {title:"Planejar os próximos 7 dias",desc:"Monte uma semana possível, não uma semana perfeita."}
    ]
  },
  plans: {
    essencial: { name:"Essencial", price:25.90, checkout:"https://mpago.la/21zCjoG" },
    completo: { name:"Completo", price:35.90, checkout:"https://mpago.la/1VVJ6g5" }
  }
};
