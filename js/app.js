const APP = {
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


const materiais_plano = [
  {id:"pla-1",area:"plano",tipo:"guia",titulo:"Monte seu plano de estudos fiscal",resumo:"Organize sua preparação a partir do tempo real, das matérias e da fase.",faixa:"18+ · iniciante · pré-edital",plano:"essencial",amostra:true,tempo:"8 min",
  abertura:"Quando você começa a estudar para concurso fiscal, é fácil sentir que precisa estudar tudo ao mesmo tempo. Um bom plano começa pelo que cabe na sua vida real.",
  secoes:[
   {titulo:"Descubra seu tempo real",itens:["Conte suas horas disponíveis. Exemplo: 2 horas de segunda a sexta, 4 no sábado e 2 no domingo.","Considere imprevistos. Exemplo: se uma semana tem prova da faculdade, reduza o volume em vez de fingir que terá o mesmo tempo.","Use o tempo disponível como limite. Exemplo: se nesta semana existem 10 horas, monte o plano para 10 horas."]},
   {titulo:"Separe as matérias",itens:["Prioridade alta: matérias importantes ou difíceis. Exemplo: Contabilidade com 45% de acertos.","Prioridade média: matérias conhecidas que ainda exigem prática. Exemplo: Direito Administrativo com 65%.","Manutenção: matérias fortes. Exemplo: Português com 82%."]},
   {titulo:"Monte blocos flexíveis",itens:["Prefira blocos a horários rígidos. Exemplo: 'Contabilidade, 60 minutos' em vez de prender a tarefa a um único horário.","Distribua os blocos durante a semana. Exemplo: Contabilidade, Tributário, Português, Auditoria e depois repita as matérias prioritárias."]},
   {titulo:"Misture estudo, revisão e questões",itens:["Estudo: aprenda conteúdo novo. Exemplo: lançamento contábil.","Revisão: volte ao que já viu. Exemplo: revisar um assunto três dias depois.","Questões: teste a aplicação. Exemplo: 15 questões de lançamento contábil."]},
   {titulo:"Revise o plano",itens:["Pergunte o que foi feito. Exemplo: 4 de 5 tarefas concluídas.","Veja onde errou. Exemplo: 18 acertos em 40 questões de Contabilidade.","Ajuste a próxima semana. Exemplo: aumentar a prática do assunto com mais erros."]}
  ],
  atencao:"O erro mais comum é montar um cronograma com mais horas do que você consegue cumprir.",
  destaque:"Seu plano não precisa prever uma semana perfeita. Ele precisa funcionar na semana que você realmente vai viver.",
  checklist:["Listei minhas matérias.","Calculei meu tempo real disponível.","Identifiquei minhas matérias mais difíceis.","Separei estudo, revisão e questões.","Montei blocos de estudo.","Reservei tempo para revisar.","Vou revisar o plano no fim da semana."]
 },
 {id:"pla-2",area:"plano",tipo:"checklist",titulo:"Organize sua semana de estudos",resumo:"Monte uma semana possível, com prioridades claras e sem transformar atraso em culpa.",faixa:"18+ · todos os níveis · qualquer fase",plano:"essencial",amostra:true,tempo:"5 min",
  abertura:"Uma semana não precisa começar com um cronograma enorme. O objetivo é enxergar o que realmente precisa acontecer nos próximos dias.",
  secoes:[
   {titulo:"Veja o tempo disponível",itens:["Conte as horas reais. Exemplo: 2 horas por dia de segunda a sexta.","Considere compromissos diferentes. Exemplo: uma prova na quarta muda a disponibilidade.","Não planeje horas que você sabe que não terá."]},
   {titulo:"Escolha as prioridades",itens:["Escolha de três a cinco prioridades. Exemplo: Contabilidade, Tributário, Português e Auditoria.","Não transforme todas as matérias em prioridade máxima."]},
   {titulo:"Defina tarefas pequenas",itens:["Troque 'estudar Contabilidade' por uma ação. Exemplo: estudar competência e resolver 15 questões.","Use tarefas que permitam marcar claramente o que foi feito."]},
   {titulo:"Reserve revisão",itens:["Separe momentos para voltar aos conteúdos. Exemplo: terça para revisão e questões.","Inclua um momento de análise. Exemplo: sábado simulado e domingo correção."]},
   {titulo:"Feche a semana sem culpa",itens:["Compare planejado e realizado. Exemplo: 5 tarefas planejadas e 4 concluídas.","Decida se a quinta tarefa continua prioritária ou pode sair do plano."]}
  ],
  atencao:"Não use tarefas atrasadas para lotar automaticamente o dia seguinte.",
  destaque:"Planejamento serve para orientar sua semana, não para virar uma cobrança diária.",
  checklist:["Conferi minha disponibilidade.","Escolhi minhas prioridades.","Defini tarefas específicas.","Separei revisão.","Separei questões.","Reservei um momento para analisar erros.","Ajustei o que não coube na semana."]
 },
 {id:"pla-3",area:"plano",tipo:"guia",titulo:"Distribua as matérias sem se perder",resumo:"Use importância, desempenho e fase para decidir onde colocar mais tempo.",faixa:"18+ · iniciante/intermediário · pré-edital",plano:"essencial",amostra:false,tempo:"9 min",
  abertura:"Quando a lista de matérias é grande, parece que todas precisam receber exatamente o mesmo tempo. Na prática, sua distribuição pode acompanhar suas necessidades.",
  secoes:[
   {titulo:"Considere a importância",itens:["Observe a composição do concurso que você está mirando. Exemplo: uma disciplina com grande participação na prova pode receber mais blocos.","Não use apenas o peso. Combine importância com seu desempenho."]},
   {titulo:"Use seus percentuais",itens:["Compare matérias. Exemplo: Português 82%, Administrativo 70%, Contabilidade 48%, Tributário 55%.","Dê atenção extra às matérias fracas sem abandonar as demais."]},
   {titulo:"Considere o estágio",itens:["Matéria nova: teoria, questões simples e revisão. Exemplo: primeiro contato com Auditoria.","Matéria conhecida: questões e revisão direcionada. Exemplo: 30 questões de Tributário e análise dos erros.","Matéria forte: manutenção. Exemplo: questões periódicas de Português."]},
   {titulo:"Use ciclos simples",itens:["Distribua blocos. Exemplo: 3 de Contabilidade, 3 de Tributário, 2 de Português, 2 de Administrativo e 2 de Auditoria.","Reavalie depois de algumas semanas, não depois de um único dia."]},
   {titulo:"Não abandone uma matéria difícil",itens:["Reduza a tarefa. Exemplo: revisar lançamentos e resolver 10 questões em vez de tentar dominar toda a matéria.","Use os erros para localizar o assunto que precisa de atenção."]}
  ],
  atencao:"Não altere toda a programação depois de um único simulado.",
  destaque:"A distribuição do seu tempo deve acompanhar suas necessidades, não apenas a lista de matérias.",
  checklist:["Listei minhas matérias.","Verifiquei a importância de cada uma.","Analisei meus percentuais de acerto.","Identifiquei minhas matérias mais frágeis.","Distribuí blocos de estudo.","Mantive contato com as matérias secundárias.","Vou reavaliar a distribuição depois de algumas semanas."]
 },
 {id:"pla-4",area:"plano",tipo:"material para imprimir",titulo:"Planeje sua semana fiscal",resumo:"Uma folha simples para organizar prioridades, blocos e revisão.",faixa:"18+ · todos os níveis · qualquer fase",plano:"essencial",amostra:true,tempo:"4 min",
  abertura:"Se você gosta de estudar olhando para uma folha, este material ajuda a tirar o plano da cabeça e colocar o essencial no papel.",
  secoes:[
   {titulo:"Preencha sua semana",itens:["Informe o período. Exemplo: 21 a 27 de setembro.","Informe as horas disponíveis. Exemplo: 14 horas.","Escolha um objetivo principal. Exemplo: melhorar Contabilidade."]},
   {titulo:"Escolha prioridades",itens:["Liste até cinco. Exemplo: revisar lançamento contábil, questões de Tributário e estudar Auditoria.","Evite preencher todos os espaços só porque existem."]},
   {titulo:"Distribua blocos",itens:["Coloque uma tarefa por dia ou mais quando houver tempo. Exemplo: terça, revisão de Tributário.","Marque o que foi concluído."]},
   {titulo:"Feche a semana",itens:["Registre o que conseguiu. Exemplo: 4 de 5 prioridades.","Registre a dificuldade. Exemplo: erros concentrados em imunidade tributária.","Defina a atenção da próxima semana."]}
  ],
  atencao:"Não transforme todos os espaços vazios em tarefas.",
  destaque:"Uma folha preenchida vale mais do que um planejamento perfeito que nunca sai do papel.",
  checklist:["Coloquei a semana.","Informei minhas horas disponíveis.","Escolhi até cinco prioridades.","Distribuí as tarefas.","Separei as revisões.","Deixei espaço para imprevistos.","Defini o que vou analisar no fim da semana."]
 },
 {id:"pla-5",area:"plano",tipo:"guia",titulo:"Ajuste seu plano quando a prova se aproximar",resumo:"Mude a distribuição entre conteúdo, revisão, questões e simulados conforme a reta final chega.",faixa:"18+ · intermediário/avançado · pós-edital",plano:"completo",amostra:false,tempo:"9 min",
  abertura:"Quando a prova se aproxima, a preparação muda. O calendário começa a pesar e fica mais importante decidir onde colocar o tempo que ainda existe.",
  secoes:[
   {titulo:"Confira o que falta",itens:["Classifique o que já estudou. Exemplo: Contabilidade estudada e 68% de acertos.","Separe o que está em andamento. Exemplo: Tributário com 55%.","Identifique o que ainda não estudou. Exemplo: Auditoria com 40%."]},
   {titulo:"Aumente a prática",itens:["Use questões para verificar aplicação. Exemplo: 30 de Contabilidade, 20 de Tributário e 15 de Português.","Corrija depois. A quantidade sozinha não mostra onde estão as dificuldades."]},
   {titulo:"Transforme erros em prioridade",itens:["Olhe os assuntos dos erros. Exemplo: 6 de 8 erros concentrados em um tópico de Tributário.","Diferencie falta de conhecimento de erro de interpretação quando possível."]},
   {titulo:"Reduza o excesso de conteúdo novo",itens:["Compare o novo conteúdo com uma revisão já planejada. Exemplo: decidir entre uma aula nova e revisar um assunto recorrente.","Considere edital, domínio e tempo restante."]},
   {titulo:"Use simulados para ajustar",itens:["Registre erros, chutes, assuntos desconhecidos e tempo gasto.","Exemplo: terminou dentro do tempo, mas errou muito em Contabilidade. Reserve uma sessão para corrigir esses erros."]},
   {titulo:"Recalcule a semana",itens:["No início, pode haver mais conteúdo novo. Exemplo: teoria, revisão e questões.","Perto da prova, pode haver mais revisão, questões, simulados e correção de erros."]}
  ],
  atencao:"Não tente recuperar meses de preparação em poucos dias aumentando drasticamente sua carga.",
  destaque:"A reta final não é sobre fazer tudo. É sobre decidir melhor onde colocar o tempo que ainda existe.",
  checklist:["Conferi a data da prova.","Listei o que já estudei.","Identifiquei os assuntos pendentes.","Analisei meus erros recentes.","Aumentei a prática de questões quando necessário.","Reservei simulados.","Separei tempo para corrigir os simulados.","Reorganizei minha semana de acordo com a fase atual."]
 }
];


// Catálogo inicial da área Questões.
// Acrescente novos objetos ao array "materiais" sem alterar js/app.js.
const materiais_questoes = [
  {
    id: "questoes-fiscal-01",
    area: "questoes",
    tipo: "questoes",
    titulo: "Banco de Questões Fiscal",
    resumo: "Questões para praticar e identificar seus principais erros.",
    faixa: "Todos os níveis",
    plano: "essencial",
    amostra: true,
    tempo: "Prática livre",
    quantidade: 10,

    questoes: [
      {
        id: "q1",
        materia: "Português",
        dificuldade: "fácil",
        enunciado: "A principal finalidade de um texto instrucional é:",
        alternativas: [
          "Orientar a realização de uma ação.",
          "Contar necessariamente uma história.",
          "Apresentar somente opiniões.",
          "Descrever uma paisagem."
        ],
        resposta: 0,
        explicacao: "O texto instrucional apresenta orientações, regras ou procedimentos."
      },

      {
        id: "q2",
        materia: "Contabilidade",
        dificuldade: "médio",
        enunciado: "De forma simplificada, o patrimônio líquido corresponde a:",
        alternativas: [
          "Ativo + Passivo",
          "Ativo - Passivo",
          "Passivo - Ativo",
          "Receita + Despesa"
        ],
        resposta: 1,
        explicacao: "O patrimônio líquido corresponde à diferença entre o ativo e o passivo."
      },

      {
        id: "q3",
        materia: "Direito Tributário",
        dificuldade: "fácil",
        enunciado: "O tributo é uma prestação:",
        alternativas: [
          "Facultativa.",
          "Contratual.",
          "Pecuniária compulsória, nos termos da lei.",
          "Exclusivamente municipal."
        ],
        resposta: 2,
        explicacao: "O tributo possui natureza compulsória e deve ser instituído nos termos da lei."
      },

      {
        id: "q4",
        materia: "Direito Administrativo",
        dificuldade: "fácil",
        enunciado: "O princípio da legalidade exige que a Administração Pública:",
        alternativas: [
          "Atue conforme a lei.",
          "Faça tudo que desejar.",
          "Ignore regulamentos.",
          "Atue sem normas."
        ],
        resposta: 0,
        explicacao: "A Administração Pública deve obedecer ao ordenamento jurídico."
      },

      {
        id: "q5",
        materia: "Direito Constitucional",
        dificuldade: "médio",
        enunciado: "A Constituição Federal ocupa posição:",
        alternativas: [
          "Inferior às leis ordinárias.",
          "Central e superior no ordenamento jurídico.",
          "Exclusivamente administrativa.",
          "Sem força jurídica."
        ],
        resposta: 1,
        explicacao: "A Constituição é a norma fundamental do ordenamento jurídico."
      },

      {
        id: "q6",
        materia: "Raciocínio Lógico",
        dificuldade: "fácil",
        enunciado: "Se todos os fiscais são servidores e Ana é fiscal, podemos concluir que:",
        alternativas: [
          "Ana não é servidora.",
          "Ana é servidora.",
          "Nenhum fiscal é servidor.",
          "Não é possível concluir."
        ],
        resposta: 1,
        explicacao: "Se todo fiscal é servidor e Ana é fiscal, então Ana é servidora."
      },

      {
        id: "q7",
        materia: "Português",
        dificuldade: "médio",
        enunciado: "A tese de um texto argumentativo é:",
        alternativas: [
          "A ideia principal defendida pelo autor.",
          "Uma informação sem relação com o tema.",
          "Somente o título.",
          "Uma citação obrigatória."
        ],
        resposta: 0,
        explicacao: "A tese representa a ideia ou posição principal defendida pelo autor."
      },

      {
        id: "q8",
        materia: "Contabilidade",
        dificuldade: "médio",
        enunciado: "Uma compra de mercadorias à vista provoca, em regra:",
        alternativas: [
          "Aumento do ativo e do passivo.",
          "Troca entre contas do ativo.",
          "Aumento somente do passivo.",
          "Redução do patrimônio líquido."
        ],
        resposta: 1,
        explicacao: "Na compra à vista ocorre entrada de mercadorias e saída de dinheiro."
      },

      {
        id: "q9",
        materia: "Direito Tributário",
        dificuldade: "médio",
        enunciado: "A obrigação tributária principal tem por objeto:",
        alternativas: [
          "O pagamento de tributo ou penalidade pecuniária.",
          "Somente a entrega de documentos.",
          "Somente uma informação cadastral.",
          "Um contrato privado."
        ],
        resposta: 0,
        explicacao: "A obrigação principal tem como objeto o pagamento de tributo ou penalidade pecuniária."
      },

      {
        id: "q10",
        materia: "Direito Administrativo",
        dificuldade: "médio",
        enunciado: "A publicidade dos atos administrativos está relacionada principalmente à:",
        alternativas: [
          "Transparência da atuação estatal.",
          "Proibição de divulgação.",
          "Eliminação do controle social.",
          "Dispensa de motivação."
        ],
        resposta: 0,
        explicacao: "A publicidade favorece a transparência e o controle da Administração Pública."
      }
    ]
  }
];


// Catálogo inicial da área Revisão.
// Acrescente novos objetos ao array "materiais" sem alterar js/app.js.
const materiais_revisao = [];


// Catálogo inicial da área Desempenho.
// Acrescente novos objetos ao array "materiais" sem alterar js/app.js.
const materiais_desempenho = [];


// Catálogo da área Simulados.
// Os conteúdos principais ficam em js/conteudo/simulados.js.
const materiais_simulados = [
  {
    id: "simulado-fiscal-01",
    area: "simulados",
    tipo: "simulado",
    titulo: "Simulado Fiscal 01",
    resumo: "20 questões para testar seus conhecimentos.",
    faixa: "Todos os níveis",
    plano: "essencial",
    amostra: true,
    tempo: "30 min",
    quantidade: 10,
    questoes: [
      {
        id: 1,
        materia: "Português",
        enunciado: "Em um texto argumentativo, a tese corresponde:",
        alternativas: [
          "À ideia principal defendida pelo autor.",
          "A uma informação sem relação com o tema.",
          "Somente ao título do texto.",
          "A uma citação obrigatória."
        ],
        resposta: 0,
        explicacao: "A tese é a ideia principal que o autor procura defender."
      },
      {
        id: 2,
        materia: "Contabilidade",
        enunciado: "De forma simplificada, o patrimônio líquido corresponde a:",
        alternativas: [
          "Ativo + Passivo",
          "Ativo - Passivo",
          "Passivo - Ativo",
          "Receita + Despesa"
        ],
        resposta: 1,
        explicacao: "O patrimônio líquido corresponde à diferença entre ativo e passivo."
      },
      {
        id: 3,
        materia: "Direito Tributário",
        enunciado: "O tributo é uma prestação:",
        alternativas: [
          "Facultativa.",
          "Contratual.",
          "Pecuniária compulsória, nos termos da lei.",
          "Exclusivamente municipal."
        ],
        resposta: 2,
        explicacao: "Tributo é uma prestação pecuniária compulsória instituída nos termos da lei."
      },
      {
        id: 4,
        materia: "Direito Administrativo",
        enunciado: "O princípio da legalidade exige que a Administração Pública:",
        alternativas: [
          "Atue conforme a lei.",
          "Faça tudo que desejar.",
          "Ignore regulamentos.",
          "Atue sem normas."
        ],
        resposta: 0,
        explicacao: "A Administração Pública deve atuar de acordo com a lei."
      },
      {
        id: 5,
        materia: "Direito Constitucional",
        enunciado: "A Constituição Federal ocupa posição:",
        alternativas: [
          "Inferior às leis ordinárias.",
          "Central e superior no ordenamento jurídico.",
          "Exclusivamente administrativa.",
          "Sem força jurídica."
        ],
        resposta: 1,
        explicacao: "A Constituição é a norma fundamental do ordenamento jurídico."
      },
      {
        id: 6,
        materia: "Raciocínio Lógico",
        enunciado: "Se todos os fiscais são servidores e Ana é fiscal, podemos concluir que:",
        alternativas: [
          "Ana não é servidora.",
          "Ana é servidora.",
          "Nenhum fiscal é servidor.",
          "Não é possível concluir."
        ],
        resposta: 1,
        explicacao: "Se todo fiscal é servidor e Ana é fiscal, Ana também é servidora."
      },
      {
        id: 7,
        materia: "Português",
        enunciado: "A principal finalidade de um texto instrucional é:",
        alternativas: [
          "Orientar a realização de uma ação.",
          "Contar necessariamente uma história.",
          "Apresentar somente opiniões.",
          "Descrever uma paisagem."
        ],
        resposta: 0,
        explicacao: "Textos instrucionais apresentam orientações ou procedimentos."
      },
      {
        id: 8,
        materia: "Contabilidade",
        enunciado: "Uma compra de mercadorias à vista provoca, em regra:",
        alternativas: [
          "Aumento do ativo e do passivo.",
          "Troca entre contas do ativo.",
          "Aumento somente do passivo.",
          "Redução do patrimônio líquido."
        ],
        resposta: 1,
        explicacao: "Há entrada de mercadorias e saída de dinheiro, ambas contas do ativo."
      },
      {
        id: 9,
        materia: "Direito Tributário",
        enunciado: "A obrigação tributária principal tem por objeto:",
        alternativas: [
          "O pagamento de tributo ou penalidade pecuniária.",
          "Somente a entrega de documentos.",
          "Somente uma informação cadastral.",
          "Um contrato privado."
        ],
        resposta: 0,
        explicacao: "A obrigação principal tem como objeto o pagamento de tributo ou penalidade pecuniária."
      },
      {
        id: 10,
        materia: "Direito Administrativo",
        enunciado: "A publicidade dos atos administrativos está relacionada à:",
        alternativas: [
          "Transparência da atuação estatal.",
          "Proibição de divulgação.",
          "Eliminação do controle social.",
          "Dispensa de motivação."
        ],
        resposta: 0,
        explicacao: "A publicidade favorece a transparência e o controle da Administração."
      }
    ]
  }
];


// Catálogo inicial da área Radar Fiscal.
// Acrescente novos objetos ao array "materiais" sem alterar js/app.js.
const materiais_radar = [];


// Folhas imprimíveis reutilizáveis. A impressão usa apenas HTML/CSS + window.print().
const base = {area:"plano",tipo:"material para imprimir",plano:"essencial",amostra:true,tempo:"3 min"};

const materiais_impressao = [
  {...base,id:"imp-1",titulo:"Quadro de rotina de estudos",resumo:"Organize a rotina diária de preparação sem depender de telas.",abertura:"Uma folha para deixar à vista e marcar o que realmente precisa acontecer em cada dia.",secoes:[],atencao:"Use como guia, não como cobrança.",destaque:"Uma rotina possível é melhor do que uma rotina perfeita.",checklist:[],printSpec:{type:"fields",questions:["Minha principal prioridade de hoje","Matéria ou assunto","Horário que vou estudar","O que preciso revisar","O que preciso resolver em questões","O que vou deixar pronto para amanhã"],instrucao:"Como usar: preencha antes de começar e marque o que foi realizado ao longo do dia."}},
  {...base,id:"imp-2",titulo:"Registro semanal de estudos",resumo:"Registre tempo, matérias, questões e o que precisa de atenção.",abertura:"Uma tabela simples para acompanhar a semana no papel.",secoes:[],atencao:"Registre o que realmente aconteceu.",destaque:"O registro ajuda a ajustar a próxima semana com base no que foi feito.",checklist:[],printSpec:{type:"table",columns:["Dia","Matéria","Tempo","Questões","Acertos","O que revisar"],rows:9,instrucao:"Como usar: uma linha por sessão de estudo; use os acertos e observações para planejar a próxima semana."}},
  {...base,id:"imp-3",titulo:"Cartões de estudo fiscal",resumo:"Cartões recortáveis para revisar conceitos, regras e erros frequentes.",abertura:"Recorte os cartões e use-os para revisão rápida.",secoes:[],atencao:"Não use o cartão como substituto de uma revisão completa quando o assunto ainda estiver fraco.",destaque:"Perguntar antes de olhar a resposta ajuda a testar a lembrança.",checklist:[],printSpec:{type:"cards",cards:[
    {titulo:"Conceito-chave",texto:"Escreva uma definição curta que você precisa lembrar."},
    {titulo:"Regra importante",texto:"Anote uma regra ou exceção que costuma aparecer em questões."},
    {titulo:"Pegadinha",texto:"Registre um erro comum que você já cometeu."},
    {titulo:"Questão difícil",texto:"Anote o assunto e o caminho para resolver sem colocar a resposta pronta."},
    {titulo:"Revisão rápida",texto:"Escreva três palavras que ajudam a lembrar o assunto."},
    {titulo:"Explicação em 30 segundos",texto:"Explique o tema com suas próprias palavras."}
  ],instrucao:"Como usar: recorte nas bordas tracejadas, embaralhe e tente responder antes de consultar suas anotações."}},
  {...base,id:"imp-4",titulo:"Acordo da semana",resumo:"Defina compromissos de estudo que sejam claros e possíveis de cumprir.",abertura:"Uma folha para combinar consigo mesmo o que será prioridade nos próximos dias.",secoes:[],atencao:"Evite metas que dependam de uma semana perfeita.",destaque:"O acordo serve para orientar suas escolhas quando a semana apertar.",checklist:[],printSpec:{type:"fields",questions:["Nesta semana, minha prioridade será...","Vou estudar nos seguintes dias e horários...","Vou resolver aproximadamente... questões","Vou revisar principalmente...","Se eu perder um dia, vou reorganizar assim...","No fim da semana, vou verificar..."],instrucao:"Como usar: preencha no começo da semana e deixe em um lugar visível para consultar."}},
  {...base,id:"imp-5",titulo:"Mapa de metas da preparação",resumo:"Seis blocos grandes para separar metas de estudo, revisão e prova.",abertura:"Use os blocos como peças visuais para organizar suas metas.",secoes:[],atencao:"Uma meta precisa ser clara o bastante para você saber quando foi cumprida.",destaque:"Dividir uma meta grande em partes torna o próximo passo mais visível.",checklist:[],printSpec:{type:"cards-images",items:[
    {img:"cat-plano.webp",titulo:"PLANO"},
    {img:"cat-questoes.webp",titulo:"QUESTÕES"},
    {img:"cat-revisao.webp",titulo:"REVISÃO"},
    {img:"cat-desempenho.webp",titulo:"DESEMPENHO"},
    {img:"cat-simulados.webp",titulo:"SIMULADOS"},
    {img:"cat-perfil.webp",titulo:"PRÓXIMO PASSO"}
  ],instrucao:"Como usar: recorte os blocos, escreva uma meta no verso ou ao lado e reorganize-os conforme sua preparação avança."}}
];



const catalogo = [...materiais_plano,...materiais_questoes,...materiais_revisao,...materiais_desempenho,...materiais_simulados,...materiais_radar,...materiais_impressao];
const app = document.querySelector("#app");
const nav = document.querySelector("#bottom-nav");
const toast = document.querySelector("#toast");

const state = loadState();
let currentScreen = state.user ? (state.screen || "hoje") : "onboarding";
let selectedArea = null;
let selectedMaterial = null;
let editingProfile = false;

function safeStorageGet(){
  try{return localStorage.getItem(APP.storageKey)}catch{return null}
}
function safeStorageSet(value){
  try{localStorage.setItem(APP.storageKey,value);return true}catch{return false}
}
function loadState(){
  const raw=safeStorageGet();
  const base={user:null,items:[],saved:[],checklists:{},tasks:{},weekly:{},history:{},screen:"hoje"};
  if(!raw)return base;
  try{const parsed={...base,...JSON.parse(raw)}; parsed.weekly=parsed.weekly||{}; parsed.history=parsed.history||{}; return parsed}catch{return base}
}
function persist(){
  const ok=safeStorageSet(JSON.stringify(state));
  if(!ok) showToast("Não foi possível salvar neste navegador.");
}
function uid(){return crypto?.randomUUID?.() || String(Date.now())+Math.random()}
function esc(v=""){
  return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}
function money(v){return v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}
function daysUntil(date){
  if(!date)return null;
  const a=new Date(); a.setHours(0,0,0,0);
  const b=new Date(date+"T00:00:00"); b.setHours(0,0,0,0);
  return Math.ceil((b-a)/86400000);
}
function phaseFor(days){
  if(days===null)return {id:"iniciante",label:"Iniciante"};
  if(days>180)return {id:"base",label:"Base"};
  if(days>60)return {id:"pos-edital",label:"Pós-edital"};
  if(days>=0)return {id:"reta-final",label:"Reta final"};
  return {id:"pos-edital",label:"Pós-prova"};
}
function currentItem(){return state.items[0]||null}
function materialUnlocked(m){
  if(m.amostra)return true;
  return state.user?.plan==="essencial" || state.user?.plan==="completo" && (m.plano==="essencial"||m.plano==="completo");
}
function showToast(msg){
  toast.textContent=msg; toast.classList.add("show");
  clearTimeout(showToast.t); showToast.t=setTimeout(()=>toast.classList.remove("show"),2200);
}
function setScreen(screen){currentScreen=screen;state.screen=screen;persist();render()}
function renderNav(){
  if(!state.user){nav.innerHTML="";return}
  nav.innerHTML=APP.nav.map(n=>`<button class="nav-btn ${currentScreen===n.id?"active":""}" data-nav="${n.id}"><img src="./img/${n.icon}" alt="" aria-hidden="true">${n.label}</button>`).join("");
  nav.querySelectorAll("[data-nav]").forEach(b=>b.onclick=()=>setScreen(b.dataset.nav));
}
function shell(title,sub=""){
  return `<div class="topbar"><div><div class="eyebrow">${APP.name}</div><h1>${title}</h1>${sub?`<p class="muted">${sub}</p>`:""}</div><button class="icon-btn" data-action="plans" aria-label="Planos">⭐</button></div>`;
}
function render(){
  renderNav();
  if(!state.user){
    renderOnboarding();
    bind();
    return;
  }
  const views={hoje:renderHoje,explorar:renderExplorar,semana:renderSemana,perfil:renderPerfil,biblioteca:renderBiblioteca};
  app.innerHTML=views[currentScreen]?.() || renderHoje();
  bind();
}
function renderOnboarding(){
  app.innerHTML=`<div class="onboarding"><div class="card stack">
    <div><div class="eyebrow">COMECE PELO SEU PLANO</div><h1>Estude com uma rotina que acompanha sua prova.</h1><p class="muted">Cadastre seu nome e uma prova. O app calcula sua fase diariamente.</p></div>
    <div class="form-grid">
      <div class="field"><label>Seu nome</label><input id="ob-name" placeholder="Ex.: Caroline"></div>
      <div class="field"><label>Nome do concurso</label><input id="ob-contest" placeholder="Ex.: SEFAZ RS"></div>
      <div class="field"><label>Data da prova</label><input id="ob-date" type="date"></div>
      <div class="field"><label>Horas disponíveis por dia</label><input id="ob-hours" type="number" min="0.5" max="24" step="0.5" value="2"></div>
    </div>
    <button class="btn btn-primary btn-block" data-action="start">Começar grátis</button>
    <div class="section card stack" style="margin-top:16px">
      <div><div class="eyebrow">PLANOS</div><h2>Assine pelo Mercado Pago</h2><p class="muted">Escolha seu plano e faça a assinatura recorrente.</p></div>
      <div class="card stack"><span class="badge">Essencial</span><h3>Meu Fiscal — Essencial</h3><div class="price">${money(APP.plans.essencial.price)}<small>/mês</small></div><a class="btn btn-primary btn-block" href="${APP.plans.essencial.checkout}" target="_blank" rel="noopener noreferrer">Assinar pelo Mercado Pago</a></div>
      <div class="card stack"><span class="badge">Mais completo</span><h3>Meu Fiscal — Completo</h3><div class="price">${money(APP.plans.completo.price)}<small>/mês</small></div><a class="btn btn-primary btn-block" href="${APP.plans.completo.checkout}" target="_blank" rel="noopener noreferrer">Assinar pelo Mercado Pago</a></div>
    </div>
    <p class="small muted">Você poderá editar ou excluir seus dados depois.</p>
  </div></div>`;
}
function getCurrentCollection(){
  return APP.collections?.find(c=>c.id===APP.currentCollectionId)||null;
}
function collectionMaterials(collection){
  return (collection?.materiais||[]).map(id=>catalogo.find(m=>m.id===id)).filter(Boolean);
}
function renderCollectionCard(){
  const c=getCurrentCollection();
  const days=daysUntil(currentItem()?.date), phase=phaseFor(days);
  if(!c)return `<div class="section card"><div class="eyebrow">COLEÇÃO DO MÊS</div><h3>Sem coleção nova neste momento</h3><p class="muted">Ainda não há uma coleção configurada para sua faixa (${esc(phase.label)}).</p><button class="btn btn-secondary" data-action="library">Ver o que existe</button></div>`;
  const mats=collectionMaterials(c);
  const faixaAtendida=!Array.isArray(c.faixas)||c.faixas.includes(phase.id);
  if(!c.novidade || !mats.length || !faixaAtendida){
    return `<div class="section card"><div class="eyebrow">COLEÇÃO DO MÊS</div><h3>Nada novo para anunciar agora</h3><p class="muted">Não há conteúdo novo cadastrado para sua faixa (${esc(phase.label)}). Enquanto isso, você pode usar os materiais que já existem.</p><button class="btn btn-secondary" data-action="library">Ver o que existe</button></div>`;
  }
  return `<div class="section card collection-highlight"><div class="eyebrow">NOVIDADE DO MÊS · ${esc(formatMonth(c.mes))}</div><h3>${esc(c.titulo)}</h3><p class="muted">${esc(c.descricao)}</p><div class="small muted">${mats.length} materiais novos</div><button class="btn btn-primary" data-action="collection">Abrir coleção</button></div>`;
}
function renderHoje(){
  const u=currentItem(), days=daysUntil(u?.date), phase=phaseFor(days);
  const priority=days!==null&&days<=60?"Priorize revisão e questões da sua matéria mais fraca.":days!==null&&days<=180?"Aumente a prática de questões e acompanhe seus erros.":"Construa sua base e mantenha revisão desde o começo.";
  return shell(`Olá, ${esc(u.name)} 👋`,`${esc(u.contest)} · ${phase.label}`)+`
  <div class="card hero stack">
    <div class="eyebrow">CONTAGEM DA PROVA</div>
    <div class="stat">${days===null?"Sem data":days<0?"Prova já passou":`${days} dias`}</div>
    <div class="muted">${days<0?"Cadastre a próxima prova para recalcular seu plano.":"A contagem e a fase mudam automaticamente todos os dias."}</div>
  </div>
  <div class="section card stack"><div><span class="badge">Prioridade de hoje</span><h2>${priority}</h2></div><button class="btn btn-primary" data-action="week">Ver minha semana</button></div>
  ${renderCollectionCard()}
  <div class="section"><h2>3 ações rápidas</h2><div class="card stack">
    ${["Estudar um assunto prioritário","Revisar um conteúdo anterior","Resolver questões e corrigir os erros"].map((x,i)=>`<div class="task"><input class="check" type="checkbox" data-quick="${i}"><div><b>${x}</b><div class="small muted">${i===0?"Escolha a matéria destacada no seu plano.":i===1?"Use seus últimos erros para escolher o assunto.":"Registre o que errou para ajustar a próxima semana."}</div></div></div>`).join("")}
  </div></div>
  <div class="section card"><div class="row"><div><h3>Seu desempenho</h3><p class="small muted">Registre resultados na tela Perfil para personalizar recomendações.</p></div><span class="badge">${phase.label}</span></div></div>`;
}
function formatMonth(ym){
  if(!ym)return "";
  const [y,m]=ym.split("-").map(Number);
  return new Date(y,m-1,1).toLocaleDateString("pt-BR",{month:"long",year:"numeric"});
}

function renderExplorar(){
  const days=daysUntil(currentItem()?.date), phase=phaseFor(days);
  return shell("Explorar",`Conteúdo destacado para a fase: ${phase.label}`)+`
  <div class="area-grid">${APP.areas.map(a=>`<button class="area-card" data-area="${a.id}"><img class="area-icon" src="./img/${a.icon}" alt="" aria-hidden="true"><span><span class="area-name">${a.name}</span><br><span class="area-desc">${a.desc}</span></span></button>`).join("")}</div>
  ${selectedArea?renderArea(selectedArea):`<div class="section card"><b>Escolha uma área</b><p class="muted small">Os materiais disponíveis mudam conforme o catálogo e o plano de acesso.</p></div>`}`;
}
function renderArea(areaId){
  const area=APP.areas.find(a=>a.id===areaId), mats=catalogo.filter(m=>m.area===areaId);
  return `<div class="section"><div class="row"><h2>${area.name}</h2><button class="btn btn-ghost" data-action="clear-area">Fechar</button></div>
  <div class="stack">${mats.length?mats.map(renderMaterialCard).join(""):`<div class="card empty">Novos materiais desta área serão adicionados ao catálogo.</div>`}</div></div>`;
}
function renderMaterialCard(m){
  const lock=!materialUnlocked(m);
  return `<button class="card material ${lock?"locked":""}" data-material="${m.id}" style="text-align:left;border:1px solid var(--line);width:100%">
    ${lock?'<span class="lock">🔒</span>':""}<span class="badge">${m.tipo}</span><h3 class="material-title">${m.titulo}</h3><p class="muted small">${m.resumo}</p><div class="row small"><span>${m.tempo}</span><span>${m.amostra?"Amostra":"Assinante"}</span></div>
  </button>`;
}
function localDateKey(d=new Date()){
  const x=new Date(d); x.setHours(0,0,0,0);
  return `${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,"0")}-${String(x.getDate()).padStart(2,"0")}`;
}
function isoWeekInfo(date=new Date()){
  const d=new Date(date); d.setHours(0,0,0,0);
  const day=d.getDay()||7;
  const monday=new Date(d); monday.setDate(d.getDate()-day+1);
  const thursday=new Date(monday); thursday.setDate(monday.getDate()+3);
  const year=thursday.getFullYear();
  const firstThursday=new Date(year,0,4); firstThursday.setHours(0,0,0,0);
  const firstDay=firstThursday.getDay()||7;
  firstThursday.setDate(firstThursday.getDate()-firstDay+1);
  const week=Math.floor((monday-firstThursday)/604800000)+1;
  const sunday=new Date(monday); sunday.setDate(monday.getDate()+6);
  return {year,week,monday,sunday,key:`${year}-W${String(week).padStart(2,"0")}`};
}
function dateLabel(d){return d.toLocaleDateString("pt-BR",{day:"numeric",month:"long"});}
function hashString(str){let h=2166136261;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function seededPick(list,count,seed){
  const arr=[...list]; let h=hashString(seed);
  for(let i=arr.length-1;i>0;i--){h=(Math.imul(h,1664525)+1013904223)>>>0;const j=h%(i+1);[arr[i],arr[j]]=[arr[j],arr[i]]}
  return arr.slice(0,Math.min(count,arr.length));
}
function weeklyContext(){
  const u=currentItem()||{}; const wi=isoWeekInfo();
  const person=String(u.id||u.name||"")+"|"+String(u.name||"")+"|"+String(u.contest||"");
  const key=wi.key+"|"+person;
  if(!state.weekly[key])state.weekly[key]={variant:0};
  return {u,wi,key,person,variant:Number(state.weekly[key].variant)||0};
}
function getWeeklyTasks(){
  const {u,wi,person,variant}=weeklyContext();
  const days=daysUntil(u?.date), phase=phaseFor(days);
  const pool=APP.weeklyContent?.[phase.id]||APP.weeklyContent?.base||[];
  const count=3+(hashString(person+"|"+wi.key+"|count")%3);
  return seededPick(pool,count,person+"|"+wi.key+"|"+variant);
}
function taskKey(i){const {key}=weeklyContext();const t=getWeeklyTasks()[i];return `${key}-${hashString(t?.title||String(i))}`}
function renderSemana(){
  const u=currentItem(), days=daysUntil(u?.date), phase=phaseFor(days), ctx=weeklyContext(), tasks=getWeeklyTasks();
  const done=tasks.filter((_,i)=>state.tasks[taskKey(i)]).length;
  return shell("Minha Semana",`Foco atual: ${phase.label}`)+`
  <div class="card hero"><div class="eyebrow">SEMANA ${ctx.wi.week}</div><h2>Semana de ${dateLabel(ctx.wi.monday)} a ${dateLabel(ctx.wi.sunday)}</h2><p class="muted">${done} de ${tasks.length} concluídas. Você pode deixar qualquer item para depois sem cobrança ou punição.</p></div>
  <div class="section card">${tasks.map((t,i)=>`<label class="task ${state.tasks[taskKey(i)]?"done":""}"><input class="check" type="checkbox" data-task="${i}" ${state.tasks[taskKey(i)]?"checked":""}><span class="task-text"><b>${esc(t.title)}</b><br><span class="small muted">${esc(t.desc)}</span></span></label>`).join("")}</div>
  <button class="btn btn-secondary btn-block" data-action="new-week-combination">Pedir outra combinação</button>
  <p class="small muted center-text">A combinação é estável nesta semana. Só muda quando você pedir outra.</p>`;
}

function renderPerfil(){
  const u=currentItem();
  const histories=state.items.map(item=>({item,entries:[...(state.history?.[item.id]||[])].sort((a,b)=>b.date.localeCompare(a.date)||String(b.id).localeCompare(String(a.id)))}));
  return shell("Meu Perfil Fiscal","Seu cadastro muda o planejamento automaticamente.")+`
  <div class="card stack"><div class="row"><div><h2>Minha prova</h2><p class="small muted">${esc(u.contest)}</p></div><button class="btn btn-ghost" data-action="edit">Editar</button></div>
  <div class="grid-2"><div><b>Data</b><p>${u.date?new Date(u.date+"T00:00:00").toLocaleDateString("pt-BR"):"Não definida"}</p></div><div><b>Horas/dia</b><p>${u.hours||"Não definido"}</p></div></div></div>
  <div class="section card stack"><h2>Meus cadastros</h2>${state.items.map((item,i)=>`<div class="list-item"><div class="avatar">${esc(item.name.slice(0,1).toUpperCase())}</div><div style="flex:1"><b>${esc(item.name)}</b><div class="small muted">${esc(item.contest)} · ${item.date||"sem data"}</div></div><button class="icon-btn" data-edit-item="${i}">✏️</button><button class="icon-btn" data-delete-item="${i}">🗑️</button></div>`).join("")}
  <button class="btn btn-secondary btn-block" data-action="add-item">+ Adicionar outra preparação</button></div>
  <div class="section card stack"><div class="row"><div><h2>Histórico dela</h2><p class="small muted">Um diário separado para cada preparação cadastrada.</p></div><button class="btn btn-primary" data-action="add-history">+ Registrar</button></div>
  ${histories.map(({item,entries})=>`<section class="history-section"><div class="row"><h3>${esc(item.contest)}</h3><span class="badge">${entries.length} ${entries.length===1?"registro":"registros"}</span></div>${entries.length?entries.map(e=>`<article class="history-entry"><div class="small muted">${formatHistoryDate(e.date)}</div><p>${esc(e.text).replace(/\n/g,"<br>")}</p></article>`).join(""):`<div class="empty">Nenhum registro para esta preparação ainda.</div>`}</section>`).join("")}
  <button class="btn btn-secondary btn-block" data-action="export-history">Exportar histórico em TXT</button></div>
  <div class="section card stack"><h2>Conta</h2><button class="btn btn-secondary btn-block" data-action="plans">Ver planos</button><button class="btn btn-ghost btn-block" data-action="export">Exportar meus dados</button><button class="btn btn-danger btn-block" data-action="erase">Apagar meus dados</button></div>`;
}
function formatHistoryDate(value){
  const d=new Date(value); return Number.isNaN(d.getTime())?String(value):d.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"})+" às "+d.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"});
}
function renderBiblioteca(){
  const saved=catalogo.filter(m=>state.saved.includes(m.id));
  const days=daysUntil(currentItem()?.date), phase=phaseFor(days);
  const collections=(APP.collections||[]).filter(c=>collectionMaterials(c).length);
  return shell("Minha Biblioteca","Salve materiais para voltar depois.")+`
  ${collections.length?`<div class="card stack"><div class="row"><div><h2>Coleção do mês</h2><p class="small muted">A atual aparece como novidade somente quando há materiais novos cadastrados.</p></div></div>${collections.map(c=>`<section class="collection-block"><div class="row"><div><span class="badge">${c.id===APP.currentCollectionId&&c.novidade&&(!Array.isArray(c.faixas)||c.faixas.includes(phaseFor(daysUntil(currentItem()?.date)).id))?"NOVIDADE":"COLEÇÃO"}</span><h3>${esc(c.titulo)}</h3><p class="small muted">${esc(c.descricao)}</p></div><span class="small muted">${esc(formatMonth(c.mes))}</span></div><div class="stack">${collectionMaterials(c).map(renderMaterialCard).join("")}</div></section>`).join("")}</div>`:`<div class="section card"><h2>Coleção do mês</h2><p class="muted">Não há conteúdo novo cadastrado para esta faixa. Estes são os materiais que existem hoje:</p></div>`}
  <div class="section card stack"><h2>Salvos</h2>${saved.length?saved.map(renderMaterialCard).join(""):'<div class="empty">Você ainda não salvou nenhum material.</div>'}</div>
  <div class="section card stack"><h2>Para imprimir</h2>${catalogo.filter(m=>m.tipo==="material para imprimir").map(renderMaterialCard).join("")||'<div class="empty">Nenhum material disponível.</div>'}</div>
  <div class="section card stack"><h2>Checklists</h2>${catalogo.filter(m=>m.tipo==="checklist").map(renderMaterialCard).join("")||'<div class="empty">Nenhum checklist disponível.</div>'}</div>`;
}

function renderPlans(){
  document.body.insertAdjacentHTML("beforeend",`<div class="modal-backdrop" id="modal"><div class="modal stack">
    <div class="row"><h2>Escolha seu plano</h2><button class="icon-btn" data-close>✕</button></div>
    <p class="muted">Assine pelo Mercado Pago. Após a confirmação, volte ao Meu Fiscal para usar seu acesso.</p>
    <div class="card stack"><span class="badge">Essencial</span><h3>Meu Fiscal — Essencial</h3><div class="price">${money(APP.plans.essencial.price)}<small>/mês</small></div><p class="small muted">Plano, questões, revisões, simulados mensais, biblioteca e radar básico.</p><a class="btn btn-primary btn-block" href="${APP.plans.essencial.checkout}" target="_blank" rel="noopener noreferrer">Assinar pelo Mercado Pago</a></div>
    <div class="card stack"><span class="badge">Mais completo</span><h3>Meu Fiscal — Completo</h3><div class="price">${money(APP.plans.completo.price)}<small>/mês</small></div><p class="small muted">Tudo do Essencial + planejamento adaptativo, análise detalhada, simulados semanais, radar completo e relatórios.</p><a class="btn btn-primary btn-block" href="${APP.plans.completo.checkout}" target="_blank" rel="noopener noreferrer">Assinar pelo Mercado Pago</a></div>
    <p class="small muted">Pagamento e cobrança recorrente são processados pelo Mercado Pago.</p>
  </div></div>`);
  document.querySelector("#modal [data-close]").onclick=()=>document.querySelector("#modal").remove();
}
function openMaterial(id){
  const m=catalogo.find(x=>x.id===id);
  if(!m)return;

  selectedMaterial=m;

  if(!materialUnlocked(m)){
    renderPaywall(m);
    return;
  }

  // Simulados abrem no modo prova.
  if(m.tipo==="simulado" && Array.isArray(m.questoes) && m.questoes.length){
    iniciarSimulado(m);
    return;
  }
if(m.tipo==="questoes" && Array.isArray(m.questoes) && m.questoes.length){
  iniciarQuestoes(m);
  return;
}
  renderReader(m);
}
function renderReader(m){
  document.body.insertAdjacentHTML("beforeend",`<div class="modal-backdrop" id="modal"><div class="modal stack">
    <div class="row"><div><span class="badge">${m.tipo}</span><h2>${m.titulo}</h2></div><button class="icon-btn" data-close>✕</button></div>
    <p>${m.abertura}</p>
    ${m.secoes.map(s=>`<section><h3>${s.titulo}</h3><ul>${s.itens.map(i=>`<li>${i}</li>`).join("")}</ul></section>`).join("")}
    <div class="card paywall"><b>⚠️ Atenção</b><p>${m.atencao}</p></div>
    <blockquote><b>${m.destaque}</b></blockquote>
    ${m.checklist?.length?`<section><h3>Checklist</h3>${m.checklist.map((x,i)=>`<label class="task"><input class="check" type="checkbox" data-check="${m.id}-${i}" ${state.checklists[m.id+"-"+i]?"checked":""}><span>${x}</span></label>`).join("")}</section>`:""}
    <button class="btn ${state.saved.includes(m.id)?"btn-secondary":"btn-primary"} btn-block" data-save="${m.id}">${state.saved.includes(m.id)?"★ Salvo":"☆ Salvar material"}</button>
    ${m.printSpec ? `<button class="btn btn-secondary btn-block" data-print-material="${m.id}">🖨️ Imprimir ou salvar em PDF</button>` : ""}
  </div></div>`);
  bindModal();
}
function renderPaywall(m){
  document.body.insertAdjacentHTML("beforeend",`<div class="modal-backdrop" id="modal"><div class="modal stack">
    <div class="row"><h2>Conteúdo de assinante</h2><button class="icon-btn" data-close>✕</button></div>
    <div class="card"><span class="badge">${m.plano==="completo"?"Completo":"Essencial"}</span><h3>${m.titulo}</h3><p class="muted">${m.resumo}</p><p class="small">Você consegue ver o título e o resumo antes de assinar.</p></div>
    <button class="btn btn-primary btn-block" data-action="plans">Ver planos</button>
  </div></div>`);
  bindModal();
}
function bindModal(){
  const modal=document.querySelector("#modal"); if(!modal)return;
  modal.querySelector("[data-close]")?.addEventListener("click",()=>modal.remove());
  modal.querySelectorAll("[data-save]").forEach(b=>b.onclick=()=>{const id=b.dataset.save;if(state.saved.includes(id))state.saved=state.saved.filter(x=>x!==id);else state.saved.push(id);persist();modal.remove();openMaterial(id)});
  modal.querySelectorAll("[data-check]").forEach(c=>c.onchange=()=>{state.checklists[c.dataset.check]=c.checked;persist()});
  modal.querySelectorAll("[data-action='plans']").forEach(b=>b.onclick=()=>{modal.remove();renderPlans()});
  modal.querySelectorAll("[data-print-material]").forEach(b=>b.onclick=()=>printMaterial(b.dataset.printMaterial));
}

function printMaterial(id){
  const m=catalogo.find(x=>x.id===id);
  if(!m?.printSpec)return;
  const old=document.querySelector("#print-sheet");
  if(old)old.remove();
  document.body.insertAdjacentHTML("beforeend", buildPrintSheet(m));
  const sheet=document.querySelector("#print-sheet");
  sheet.setAttribute("aria-hidden","true");
  // Give the browser a frame to lay out the hidden print container before opening print preview.
  requestAnimationFrame(()=>requestAnimationFrame(()=>window.print()));
}

function printEsc(v=""){return esc(v).replace(/\n/g,"<br>")}
function buildPrintSheet(m){
  const p=m.printSpec;
  let content="";
  if(p.type==="table"){
    const cols=p.columns||[];
    content=`<div class="print-table-wrap"><table class="print-table"><thead><tr>${cols.map(c=>`<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${Array.from({length:p.rows||8},()=>`<tr>${cols.map(()=>`<td>&nbsp;</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }else if(p.type==="cards"){
    content=`<div class="print-cards">${(p.cards||[]).map((c,i)=>`<div class="print-card"><div class="print-card-num">${i+1}</div><h3>${esc(c.titulo)}</h3><p>${printEsc(c.texto)}</p><div class="write-lines"><span></span><span></span></div></div>`).join("")}</div>`;
  }else if(p.type==="fields"){
    content=`<div class="print-fields">${(p.questions||[]).map(q=>`<section class="print-field"><h3>${esc(q)}</h3><div class="answer-lines"><span></span><span></span><span></span><span></span></div></section>`).join("")}</div>`;
  }else if(p.type==="cards-images"){
    content=`<div class="print-image-cards">${(p.items||[]).map((x,i)=>`<div class="print-image-card"><img src="./img/${esc(x.img)}" alt=""><h3>${esc(x.titulo)}</h3></div>`).join("")}</div>`;
  }
  return `<section id="print-sheet" class="print-sheet"><header class="print-header"><h1>${esc(m.titulo)}</h1></header><main class="print-content">${content}</main><footer class="print-footer">${esc(p.instrucao||"Preencha à mão e use esta folha como apoio aos seus estudos.")}</footer></section>`;
}

window.addEventListener("afterprint",()=>{document.querySelector("#print-sheet")?.remove()});
function bind(){
  app.querySelectorAll("[data-area]").forEach(b=>b.onclick=()=>{selectedArea=b.dataset.area;render()});
  app.querySelectorAll("[data-material]").forEach(b=>b.onclick=()=>openMaterial(b.dataset.material));
  app.querySelectorAll("[data-action='plans']").forEach(b=>b.onclick=renderPlans);
  app.querySelectorAll("[data-action='week']").forEach(b=>b.onclick=()=>setScreen("semana"));
  app.querySelectorAll("[data-action='library']").forEach(b=>b.onclick=()=>setScreen("biblioteca"));
  app.querySelectorAll("[data-action='clear-area']").forEach(b=>b.onclick=()=>{selectedArea=null;render()});
  app.querySelectorAll("[data-task]").forEach(c=>c.onchange=()=>{state.tasks[taskKey(c.dataset.task)]=c.checked;persist();render()});
  app.querySelectorAll("[data-action='new-week-combination']").forEach(b=>b.onclick=()=>{const {key}=weeklyContext();state.weekly[key].variant=(Number(state.weekly[key].variant)||0)+1;persist();showToast("Nova combinação criada para esta semana.");render()});
  app.querySelectorAll("[data-action='start']").forEach(b=>b.onclick=startOnboarding);
  app.querySelectorAll("[data-action='edit']").forEach(b=>b.onclick=()=>openItemForm(0));
  app.querySelectorAll("[data-edit-item]").forEach(b=>b.onclick=()=>openItemForm(Number(b.dataset.editItem)));
  app.querySelectorAll("[data-delete-item]").forEach(b=>b.onclick=()=>deleteItem(Number(b.dataset.deleteItem)));
  app.querySelectorAll("[data-action='add-item']").forEach(b=>b.onclick=()=>openItemForm(null));
  app.querySelectorAll("[data-action='add-history']").forEach(b=>b.onclick=openHistoryForm);
  app.querySelectorAll("[data-action='export-history']").forEach(b=>b.onclick=exportHistory);
  app.querySelectorAll("[data-action='export']").forEach(b=>b.onclick=exportData);
  app.querySelectorAll("[data-action='erase']").forEach(b=>b.onclick=eraseData);
  app.querySelectorAll("[data-quick]").forEach(c=>c.onchange=()=>{showToast(c.checked?"Ação marcada.":"Ação desmarcada.");});
}
function openHistoryForm(){
  document.body.insertAdjacentHTML("beforeend",`<div class="modal-backdrop" id="modal"><div class="modal stack"><div class="row"><h2>Novo registro</h2><button class="icon-btn" data-close>✕</button></div><div class="field"><label>Preparação</label><select id="history-item">${state.items.map(item=>`<option value="${esc(item.id)}">${esc(item.contest)}</option>`).join("")}</select></div><div class="field"><label>O que você quer registrar?</label><textarea id="history-text" rows="7" placeholder="Escreva livremente o que aconteceu, o que aprendeu ou o que precisa retomar."></textarea></div><button class="btn btn-primary btn-block" data-save-history>Salvar registro</button></div></div>`);
  const modal=document.querySelector("#modal");
  modal.querySelector("[data-close]").onclick=()=>modal.remove();
  modal.querySelector("[data-save-history]").onclick=()=>{
    const itemId=modal.querySelector("#history-item").value, text=modal.querySelector("#history-text").value.trim();
    if(!text){showToast("Escreva alguma coisa antes de salvar.");return}
    if(!state.history[itemId])state.history[itemId]=[];
    state.history[itemId].push({id:uid(),date:new Date().toISOString(),text});
    persist(); modal.remove(); render(); showToast("Registro salvo no histórico.");
  };
}
function exportHistory(){
  const lines=["MEU FISCAL — HISTÓRICO","",`Exportado em ${new Date().toLocaleString("pt-BR")}`,""];
  state.items.forEach(item=>{
    lines.push(`PREPARAÇÃO: ${item.name} — ${item.contest}`);
    const entries=[...(state.history?.[item.id]||[])].sort((a,b)=>b.date.localeCompare(a.date));
    if(!entries.length)lines.push("Sem registros.");
    entries.forEach(e=>{lines.push(`${formatHistoryDate(e.date)}
${e.text}
`)});
    lines.push("----------------------------------------","");
  });
  const blob=new Blob([lines.join("\n")],{type:"text/plain;charset=utf-8"});
  const url=URL.createObjectURL(blob),a=document.createElement("a"); a.href=url;a.download="meu-fiscal-historico.txt";a.click();URL.revokeObjectURL(url);
}

function startOnboarding(){
  const name=document.querySelector("#ob-name").value.trim(),contest=document.querySelector("#ob-contest").value.trim(),date=document.querySelector("#ob-date").value,hours=document.querySelector("#ob-hours").value;
  if(!name||!contest){showToast("Preencha seu nome e o concurso.");return}
  state.user={plan:null};state.items=[{id:uid(),name,contest,date,hours}];state.screen="hoje";currentScreen="hoje";persist();render();showToast("Cadastro criado.");
}
function openItemForm(index){
  const item=index===null?{name:"",contest:"",date:"",hours:2}:state.items[index];
  document.body.insertAdjacentHTML("beforeend",`<div class="modal-backdrop" id="modal"><div class="modal stack"><div class="row"><h2>${index===null?"Adicionar preparação":"Editar preparação"}</h2><button class="icon-btn" data-close>✕</button></div>
  <div class="form-grid"><div class="field"><label>Nome</label><input id="f-name" value="${esc(item.name)}"></div><div class="field"><label>Concurso</label><input id="f-contest" value="${esc(item.contest)}"></div><div class="field"><label>Data da prova</label><input id="f-date" type="date" value="${esc(item.date)}"></div><div class="field"><label>Horas por dia</label><input id="f-hours" type="number" min=".5" max="24" step=".5" value="${esc(item.hours)}"></div></div>
  <button class="btn btn-primary btn-block" data-save-item>Salvar</button></div></div>`);
  const modal=document.querySelector("#modal");
  modal.querySelector("[data-close]").onclick=()=>modal.remove();
  modal.querySelector("[data-save-item]").onclick=()=>{
    const next={id:item.id||uid(),name:modal.querySelector("#f-name").value.trim(),contest:modal.querySelector("#f-contest").value.trim(),date:modal.querySelector("#f-date").value,hours:modal.querySelector("#f-hours").value};
    if(!next.name||!next.contest){showToast("Preencha nome e concurso.");return}
    if(index===null)state.items.push(next);else state.items[index]=next;
    persist();modal.remove();render();
  };
}
function deleteItem(index){
  if(state.items.length===1){showToast("Mantenha pelo menos uma preparação cadastrada.");return}
  if(!confirm("Excluir este cadastro e o planejamento ligado a ele?"))return;
  state.items.splice(index,1);persist();render();
}
function exportData(){
  const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="meu-fiscal-dados.json";a.click();URL.revokeObjectURL(url);
}
function eraseData(){
  if(!confirm("Apagar todos os dados deste aparelho?"))return;
  try{localStorage.removeItem(APP.storageKey)}catch{}
  location.reload();
}

render();
// ===============================
// SISTEMA DE SIMULADOS
// ===============================

let simuladoAtual = null;
let simuladoIndice = 0;
let simuladoRespostas = {};
let simuladoInicio = null;
let simuladoTimer = null;

function iniciarSimulado(m){
  simuladoAtual = m;
  simuladoIndice = 0;
  simuladoRespostas = {};
  simuladoInicio = Date.now();

  clearInterval(simuladoTimer);

  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" id="modal">
      <div class="modal stack" id="simulado-modal"></div>
    </div>
  `);

  renderQuestaoSimulado();

  simuladoTimer = setInterval(atualizarTempoSimulado, 1000);
}

function atualizarTempoSimulado(){
  const el=document.querySelector("#simulado-tempo");
  if(!el || !simuladoInicio)return;

  const segundos=Math.floor((Date.now()-simuladoInicio)/1000);
  const min=Math.floor(segundos/60);
  const sec=segundos%60;

  el.textContent =
    `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
}

function renderQuestaoSimulado(){
  const modal=document.querySelector("#simulado-modal");

  if(!modal || !simuladoAtual)return;

  const q=simuladoAtual.questoes[simuladoIndice];
  const total=simuladoAtual.questoes.length;
  const resposta=simuladoRespostas[q.id];

  modal.innerHTML=`
    <div class="row">
      <div>
        <span class="badge">SIMULADO</span>
        <h2>${esc(simuladoAtual.titulo)}</h2>
      </div>

      <button class="icon-btn" data-simulado-close>✕</button>
    </div>

    <div class="row">
      <b>Questão ${simuladoIndice+1} de ${total}</b>
      <span class="badge" id="simulado-tempo">00:00</span>
    </div>

    <div class="card">
      <p class="small muted">${esc(q.materia)}</p>
      <h3>${esc(q.enunciado)}</h3>
    </div>

    <div class="stack">
      ${q.alternativas.map((alt,i)=>`
        <button
          class="btn ${resposta===i?"btn-primary":"btn-secondary"} btn-block"
          data-alternativa="${i}">
          <b>${String.fromCharCode(65+i)}.</b>
          ${esc(alt)}
        </button>
      `).join("")}
    </div>

    <div class="row">
      <button
        class="btn btn-secondary"
        data-simulado-voltar
        ${simuladoIndice===0?"disabled":""}>
        ← Voltar
      </button>

      ${
        simuladoIndice===total-1
        ? `<button class="btn btn-primary" data-simulado-finalizar>Finalizar</button>`
        : `<button class="btn btn-primary" data-simulado-proxima>Próxima →</button>`
      }
    </div>
  `;

  bindSimulado();
  atualizarTempoSimulado();
}

function bindSimulado(){

  document.querySelector("[data-simulado-close]")?.addEventListener("click",()=>{
    sairSimulado();
  });

  document.querySelectorAll("[data-alternativa]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      simuladoRespostas[simuladoAtual.questoes[simuladoIndice].id]
        = Number(btn.dataset.alternativa);

      renderQuestaoSimulado();
    });
  });

  document.querySelector("[data-simulado-proxima]")?.addEventListener("click",()=>{
    if(simuladoIndice < simuladoAtual.questoes.length-1){
      simuladoIndice++;
      renderQuestaoSimulado();
    }
  });

  document.querySelector("[data-simulado-voltar]")?.addEventListener("click",()=>{
    if(simuladoIndice > 0){
      simuladoIndice--;
      renderQuestaoSimulado();
    }
  });

  document.querySelector("[data-simulado-finalizar]")?.addEventListener("click",()=>{
    finalizarSimulado();
  });
}

function finalizarSimulado(){

  clearInterval(simuladoTimer);

  let acertos=0;
  const porMateria={};

  simuladoAtual.questoes.forEach(q=>{

    const resposta=simuladoRespostas[q.id];
    const acertou=resposta===q.resposta;

    if(acertou)acertos++;

    if(!porMateria[q.materia]){
      porMateria[q.materia]={
        total:0,
        acertos:0
      };
    }

    porMateria[q.materia].total++;

    if(acertou){
      porMateria[q.materia].acertos++;
    }
  });

  const total=simuladoAtual.questoes.length;
  const percentual=Math.round((acertos/total)*100);

  const tempo=Math.floor((Date.now()-simuladoInicio)/1000);
  const minutos=Math.floor(tempo/60);
  const segundos=tempo%60;

  const resultado={
    id:Date.now(),
    simulado:simuladoAtual.id,
    titulo:simuladoAtual.titulo,
    data:new Date().toISOString(),
    acertos,
    total,
    percentual,
    tempo,
    porMateria
  };

  if(!state.simulados)state.simulados=[];

  state.simulados.unshift(resultado);

  if(state.simulados.length>50){
    state.simulados=state.simulados.slice(0,50);
  }

  persist();

  mostrarResultadoSimulado(resultado);
}

function mostrarResultadoSimulado(resultado){

  const materias=Object.entries(resultado.porMateria);

  document.querySelector("#simulado-modal").innerHTML=`

    <div class="row">
      <div>
        <span class="badge">RESULTADO</span>
        <h2>${esc(resultado.titulo)}</h2>
      </div>
    </div>

    <div class="card hero center-text">
      <div class="eyebrow">SEU RESULTADO</div>

      <h1>${resultado.acertos}/${resultado.total}</h1>

      <h2>${resultado.percentual}%</h2>

      <p class="muted">
        Tempo: ${String(Math.floor(resultado.tempo/60)).padStart(2,"0")}:${String(resultado.tempo%60).padStart(2,"0")}
      </p>
    </div>

    <div class="card stack">
      <h3>Desempenho por matéria</h3>

      ${materias.map(([materia,dados])=>{
        const p=Math.round((dados.acertos/dados.total)*100);

        return `
          <div class="list-item">
            <div style="flex:1">
              <b>${esc(materia)}</b>
              <div class="small muted">
                ${dados.acertos}/${dados.total} acertos
              </div>
            </div>

            <span class="badge">${p}%</span>
          </div>
        `;
      }).join("")}
    </div>

    <div class="card">
      <h3>Onde você precisa melhorar</h3>

      ${materias
        .sort((a,b)=>
          (b[1].acertos/b[1].total)-
          (a[1].acertos/a[1].total)
        )
        .map(([materia,dados])=>{
          const p=Math.round((dados.acertos/dados.total)*100);

          let emoji="🟡";

          if(p<60)emoji="🔴";
          else if(p>=80)emoji="🟢";

          return `<p>${emoji} <b>${esc(materia)}</b> — ${p}%</p>`;
        }).join("")}
    </div>

    <button class="btn btn-primary btn-block" data-simulado-close-final>
      Concluir
    </button>
  `;

  document.querySelector("[data-simulado-close-final]")
    ?.addEventListener("click",sairSimulado);
}

function sairSimulado(){

  clearInterval(simuladoTimer);

  document.querySelector("#modal")?.remove();

  simuladoAtual=null;
  simuladoIndice=0;
  simuladoRespostas={};
  simuladoInicio=null;
                }
// ===============================
// SISTEMA DE QUESTÕES
// ===============================

let questoesAtual = null;
let questoesLista = [];
let questoesIndice = 0;
let questoesRespostas = {};
let questoesInicio = null;

function iniciarQuestoes(m){

  questoesAtual = m;
  questoesLista = [...m.questoes];
  questoesIndice = 0;
  questoesRespostas = {};
  questoesInicio = null;

  const materias = [...new Set(
    questoesLista.map(q => q.materia)
  )];

  const dificuldades = [...new Set(
    questoesLista.map(q => q.dificuldade)
  )];

  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" id="modal">
      <div class="modal stack">

        <div class="row">
          <div>
            <span class="badge">QUESTÕES</span>
            <h2>Pratique seus conhecimentos</h2>
          </div>

          <button class="icon-btn" data-questoes-close>✕</button>
        </div>

        <p class="muted">
          Escolha como você quer treinar.
        </p>

        <label>
          <b>Matéria</b>

          <select id="questoes-materia" class="input">
            <option value="todas">Todas as matérias</option>

            ${materias.map(materia => `
              <option value="${esc(materia)}">
                ${esc(materia)}
              </option>
            `).join("")}
          </select>
        </label>

        <label>
          <b>Quantidade</b>

          <select id="questoes-quantidade" class="input">
            <option value="10">10 questões</option>
            <option value="20">20 questões</option>
            <option value="30">30 questões</option>
            <option value="50">50 questões</option>
          </select>
        </label>

        <label>
          <b>Dificuldade</b>

          <select id="questoes-dificuldade" class="input">
            <option value="todas">Todas</option>

            ${dificuldades.map(d => `
              <option value="${esc(d)}">
                ${esc(d.charAt(0).toUpperCase()+d.slice(1))}
              </option>
            `).join("")}
          </select>
        </label>

        <button
  type="button"
  class="btn btn-primary btn-block"
  id="botao-comecar-questoes"
>
  Começar questões
</button>

      </div>
    </div>
  `);

      document.querySelector("[data-questoes-close]")
    ?.addEventListener("click", sairQuestoes);

  document.querySelector("#botao-comecar-questoes")
  ?.addEventListener("click", prepararQuestoes);
}
function prepararQuestoes(){
  
console.log("BOTÃO DE QUESTÕES FUNCIONOU");
  
  const materia =
    document.querySelector("#questoes-materia")?.value || "todas";

  const dificuldade =
    document.querySelector("#questoes-dificuldade")?.value || "todas";

  const quantidade =
    Number(
      document.querySelector("#questoes-quantidade")?.value || 10
    );

  if(!questoesAtual || !Array.isArray(questoesAtual.questoes)){
  alert("Erro: o banco de questões não foi carregado.");
  return;
}

let lista = [...questoesAtual.questoes];

  if(materia !== "todas"){
    lista = lista.filter(q => q.materia === materia);
  }

  if(dificuldade !== "todas"){
    lista = lista.filter(q => q.dificuldade === dificuldade);
  }

  lista.sort(() => Math.random() - 0.5);

  lista = lista.slice(0, quantidade);

  if(!lista.length){
    alert("Não encontramos questões com esses filtros.");
    return;
  }

  questoesLista = lista;
  questoesIndice = 0;
  questoesRespostas = {};
  questoesInicio = Date.now();

  renderQuestao();
}

function renderQuestao(){

  const modal = document.querySelector("#modal .modal");

  if(!modal || !questoesLista.length)return;

  const q = questoesLista[questoesIndice];
  const total = questoesLista.length;
  const resposta = questoesRespostas[q.id];

  modal.innerHTML = `

    <div class="row">

      <div>
        <span class="badge">QUESTÕES</span>

        <h2>
          Questão ${questoesIndice+1} de ${total}
        </h2>
      </div>

      <button class="icon-btn" data-questoes-close>
        ✕
      </button>

    </div>

    <div class="card">

      <p class="small muted">
        ${esc(q.materia)} · ${esc(q.dificuldade)}
      </p>

      <h3>
        ${esc(q.enunciado)}
      </h3>

    </div>

    <div class="stack">

      ${q.alternativas.map((alt,i)=>`

        <button
          class="btn ${
            resposta===i
              ? "btn-primary"
              : "btn-secondary"
          } btn-block"
          data-questao-alternativa="${i}"
        >
          <b>${String.fromCharCode(65+i)}.</b>
          ${esc(alt)}
        </button>

      `).join("")}

    </div>

    <div class="row">

      <button
        class="btn btn-secondary"
        data-questao-voltar
        ${questoesIndice===0?"disabled":""}
      >
        ← Voltar
      </button>

      ${
        questoesIndice===total-1

        ? `
          <button
            class="btn btn-primary"
            data-questao-finalizar
          >
            Finalizar
          </button>
        `

        : `
          <button
            class="btn btn-primary"
            data-questao-proxima
          >
            Próxima →
          </button>
        `
      }

    </div>
  `;

  bindQuestoes();
}

function bindQuestoes(){

  document.querySelector("[data-questoes-close]")
    ?.addEventListener("click", sairQuestoes);

  document
    .querySelectorAll("[data-questao-alternativa]")
    .forEach(btn => {

      btn.addEventListener("click", () => {

        const q = questoesLista[questoesIndice];

        questoesRespostas[q.id] =
          Number(btn.dataset.questaoAlternativa);

        renderQuestao();

      });

    });

  document.querySelector("[data-questao-proxima]")
    ?.addEventListener("click", () => {

      if(questoesIndice < questoesLista.length - 1){

        questoesIndice++;

        renderQuestao();

      }

    });

  document.querySelector("[data-questao-voltar]")
    ?.addEventListener("click", () => {

      if(questoesIndice > 0){

        questoesIndice--;

        renderQuestao();

      }

    });

  document.querySelector("[data-questao-finalizar]")
    ?.addEventListener("click", finalizarQuestoes);
}
