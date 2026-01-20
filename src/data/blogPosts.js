
const getDetailedContent = (title, category, excerpt) => {
  // Helper to generate section HTML
  const Section = ({ title, children }) => `
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-slate-900 mb-4">${title}</h2>
      <div class="text-slate-700 leading-relaxed space-y-4">
        ${children}
      </div>
    </div>
  `;

  const Intro = () => `
    <p class="text-xl font-medium text-slate-800 leading-relaxed mb-8">
      ${excerpt} Neste artigo aprofundado, exploraremos as nuances de <strong>${title}</strong>, indo muito além do básico para entender o impacto real em times de engenharia de alta performance.
    </p>
  `;

  // Content strategies based on Category Groups
  const strategies = {
    // -------------------------------------------------------------------------
    // ARCHITECTURE & SYSTEM DESIGN & DATABASE
    // -------------------------------------------------------------------------
    technical: () => `
      ${Section({
        title: "Fundamentos e Contexto Técnico",
        children: `
          <p>Para um Tech Lead, dominar <strong>${title}</strong> não é apenas sobre conhecer a sintaxe ou a ferramenta, mas compreender os princípios arquiteturais subjacentes. A decisão de adotar essa abordagem deve ser baseada em requisitos não-funcionais claros: escalabilidade, disponibilidade, manutenibilidade e custo.</p>
          <p>Muitos times falham ao implementar soluções complexas sem a devida maturidade. É crucial avaliar se a complexidade acidental introduzida compensa os benefícios de longo prazo. No contexto de sistemas distribuídos modernos, cada decisão de design carrega trade-offs que precisam ser explicitados.</p>
        `
      })}

      ${Section({
        title: "Cenários de Uso e Anti-Patterns",
        children: `
          <p>A aplicação ideal de <strong>${title}</strong> geralmente ocorre em cenários onde o volume de dados ou a carga de requisições excede a capacidade de soluções convencionais. No entanto, observe os anti-patterns comuns:</p>
          <ul class="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Over-engineering:</strong> Aplicar conceitos avançados em problemas simples (o famoso "canhão para matar mosca").</li>
            <li><strong>Ignorar a Latência:</strong> Desconsiderar o impacto na rede ao distribuir componentes.</li>
            <li><strong>Acoplamento Oculto:</strong> Criar dependências que não são óbvias à primeira vista, dificultando o deploy independente.</li>
          </ul>
        `
      })}

      ${Section({
        title: "Implementação na Prática",
        children: `
          <p>Ao liderar a implementação, foque na observabilidade desde o dia 1. Se você não consegue medir o comportamento de <strong>${title}</strong>, você não consegue gerenciá-lo. Logs estruturados, métricas de negócio e tracing distribuído são inegociáveis.</p>
          <p>Além disso, considere a estratégia de migração. Raramente temos o luxo de reescrever sistemas do zero (Greenfield). Estratégias como o <em>Strangler Fig Pattern</em> são essenciais para introduzir novos conceitos arquiteturais em sistemas legados de forma segura e incremental.</p>
        `
      })}

      <div class="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
        <h4 class="font-bold text-blue-900 mb-2">Dica do Tech Lead</h4>
        <p class="text-blue-800">
          Nunca adote uma tecnologia apenas pelo hype. Faça POCs (Provas de Conceito), meça os resultados e documente a decisão através de ADRs (Architecture Decision Records). A memória técnica do time é valiosa.
        </p>
      </div>
    `,

    // -------------------------------------------------------------------------
    // DEVOPS, SRE, PLATFORM, CLOUD
    // -------------------------------------------------------------------------
    operational: () => `
      ${Section({
        title: "A Ponte entre Código e Produção",
        children: `
          <p>Discutir <strong>${title}</strong> é discutir a confiabilidade e a velocidade de entrega do time. A cultura DevOps evoluiu de apenas "automatizar scripts" para a engenharia de plataforma completa. O objetivo final é reduzir a carga cognitiva dos desenvolvedores, permitindo que eles foquem na lógica de negócio.</p>
          <p>Um ambiente saudável trata a infraestrutura como produto. Isso significa aplicar as mesmas práticas de desenvolvimento (testes, code review, versionamento) ao código de infraestrutura (IaC) e pipelines.</p>
        `
      })}

      ${Section({
        title: "Métricas que Importam",
        children: `
          <p>Como saber se estamos evoluindo em <strong>${title}</strong>? Olhe para as DORA Metrics:</p>
          <ul class="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Deployment Frequency:</strong> Com que frequência vamos à produção?</li>
            <li><strong>Lead Time for Changes:</strong> Quanto tempo leva do commit ao deploy?</li>
            <li><strong>Time to Restore Service:</strong> Quão rápido nos recuperamos de falhas?</li>
            <li><strong>Change Failure Rate:</strong> Quantos deploys causam problemas?</li>
          </ul>
          <p class="mt-4">Ferramentas e processos devem servir para melhorar esses números, não para criar burocracia.</p>
        `
      })}

      ${Section({
        title: "Segurança e Governança",
        children: `
          <p>Não podemos falar de operações sem falar de segurança. O conceito de <em>Shift Left</em> é fundamental aqui: trazer as verificações de segurança para o início do ciclo de desenvolvimento, e não apenas no final. <strong>${title}</strong> deve incorporar princípios de segurança por design, garantindo que o caminho mais fácil para o desenvolvedor seja também o mais seguro.</p>
        `
      })}
    `,

    // -------------------------------------------------------------------------
    // LEADERSHIP, CULTURE, MANAGEMENT, SOFT SKILLS
    // -------------------------------------------------------------------------
    leadership: () => `
      ${Section({
        title: "O Papel da Liderança Técnica",
        children: `
          <p>Muitos desenvolvedores assumem que se tornar Tech Lead significa apenas "codar mais rápido" ou "saber mais arquitetura". Na verdade, <strong>${title}</strong> toca no cerne da liderança: multiplicar sua eficácia através dos outros. Seu código roda na máquina; sua liderança roda nas pessoas.</p>
          <p>O desafio principal não é técnico, é sociotécnico. Como garantir alinhamento? Como gerenciar expectativas? Como manter o time motivado enquanto lidamos com dívida técnica e prazos apertados?</p>
        `
      })}

      ${Section({
        title: "Construindo Confiança e Autonomia",
        children: `
          <p>Para aplicar <strong>${title}</strong> com sucesso, é necessário um ambiente de Segurança Psicológica. Se o time tem medo de errar, ele esconde os problemas. Se esconde problemas, a qualidade cai e a inovação morre.</p>
          <p>Como líder, sua função é dar contexto, não ordens. Diga ao time "para onde vamos" e "por que", e deixe que eles definam "como" chegar lá. Isso cria ownership e responsabilidade real.</p>
        `
      })}

      ${Section({
        title: "Comunicação como Ferramenta de Engenharia",
        children: `
          <p>A habilidade de articular ideias complexas de forma simples é o superpoder de um Tech Lead. Seja negociando prazos, explicando <strong>${title}</strong> para stakeholders não-técnicos ou dando feedback difícil, a clareza é gentileza.</p>
          <p>Documentação, one-on-ones eficazes e reuniões bem estruturadas são as ferramentas que evitam o caos e o burnout.</p>
        `
      })}

      <div class="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
        <h4 class="font-bold text-amber-900 mb-2">Reflexão de Carreira</h4>
        <p class="text-amber-800">
          Liderança é serviço. Ao final do dia, pergunte-se: "O que eu fiz hoje que facilitou o trabalho do meu time?" Se a resposta for "escrevi todo o código difícil sozinho", você pode estar se tornando um gargalo, não um líder.
        </p>
      </div>
    `,

    // -------------------------------------------------------------------------
    // PRODUCT, AGILE, PROCESS
    // -------------------------------------------------------------------------
    product: () => `
      ${Section({
        title: "Engenharia Orientada a Produto",
        children: `
          <p>O tempo em que engenharia e produto eram silos separados acabou. Entender <strong>${title}</strong> é entender como entregamos valor real para o usuário final. Código que não resolve um problema de negócio é apenas custo.</p>
          <p>Tech Leads precisam sentar na mesa de decisão. Participar do Product Discovery ajuda a evitar soluções tecnicamente inviáveis e permite sugerir atalhos tecnológicos que o time de produto desconhece.</p>
        `
      })}

      ${Section({
        title: "Eficiência vs Eficácia",
        children: `
          <p>Podemos ser muito eficientes (fazer rápido) em construir a coisa errada. A eficácia (fazer a coisa certa) é mais importante. O tópico <strong>${title}</strong> nos ajuda a validar hipóteses com o menor esforço possível.</p>
          <p>Utilize dados para embasar decisões. Evite o "achismo". Se vamos construir uma feature complexa, quais métricas esperamos mover? Se vamos refatorar, qual ganho de performance ou produtividade esperamos?</p>
        `
      })}

      ${Section({
        title: "Processos que Habilitam o Fluxo",
        children: `
          <p>Processos ágeis devem servir para reduzir o atrito, não aumentá-lo. Se o Jira ou a Daily estão atrapalhando, mude-os. O foco deve ser no Fluxo (Flow): reduzir o trabalho em progresso (WIP), diminuir o tamanho dos lotes (batch size) e entregar continuamente.</p>
        `
      })}
    `
  };

  // Logic to select the best template based on category
  let generate = strategies.technical; // Default

  const catLower = category.toLowerCase();
  
  if (['liderança', 'cultura', 'marketing pessoal', 'trabalho em equipe', 'comunicação', 'gestão de conflitos', 'hiring', 'onboarding', 'avaliações', 'carreira'].some(c => catLower.includes(c))) {
    generate = strategies.leadership;
  } else if (['agilidade', 'gestão de projetos', 'gestão de produtos', 'fluxo', 'org design', 'produtividade'].some(c => catLower.includes(c))) {
    generate = strategies.product;
  } else if (['devops', 'sre', 'platform engineering', 'tech metrics', 'cloud', 'segurança'].some(c => catLower.includes(c))) {
    generate = strategies.operational;
  }

  // Common closing for all posts
  const Closing = `
    <div class="mt-12 pt-8 border-t border-slate-200">
      <h3 class="text-xl font-bold text-slate-900 mb-4">Conclusão</h3>
      <p class="text-slate-700 leading-relaxed">
        Dominar <strong>${title}</strong> é um passo contínuo. A tecnologia muda, os times mudam, mas os princípios fundamentais permanecem. Comece aplicando pequenas melhorias baseadas no que discutimos hoje e itere conforme o feedback do sistema e das pessoas.
      </p>
      <p class="text-slate-700 leading-relaxed mt-4">
        Gostou deste artigo? Compartilhe com seu time e continue acompanhando o blog para mais conteúdos sobre a jornada Tech Lead.
      </p>
    </div>
  `;

  return `
    <div class="blog-content-wrapper">
      ${Intro()}
      ${generate()}
      ${Closing}
    </div>
  `;
};

// Re-exporting the data with the new content generation logic
export const blogPosts = [
  // --- TECNOLOGIA: Arquitetura de Solução ---
  {
    id: 1,
    title: "Microserviços vs Monólitos: A Escolha Definitiva",
    slug: "microservicos-vs-monolitos",
    excerpt: "Não existe bala de prata. Entenda os trade-offs reais entre arquiteturas distribuídas e monolíticas e quando migrar (ou não).",
    category: "Arquitetura",
    date: "15 Dez, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    id: 2,
    title: "Padrões de Arquitetura Hexagonal na Prática",
    slug: "arquitetura-hexagonal-pratica",
    excerpt: "Como desacoplar seu domínio da infraestrutura utilizando Ports and Adapters para criar sistemas testáveis e manuteníveis.",
    category: "Arquitetura",
    date: "14 Dez, 2023", readTime: "12 min", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    id: 3,
    title: "Event-Driven Architecture: O Guia Completo",
    slug: "event-driven-architecture-guia",
    excerpt: "Desacoplamento temporal e espacial: como arquiteturas orientadas a eventos podem escalar seu sistema e aumentar a resiliência.",
    category: "Arquitetura",
    date: "13 Dez, 2023", readTime: "15 min", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
  },
  {
    id: 4,
    title: "Clean Architecture: Além da Teoria",
    slug: "clean-architecture-alem-teoria",
    excerpt: "Aplicando os princípios de Robert C. Martin em projetos reais. Onde ser purista e onde ser pragmático.",
    category: "Arquitetura",
    date: "12 Dez, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
  },
  {
    id: 5,
    title: "Domain-Driven Design (DDD) para Tech Leads",
    slug: "ddd-para-tech-leads",
    excerpt: "Como usar Ubiquitous Language e Bounded Contexts para alinhar o código com o negócio e evitar o Big Ball of Mud.",
    category: "Arquitetura",
    date: "11 Dez, 2023", readTime: "14 min", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80"
  },
  {
    id: 6,
    title: "Estratégias de Migração de Legado",
    slug: "estrategias-migracao-legado",
    excerpt: "Strangler Fig Pattern e outras técnicas para modernizar sistemas legados sem parar a operação.",
    category: "Arquitetura",
    date: "10 Dez, 2023", readTime: "11 min", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  },
  {
    id: 7,
    title: "API Gateway vs Service Mesh",
    slug: "api-gateway-vs-service-mesh",
    excerpt: "Entenda as responsabilidades de cada um e como eles se complementam na gestão de tráfego de microserviços.",
    category: "Arquitetura",
    date: "09 Dez, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: 8,
    title: "Serverless: Quando Vale a Pena?",
    slug: "serverless-quando-vale-pena",
    excerpt: "Análise de custos, cold starts e vendor lock-in. Onde o Serverless brilha e onde ele falha.",
    category: "Arquitetura",
    date: "08 Dez, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
  },

  // --- TECNOLOGIA: System Design ---
  {
    id: 9,
    title: "System Design Interview: O Guia Definitivo",
    slug: "system-design-interview-guia",
    excerpt: "Frameworks para abordar problemas de design de sistemas em entrevistas e no dia a dia.",
    category: "System Design",
    date: "07 Dez, 2023", readTime: "13 min", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
  },
  {
    id: 10,
    title: "Escalabilidade Horizontal vs Vertical",
    slug: "escalabilidade-horizontal-vertical",
    excerpt: "Quando adicionar mais máquinas e quando adicionar máquinas maiores. Limites e estratégias.",
    category: "System Design",
    date: "06 Dez, 2023", readTime: "7 min", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: 11,
    title: "Load Balancers: Algoritmos e Tipos",
    slug: "load-balancers-algoritmos",
    excerpt: "Round Robin, Least Connections, IP Hash. Como escolher o algoritmo certo para sua aplicação.",
    category: "System Design",
    date: "05 Dez, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?w=800&q=80"
  },
  {
    id: 12,
    title: "Caching Strategies: Cache-Aside, Write-Through",
    slug: "caching-strategies",
    excerpt: "Otimizando a latência do sistema com estratégias inteligentes de cache e invalidação.",
    category: "System Design",
    date: "04 Dez, 2023", readTime: "11 min", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
  },
  {
    id: 13,
    title: "CDN: Acelerando Conteúdo Globalmente",
    slug: "cdn-acelerando-conteudo",
    excerpt: "Como funcionam as Content Delivery Networks e como configurá-las para performance máxima.",
    category: "System Design",
    date: "03 Dez, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    id: 14,
    title: "Message Queues: Kafka vs RabbitMQ",
    slug: "kafka-vs-rabbitmq",
    excerpt: "Entendendo as diferenças fundamentais entre streaming de eventos e filas de mensagens tradicionais.",
    category: "System Design",
    date: "02 Dez, 2023", readTime: "12 min", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  },

  // --- TECNOLOGIA: Bancos de Dados ---
  {
    id: 15,
    title: "SQL vs NoSQL: Quando Usar Qual?",
    slug: "sql-vs-nosql-quando-usar",
    excerpt: "ACID vs BASE. Modelagem relacional vs documentos/grafos. Guia de decisão para persistência.",
    category: "Bancos de Dados",
    date: "01 Dez, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80"
  },
  {
    id: 16,
    title: "Database Indexing: Como Funciona",
    slug: "database-indexing-funcionamento",
    excerpt: "B-Trees, Hash Indexes. Como otimizar suas queries e evitar full table scans desastrosos.",
    category: "Bancos de Dados",
    date: "30 Nov, 2023", readTime: "11 min", image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80"
  },
  {
    id: 17,
    title: "Sharding e Partitioning de Bancos de Dados",
    slug: "sharding-partitioning-db",
    excerpt: "Estratégias para escalar bancos de dados além da capacidade de um único servidor.",
    category: "Bancos de Dados",
    date: "29 Nov, 2023", readTime: "13 min", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: 18,
    title: "Transações Distribuídas e Saga Pattern",
    slug: "transacoes-distribuidas-saga",
    excerpt: "Como manter consistência de dados em microserviços sem o Two-Phase Commit (2PC).",
    category: "Bancos de Dados",
    date: "28 Nov, 2023", readTime: "14 min", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80"
  },
  {
    id: 19,
    title: "Redis: Muito Além do Cache",
    slug: "redis-alem-do-cache",
    excerpt: "Pub/Sub, filas, geo-spatial. Explorando os recursos avançados do Redis.",
    category: "Bancos de Dados",
    date: "27 Nov, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
  },
  {
    id: 20,
    title: "Modelagem de Dados para DynamoDB",
    slug: "modelagem-dados-dynamodb",
    excerpt: "Esqueça a normalização. Como pensar em Access Patterns para bancos NoSQL da AWS.",
    category: "Bancos de Dados",
    date: "26 Nov, 2023", readTime: "12 min", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },

  // --- TECNOLOGIA: DevOps/SRE/Platform ---
  {
    id: 21,
    title: "Cultura DevOps: Não é Só Ferramenta",
    slug: "cultura-devops",
    excerpt: "Como quebrar silos entre desenvolvimento e operações para entregar valor mais rápido.",
    category: "DevOps",
    date: "25 Nov, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
  },
  {
    id: 22,
    title: "CI/CD Pipelines de Alta Performance",
    slug: "ci-cd-pipelines-performance",
    excerpt: "Estratégias para reduzir o tempo de build e deploy. Parallelism, caching e testes inteligentes.",
    category: "DevOps",
    date: "24 Nov, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80"
  },
  {
    id: 23,
    title: "Kubernetes para Tech Leads",
    slug: "kubernetes-para-tech-leads",
    excerpt: "O que você precisa saber sobre orquestração de containers sem se perder nos detalhes de infra.",
    category: "DevOps",
    date: "23 Nov, 2023", readTime: "15 min", image: "https://images.unsplash.com/photo-1667372393119-c85c020799a3?w=800&q=80"
  },
  {
    id: 24,
    title: "Observabilidade: Logs, Metrics e Tracing",
    slug: "observabilidade-logs-metrics-tracing",
    excerpt: "Como monitorar sistemas distribuídos e fazer troubleshooting eficiente em produção.",
    category: "SRE",
    date: "22 Nov, 2023", readTime: "11 min", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: 25,
    title: "SLOs e SLIs: Medindo Confiabilidade",
    slug: "slos-slis-confiabilidade",
    excerpt: "Definindo objetivos de nível de serviço e indicadores para alinhar engenharia e produto.",
    category: "SRE",
    date: "21 Nov, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: 26,
    title: "Platform Engineering vs DevOps",
    slug: "platform-engineering-vs-devops",
    excerpt: "A evolução do DevOps para times de plataforma que constroem 'Golden Paths' para desenvolvedores.",
    category: "Platform Engineering",
    date: "20 Nov, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
  },
  {
    id: 27,
    title: "Infrastructure as Code (IaC) com Terraform",
    slug: "iac-terraform-boas-praticas",
    excerpt: "Gerenciando infraestrutura como software. Boas práticas, módulos e state management.",
    category: "DevOps",
    date: "19 Nov, 2023", readTime: "12 min", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },

  // --- TECNOLOGIA: Qualidade de Software ---
  {
    id: 28,
    title: "Pirâmide de Testes na Vida Real",
    slug: "piramide-testes-vida-real",
    excerpt: "Equilibrando testes unitários, de integração e e2e para maximizar confiança e velocidade.",
    category: "Qualidade",
    date: "18 Nov, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80"
  },
  {
    id: 29,
    title: "TDD: Mito ou Realidade?",
    slug: "tdd-mito-ou-realidade",
    excerpt: "Test Driven Development funciona? Quando aplicar e quando é perda de tempo.",
    category: "Qualidade",
    date: "17 Nov, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&q=80"
  },
  {
    id: 30,
    title: "Code Review: O Guia do Reviewer",
    slug: "code-review-guia",
    excerpt: "Como fazer revisões de código que ensinam e elevam a qualidade sem travar o processo.",
    category: "Qualidade",
    date: "16 Nov, 2023", readTime: "11 min", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
  },
  {
    id: 31,
    title: "Testes de Carga com K6",
    slug: "testes-carga-k6",
    excerpt: "Como identificar gargalos de performance antes que eles derrubem sua produção.",
    category: "Qualidade",
    date: "15 Nov, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },

  // --- LIDERANÇA: Fundamentos ---
  {
    id: 32,
    title: "O Que Realmente Faz um Tech Lead?",
    slug: "o-que-faz-tech-lead",
    excerpt: "Desmistificando o papel: 30% código, 70% pessoas e arquitetura.",
    category: "Liderança",
    date: "14 Nov, 2023", readTime: "7 min", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
  },
  {
    id: 33,
    title: "Liderança Situacional na Tecnologia",
    slug: "lideranca-situacional-tecnologia",
    excerpt: "Adaptando seu estilo de liderança para juniores, plenos e seniores.",
    category: "Liderança",
    date: "13 Nov, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
  },
  {
    id: 34,
    title: "Inteligência Emocional para Engenheiros",
    slug: "inteligencia-emocional-engenheiros",
    excerpt: "Por que EQ é mais importante que IQ para subir na carreira de liderança.",
    category: "Liderança",
    date: "12 Nov, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
  },
  {
    id: 35,
    title: "De Sênior a Tech Lead: Primeiros 90 Dias",
    slug: "de-senior-a-tech-lead-90-dias",
    excerpt: "Um plano de ação detalhado para não falhar na transição de carreira.",
    category: "Liderança",
    date: "11 Nov, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&q=80"
  },

  // --- LIDERANÇA: Cultura ---
  {
    id: 36,
    title: "Construindo Segurança Psicológica",
    slug: "construindo-seguranca-psicologica",
    excerpt: "Como criar um ambiente onde errar é parte do aprendizado e a inovação floresce.",
    category: "Cultura",
    date: "10 Nov, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
  },
  {
    id: 37,
    title: "Cultura de Feedback Constante",
    slug: "cultura-feedback-constante",
    excerpt: "Fugindo das avaliações anuais: como implementar feedback contínuo no time.",
    category: "Cultura",
    date: "09 Nov, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80"
  },
  {
    id: 38,
    title: "Ownership: Como Fomentar Donos",
    slug: "ownership-como-fomentar-donos",
    excerpt: "Transformando executores de tarefas em donos do produto e do código.",
    category: "Cultura",
    date: "08 Nov, 2023", readTime: "7 min", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
  },
  {
    id: 39,
    title: "Diversidade e Inclusão em Tech",
    slug: "diversidade-inclusao-tech",
    excerpt: "Por que times diversos constroem produtos melhores e como liderar a inclusão.",
    category: "Cultura",
    date: "07 Nov, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80"
  },

  // --- LIDERANÇA: Alta Performance ---
  {
    id: 40,
    title: "Flow State: Otimizando o Foco do Time",
    slug: "flow-state-foco-time",
    excerpt: "Eliminando interrupções e criando blocos de tempo para trabalho profundo (Deep Work).",
    category: "Alta Performance",
    date: "06 Nov, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80"
  },
  {
    id: 41,
    title: "Metas SMART para Desenvolvedores",
    slug: "metas-smart-desenvolvedores",
    excerpt: "Como definir objetivos claros, mensuráveis e alcançáveis para seu time.",
    category: "Alta Performance",
    date: "05 Nov, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  },
  {
    id: 42,
    title: "Burnout: Prevenção e Identificação",
    slug: "burnout-prevencao",
    excerpt: "Sinais sutis de que seu time está exausto e como agir antes que seja tarde.",
    category: "Alta Performance",
    date: "04 Nov, 2023", readTime: "11 min", image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80"
  },

  // --- LIDERANÇA: Trabalho em Equipe ---
  {
    id: 43,
    title: "Pair Programming: Prós e Contras",
    slug: "pair-programming-pros-contras",
    excerpt: "Quando parear acelera e quando atrapalha. Técnicas de pareamento efetivo.",
    category: "Trabalho em Equipe",
    date: "03 Nov, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
  },
  {
    id: 44,
    title: "Mob Programming: Todo Mundo Junto?",
    slug: "mob-programming-guia",
    excerpt: "Uma abordagem radical para resolver problemas complexos com todo o time simultaneamente.",
    category: "Trabalho em Equipe",
    date: "02 Nov, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
  },
  {
    id: 45,
    title: "Rituais de Time: Stand-up, Retro e Planning",
    slug: "rituais-time-ageis",
    excerpt: "Como conduzir cerimônias ágeis que não sejam desperdício de tempo.",
    category: "Trabalho em Equipe",
    date: "01 Nov, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80"
  },

  // --- LIDERANÇA: Comunicação ---
  {
    id: 46,
    title: "Comunicação Assíncrona para Devs",
    slug: "comunicacao-assincrona-devs",
    excerpt: "Escrevendo melhor para reduzir reuniões e interrupções no trabalho remoto.",
    category: "Comunicação",
    date: "31 Out, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1587560699334-cc4da63c2409?w=800&q=80"
  },
  {
    id: 47,
    title: "Stakeholder Management para Tech Leads",
    slug: "stakeholder-management-tech-leads",
    excerpt: "Como traduzir 'technobabble' para linguagem de negócios e ganhar confiança.",
    category: "Comunicação",
    date: "30 Out, 2023", readTime: "11 min", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
  },
  {
    id: 48,
    title: "A Arte de Dizer 'Não'",
    slug: "arte-de-dizer-nao",
    excerpt: "Negociando prazos e escopo sem queimar pontes ou desmotivar o time.",
    category: "Comunicação",
    date: "29 Out, 2023", readTime: "7 min", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
  },

  // --- LIDERANÇA: Marketing Pessoal ---
  {
    id: 49,
    title: "Construindo sua Marca no LinkedIn",
    slug: "construindo-marca-linkedin",
    excerpt: "Como Tech Leads podem usar redes sociais para atrair talentos e oportunidades.",
    category: "Marketing Pessoal",
    date: "28 Out, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1611944212129-299909661c9d?w=800&q=80"
  },
  {
    id: 50,
    title: "Palestras e Tech Talks: Por Onde Começar",
    slug: "palestras-tech-talks-inicio",
    excerpt: "O guia para superar o medo de falar em público e compartilhar conhecimento.",
    category: "Marketing Pessoal",
    date: "27 Out, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80"
  },
  {
    id: 51,
    title: "Networking Estratégico em Tecnologia",
    slug: "networking-estrategico-tecnologia",
    excerpt: "Criando conexões genuínas que alavancam sua carreira e a do seu time.",
    category: "Marketing Pessoal",
    date: "26 Out, 2023", readTime: "7 min", image: "https://images.unsplash.com/photo-1515168816513-48971460d366?w=800&q=80"
  },

  // --- ESTRATÉGIAS DE INOVAÇÃO: Agilidade ---
  {
    id: 52,
    title: "Scrum vs Kanban: Qual Escolher?",
    slug: "scrum-vs-kanban-escolha",
    excerpt: "Analisando os fluxos de trabalho do seu time para escolher a metodologia certa.",
    category: "Agilidade",
    date: "25 Out, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80"
  },
  {
    id: 53,
    title: "Lean Software Development",
    slug: "lean-software-development",
    excerpt: "Eliminando desperdícios e focando no valor: princípios lean aplicados ao código.",
    category: "Agilidade",
    date: "24 Out, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80"
  },
  {
    id: 54,
    title: "Estimativas de Software: Arte ou Ciência?",
    slug: "estimativas-software-arte-ciencia",
    excerpt: "Story Points, T-shirt sizing e #NoEstimates. Como lidar com a imprevisibilidade.",
    category: "Agilidade",
    date: "23 Out, 2023", readTime: "11 min", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
  },

  // --- ESTRATÉGIAS DE INOVAÇÃO: Gestão de Projetos ---
  {
    id: 55,
    title: "Gestão de Riscos Técnicos",
    slug: "gestao-riscos-tecnicos",
    excerpt: "Identificando, mitigando e monitorando riscos em projetos de software complexos.",
    category: "Gestão de Projetos",
    date: "22 Out, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  },
  {
    id: 56,
    title: "MVP: Mínimo Produto Viável de Verdade",
    slug: "mvp-minimo-produto-viavel",
    excerpt: "Evitando o 'Mínimo Produto Ruim'. Como focar no aprendizado validado.",
    category: "Gestão de Projetos",
    date: "21 Out, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: 57,
    title: "Roadmap Técnico vs Roadmap de Produto",
    slug: "roadmap-tecnico-vs-produto",
    excerpt: "Como alinhar a visão de engenharia com a visão de produto sem conflitos.",
    category: "Gestão de Projetos",
    date: "20 Out, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
  },

  // --- ESTRATÉGIAS DE INOVAÇÃO: Tech Metrics ---
  {
    id: 58,
    title: "DORA Metrics: Medindo Performance",
    slug: "dora-metrics-medindo-performance",
    excerpt: "Deployment Frequency, Lead Time, Change Failure Rate e MTTR explicados.",
    category: "Tech Metrics",
    date: "19 Out, 2023", readTime: "11 min", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: 59,
    title: "SPACE Framework: Produtividade de Devs",
    slug: "space-framework-produtividade",
    excerpt: "Indo além das métricas de atividade para medir satisfação e performance real.",
    category: "Tech Metrics",
    date: "18 Out, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: 60,
    title: "Métricas de Vaidade vs Métricas Acionáveis",
    slug: "metricas-vaidade-acionaveis",
    excerpt: "Por que contar linhas de código ou número de commits é uma péssima ideia.",
    category: "Tech Metrics",
    date: "17 Out, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },

  // --- ESTRATÉGIAS DE INOVAÇÃO: Gestão de Produtos ---
  {
    id: 61,
    title: "Product Discovery para Engenheiros",
    slug: "product-discovery-engenheiros",
    excerpt: "Por que Tech Leads devem participar da descoberta de produto desde o dia 1.",
    category: "Gestão de Produtos",
    date: "16 Out, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80"
  },
  {
    id: 62,
    title: "User Story Mapping na Prática",
    slug: "user-story-mapping-pratica",
    excerpt: "Visualizando a jornada do usuário para priorizar releases técnicas.",
    category: "Gestão de Produtos",
    date: "15 Out, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&q=80"
  },
  {
    id: 63,
    title: "Priorização: RICE, Moscow e Kano",
    slug: "priorizacao-rice-moscow-kano",
    excerpt: "Frameworks para ajudar Produto e Engenharia a decidirem o que construir primeiro.",
    category: "Gestão de Produtos",
    date: "14 Out, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
  },

  // --- GESTÃO DE TIMES: Estruturas Organizacionais ---
  {
    id: 64,
    title: "Modelo Spotify: Mitos e Verdades",
    slug: "modelo-spotify-mitos-verdades",
    excerpt: "Squads, Tribes, Chapters e Guilds. O que funcionou e o que copiar com cautela.",
    category: "Org Design",
    date: "13 Out, 2023", readTime: "11 min", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
  },
  {
    id: 65,
    title: "Team Topologies: Organizando para Fluxo",
    slug: "team-topologies-organizando",
    excerpt: "Stream-aligned, Enabling, Complicated Subsystem e Platform teams. O guia moderno.",
    category: "Org Design",
    date: "12 Out, 2023", readTime: "13 min", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
  },
  {
    id: 66,
    title: "Lei de Conway na Prática",
    slug: "lei-conway-pratica",
    excerpt: "Como a estrutura de comunicação da sua empresa dita a arquitetura do seu software.",
    category: "Org Design",
    date: "11 Out, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
  },

  // --- GESTÃO DE TIMES: Fluxo de Trabalho ---
  {
    id: 67,
    title: "Limitando WIP (Work in Progress)",
    slug: "limitando-wip-kanban",
    excerpt: "Por que parar de começar e começar a terminar é o segredo da produtividade.",
    category: "Fluxo",
    date: "10 Out, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80"
  },
  {
    id: 68,
    title: "Teoria das Restrições em Software",
    slug: "teoria-restricoes-software",
    excerpt: "Identificando o gargalo do seu processo de desenvolvimento e otimizando todo o sistema.",
    category: "Fluxo",
    date: "09 Out, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&q=80"
  },
  {
    id: 69,
    title: "Trunk Based Development",
    slug: "trunk-based-development",
    excerpt: "Abandonando long-lived branches para acelerar a integração contínua.",
    category: "Fluxo",
    date: "08 Out, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
  },

  // --- GESTÃO DE TIMES: Gestão de Conflitos ---
  {
    id: 70,
    title: "Comunicação Não-Violenta (CNV)",
    slug: "cnv-comunicacao-nao-violenta",
    excerpt: "Framework para resolver conflitos difíceis sem agressividade.",
    category: "Gestão de Conflitos",
    date: "07 Out, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
  },
  {
    id: 71,
    title: "Mediando Conflitos Técnicos",
    slug: "mediando-conflitos-tecnicos",
    excerpt: "Tabs vs Spaces, React vs Vue. Como resolver guerras santas tecnológicas.",
    category: "Gestão de Conflitos",
    date: "06 Out, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
  },
  {
    id: 72,
    title: "As 5 Disfunções de um Time",
    slug: "5-disfuncoes-time",
    excerpt: "Entendendo a base da pirâmide de Lencioni: falta de confiança.",
    category: "Gestão de Conflitos",
    date: "05 Out, 2023", readTime: "11 min", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
  },

  // --- GESTÃO DE TIMES: Entrevistas ---
  {
    id: 73,
    title: "Contratação: Bar Raiser",
    slug: "contratacao-bar-raiser",
    excerpt: "Como garantir que cada nova contratação eleve a média técnica do time.",
    category: "Hiring",
    date: "04 Out, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80"
  },
  {
    id: 74,
    title: "System Design Interview: Como Conduzir",
    slug: "system-design-interview-como-conduzir",
    excerpt: "Avaliando a senioridade de arquitetura em candidatos a Tech Lead.",
    category: "Hiring",
    date: "03 Out, 2023", readTime: "12 min", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80"
  },
  {
    id: 75,
    title: "Live Coding vs Take-Home Test",
    slug: "live-coding-vs-take-home",
    excerpt: "Vantagens e desvantagens dos modelos de teste técnico mais comuns.",
    category: "Hiring",
    date: "02 Out, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
  },
  
  // --- GESTÃO DE TIMES: Onboarding ---
  {
    id: 76,
    title: "Onboarding Técnico: O Primeiro Deploy",
    slug: "onboarding-tecnico-primeiro-deploy",
    excerpt: "A regra do Dia 1: como fazer o novo dev shippar código no primeiro dia.",
    category: "Onboarding",
    date: "01 Out, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
  },
  {
    id: 77,
    title: "Buddy System para Novos Devs",
    slug: "buddy-system-novos-devs",
    excerpt: "Designando um mentor par para acelerar a integração cultural e técnica.",
    category: "Onboarding",
    date: "30 Set, 2023", readTime: "7 min", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80"
  },
  {
    id: 78,
    title: "Documentação de Onboarding",
    slug: "documentacao-onboarding",
    excerpt: "O que deve estar escrito e o que deve ser falado na chegada de um novo membro.",
    category: "Onboarding",
    date: "29 Set, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  },

  // --- GESTÃO DE TIMES: Avaliações ---
  {
    id: 79,
    title: "Planos de Desenvolvimento Individual (PDI)",
    slug: "pdi-plano-desenvolvimento",
    excerpt: "Criando roteiros de crescimento personalizados para cada engenheiro.",
    category: "Avaliações",
    date: "28 Set, 2023", readTime: "11 min", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  },
  {
    id: 80,
    title: "Avaliação de Desempenho 360 Graus",
    slug: "avaliacao-360-graus",
    excerpt: "Como coletar e sintetizar feedback de pares, liderados e gestores.",
    category: "Avaliações",
    date: "27 Set, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80"
  },
  {
    id: 81,
    title: "Matriz de Competências (Skill Matrix)",
    slug: "skill-matrix-competencias",
    excerpt: "Mapeando os gaps técnicos do time para planejar contratações e treinamentos.",
    category: "Avaliações",
    date: "26 Set, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80"
  },

  // --- EXTRAS E TÓPICOS AVANÇADOS ---
  {
    id: 82,
    title: "FinOps: Gestão de Custos na Nuvem",
    slug: "finops-gestao-custos",
    excerpt: "Responsabilidade financeira na engenharia. Otimizando a fatura da AWS/Azure.",
    category: "Cloud",
    date: "25 Set, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
  },
  {
    id: 83,
    title: "Segurança de Aplicações: OWASP Top 10",
    slug: "seguranca-owasp-top-10",
    excerpt: "O mínimo que todo Tech Lead precisa saber sobre AppSec.",
    category: "Segurança",
    date: "24 Set, 2023", readTime: "12 min", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
  },
  {
    id: 84,
    title: "GraphQL vs REST: O Debate",
    slug: "graphql-vs-rest-debate",
    excerpt: "Flexibilidade vs Simplicidade. Quando adotar GraphQL no seu time.",
    category: "API",
    date: "23 Set, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80"
  },
  {
    id: 85,
    title: "WebAssembly: O Futuro da Web?",
    slug: "webassembly-futuro-web",
    excerpt: "Performance nativa no browser. Casos de uso e estado da arte.",
    category: "Frontend",
    date: "22 Set, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80"
  },
  {
    id: 86,
    title: "Chaos Engineering: Quebrando para Consertar",
    slug: "chaos-engineering-introducao",
    excerpt: "Introduzindo falhas controladas para testar a resiliência do sistema.",
    category: "SRE",
    date: "21 Set, 2023", readTime: "11 min", image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80"
  },
  {
    id: 87,
    title: "Documentação Técnica: C4 Model",
    slug: "documentacao-c4-model",
    excerpt: "Visualizando arquitetura de software em diferentes níveis de abstração.",
    category: "Arquitetura",
    date: "20 Set, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80"
  },
  {
    id: 88,
    title: "Ética em IA para Engenheiros",
    slug: "etica-ia-engenheiros",
    excerpt: "Viés algorítmico, privacidade e responsabilidade na era da Inteligência Artificial.",
    category: "IA",
    date: "19 Set, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
  },
  {
    id: 89,
    title: "Remote First: Cultura Distribuída",
    slug: "remote-first-cultura",
    excerpt: "Como liderar times que nunca se encontraram presencialmente.",
    category: "Cultura",
    date: "18 Set, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1587560699334-cc4da63c2409?w=800&q=80"
  },
  {
    id: 90,
    title: "Gestão de Débito Técnico",
    slug: "gestao-debito-tecnico-estrategia",
    excerpt: "Quadrante do Débito Técnico: Prudente vs Imprudente, Deliberado vs Inadvertido.",
    category: "Engenharia",
    date: "17 Set, 2023", readTime: "11 min", image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=80"
  },
  {
    id: 91,
    title: "Feature Flags: Deploy Seguro",
    slug: "feature-flags-deploy-seguro",
    excerpt: "Desacoplando deploy de release para testar em produção com segurança.",
    category: "DevOps",
    date: "16 Set, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80"
  },
  {
    id: 92,
    title: "O Papel do Staff Engineer",
    slug: "papel-staff-engineer",
    excerpt: "Liderança técnica sem gestão de pessoas. Influência além do time.",
    category: "Carreira",
    date: "15 Set, 2023", readTime: "12 min", image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&q=80"
  },
  {
    id: 93,
    title: "Design Patterns Essenciais",
    slug: "design-patterns-essenciais",
    excerpt: "Factory, Strategy, Observer. Quando usar e quando evitar a complexidade.",
    category: "Arquitetura",
    date: "14 Set, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
  },
  {
    id: 94,
    title: "Estratégias de Logging Centralizado",
    slug: "logging-centralizado-elk",
    excerpt: "ELK Stack (Elasticsearch, Logstash, Kibana) e boas práticas de estruturação de logs.",
    category: "DevOps",
    date: "13 Set, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: 95,
    title: "Gerenciamento de Configuração",
    slug: "gerenciamento-configuracao-app",
    excerpt: "12 Factor App: Configurações no ambiente, não no código.",
    category: "DevOps",
    date: "12 Set, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
  },
  {
    id: 96,
    title: "Mentoria Técnica Eficaz",
    slug: "mentoria-tecnica-eficaz",
    excerpt: "Como ensinar a pescar em vez de dar o peixe. Técnicas de mentoring.",
    category: "Liderança",
    date: "11 Set, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80"
  },
  {
    id: 97,
    title: "Gestão de Crise e War Rooms",
    slug: "gestao-crise-war-room",
    excerpt: "Protocolos para lidar com incidentes críticos de produção sob pressão.",
    category: "Liderança",
    date: "10 Set, 2023", readTime: "11 min", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
  },
  {
    id: 98,
    title: "Arquitetura de Dados Modernas",
    slug: "arquitetura-dados-modernas",
    excerpt: "Data Lake, Data Mesh e Data Warehouse. Onde armazenar o quê.",
    category: "Dados",
    date: "09 Set, 2023", readTime: "13 min", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: 99,
    title: "Psicologia da Programação",
    slug: "psicologia-programacao",
    excerpt: "Carga cognitiva, viés de confirmação e como nosso cérebro processa código.",
    category: "Carreira",
    date: "08 Set, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
  },
  {
    id: 100,
    title: "O Futuro do Tech Lead com IA",
    slug: "futuro-tech-lead-ia",
    excerpt: "Como Copilots e LLMs vão mudar (mas não substituir) a liderança técnica.",
    category: "Futuro",
    date: "07 Set, 2023", readTime: "10 min", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
  },
  {
    id: 101,
    title: "Gestão de Expectativas de Clientes",
    slug: "gestao-expectativas-clientes",
    excerpt: "Alinhando entregas técnicas com a realidade do cliente.",
    category: "Comunicação",
    date: "06 Set, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
  },
  {
    id: 102,
    title: "Clean Code: Princípios S.O.L.I.D.",
    slug: "clean-code-solid",
    excerpt: "Revisitando os clássicos: SRP, OCP, LSP, ISP, DIP explicados.",
    category: "Qualidade",
    date: "05 Set, 2023", readTime: "12 min", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
  },
  {
    id: 103,
    title: "Estratégias de Branching Git",
    slug: "estrategias-branching-git",
    excerpt: "Git Flow vs GitHub Flow vs GitLab Flow. Qual se adapta ao seu time?",
    category: "DevOps",
    date: "04 Set, 2023", readTime: "9 min", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80"
  },
  {
    id: 104,
    title: "Monitoramento Sintético",
    slug: "monitoramento-sintetico",
    excerpt: "Testando a experiência do usuário proativamente antes que ele reclame.",
    category: "SRE",
    date: "03 Set, 2023", readTime: "8 min", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: 105,
    title: "Gestão de Tempo: Pomodoro e Timeboxing",
    slug: "gestao-tempo-pomodoro",
    excerpt: "Técnicas pessoais de produtividade para lidar com múltiplas demandas.",
    category: "Produtividade",
    date: "02 Set, 2023", readTime: "7 min", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  }
].map(post => ({
  ...post,
  content: getDetailedContent(post.title, post.category, post.excerpt)
}));
