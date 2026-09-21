// Folhas imprimíveis reutilizáveis. A impressão usa apenas HTML/CSS + window.print().
const base = {area:"plano",tipo:"material para imprimir",plano:"essencial",amostra:true,tempo:"3 min"};

export const materiais = [
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
