// Catálogo da área Simulados.
// O app.js já importa "materiais", então basta manter este nome/export.
export const materiais = [
  {
    id: "simulado-fiscal-01",
    area: "simulados",
    tipo: "simulado",
    titulo: "Simulado Fiscal 01",
    resumo: "20 questões para testar seus conhecimentos.",
    faixa: "Todos os níveis",
    plano: "essencial",
    tempo: "30 min",
    quantidade: 20,
    amostra: true,

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
        explicacao:
          "A tese é a ideia ou posição principal que o autor procura defender."
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
        explicacao:
          "O patrimônio líquido representa a diferença entre os ativos e os passivos."
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
        explicacao:
          "O conceito legal de tributo envolve uma prestação pecuniária compulsória instituída em lei."
      },

      {
        id: 4,
        materia: "Direito Administrativo",
        enunciado: "O princípio da legalidade exige que a Administração Pública:",
        alternativas: [
          "Faça somente aquilo que a lei permite.",
          "Faça tudo que desejar.",
          "Ignore os regulamentos.",
          "Atue sem necessidade de normas."
        ],
        resposta: 0,
        explicacao:
          "A Administração Pública deve atuar de acordo com a lei e o ordenamento jurídico."
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
        explicacao:
          "A Constituição é a norma fundamental e ocupa posição superior às demais normas."
      },

      {
        id: 6,
        materia: "Raciocínio Lógico",
        enunciado:
          "Se todos os fiscais são servidores e Ana é fiscal, podemos concluir que:",
        alternativas: [
          "Ana não é servidora.",
          "Ana é servidora.",
          "Nenhum fiscal é servidor.",
          "Não é possível concluir."
        ],
        resposta: 1,
        explicacao:
          "Se todo fiscal pertence ao grupo dos servidores e Ana é fiscal, Ana também é servidora."
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
        explicacao:
          "Textos instrucionais apresentam orientações, regras ou etapas para realizar algo."
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
        explicacao:
          "Na compra à vista, há entrada de mercadorias e saída de dinheiro, ambas contas do ativo."
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
        explicacao:
          "A obrigação principal tem como objeto o pagamento de tributo ou penalidade pecuniária."
      },

      {
        id: 10,
        materia: "Direito Administrativo",
        enunciado:
          "A publicidade dos atos administrativos está relacionada principalmente à:",
        alternativas: [
          "Transparência da atuação estatal.",
          "Proibição de divulgação.",
          "Eliminação do controle social.",
          "Dispensa de motivação."
        ],
        resposta: 0,
        explicacao:
          "A publicidade favorece a transparência e o controle da Administração Pública."
      }
    ]
  },

  {
    id: "mini-simulado",
    area: "simulados",
    tipo: "simulado",
    titulo: "Mini-simulado de Aquecimento",
    resumo: "10 questões rápidas para testar seu conhecimento.",
    faixa: "Todos os níveis",
    plano: "essencial",
    tempo: "15 min",
    quantidade: 10,
    amostra: true,
    questoes: []
  },

  {
    id: "simulado-reta-final",
    area: "simulados",
    tipo: "simulado",
    titulo: "Simulado Reta Final",
    resumo: "Treino completo para quem está se aproximando da prova.",
    faixa: "Reta final",
    plano: "completo",
    tempo: "45 min",
    quantidade: 30,
    amostra: false,
    questoes: []
  }
];
