// Landing Page Data File - All texts, prices, and structured content
// Easily editable for updates and custom offers

export interface FeatureItem {
  emoji: string;
  title: string;
  description: string;
}

export interface IdealItem {
  icon: 'book-open' | 'search' | 'syringe' | 'graduation-cap' | 'heart-pulse' | 'smartphone';
  title: string;
  description: string;
}

export interface BonusItem {
  id: string;
  title: string;
  description: string;
  originalPrice: string;
  image: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StepItem {
  step: string;
  icon: 'download' | 'mail' | 'book-open' | 'laptop';
  title: string;
  description: string;
}

export interface CarouselItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  tag?: string;
}

export const QUICK_BENEFITS = [
  'Acesso imediato após a compra',
  '+150 materiais organizados',
  'Consulte sem perder tempo pesquisando',
  'Estude e revise quando precisar',
];

export const MATERIAL_STRIP = [
  'Guia de consulta',
  'Tabela de vitaminas',
  'Apresentações',
  'Mecanismos e benefícios',
  'Cuidados e segurança',
  'Checklist prático',
];

export const FEATURES: FeatureItem[] = [
  {
    emoji: '📚',
    title: '+150 materiais organizados',
    description: 'Materiais sobre vitaminas injetáveis reunidos para estudar, revisar e consultar sem precisar pesquisar em vários lugares.',
  },
  {
    emoji: '💉',
    title: 'Conteúdos sobre vitaminas',
    description: 'Informações organizadas sobre vitaminas, apresentações, características e outros pontos importantes para consulta.',
  },
  {
    emoji: '📋',
    title: 'Guias e materiais de consulta',
    description: 'Conteúdos estruturados para localizar rapidamente o que procura e complementar seus estudos.',
  },
  {
    emoji: '🛡️',
    title: 'Cuidados e segurança',
    description: 'Materiais que reforçam boas práticas, cuidados e informações importantes relacionadas ao tema.',
  },
];

export const TEAL_BAND_BENEFITS = [
  'Encontre materiais para estudo e consulta em poucos segundos',
  'Acesse conteúdos organizados sobre vitaminas e apresentações',
  'Consulte guias, materiais visuais e conteúdos de apoio',
  'Estude e revise no celular, tablet ou computador',
  'Tenha um acervo para consultar sempre que precisar',
];

export const FIRST_CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: '01',
    title: 'Vitamina B12',
    subtitle: 'Cianocobalamina / Hidroxocobalamina',
    description: 'Informações essenciais para estudo e consulta, apresentações 1.000 e 5.000 mcg/mL, vias IM/SC.',
    image: '/assets/materials/material-c1-01.jpg',
    tag: 'GUIA DE CONSULTA',
  },
  {
    id: '02',
    title: 'Vitamina A (Retinol)',
    subtitle: 'Informações Essenciais para Consulta',
    description: 'Apresentação frasco-ampola 50.000 UI/mL, posologia, vias IM/IV, cuidados e locais de aplicação.',
    image: '/assets/materials/material-c1-02.jpg',
    tag: 'GUIA PRÁTICO',
  },
  {
    id: '03',
    title: 'Vitamina D (Colecalciferol D3)',
    subtitle: 'Informações Essenciais para Consulta',
    description: 'Apresentações comuns, absorção de cálcio e fósforo, exames séricos, posologia e vias IM/IV.',
    image: '/assets/materials/material-c1-03.jpg',
    tag: 'POSOLOGIA & EXAMES',
  },
  {
    id: '04',
    title: 'Vitamina D (D3 / D2)',
    subtitle: 'Colecalciferol / Ergocalciferol',
    description: 'Guia de consulta, mecanismo de ação hepático e renal, posologia e reações adversas.',
    image: '/assets/materials/material-c1-04.jpg',
    tag: 'METABOLISMO',
  },
  {
    id: '05',
    title: 'Vitamina D (Colecalciferol)',
    subtitle: 'Guia de Consulta Geral',
    description: 'Concentrações de 100.000 a 500.000 UI/mL, metabolismo VDR, indicações e contraindicações.',
    image: '/assets/materials/material-c1-05.jpg',
    tag: 'DOSAGENS & VIAS',
  },
  {
    id: '06',
    title: 'Vitamina B12 (Aprofundado)',
    subtitle: 'Kit Vitaminas Injetáveis',
    description: 'Mecanismo na síntese de DNA e hemácias, posologia geral, vias ventroglútea e subcutânea.',
    image: '/assets/materials/material-c1-06.jpg',
    tag: 'SÍNTESE & POSOLOGIA',
  },
];

export const SECOND_CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: '07',
    title: 'Ferro IV (Carboximaltose Férrica)',
    subtitle: 'Guia de Consulta e Infusão',
    description: 'Tratamento de anemia ferropriva, cálculo de dose, diluição em soro e administração intravenosa.',
    image: '/assets/materials/material-c2-01.jpg',
    tag: 'INFUSÃO IV',
  },
  {
    id: '08',
    title: 'Vitamina C (Ácido Ascórbico)',
    subtitle: 'Guia de Consulta Rápida',
    description: 'Solução injetável 100, 500 e 1.000 mg/mL, estrutura química, síntese de colágeno e vias IM/IV.',
    image: '/assets/materials/material-c2-02.jpg',
    tag: 'ANTIOXIDANTE',
  },
  {
    id: '09',
    title: 'Vitamina D (Colecalciferol D3)',
    subtitle: 'Informações Essenciais para Consulta',
    description: 'Funções ósseas e musculares, dosagens de 50.000 a 200.000 UI/mL e vias ventroglútea e deltoide.',
    image: '/assets/materials/material-c2-03.jpg',
    tag: 'SAÚDE ÓSSEA',
  },
  {
    id: '10',
    title: 'Vitamina C (Ácido Ascórbico)',
    subtitle: 'Informações Essenciais para Estudo',
    description: 'Fontes naturais, reações adversas, cuidados de armazenamento, preparo e administração clínica.',
    image: '/assets/materials/material-c2-04.jpg',
    tag: 'ESTUDO & CLÍNICA',
  },
  {
    id: '11',
    title: 'Complexo B (B1 a B12)',
    subtitle: 'Guia de Consulta Completo',
    description: 'Funções de B1, B2, B3, B5, B6 e B12, metabolismo energético, suporte neurológico e vias.',
    image: '/assets/materials/material-c2-05.jpg',
    tag: 'COMPLEXO B',
  },
  {
    id: '12',
    title: 'Vitamina E (Acetato de Tocoferol)',
    subtitle: 'Solução Injetável 100 mg/mL',
    description: 'Ação antioxidante contra radicais livres, proteção celular, posologia e precauções.',
    image: '/assets/materials/material-c2-06.jpg',
    tag: 'PROTEÇÃO CELULAR',
  },
];

export const CAROUSEL_ITEMS: CarouselItem[] = [
  ...FIRST_CAROUSEL_ITEMS,
];

export const IDEAL_ITEMS: IdealItem[] = [
  {
    icon: 'book-open',
    title: 'Estudar com mais organização',
    description: 'Ter materiais reunidos para aprender e revisar assuntos relacionados às vitaminas injetáveis.',
  },
  {
    icon: 'search',
    title: 'Consultar informações com facilidade',
    description: 'Encontrar materiais de apoio em um único Kit sempre que quiser revisar determinado assunto.',
  },
  {
    icon: 'syringe',
    title: 'Aprofundar seus conhecimentos',
    description: 'Explorar conteúdos sobre vitaminas, apresentações, características e cuidados.',
  },
  {
    icon: 'graduation-cap',
    title: 'Complementar os estudos',
    description: 'Ter um acervo adicional para acompanhar sua formação, cursos e estudos na área da saúde.',
  },
  {
    icon: 'heart-pulse',
    title: 'Ter apoio profissional',
    description: 'Para profissionais habilitados que desejam ampliar sua biblioteca de consulta e revisão.',
  },
  {
    icon: 'smartphone',
    title: 'Ter tudo sempre à mão',
    description: 'Consulte pelo celular, tablet ou computador onde estiver.',
  },
];

export const RECEIVE_ITEMS = [
  '+150 materiais sobre vitaminas injetáveis',
  'Conteúdos sobre vitaminas e suas características',
  'Apresentações e materiais de consulta',
  'Guias e conteúdos visuais',
  'Materiais para estudo e revisão',
  'Conteúdos sobre cuidados e segurança',
  'Materiais de apoio para profissionais habilitados',
  'Tudo organizado em um único Kit',
  'Acesso pelo celular, tablet ou computador',
  'Acesso imediato após a compra',
];

export const BONUSES: BonusItem[] = [
  {
    id: '01',
    title: 'Guia de Consulta Rápida',
    description: 'Um material resumido e organizado para encontrar e revisar informações importantes com muito mais praticidade.',
    originalPrice: 'R$ 9,90',
    image: '/assets/bonus-novo-1.png',
  },
  {
    id: '02',
    title: 'Tabelas Visuais de Vitaminas',
    description: 'Tabelas organizadas para facilitar seus estudos, revisões e consultas sobre as vitaminas abordadas.',
    originalPrice: 'R$ 9,90',
    image: '/assets/bonus-novo-2.png',
  },
  {
    id: '03',
    title: 'Checklist de Cuidados e Segurança',
    description: 'Um material de apoio para profissionais habilitados revisarem cuidados e boas práticas.',
    originalPrice: 'R$ 14,90',
    image: '/assets/bonus-novo-3.png',
  },
  {
    id: '04',
    title: 'Biblioteca Extra Profissional',
    description: 'Uma seleção adicional para ampliar sua biblioteca digital e seus conteúdos de estudo.',
    originalPrice: 'R$ 19,90',
    image: '/assets/bonus-novo-4.png',
  },
];

export const PRICING = {
  basic: {
    tag: 'PLANO BÁSICO',
    subtitle: 'Kit Vitaminas Injetáveis',
    description: 'O Kit principal com materiais digitais para estudar e consultar. Os quatro bônus são exclusivos do Plano Completo.',
    price: 'R$ 14,90',
    checkoutUrl: 'https://pay.wiapy.com/OkPO_GCXuMK',
    features: [
      'Kit Vitaminas Injetáveis',
      'Materiais para estudo e revisão',
      'Conteúdos organizados',
      'Guias e materiais visuais',
      'Acesso imediato',
    ],
  },
  complete: {
    tag: 'PLANO COMPLETO',
    subtitle: 'Kit Vitaminas Injetáveis + todos os bônus',
    description: 'Tudo do Plano Básico + Guia de Consulta Rápida, Tabelas Visuais de Vitaminas, Checklist de Cuidados e Segurança e Biblioteca Extra Profissional.',
    price: 'R$ 29,90',
    checkoutUrl: 'https://pay.wiapy.com/KHeZxqCO5Pkc',
    image: '/assets/vitaminas-kit-completo-XaSl-M8f.png',
    bonusIncludedText: 'R$ 54,60 EM BÔNUS — HOJE INCLUSOS',
    installmentsText: 'Só R$ 15 a mais que o Básico.',
    features: [
      '+150 materiais sobre vitaminas injetáveis',
      'Conteúdos para estudo e revisão',
      'Guias e materiais visuais',
      'Cuidados e segurança',
      '4 bônus exclusivos',
      'Acesso imediato',
    ],
  },
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Ricardo Fernandes',
    role: 'Enfermeiro',
    quote: 'Gostei principalmente da organização dos materiais. Ter os conteúdos reunidos facilita bastante na hora de estudar e revisar determinados assuntos.',
    avatar: '/assets/avatars/avatar-2.jpg',
  },
  {
    name: 'Luis Oliveira',
    role: 'Farmacêutico',
    quote: 'O Kit é muito prático para consulta. Em vez de ficar procurando materiais em vários lugares, consigo manter conteúdos importantes reunidos e organizados.',
    avatar: '/assets/avatars/avatar-1.jpg',
  },
  {
    name: 'Camila Martins',
    role: 'Técnica de Enfermagem',
    quote: 'O que mais me chamou atenção foi a quantidade de materiais e a facilidade para encontrar conteúdos para estudo e revisão.',
    avatar: '/assets/avatars/avatar-3.jpg',
  },
  {
    name: 'Fernanda Almeida',
    role: 'Enfermeira',
    quote: 'É um material que posso deixar salvo e consultar quando preciso revisar algum assunto. A organização deixa o estudo muito mais prático.',
    avatar: '/assets/avatars/avatar-4.jpg',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'O Kit Vitaminas Injetáveis é um curso?',
    answer: 'Não. O Kit é um acervo digital completo com +150 materiais organizados (guias de consulta rápida, tabelas visuais, apresentações estruturadas e checklists de segurança) para estudar, consultar e revisar quando precisar.',
  },
  {
    question: 'Para quem este material foi criado?',
    answer: 'Para estudantes, profissionais da área da saúde e interessados no tema que desejam ter um material visual, organizado e prático para consulta e estudo diário. Conteúdos procedimentais são direcionados a profissionais devidamente habilitados.',
  },
  {
    question: 'As atividades e conteúdos servem para estudo e clínica?',
    answer: 'Sim! Os materiais foram estruturados para serem práticos e objetivos, servindo tanto para apoiar seus estudos teóricos quanto para rápida consulta de dados, tabelas e parâmetros no dia a dia profissional.',
  },
  {
    question: 'Preciso comprar materiais ou equipamentos caros?',
    answer: 'Não! O Kit é um material digital de estudo e consulta. Você não precisa adquirir nenhum software ou equipamento especial para começar a estudar e aplicar os conhecimentos.',
  },
  {
    question: 'Preciso ser profissional da saúde para comprar?',
    answer: 'Não para acessar os conteúdos educacionais e teóricos. O material é excelente para estudo e formação. No entanto, os materiais não habilitam o comprador a realizar procedimentos privativos de categorias regulamentadas sem a devida formação legal.',
  },
  {
    question: 'O material é físico?',
    answer: 'Não, o material é 100% digital. Você não precisa esperar frete nem pagar entrega: o acesso é liberado imediatamente após o pagamento para baixar ou consultar diretamente quando quiser.',
  },
  {
    question: 'Posso usar pelo celular?',
    answer: 'Sim! Todos os arquivos estão em formato digital otimizado e compatível com celulares (Android e iPhone/iOS), tablets e computadores.',
  },
  {
    question: 'Os bônus chegam junto com o produto?',
    answer: 'Sim! Ao escolher o Plano Completo, todos os 4 bônus exclusivos já estarão liberados imediatamente juntos na sua área de membros para download e consulta.',
  },
  {
    question: 'Por quanto tempo terei acesso?',
    answer: 'O seu acesso aos arquivos digitais do Kit é permanente após o download, permitindo que você consulte e revise o acervo sempre que desejar no seu próprio dispositivo.',
  },
  {
    question: 'Este material substitui avaliação profissional?',
    answer: 'Não. O Kit possui caráter estritamente educacional e informativo de apoio. Ele não substitui cursos regulamentados, avaliação clínica, diagnóstico, prescrições médicas ou orientação de profissionais habilitados.',
  },
];

export const STEPS: StepItem[] = [
  {
    step: '01',
    icon: 'download',
    title: 'Conclua sua compra',
    description: 'Após o pagamento, seu acesso é liberado automaticamente.',
  },
  {
    step: '02',
    icon: 'mail',
    title: 'Entre na área de membros',
    description: 'Você recebe os dados para acessar os materiais digitais.',
  },
  {
    step: '03',
    icon: 'book-open',
    title: 'Baixe os arquivos',
    description: 'Encontre os conteúdos organizados e salve o que precisar.',
  },
  {
    step: '04',
    icon: 'laptop',
    title: 'Use pelo celular, tablet ou computador',
    description: 'Consulte onde preferir, sempre que precisar.',
  },
];
